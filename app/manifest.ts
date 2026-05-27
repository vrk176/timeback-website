import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const dict = getDictionary(defaultLocale);

  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: dict.meta.description,
    start_url: `/${defaultLocale}`,
    scope: "/",
    display: "standalone",
    background_color: siteConfig.backgroundColor,
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
