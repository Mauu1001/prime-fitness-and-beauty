import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Gallery from "@/components/site/Gallery";
import Schedule from "@/components/site/Schedule";
import Pricing from "@/components/site/Pricing";
import Testimonials from "@/components/site/Testimonials";
import CTA from "@/components/site/CTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFab from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Fitness & Beauty — Sala premium din Borca, Neamț" },
      { name: "description", content: "Transformă-ți corpul. Depășește-ți limitele. Echipamente moderne, antrenamente personalizate și o comunitate motivată în Borca, Neamț." },
      { property: "og:title", content: "Prime Fitness & Beauty" },
      { property: "og:description", content: "Sala premium din Borca, Neamț — performanță, sănătate și stil de viață activ." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Schedule />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
