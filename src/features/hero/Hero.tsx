import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Calendar, Stethoscope } from "lucide-react";
import { Img } from "@/components/common/Img";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="px-[10px] md:px-[10px] xl:px-[12px] pt-2 xl:pt-4 overflow-hidden">
      <div 
        className="relative rounded-xl xl:rounded-[32px] overflow-hidden xl:bg-[#59BE93] bg-cover bg-center text-white min-h-[98vh] md:min-h-[98vh] xl:min-h-[120vh] flex flex-col justify-end"
        style={{ backgroundImage: "url('/images/home/hero_Baground.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/[0.09] pointer-events-none" />

        {/* Bottom dark gradient for mobile/tablet/laptop to enhance text readability */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/65 via-black/40 to-transparent pointer-events-none z-[5] xl:hidden" />

        <div className="relative grid lg:grid-cols-12 gap-6 px-4 md:px-12 lg:px-10 pt-28 md:pt-32 pb-6 w-full h-full min-h-[inherit] items-end md:pb-12 lg:pb-0">
          {/* Left column */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-end xl:justify-between h-full py-4 md:py-0 lg:py-16 z-10">
            <div className="flex flex-col items-start">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-flex self-start items-center gap-2 rounded-full bg-[#0c3e29]/0 lg:bg-[#0c3e29]/20 backdrop-blur-xs lg:backdrop-blur-sm px-4 py-1.5 text-md md:text-base text-white border border-white/5"
              >
                <Stethoscope className="size-4" /> Dr. Arden max
              </motion.div>

              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 font-display font-medium text-white text-[44px] leading-[52px] md:text-[52px] md:leading-[58px] lg:text-[60px] lg:leading-[66px] xl:text-[80px] xl:leading-[88px] tracking-tight"
              >
                <span className="hidden xl:inline">Precision<br/>Neurology Care<br/>You Can Trust</span>
                <span className="hidden md:inline xl:hidden">Precision Neurology<br/>Care You Can Trust</span>
                <span className="inline md:hidden">Precision<br/>Neurology<br/>Care You<br/>Can Trust</span>
              </motion.h1>

              {/* Button for Mobile/Tablet/Laptop */}
              <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8 xl:hidden w-full md:w-fit self-start">
                <Link to="/book-appointment" className="group flex md:inline-flex w-fit items-center gap-3 rounded-full bg-white hover:bg-black text-ink hover:text-white pl-2 pr-6 py-2.5 font-display font-medium text-[16px] md:text-[18px] md:leading-[24px] hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.06)] overflow-hidden">
                  <span className="size-8 grid place-items-center rounded-full bg-brand group-hover:bg-white text-white group-hover:text-[#1f9b6a] transition-colors duration-300 shrink-0"><Calendar className="size-4" /></span>
                  <span className="relative block overflow-hidden h-6">
                    <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                      <span className="h-6 flex items-center justify-center">Book Appointment</span>
                      <span className="h-6 flex items-center justify-center">Book Appointment</span>
                    </span>
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }} className="mt-8 lg:mt-24 hidden xl:flex items-center gap-4">
              <div className="flex -space-x-2">
                {["/images/home/profile image-001.webp", "/images/home/profile image-002.webp", "/images/home/profile image-003.webp"].map((src, i) => (
                  <img key={i} src={src} alt={`Patient ${i + 1}`} className="size-10 rounded-full border-2 border-[#1f9b6a] object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-white">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                </div>
                <div className="text-lg text-white mt-0.5">500+ Happy customers</div>
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="hidden xl:flex lg:col-span-5 xl:col-span-5 flex-col justify-end gap-6 lg:pl-12 xl:pl-54 pb-8 xl:pb-54 z-10 text-right lg:text-left items-end lg:items-start">
            <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.3 }} className="font-display font-normal text-white text-[18px] leading-[28px] max-w-sm">
              Dr. Arden is a board-certified neurologist specializing in diagnosing and treating disorders of the brain, spine, and nervous system combining advanced science with compassionate care.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.4 }}>
              <Link to="/book-appointment" className="group inline-flex items-center gap-3 rounded-full bg-white hover:bg-black text-ink hover:text-white pl-2 pr-6 py-2 font-display font-medium text-[18px] leading-[24px] hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                <span className="size-8 grid place-items-center rounded-full bg-brand group-hover:bg-white text-white group-hover:text-[#1f9b6a] transition-colors duration-300"><Calendar className="size-4" /></span>
                <span className="relative block overflow-hidden h-6">
                  <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="h-6 flex items-center justify-center">Book Appointment</span>
                    <span className="h-6 flex items-center justify-center">Book Appointment</span>
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Doctor image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute inset-x-0 bottom-0 mx-auto flex justify-center pointer-events-none z-0 max-w-[600px] md:max-w-[600px] lg:max-w-[650px] xl:max-w-[520px] w-full"
          >
            <img 
              src="/images/home/doctor_avatar.webp" 
              alt="Dr. Arden" 
              className="w-[180vw] md:w-[125vw] lg:w-[155vw] xl:w-[60vw] max-w-[700px] object-contain object-bottom h-[120vh] md:h-[95vh] lg:h-[120vh] xl:h-[95vh]" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
