import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Showcase />
      <HowItWorks />
      <Privacy />
      <CTA />
      <Footer />
    </main>
  );
}
