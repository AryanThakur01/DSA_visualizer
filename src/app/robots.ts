import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/profile"],
    },
    sitemap: "https://dsa.aryanthakur.me/sitemap.xml",
  };
}
