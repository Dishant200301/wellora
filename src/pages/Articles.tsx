import { Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { articles } from "@/data/ArticlesDetails";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { Article } from "@/data/ArticlesDetails";

// Helper to get image path ensuring it exists (maps to 1-4)
const getArticleImage = (index: number) => `/images/articles/article-${(index % 4) + 1}.webp`;

export const ArticleCard = ({ article, index }: { article: Article; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop && isHovered) {
      setIsHovered(false);
    }
  }, [isDesktop, isHovered]);

  const handleMouseEnter = () => {
    if (isDesktop) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isDesktop) setIsHovered(false);
  };

  const imageSrc = getArticleImage(index);

  return (
    <>
      {/* Desktop / Tablet Card */}
      <Link
        to={`/articles/${article.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="hidden md:block relative rounded-[16px] overflow-hidden bg-[#FEFFFA] min-h-[400px] lg:min-h-[456px] group"
      >
        {/* Image Section */}
        <motion.div
          layout
          initial={false}
          animate={{ 
            top: isHovered ? 0 : 20,
            left: isHovered ? 0 : 20,
            width: isHovered ? "100%" : (windowWidth >= 768 && windowWidth < 1280 ? 180 : 120),
            height: isHovered ? "100%" : (windowWidth >= 768 && windowWidth < 1280 ? 135 : 90),
            borderRadius: isHovered ? 10 : 10,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-0 overflow-hidden"
        >
          <Img src={imageSrc} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
          <motion.div 
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="absolute inset-0 z-10 flex flex-col justify-end pointer-events-none"
          animate={{
            paddingBottom: 24,
            paddingLeft: isHovered ? 24 : 20,
            paddingRight: isHovered ? 24 : 20,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence initial={false}>
            {!isHovered && (
              <motion.div
                key="date"
                layout
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto", marginBottom: 8 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-auto overflow-hidden shrink-0"
              >
                <div className="text-sm leading-[20px] md:text-base md:leading-[24px] text-[#4C4D4D]">{article.date}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h3 
            layout
            initial={false}
            animate={{ 
              color: isHovered ? "#ffffff" : "#111514"
            }}
            transition={{ duration: 0.5 }}
            className="text-[20px] leading-[28px] md:text-[24px] md:leading-[34px] font-medium pointer-events-auto shrink-0"
          >
            {article.title}
          </motion.h3>

          <AnimatePresence initial={false}>
            {!isHovered && (
              <motion.div
                key="excerpt"
                layout
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-auto overflow-hidden shrink-0"
              >
                <p className="text-sm leading-[20px] md:text-base md:leading-[24px] text-[#4C4D4D]">{article.excerpt}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>

      {/* Mobile Card */}
      <Link
        to={`/articles/${article.slug}`}
        className="md:hidden relative rounded-[16px] overflow-hidden bg-[#FEFFFA] min-h-[350px] flex flex-col p-5 group"
      >
        <div className="w-[120px] h-[90px] overflow-hidden rounded-[10px] shrink-0">
          <Img src={imageSrc} alt={article.title} className="w-full h-full object-cover"/>
        </div>
        <div className="mt-auto pt-12 flex flex-col justify-end">
          <div className="text-[15px] leading-[24px] text-[#4C4D4D] mb-2">{article.date}</div>
          <h3 className="text-[22.1px] leading-[32px] font-medium text-[#111514]">{article.title}</h3>
          <p className="mt-2 text-[15px] leading-[24px] text-[#4C4D4D]">{article.excerpt}</p>
        </div>
      </Link>
    </>
  );
};

export default function Articles() {
  const [featured, ...rest] = articles;
  
  return (
    <>
      <SEO title="Articles" description="Articles on neurology, brain health, and what to expect during care." path="/articles" />
      
      {/* Header section */}
      <section className="container-px xl:max-w-[1200px] mx-auto pt-32 md:pt-40 pb-6 md:pb-10">
        <div className="mb-4">
          <span className="inline-block bg-[#EFF0EB] rounded-full px-5 py-1 text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#4c4d4d] font-medium">
            Article
          </span>
        </div>
        <h1 className="text-[32px] leading-[36px] md:text-[44px] md:leading-[52px] xl:text-[80px] xl:leading-[88px] font-medium text-[#111514] max-w-3xl tracking-[-0.02em]">
          Gentle guidance to understand symptoms
        </h1>
      </section>

      {/* Articles Grid Container */}
      <section className="container-px xl:max-w-[1200px] mx-auto pb-24 md:pb-32">
        <div className="bg-[#EFF0EB] rounded-[20px] p-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            
            {/* Featured Main Card */}
            <Link 
              to={`/articles/${featured.slug}`} 
              className="relative block rounded-[16px] overflow-hidden group col-span-1 md:col-span-2 lg:col-span-3 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
            >
              <Img src={getArticleImage(0)} fallbackSrc={`/images/articles/${featured.slug}.jpg`} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"/>
              <div className="absolute bottom-6 left-4 lg:bottom-10 lg:left-10 right-4 lg:right-10 text-white z-10 pointer-events-none">
                <div className="text-[14px] md:text-[16px] leading-[24px] mb-2">{featured.date}</div>
                <h2 className="text-[22.1px] leading-[28px] md:text-[30px] md:leading-[36px] lg:text-[40px] lg:leading-[44px] font-medium max-w-[600px] mb-3">{featured.title}</h2>
                <p className="text-[15px] lg:text-[18px] leading-[24px] md:leading-[28px] max-w-[600px] opacity-90">{featured.excerpt}</p>
              </div>
            </Link>

            {/* Rest of the Cards */}
            {rest.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
