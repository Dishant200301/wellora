import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/modules/services/data/services";
import { Img } from "@/modules/core/components/Img";
import { Star } from "lucide-react";

export default function ServicesList() {
  return (
    <section className="container-px max-w-7xl mx-auto mt-12 mb-24 md:mt-20">
      {/* 1. Mobile, Tablet & Laptop List View (<1280px) */}
      <div className="flex flex-col gap-6 py-4 xl:hidden">
        {services.map((s, i) => (
          <div key={s.slug} className="w-full">
            <div className="relative bg-[#EFF0EB] rounded-[20px] p-4 flex flex-col gap-4 border border-black/[0.06] w-full">
              {/* Image */}
              <div className="relative w-full rounded-[16px] overflow-hidden h-[220px] md:h-[360px] lg:h-[420px]">
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
                          k === i ? "bg-[#1F9B6A]" : "bg-[#EFF0EB]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#111514] font-sans mt-3 leading-snug">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-normal text-[#4C4D4D] mt-2 font-sans line-clamp-2 md:line-clamp-none">
                  {s.short}
                </p>

                {/* What I Offer Section */}
                <h4 className="text-[16px] md:text-[18px] font-medium text-[#111514] font-sans mt-4">
                  What I offer
                </h4>

                {/* Responsive Tags Layout: stacked column on mobile, wrap on tablet/laptop */}
                <div className="flex flex-col md:flex-row md:flex-wrap items-start gap-2.5 md:gap-2 mt-3">
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

      {/* 2. Desktop Stacking List View (>=1280px / xl) */}
      <div className="relative hidden xl:flex xl:flex-col gap-12 lg:gap-16">
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
                      <span className="h-[24px] flex items-center justify-center">
                        View Details
                      </span>
                      <span className="h-[24px] flex items-center justify-center">
                        View Details
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
