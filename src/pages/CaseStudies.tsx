import { Link } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { caseStudies } from "@/data/casestudiesDetails";
import BookingForm from "@/features/book-appointment/BookingForm";

export default function CaseStudies() {
  return (
    <>
      <SEO title="Case Studies" description="Real results from real neurological care — outcomes from Dr. Arden's practice." path="/case-studies" />
      <section className="w-full bg-white p-2 sm:p-3 lg:p-4 flex flex-col">
        <div
          className="relative w-full rounded-[24px] lg:rounded-[30px] overflow-hidden flex flex-col justify-end p-6 md:p-10 lg:p-10 h-[calc(80vh-1rem)] sm:h-[calc(80vh-1.5rem)] lg:h-[calc(100vh-2rem)] min-h-[480px]"
          style={{
            backgroundImage: "url('/images/case-studies/case-studies.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col justify-end text-white max-w-4xl">
            <span className="text-sm md:text-[20px] leading-[22px] md:leading-[32px] font-normal font-sans bg-white/15 backdrop-blur-md rounded-full px-5 py-1.5 w-fit select-none">
              Case studies
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-[80px] lg:leading-[88px] font-medium font-sans tracking-tight max-w-4xl">
              Real Results from Real Projects
            </h1>
          </div>
        </div>
      </section>
      <section className="container-px max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
        {caseStudies.map((c, index) => (
          <Link key={c.slug} to={`/case-studies/${c.slug}`} className="group flex flex-col gap-3 rounded-[20px] bg-[#eff0eb] p-3 transition">
            <Img src={`/images/case-studies/case-studies-${(index % 5) + 1}.webp`} alt={c.title} ratio="16/11" className="rounded-[20px] w-full object-cover" />
            <div className="bg-[#fefffa] rounded-[20px] p-6 md:p-8 flex flex-col gap-2 flex-1">
              <div className="text-[15px] text-[#666666] font-sans">{c.date}</div>
              <h3 className="text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] text-[#111514] font-medium font-sans">{c.title}</h3>
            </div>
            <div className="bg-[#fefffa] rounded-full py-3 text-center text-[16px] text-[#111514] font-medium font-sans transition-colors duration-300 overflow-hidden group-hover:bg-[#1f9b6a] group-hover:text-white">
              <span className="relative block overflow-hidden h-6">
                <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                  <span className="h-6 flex items-center justify-center">View Case study</span>
                  <span className="h-6 flex items-center justify-center">View Case study</span>
                </span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      <BookingForm heading="Schedule a consultation with Dr. Arden for expert diagnosis." />
    </>
  );
}
