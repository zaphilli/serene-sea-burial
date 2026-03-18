import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const siteUrl = "https://sereneseaburials.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...blogEntries,
  ];
}
