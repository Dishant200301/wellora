import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Img } from "@/components/common/Img";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ServicesSectionProps {
  hideHeader?: boolean;
}

export default function ServicesSection({ hideHeader = false }: ServicesSectionProps) {
  // Triple the services array for seamless infinite looping
  const clonedServices = [...services, ...services, ...services];
  // Start activeIndex at the first card of the middle set (index 5)
  const [activeIndex, setActiveIndex] = useState(services.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 768);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine viewports
  const isDesktop = width >= 1280; // Desktop view is xl and up
  const isLaptop = width >= 1024 && width < 1280; // Laptop view is lg to xl
  const isTablet = width >= 640 && width < 1024; // Tablet view is sm to lg

  // Card dimensions matching current user specifications
  const cardWidth = isLaptop ? 750 : isTablet ? 440 : 290;
  const gap = 16;

  // Calculate translation in pixels to center the active card perfectly
  const translatePx = (width / 2) - (activeIndex * (cardWidth + gap) + cardWidth / 2);

  // Swipe handlers for mobile/tablet touch carousel
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => prev + 1);
    }
    if (isRightSwipe) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Seamless jump loop behavior when transition ends
  const handleTransitionEnd = () => {
    const len = services.length;
    // If we scroll into the first set (index < 5), snap to the middle set (index + 5)
    if (activeIndex < len) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex + len);
    }
    // If we scroll into the third set (index >= 10), snap to the middle set (index - 5)
    else if (activeIndex >= len * 2) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex - len);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      // Force a slight timeout to let the state snap run without transition, then re-enable transition
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="container-px max-w-7xl mx-auto mt-24 md:mt-32">
      {/* Header Section */}
      {!hideHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-[16.3px] leading-[28px] text-[#4C4D4D] font-normal mb-2 font-sans">
              Specialized field
            </div>
            <h2 className="text-[32px] md:text-[44px] md:leading-[52px] leading-[38px] font-medium font-sans text-[#111514] max-w-2xl tracking-tight">
              Comprehensive care for all neurological conditions
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center justify-center w-[167.53px] h-[48px] rounded-[90px] bg-[#FEFFFA] border border-[#EAE9E9] text-[#111514] hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-sans text-[14.6px] font-medium leading-[24px] shrink-0 overflow-hidden"
          >
            <span className="relative block overflow-hidden h-[24px]">
              <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span className="h-[24px] flex items-center justify-center">View all Services</span>
                <span className="h-[24px] flex items-center justify-center">View all Services</span>
              </span>
            </span>
          </Link>
        </div>
      )}

      {/* 1. Mobile, Tablet & Laptop Carousel View (<1280px) */}
      {!isDesktop ? (
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 overflow-hidden py-4">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(${translatePx}px)`,
              gap: `${gap}px`,
              width: `${clonedServices.length * (cardWidth + gap)}px`,
            }}
          >
            {clonedServices.map((s, i) => (
              <div
                key={`${s.slug}-${i}`}
                className="flex-shrink-0 select-none"
                style={{
                  width: `${cardWidth}px`,
                }}
              >
                <div className="relative bg-[#EFF0EB] rounded-[20px] p-4 flex flex-col gap-4 border border-black/[0.06] w-full">
                  {/* Image */}
                  <div
                    className={`relative w-full rounded-[16px] overflow-hidden ${
                      isLaptop ? "h-[300px]" : isTablet ? "h-[210px]" : "h-[180px]"
                    }`}
                  >
                    <Img
                      src={`/images/services/services-${parseInt(s.number)}.webp`}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="bg-[#FEFFFA] rounded-[16px] p-5 flex flex-col">
                    {/* Number & Progress Dots */}
                    <div className="flex items-center justify-between h-[34px]">
                      <span className="text-[18px] font-medium text-[#B7B7B7] font-sans">
                        {s.number}
                      </span>
                      <div className="flex gap-1.5">
                        {services.map((_, k) => (
                          <span
                            key={k}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                              k === (i % services.length) ? "bg-[#1F9B6A]" : "bg-[#EFF0EB]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-medium text-[#111514] font-sans mt-3 leading-snug">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] leading-[22px] font-normal text-[#4C4D4D] mt-2 font-sans line-clamp-2">
                      {s.short}
                    </p>

                    {/* What I Offer Section */}
                    <h4 className="text-[16px] font-medium text-[#111514] font-sans mt-4">
                      What I offer
                    </h4>
                    
                    {/* Responsive Tags Layout: stacked column on mobile/tablet, wrap on laptop */}
                    <div
                      className={
                        isLaptop
                          ? "flex flex-wrap gap-2 mt-2"
                          : "flex flex-col items-start gap-2.5 mt-2"
                      }
                    >
                      {s.offers.map((o) => (
                        <span
                          key={o}
                          className="inline-flex items-center justify-center h-[36px] bg-[#F1F3E8] text-[#4C4D4D] rounded-[90px] px-4 text-[14.6px] leading-[24px] font-normal font-sans whitespace-nowrap"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/services/${s.slug}`}
                    className="group w-full h-[48px] rounded-[90px] bg-[#1F9B6A] flex items-center justify-center text-white hover:bg-black hover:text-white transition-all duration-300 font-sans text-[14.8px] font-medium leading-[24px] overflow-hidden"
                  >
                    <span className="relative block overflow-hidden h-[24px]">
                      <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                        <span className="h-[24px] flex items-center justify-center">View Details</span>
                        <span className="h-[24px] flex items-center justify-center">View Details</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => prev - 1)}
              className="p-2 text-[#111514] hover:text-[#1F9B6A] transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {services.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setActiveIndex(k + services.length)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    k === (activeIndex % services.length) ? "bg-[#1F9B6A]" : "bg-[#1F9B6A]/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((prev) => prev + 1)}
              className="p-2 text-[#111514] hover:text-[#1F9B6A] transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      ) : (
        /* 2. Desktop Stacking List View (>=1280px) */
        <div className="relative flex flex-col gap-12 lg:gap-16">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className="static lg:sticky lg:top-[120px] w-full"
              style={{
                zIndex: i + 1,
              }}
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#EFF0EB] rounded-[20px] p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[576px] w-full border border-black/[0.06] overflow-hidden"
              >
                {/* Left Column: Image with Testimonial Overlay */}
                <div className="relative w-full h-[300px] lg:h-full rounded-[16px] overflow-hidden">
                  <Img
                    src={`/images/services/services-${parseInt(s.number)}.webp`}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Testimonial Block */}
                  <div className="absolute left-4 bottom-4 right-4 lg:left-6 lg:bottom-6 lg:w-[371px] h-auto lg:h-[212px] p-6 bg-black/40 backdrop-blur-[10px] border border-white/30 rounded-[16px] text-white flex flex-col justify-between z-10">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-2 lg:mb-0">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="size-4 fill-white text-white" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[14px] lg:text-[16.6px] leading-[22px] lg:leading-[28px] text-white font-normal mb-3 lg:mb-0 font-sans">
                      "{s.testimonial.text}"
                    </p>

                    {/* Testimonial Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={`/images/services/review-${parseInt(s.number)}.webp`}
                        alt={s.testimonial.name}
                        className="size-[52px] rounded-[10px] border border-[#EAE9E9] object-cover shrink-0"
                      />
                      <div>
                        <div className="text-[14.9px] leading-[24px] font-normal text-white font-sans">
                          {s.testimonial.name}
                        </div>
                        <div className="text-[13px] leading-[18px] font-normal text-white/70 font-sans">
                          {s.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Content Card */}
                <div className="bg-[#FEFFFA] rounded-[16px] p-6 lg:p-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Service Number and Pagination Dots */}
                    <div className="flex items-center justify-between h-[34px]">
                      <span className="text-[21.4px] leading-[34px] font-medium text-[#B7B7B7] font-sans">
                        {s.number}
                      </span>
                      <div className="flex gap-2">
                        {services.map((_, k) => (
                          <span
                            key={k}
                            className={`w-[13px] h-[13px] rounded-full transition-colors duration-300 ${
                              k === i ? "bg-[#1F9B6A]" : "bg-[#EFF0EB]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Service Title and Detail */}
                    <div className="mt-6 lg:mt-[32px]">
                      <h3 className="text-[24px] lg:text-[29.8px] leading-[32px] lg:leading-[40px] font-medium text-[#111514] font-sans">
                        {s.title}
                      </h3>
                      <p className="text-[14px] lg:text-[16.3px] leading-[22px] lg:leading-[28px] font-normal text-[#4C4D4D] mt-3 lg:mt-[16px] font-sans">
                        {s.short}
                      </p>
                    </div>

                    {/* Service Offer Block */}
                    <div className="mt-8 lg:mt-[96px]">
                      <h4 className="text-[17px] lg:text-[19.2px] leading-[24px] lg:leading-[28px] font-medium text-[#111514] font-sans">
                        What I offer
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-x-2 lg:gap-y-[13px] mt-3 lg:mt-[16px]">
                        {s.offers.map((o) => (
                          <span
                            key={o}
                            className="inline-flex items-center justify-center h-[36px] bg-[#F1F3E8] text-[#4C4D4D] rounded-[90px] px-4 text-[14.6px] leading-[24px] font-normal font-sans whitespace-nowrap"
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/services/${s.slug}`}
                    className="group w-full h-[48px] rounded-[90px] bg-[#1F9B6A] flex items-center justify-center text-white hover:bg-black hover:text-white transition-all duration-300 font-sans text-[14.8px] font-medium leading-[24px] mt-6 lg:mt-0 overflow-hidden"
                  >
                    <span className="relative block overflow-hidden h-[24px]">
                      <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                        <span className="h-[24px] flex items-center justify-center">View Details</span>
                        <span className="h-[24px] flex items-center justify-center">View Details</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
