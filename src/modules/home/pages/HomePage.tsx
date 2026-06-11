import { SEO } from "@/modules/core/components/SEO";
import Hero from "@/modules/home/components/HeroSection";
import AboutSection from "@/modules/home/components/AboutSection";
import ServicesSection from "@/modules/home/components/ServicesSection";
import CaseStudiesAccordion from "@/modules/home/components/CaseStudiesAccordion";
import Testimonials from "@/modules/home/components/TestimonialsSection";
import BookingForm from "@/modules/core/components/BookingForm";
import ArticlesSection from "@/modules/blog/components/ArticlesSection";
import FAQ from "@/modules/core/components/FAQ";

export default function Home() {
  return (
    <>
      <SEO
        title="Precision Neurology Care"
        description="Board-certified neurology practice offering precision diagnosis, structured treatment, and long-term care."
        path="/"
      />
      <main className="overflow-x-clip">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesAccordion />
        <Testimonials />
        <BookingForm className="mt-24 md:mt-32" />
        <ArticlesSection />
        <FAQ />
      </main>
    </>
  );
}
