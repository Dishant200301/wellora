import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Img } from "@/components/common/Img";
import { articles } from "@/data/ArticlesDetails";

export default function ArticlesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop && hoveredIndex !== null) {
      setHoveredIndex(null);
    }
  }, [isDesktop, hoveredIndex]);

  const handleMouseEnter = (index: number) => {
    if (isDesktop) setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setHoveredIndex(null);
  };

  // Select the 3 articles for the section
  const sectionArticles = [
    { ...articles[1], image: "/images/articles/article-2.webp" },
    { ...articles[0], image: "/images/articles/article-1.webp" },
    { ...articles[2], image: "/images/articles/article-3.webp" },
  ];

  return (
    <section className="container mx-auto px-4 py-20 pt-32 xl:pt-32 xl:pb-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm text-[#4C4D4D] leading-[28px]">Article</span>
          <h2 className="mt-2 text-[28px] md:text-[44.3px] leading-[36px] md:leading-[56px] font-medium text-[#111514] max-w-[520px] mx-auto">Neurology Insights &amp; Brain Health</h2>
        </div>

        <div className="bg-[#EFF0EB] rounded-[20px] p-4">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* First Card */}
            <Link
              to={`/articles/${sectionArticles[0].slug}`}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-[16px] overflow-hidden bg-[#FEFFFA] min-h-[400px] lg:min-h-[456px] block group"
            >
              {/* Image Section */}
              <motion.div
                layout
                initial={false}
                animate={{ 
                  top: hoveredIndex === 0 ? 0 : 20,
                  left: hoveredIndex === 0 ? 0 : 20,
                  width: hoveredIndex === 0 ? "100%" : 120,
                  height: hoveredIndex === 0 ? "100%" : 90,
                  borderRadius: hoveredIndex === 0 ? 10 : 10,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-0 overflow-hidden"
              >
                <Img src={sectionArticles[0].image} fallbackSrc={`/images/articles/${sectionArticles[0].slug}.jpg`} alt={sectionArticles[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <motion.div 
                  initial={false}
                  animate={{ opacity: hoveredIndex === 0 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
                animate={{
                  paddingBottom: 24,
                  paddingLeft: hoveredIndex === 0 ? 24 : 20,
                  paddingRight: hoveredIndex === 0 ? 24 : 20,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence initial={false}>
                  {hoveredIndex !== 0 && (
                    <motion.div
                      key="date"
                      layout
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: 8 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-auto overflow-hidden shrink-0"
                    >
                      <div className="text-md leading-[24px] text-[#4C4D4D]">{sectionArticles[0].date}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.h3 
                  layout
                  initial={false}
                  animate={{ 
                    color: hoveredIndex === 0 ? "#ffffff" : "#111514"
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[24px] leading-[34px] font-medium pointer-events-auto shrink-0 line-clamp-3"
                >
                  {sectionArticles[0].title}
                </motion.h3>

                <AnimatePresence initial={false}>
                  {hoveredIndex !== 0 && (
                    <motion.div
                      key="excerpt"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-auto overflow-hidden shrink-0"
                    >
                      <p className="text-md leading-[24px] text-[#4C4D4D] line-clamp-2">{sectionArticles[0].excerpt}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            {/* Middle Card (Featured) */}
            <Link
              to={`/articles/${sectionArticles[1].slug}`}
              className="relative rounded-[16px] overflow-hidden bg-[#FEFFFA] min-h-[400px] lg:min-h-[456px] block group"
            >
              <div className="absolute inset-0 overflow-hidden">
                <Img src={sectionArticles[1].image} fallbackSrc={`/images/articles/${sectionArticles[1].slug}.jpg`} alt={sectionArticles[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>
              </div>
              <div className="absolute bottom-6 left-4 md:left-6 right-4 text-white z-10 pointer-events-none">
                <h3 className="text-[20px] leading-[24px] md:text-[22.1px] md:leading-[34px] font-medium line-clamp-3">{sectionArticles[1].title}</h3>
              </div>
            </Link>

            {/* Third Card */}
            <Link
              to={`/articles/${sectionArticles[2].slug}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-[16px] overflow-hidden bg-[#FEFFFA] min-h-[400px] lg:min-h-[456px] block group"
            >
              {/* Image Section */}
              <motion.div
                layout
                initial={false}
                animate={{ 
                  top: hoveredIndex === 2 ? 0 : 20,
                  left: hoveredIndex === 2 ? 0 : 20,
                  width: hoveredIndex === 2 ? "100%" : 120,
                  height: hoveredIndex === 2 ? "100%" : 90,
                  borderRadius: hoveredIndex === 2 ? 10 : 10,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-0 overflow-hidden"
              >
                <Img src={sectionArticles[2].image} fallbackSrc={`/images/articles/${sectionArticles[2].slug}.jpg`} alt={sectionArticles[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <motion.div 
                  initial={false}
                  animate={{ opacity: hoveredIndex === 2 ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
                animate={{
                  paddingBottom: 24,
                  paddingLeft: hoveredIndex === 2 ? 24 : 20,
                  paddingRight: hoveredIndex === 2 ? 24 : 20,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <AnimatePresence initial={false}>
                  {hoveredIndex !== 2 && (
                    <motion.div
                      key="date"
                      layout
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: 8 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-auto overflow-hidden shrink-0"
                    >
                      <div className="text-sm leading-[20px] md:text-md md:leading-[24px] text-[#4C4D4D]">{sectionArticles[2].date}</div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.h3 
                  layout
                  initial={false}
                  animate={{ 
                    color: hoveredIndex === 2 ? "#ffffff" : "#111514"
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-[22.1px] leading-[34px] font-medium pointer-events-auto shrink-0 line-clamp-3"
                >
                  {sectionArticles[2].title}
                </motion.h3>

                <AnimatePresence initial={false}>
                  {hoveredIndex !== 2 && (
                    <motion.div
                      key="excerpt"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pointer-events-auto overflow-hidden shrink-0"
                    >
                      <p className="text-md leading-[24px] text-[#4C4D4D] line-clamp-2">{sectionArticles[2].excerpt}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
