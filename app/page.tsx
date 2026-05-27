import type { Metadata } from "next";
import LocaleRedirect from "@/components/LocaleRedirect";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale } from "@/lib/i18n";
import { createSeoMetadata } from "@/lib/seo";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = createSeoMetadata({
  locale: defaultLocale,
  title: dict.meta.title,
  description: dict.meta.description,
  noIndex: true,
});

export default function RootPage() {
  return <LocaleRedirect />;
}
