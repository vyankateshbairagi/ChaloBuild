"use server";

import { db } from "@/lib/db";
import { leadEnquirySchema } from "@/lib/validations/enquiry";
import { gymConfig } from "@/config/gym";

export interface EnquiryActionState {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
  whatsappUrl?: string;
}

export async function submitLeadEnquiryAction(
  _prevState: EnquiryActionState,
  formData: FormData
): Promise<EnquiryActionState> {
  const rawData = {
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email") || undefined,
    slot: formData.get("slot") || undefined,
    goal: formData.get("goal") || undefined,
    message: formData.get("message") || undefined,
    slug: formData.get("slug") || undefined,
  };

  const parsed = leadEnquirySchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as string;
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      success: false,
      error: "Please correct the errors in the form.",
      fieldErrors,
    };
  }

  const { fullName, phone, email, slot, goal, message, slug } = parsed.data;

  try {
    // 1. Resolve organization by slug or fallback to default demo gym
    let organizationId: string | null = null;
    let targetPhone = gymConfig.contact.whatsappRaw;
    let gymName = gymConfig.name;

    if (slug) {
      const websiteConfig = await db.websiteConfig.findUnique({
        where: { slug },
        select: {
          organizationId: true,
          whatsappRaw: true,
          gymName: true,
        },
      });

      if (websiteConfig) {
        organizationId = websiteConfig.organizationId;
        if (websiteConfig.whatsappRaw) targetPhone = websiteConfig.whatsappRaw;
        if (websiteConfig.gymName) gymName = websiteConfig.gymName;
      }
    }

    if (!organizationId) {
      // Find the demo organization or first organization in the system
      const fallbackOrg = await db.organization.findFirst({
        where: { isActive: true },
        select: { id: true, name: true, phone: true },
      });
      if (fallbackOrg) {
        organizationId = fallbackOrg.id;
        if (fallbackOrg.name) gymName = fallbackOrg.name;
        if (fallbackOrg.phone) targetPhone = fallbackOrg.phone.replace(/\D/g, "");
      }
    }

    if (organizationId) {
      await db.leadEnquiry.create({
        data: {
          organizationId,
          fullName,
          phone,
          email: email || null,
          slot: slot || null,
          goal: goal || null,
          message: message || null,
          status: "NEW",
        },
      });
    }

    // Construct the direct WhatsApp link for instant visitor conversion
    const waText = `Hi ${gymName}! My name is ${fullName} (Phone: ${phone}). I am interested in a 1-Day Trial Pass.${
      slot ? ` Preferred Slot: ${slot}.` : ""
    }${goal ? ` Goal: ${goal}.` : ""}${message ? ` Note: ${message}` : ""}`;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(
      waText
    )}`;

    return {
      success: true,
      whatsappUrl,
    };
  } catch (error) {
    console.error("Failed to persist lead enquiry:", error);
    return {
      success: false,
      error: "An unexpected error occurred while saving your inquiry. Please try again.",
    };
  }
}
