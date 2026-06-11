import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/modules/core/components/ui/sonner";
import Navbar from "@/modules/core/components/Navbar";
import Footer from "@/modules/core/components/Footer";
import { ScrollToTop } from "@/modules/core/components/ScrollToTop";

import HomePage from "@/modules/home/pages/HomePage";
import AboutPage from "@/modules/about/pages/AboutPage";
import ServicesPage from "@/modules/services/pages/ServicesPage";
import ServiceDetailsPage from "@/modules/services/pages/ServiceDetailsPage";
import CaseStudiesPage from "@/modules/case-studies/pages/CaseStudiesPage";
import CaseStudyDetailsPage from "@/modules/case-studies/pages/CaseStudyDetailsPage";
import ArticlesPage from "@/modules/blog/pages/ArticlesPage";
import ArticleDetailsPage from "@/modules/blog/pages/ArticleDetailsPage";
import BookAppointmentPage from "@/modules/book-appointment/pages/BookAppointmentPage";
import ContactPage from "@/modules/contact/pages/ContactPage";
import PrivacyPolicyPage from "@/modules/privacy-policy/pages/PrivacyPolicyPage";
import TermsConditionsPage from "@/modules/terms-conditions/pages/TermsConditionsPage";
import NotFoundPage from "@/modules/core/pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetailsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailsPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

