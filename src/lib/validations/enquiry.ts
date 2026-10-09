import { z } from "zod";

export const leadEnquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  slot: z.string().trim().max(100).optional(),
  goal: z.string().trim().max(100).optional(),
  message: z.string().trim().max(500).optional(),
  slug: z.string().trim().optional(),
});

export type LeadEnquiryInput = z.infer<typeof leadEnquirySchema>;
