import { locales } from "@/lib/i18n";
import {
  absoluteUrl,
  getAbsoluteLanguageAlternates,
  getLocalePath,
} from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { path: "/terms-of-use", priority: 0.4, changeFrequency: "monthly" },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlEntry({
  loc,
  alternates,
  lastModified,
  changeFrequency,
  priority,
}: {
  loc: string;
  alternates: Record<string, string>;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}) {
  const alternateLinks = Object.entries(alternates)
    .map(
      ([lang, href]) =>
        `<xhtml:link rel="alternate" hreflang="${escapeXml(
          lang,
        )}" href="${escapeXml(href)}" />`,
    )
    .join("\n");

  return `<url>
<loc>${escapeXml(loc)}</loc>
${alternateLinks}
<lastmod>${lastModified}</lastmod>
<changefreq>${changeFrequency}</changefreq>
<priority>${priority}</priority>
</url>`;
}

export function GET() {
  const lastModified = new Date().toISOString();
  const urls = routes.flatMap((route) =>
    locales.map((locale) =>
      urlEntry({
        loc: absoluteUrl(getLocalePath(locale, route.path)),
        alternates: getAbsoluteLanguageAlternates(route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      }),
    ),
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
