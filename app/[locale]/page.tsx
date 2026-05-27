import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { createSoftwareApplicationJsonLd, jsonLd } from "@/lib/seo";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(params.locale);
  const structuredData = createSoftwareApplicationJsonLd({
    locale,
    description: dict.meta.description,
    features: dict.features.items.map((item) => item.title),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <main>
        <Hero dict={dict.hero} />
        <Features dict={dict.features} />
        <Showcase dict={dict.showcase} />
        <HowItWorks dict={dict.howItWorks} />
        <Privacy dict={dict.privacy} />
        <CTA dict={dict.cta} />
        <Footer dict={dict.footer} locale={params.locale} />
      </main>
    </>
  );
}
