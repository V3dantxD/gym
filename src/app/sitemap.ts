import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}`, lastModified: new Date() }));
}
