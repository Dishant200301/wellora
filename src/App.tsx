import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/features/navbar/Navbar";
import Footer from "@/features/footer/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetails from "@/pages/CaseStudyDetails";
import Articles from "@/pages/Articles";
import ArticleDetails from "@/pages/ArticleDetails";
import BookAppointment from "@/pages/BookAppointment";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  const validPaths = [
    "/",
    "/about",
    "/services",
    "/services/:slug",
    "/case-studies",
    "/case-studies/:slug",
    "/articles",
    "/articles/:slug",
    "/book-appointment",
    "/contact",
    "/privacy-policy",
    "/terms-conditions"
  ];

  const showNavAndFooter = true;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      {showNavAndFooter && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showNavAndFooter && <Footer />}
      <Toaster position="top-right" richColors />
    </div>
  );
}
