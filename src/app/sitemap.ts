import type { MetadataRoute } from "next";
import { nav } from "@/lib/site";

const base = "https://winnerschapelsouthport.org.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set(nav.map((n) => n.href.split("#")[0])));
  return routes.map((href) => ({
    url: `${base}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
