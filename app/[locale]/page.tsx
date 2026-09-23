import { notFound } from "next/navigation";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { createSoftwareApplicationJsonLd, jsonLd } from "@/lib/seo";
import MotionProvider from "@/components/MotionProvider";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import IPadShowcase from "@/components/IPadShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
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
      <MotionProvider>
        <main>
          <Hero dict={dict.hero} locale={locale} />
          <Showcase dict={dict.showcase} locale={locale} />
          <IPadShowcase dict={dict.ipad} locale={locale} />
          <Features dict={dict.features} newBadge={dict.showcase.newBadge} />
          <HowItWorks dict={dict.howItWorks} />
          <Privacy dict={dict.privacy} />
          <CTA dict={dict.cta} mascotAlt={dict.hero.mascotAlt} />
          <Footer dict={dict.footer} locale={locale} />
        </main>
      </MotionProvider>
    </>
  );
}
