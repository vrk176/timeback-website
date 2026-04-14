import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home({ params }: { params: { locale: string } }) {
  if (!isValidLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  return (
    <main>
      <Hero dict={dict.hero} />
      <Features dict={dict.features} />
      <Showcase dict={dict.showcase} />
      <HowItWorks dict={dict.howItWorks} />
      <Privacy dict={dict.privacy} />
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} locale={params.locale} />
    </main>
  );
}
