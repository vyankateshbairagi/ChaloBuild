import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/demo/ironcore", "/demo/ironcore/*"],
        disallow: ["/dashboard", "/dashboard/*", "/attendance", "/payments", "/members", "/plans", "/expenses", "/reports", "/settings", "/api/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
