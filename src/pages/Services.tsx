import { SEO } from "@/components/common/SEO";
import ServicesList from "@/features/services/ServicesList";

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Comprehensive neurology services from migraine care to memory and cognitive evaluations." path="/services" />
      <section className="w-full bg-white p-2 sm:p-3 lg:p-4 flex flex-col">
        <div
          className="relative w-full rounded-[24px] lg:rounded-[30px] overflow-hidden flex flex-col justify-end p-6 md:p-10 lg:p-10 h-[calc(80vh-1rem)] sm:h-[calc(80vh-1.5rem)] lg:h-[calc(100vh-2rem)] min-h-[480px]"
          style={{
            backgroundImage: "url('/images/services/services-5.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col justify-end text-white max-w-4xl">
            <span className="text-sm md:text-[20px] leading-[22px] md:leading-[32px] font-normal font-sans bg-white/15 backdrop-blur-md rounded-full px-5 py-1.5 w-fit select-none">
              Services
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-[80px] lg:leading-[88px] font-medium font-sans tracking-tight max-w-4xl">
              Comprehensive Neurological Care
            </h1>
          </div>
        </div>
      </section>
      <ServicesList />
    </>
  );
}

