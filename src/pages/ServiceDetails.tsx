import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { serviceDetails } from "@/data/servcieDetails";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import NotFound from "./NotFound";

export default function ServiceDetails() {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const idx = serviceDetails.findIndex((s) => s.slug === slug);
  if (idx === -1) return <NotFound />;
  const s = serviceDetails[idx];
  const prev = serviceDetails[(idx - 1 + serviceDetails.length) % serviceDetails.length];
  const next = serviceDetails[(idx + 1) % serviceDetails.length];
  const others = serviceDetails.filter((_, i) => i !== idx).slice(0, 2);

  return (
    <>
      <SEO title={s.title} description={s.short} path={`/services/${s.slug}`} />
      <section className="container-px max-w-[1320px] mx-auto pt-28 md:pt-36">
        <Link to="/services" className="inline-flex items-center gap-2 text-[16px] leading-[24px] font-medium font-sans text-[#111514] hover:text-[#111514] group transition-colors">
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform"/> Back to Services
        </Link>
        <h1 className="mt-[24px] text-[30px] md:text-[44px] md:leading-[52px] leading-[38px] lg:text-[64px] lg:leading-[72px] xl:text-[80px] xl:leading-[88px] font-medium font-sans text-[#111514] max-w-full tracking-tight">{s.title}</h1>
        <p className="mt-[24px] text-[16px] leading-[28px] font-normal font-sans text-[#111514] max-w-4xl">{s.short}</p>

        <div className="mt-8 md:mt-12 bg-[#eff0eb] rounded-[20px] xl:rounded-[46px] p-2 sm:p-3 md:p-4 mb-10 md:mb-16">
          <div className="bg-[#fefffa] rounded-[16px] xl:rounded-[36px] p-4 sm:p-6 md:p-6 xl:p-6">
            <Img src={`/images/services/services-${parseInt(s.number)}.webp`} alt={s.title} ratio="16/8" className="rounded-[16px] xl:rounded-[24px] w-full mb-8 xl:mb-12 object-cover"/>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start justify-between">
              <article className="w-full xl:w-[67%]">
                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Overview</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-8">{s.overview}</p>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Common symptoms</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{s.symptoms.intro}</p>
                <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                  {s.symptoms.items.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">What may be causing it</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{s.causes.intro}</p>
                <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                  {s.causes.items.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">How the condition is evaluated</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{s.evaluation.intro}</p>
                <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                  {s.evaluation.items.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Treatment approach</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{s.treatment.intro}</p>
                <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                  {s.treatment.items.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">What to expect</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{s.expect.intro}</p>
                <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                  {s.expect.items.map((x) => <li key={x}>{x}</li>)}
                </ul>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Not sure if this applies to you?</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-8">Share your symptoms to find out if this care approach is suitable for your needs.</p>

                <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Disclaimer</h2>
                <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d]">Results may vary depending on individual condition and response to treatment.</p>
              </article>

              <aside className="w-full xl:w-[33%] xl:sticky xl:top-32 hidden xl:flex flex-col gap-4">
                <div className="bg-[#f4f5f0] rounded-[24px] p-6">
                  <div className="text-[24px] leading-[34px] font-medium font-sans text-[#111514] mb-4">More services</div>
                  <div className="grid grid-cols-1 gap-4">
                    {others.map((o) => (
                      <Link key={o.slug} to={`/services/${o.slug}`} className="group flex flex-col gap-3 bg-[#fefffa] rounded-[16px] p-3 border border-black/4 hover:shadow-sm transition">
                        <Img src={`/images/services/services-${parseInt(o.number)}.webp`} alt={o.title} ratio="16/11" className="rounded-[12px] w-full object-cover" />
                        <div className="text-[20px] leading-[28px] font-medium text-[#111514] font-sans group-hover:text-[#1F9B6A] transition-colors">{o.title}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet/Laptop Pagination */}
        <div className="flex justify-center gap-2 md:gap-3 xl:hidden mb-8 md:mb-10">
          <Link
            to={`/services/${prev.slug}`}
            className="size-9 md:size-12 rounded-[10px] border border-[#EAE9E9] flex items-center justify-center text-[#111514] bg-[#FEFFFA] transition-all duration-300 hover:bg-[#1F9B6A] hover:text-white hover:border-[#1F9B6A] group"
          >
            <ChevronLeft className="size-4 md:size-5 transition-colors group-hover:text-white" />
          </Link>
          <Link
            to={`/services/${next.slug}`}
            className="size-9 md:size-12 rounded-[10px] border border-[#EAE9E9] flex items-center justify-center text-[#111514] bg-[#FEFFFA] transition-all duration-300 hover:bg-[#1F9B6A] hover:text-white hover:border-[#1F9B6A] group"
          >
            <ChevronRight className="size-4 md:size-5 transition-colors group-hover:text-white" />
          </Link>
        </div>

        {/* Mobile/Tablet/Laptop More Services */}
        <div className="xl:hidden mb-16">
          <div className="bg-[#f4f5f0] rounded-[20px] md:rounded-[24px] p-3 md:p-4 lg:p-6">
            <div className="text-[20px] md:text-[24px] leading-[24px] md:leading-[34px] font-medium font-sans text-[#111514] mb-3 md:mb-4 lg:mb-6">More services</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {others.map((o) => (
                <Link key={o.slug} to={`/services/${o.slug}`} className="group flex flex-col gap-3 bg-[#fefffa] rounded-[16px] p-3 border border-black/4 hover:shadow-sm transition">
                  <Img src={`/images/services/services-${parseInt(o.number)}.webp`} alt={o.title} ratio="16/11" className="rounded-[12px] w-full object-cover" />
                  <div className="text-[16px] md:text-[20px] leading-[20px] md:leading-[28px] font-medium text-[#111514] font-sans group-hover:text-[#1F9B6A] transition-colors">{o.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 justify-center gap-3 mb-24 hidden xl:flex">
          <Link
            to={`/services/${prev.slug}`}
            className="size-10 md:size-12 rounded-[10px] border border-[#EAE9E9] flex items-center justify-center text-[#111514] bg-[#FEFFFA] transition-all duration-300 hover:bg-[#1F9B6A] hover:text-white hover:border-[#1F9B6A] group"
          >
            <ChevronLeft className="size-5 transition-colors group-hover:text-white" />
          </Link>
          <Link
            to={`/services/${next.slug}`}
            className="size-10 md:size-12 rounded-[10px] border border-[#EAE9E9] flex items-center justify-center text-[#111514] bg-[#FEFFFA] transition-all duration-300 hover:bg-[#1F9B6A] hover:text-white hover:border-[#1F9B6A] group"
          >
            <ChevronRight className="size-5 transition-colors group-hover:text-white" />
          </Link>
        </div>
      </section>
    </>
  );
}
