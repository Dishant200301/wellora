import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { caseStudies } from "@/modules/case-studies/data/casestudiesDetails";
import { Img } from "@/modules/core/components/Img";

const items = caseStudies.slice(0, 4);

export default function CaseStudiesAccordion() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 768);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if it is desktop view (xl and up, >=1280px)
  const isDesktop = width >= 1280;
  const current = items[active];

  return (
    <section className="container-px max-w-[1400px] mx-auto mt-24 md:mt-32">
      <div className="rounded-[24px] bg-[#262626] text-white p-4 md:p-6 xl:p-16">
        {/* Title Block */}
        <div className="mb-8 md:mb-12 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="text-[16.6px] leading-[28px] text-white font-normal opacity-90 font-sans mb-2">
            Case studies
          </div>
          <h2 className="text-[32px] md:text-[45.2px] leading-[36px] md:leading-[56px] font-medium text-white max-w-3xl font-sans text-center lg:text-left">
            Advances neurology through research and case studies.
          </h2>
        </div>

        {/* Content Section: side-by-side on desktop (xl), stacked on mobile/tablet/laptop */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-8 items-start">
          {/* Top / Left Column: Image Container */}
          <div className="xl:col-span-2 w-full h-[280px] sm:h-[450px] md:h-[520px] rounded-[20px] overflow-hidden relative">
            <Img
              src="/images/home/CaseStudies.webp"
              alt={isDesktop ? current.title : items[0].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom / Right Column: Cards */}
          <div className="xl:col-span-3 flex flex-col gap-4 w-full">
            {items.map((c, i) => {
              // On desktop, only the hovered/clicked card is open. On mobile, tablet, and laptop, ALL cards are open!
              const open = isDesktop ? i === active : true;
              return (
                <div
                  key={c.slug}
                  onMouseEnter={() => {
                    if (isDesktop) setActive(i);
                  }}
                  onClick={() => {
                    if (isDesktop) setActive(i);
                  }}
                  className={`relative bg-[#2E2D2D] rounded-[20px] border border-[#424242] p-6 transition-all duration-300 ${
                    open ? "shadow-lg" : ""
                  } ${isDesktop ? "cursor-pointer hover:bg-[#333232]" : "cursor-default"}`}
                >
                  <div className={isDesktop ? "flex items-start gap-6" : "flex flex-col gap-2"}>
                    {/* Number */}
                    <span
                      className={`font-sans font-medium text-[#868686] ${
                        isDesktop
                          ? "text-[21.4px] md:text-[22.9px] leading-[34px] w-[30px] shrink-0"
                          : "text-[21.4px] leading-[34px]"
                      }`}
                    >
                      {c.number}
                    </span>

                    {/* Content Block */}
                    <div className="flex-grow">
                      {/* Title */}
                      <h3 className="text-[20px] md:text-[22.1px] leading-[28px] md:leading-[34px] font-medium text-white font-sans">
                        {c.title}
                      </h3>

                      {/* Expandable Area */}
                      {isDesktop ? (
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              {/* Summary */}
                              <p className="text-[14px] md:text-[16.3px] leading-[22px] md:leading-[28px] font-normal text-[#CDCDCD] mt-3 font-sans max-w-2xl">
                                {c.summary}
                              </p>

                              {/* View Details Button */}
                              <div className="mt-6">
                                <Link
                                  to={`/case-studies/${c.slug}`}
                                  className="group inline-flex items-center justify-center w-[135.5px] h-[48px] rounded-[90px] bg-[#1F9B6A] hover:bg-black hover:text-white transition-all duration-300 text-white text-[14.8px] font-medium font-sans overflow-hidden"
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
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ) : (
                        /* Permanently open on Mobile, Tablet, and Laptop views */
                        <div>
                          {/* Summary - truncated to match exact reference ellipsis design */}
                          <p className="text-[16px] lg:text-[18px] leading-[28px] lg:leading-[28px] font-normal text-[#CDCDCD] mt-2 font-sans max-w-full line-clamp-2">
                            {c.summary}
                          </p>

                          {/* View Details Button */}
                          <div className="mt-6">
                            <Link
                              to={`/case-studies/${c.slug}`}
                              className="group inline-flex items-center justify-center w-[135.5px] h-[48px] rounded-[90px] bg-[#1F9B6A] hover:bg-black hover:text-white transition-all duration-300 text-white text-[14.8px] font-medium font-sans overflow-hidden"
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
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
