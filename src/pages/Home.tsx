import { SEO } from "@/components/common/SEO";
import Hero from "@/features/hero/Hero";
import AboutSection from "@/features/about/AboutSection";
import ServicesSection from "@/features/services/ServicesSection";
import CaseStudiesAccordion from "@/features/case-studies/CaseStudiesAccordion";
import Testimonials from "@/features/testimonials/Testimonials";
import BookingForm from "@/features/book-appointment/BookingForm";
import ArticlesSection from "@/features/articles/ArticlesSection";
import FAQ from "@/features/faq/FAQ";

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
