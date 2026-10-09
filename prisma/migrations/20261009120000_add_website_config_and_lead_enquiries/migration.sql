-- CreateTable
CREATE TABLE IF NOT EXISTS "website_configs" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "gymName" TEXT,
    "legalName" TEXT,
    "tagline" TEXT,
    "logoUrl" TEXT,
    "brandColor" TEXT DEFAULT '#2563EB',
    "heroHeadline" TEXT,
    "heroSubheadline" TEXT,
    "heroDescription" TEXT,
    "heroImage" TEXT,
    "aboutText" TEXT,
    "phoneFormatted" TEXT,
    "phoneRaw" TEXT,
    "whatsappRaw" TEXT,
    "whatsappMessage" TEXT,
    "email" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "pincode" TEXT,
    "googleMapsUrl" TEXT,
    "openingHours" JSONB,
    "socialLinks" JSONB,
    "programs" JSONB,
    "plans" JSONB,
    "trainers" JSONB,
    "facilities" JSONB,
    "gallery" JSONB,
    "testimonials" JSONB,
    "faqs" JSONB,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "showPoweredBy" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "website_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "lead_enquiries" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "slot" TEXT,
    "goal" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lead_enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "website_configs_organizationId_key" ON "website_configs"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "website_configs_slug_key" ON "website_configs"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "website_configs_slug_idx" ON "website_configs"("slug");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "lead_enquiries_organizationId_idx" ON "lead_enquiries"("organizationId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "lead_enquiries_status_idx" ON "lead_enquiries"("status");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "lead_enquiries_createdAt_idx" ON "lead_enquiries"("createdAt");

-- AddForeignKey
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'website_configs_organizationId_fkey'
  ) THEN
    ALTER TABLE "website_configs" ADD CONSTRAINT "website_configs_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

-- AddForeignKey
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'lead_enquiries_organizationId_fkey'
  ) THEN
    ALTER TABLE "lead_enquiries" ADD CONSTRAINT "lead_enquiries_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
