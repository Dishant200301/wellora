import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "@/components/common/SEO";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <SEO
        title="Page not found"
        description="The page you are looking for doesn't exist."
        path="/404"
      />
      <div className="w-full min-h-screen bg-white p-2 sm:p-3 lg:p-4 flex flex-col">
        <div
          className="relative flex-1 w-full rounded-[24px] md:rounded-[30px] overflow-hidden flex flex-col justify-center items-center py-6 px-4 md:px-8 bg-[#10a375]"
          style={{
            backgroundImage: "url('/images/shared/404_bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Middle Section - Core Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="my-auto text-center z-10 max-w-2xl px-4 flex flex-col items-center justify-center"
          >
            <motion.img
              variants={itemVariants}
              src="/images/shared/404.webp"
              alt="Bug Icon"
              className="w-14 h-14 object-contain mb-6 mx-auto select-none"
            />
            <motion.h1
              variants={itemVariants}
              className="text-white font-display text-4xl sm:text-5xl md:text-5xl font-medium tracking-tight mb-4 text-center leading-[1.1] select-none"
            >
              Page Not Found
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-white/85 text-base font-normal sm:text-lg max-w-md mx-auto text-center leading-relaxed font-sans mb-8 select-none"
            >
              The page you're looking for doesn't exist or may have been moved.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className="group relative inline-flex items-center justify-center rounded-full bg-white text-[#111514] px-6 py-3.5 text-base leading-[24px] font-medium transition-all duration-300 hover:bg-black hover:text-white overflow-hidden border border-transparent"
              >
                <span className="relative block overflow-hidden h-5">
                  <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="h-5 flex items-center justify-center">Back to homepage</span>
                    <span className="h-5 flex items-center justify-center">Back to homepage</span>
                  </span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
