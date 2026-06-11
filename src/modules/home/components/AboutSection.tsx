import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { value: 15, suffix: "K+", label: "Patients treated. Across diverse neurological conditions" },
  { value: 12, suffix: "+", label: "Combined years of practice" },
  { value: 500, suffix: "+", label: "Migraine & Headache cases managed" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="container-px max-w-7xl mx-auto mt-24 md:mt-32 overflow-hidden">
      {/* Header section matching exact typography specs and 40% / 60% layout in desktop */}
      <div className="grid xl:grid-cols-5 gap-8 items-start">
        <div className="xl:col-span-2 text-[16.7px] leading-[28px] text-[#4c4d4d] font-normal">
          About me
        </div>
        <h2 className="xl:col-span-3 text-[30px] md:text-[32px] lg:text-[38px] xl:text-[44.1px] leading-[38px] md:leading-[40px] lg:leading-[48px] xl:leading-[56px] font-medium text-[#111514] tracking-tight">
          With a patient-first philosophy, Dr. Wellora focuses on accurate diagnosis, clear
          communication, and long term care strategies.
        </h2>
      </div>

      {/* Main Content container with background #EFF0EB, padding 16px (p-4), and rounded-[20px] */}
      <div ref={ref} className="mt-10 rounded-[20px] bg-[#eff0eb] p-4 grid xl:grid-cols-5 gap-4">
        {/* Left Column containing 3 cards of height 176px with a 12px gap (gap-3) */}
        <div className="xl:col-span-2 flex flex-col gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#fefffa] rounded-[16px] p-4 xl:p-10 md:h-[124px] xl:h-[176px] flex flex-col justify-center"
            >
              <div className="flex items-baseline text-[#111514]">
                <span className="text-[36px] md:text-[42px] font-medium leading-[56px] tracking-tight">
                  {inView ? <CountUp end={s.value} duration={2} /> : 0}
                </span>
                <span className="text-[30px] md:text-[38.4px] font-medium leading-[48px] ml-0.5">
                  {s.suffix}
                </span>
              </div>
              <div className="mt-1 text-[15px] md:text-[18px] md:leading-[28px] xl:text-[16.3px] leading-[24px] xl:leading-[28px] text-[#4c4d4d]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column (Big Card) of height 552px in desktop and h-auto in mobile/tablet/laptop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="xl:col-span-3 bg-[#fefffa] rounded-[16px] p-4 xl:p-10 flex flex-col justify-between h-auto min-h-[240px] lg:min-h-[180px] xl:min-h-0 xl:h-[552px]"
        >
          {/* Logo and title information */}
          <div className="flex items-center gap-3.5">
            <img
              src="/images/home/about.webp"
              alt="Northbridge Medical Logo"
              className="size-16 object-contain shrink-0"
            />
            <div>
              <div className="text-[16.3px] leading-[28px] font-normal text-[#111514]">
                Northbridge Medical
              </div>
              <div className="text-[14.6px] leading-[24px] font-normal text-[#4c4d4d]">
                Associated with
              </div>
            </div>
          </div>

          {/* Description text with Heading 4 specs */}
          <h4 className="text-[18px] md:text-[24px] xl:text-[29.4px] leading-[28px] md:leading-[34px] xl:leading-[40px] font-medium text-[#111514] tracking-tight">
            Board-certified neurologist with extensive clinical experience, focused on accurate
            diagnosis, clear treatment planning, and evidence-based neurological care.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
