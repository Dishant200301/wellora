import { Link, useParams } from "react-router-dom";
import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { caseStudies } from "@/data/casestudiesDetails";
import { ArrowLeft, Calendar } from "lucide-react";
import NotFound from "./NotFound";

export default function CaseStudyDetails() {
  const { slug } = useParams();
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return <NotFound />;
  const more = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 2);
  const currentImageIndex = caseStudies.findIndex(x => x.slug === c.slug);

  return (
    <>
      <SEO title={c.title} description={c.summary} path={`/case-studies/${c.slug}`} />
      <section className="container-px max-w-[1320px] mx-auto pt-28 md:pt-36">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-[16px] leading-[24px] font-medium font-sans text-[#111514] hover:text-[#111514] group transition-colors">
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform"/> Back to Case study
        </Link>
        <h1 className="mt-[24px] text-[30px] md:text-[44px] md:leading-[52px] leading-[38px] lg:text-[64px] lg:leading-[72px] xl:text-[80px] xl:leading-[88px] font-medium font-sans text-[#111514] max-w-4xl tracking-tight">{c.title}</h1>
        <p className="mt-[24px] text-[16px] leading-[28px] font-normal font-sans text-[#111514] max-w-4xl">{c.summary}</p>

        <div className="mt-8 md:mt-12 bg-[#eff0eb] rounded-[20px] xl:rounded-[46px] p-3 sm:p-3 md:p-3 mb-10 md:mb-16">
          <div className="flex flex-col xl:flex-row gap-4 items-start">
            <article className="w-full xl:w-[70%] bg-[#fefffa] rounded-[30px] xl:rounded-[40px] p-3 sm:p-6 md:p-5 lg:p-6 xl:p-8">
              <Img src={`/images/case-studies/case-studies-${(currentImageIndex % 5) + 1}.webp`} alt={c.title} ratio="16/10" className="rounded-[20px] xl:rounded-[30px] w-full mb-8 object-cover"/>
              
              <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Overview</h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-8">{c.overview}</p>

              <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Situation</h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{c.situation.intro}</p>
              <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                {c.situation.challenges.map((x) => <li key={x}>{x}</li>)}
              </ul>

              <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Assessment & Approach</h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{c.approach.intro}</p>
              <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-4">
                {c.approach.steps.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-8">{c.approach.goal}</p>

              <h2 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-4">Outcome</h2>
              <p className="text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] mb-4">{c.outcome.intro}</p>
              <ul className="list-disc pl-5 text-[16px] md:text-[18px] leading-[24px] font-normal font-sans text-[#4c4d4d] space-y-2 mb-8">
                {c.outcome.results.map((x) => <li key={x}>{x}</li>)}
              </ul>

              <div className="pt-8 mt-10 border-t border-[#eae9e9]">
                <h3 className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-medium font-sans text-[#111514] mb-6">See if this approach is right for you</h3>
                <Link to="/book-appointment" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1F9B6A] text-white pl-2 py-1.5 pr-6 border border-transparent hover:bg-white hover:text-[#111514] transition-all duration-300 overflow-hidden w-fit">
                  <div className="size-9 rounded-full bg-white text-[#1F9B6A] flex items-center justify-center group-hover:bg-[#1F9B6A] group-hover:text-white transition-colors duration-300 shrink-0">
                    <Calendar className="size-4"/>
                  </div>
                  <span className="relative block overflow-hidden h-[24px]">
                    <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                      <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">Book Appointment</span>
                      <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">Book Appointment</span>
                    </span>
                  </span>
                </Link>
              </div>
            </article>

            <aside className="w-full xl:w-[30%] xl:sticky xl:top-32 flex flex-col gap-4">
              <div className="bg-[#fefffa] rounded-[20px] p-4 md:p-6">
                <div className="text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-medium font-sans text-[#111514] mb-6">Patient Background</div>
                <dl className="space-y-4">
                  <div><dt className="inline text-[16px] md:text-[18px] leading-[24px] font-medium font-sans text-black">Age: </dt><dd className="inline text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal font-sans text-black">{c.patient.age}</dd></div>
                  <div><dt className="inline text-[16px] md:text-[18px] leading-[24px] font-medium font-sans text-black">Gender: </dt><dd className="inline text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal font-sans text-black">{c.patient.gender}</dd></div>
                  <div className="mt-4"><dt className="block text-[16px] md:text-[18px] leading-[24px] font-medium font-sans text-black mb-1">Initial Symptoms:</dt><dd className="block text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal font-sans text-black">{c.patient.symptoms}</dd></div>
                  <div className="mt-4"><dt className="block text-[16px] md:text-[18px] leading-[24px] font-medium font-sans text-black mb-1">Medical History:</dt><dd className="block text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-normal font-sans text-black">{c.patient.history}</dd></div>
                </dl>
              </div>
              <div className="bg-[#fefffa] rounded-[20px] p-4 md:p-6">
                <div className="text-[20px] md:text-[24px] leading-[28px] md:leading-[34px] font-medium font-sans text-[#111514] mb-6">Early stage neurological symptoms</div>
                <p className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-medium font-sans text-[#111514] italic">"{c.testimonial.text}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <Img src="/images/services/review-1.webp" alt={c.testimonial.name} className="size-[48px] rounded-[12px] object-cover" />
                  <div>
                    <div className="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-medium font-sans text-[#111514]">{c.testimonial.name}</div>
                    <div className="text-[16px] leading-[24px] font-normal font-sans text-[#4c4d4d]">{c.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-16 md:mt-24 mb-8 flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          <h2 className="text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] font-medium font-sans text-[#111514]">More case studies.</h2>
          <Link to="/case-studies" className="group inline-flex items-center justify-center rounded-full bg-[#1F9B6A] text-white px-6 py-3 hover:bg-black hover:text-white transition-all duration-300 overflow-hidden shrink-0">
            <span className="relative block overflow-hidden h-[24px]">
              <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">View All Case Studies</span>
                <span className="h-[24px] flex items-center justify-center text-[16px] font-medium font-sans">View All Case Studies</span>
              </span>
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-24">
          {more.map((m) => {
            const mIndex = caseStudies.findIndex(x => x.slug === m.slug);
            return (
              <Link key={m.slug} to={`/case-studies/${m.slug}`} className="group flex flex-col gap-3 rounded-[20px] bg-[#eff0eb] p-3 transition">
                <Img src={`/images/case-studies/case-studies-${(mIndex % 5) + 1}.webp`} alt={m.title} ratio="16/11" className="rounded-[20px] w-full object-cover" />
                <div className="bg-[#fefffa] rounded-[20px] p-6 md:p-8 flex flex-col gap-2 flex-1">
                  <div className="text-[15px] text-[#666666] font-sans">{m.date}</div>
                  <h3 className="text-[20px] md:text-[22px] leading-[28px] md:leading-[30px] text-[#111514] font-medium font-sans">{m.title}</h3>
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
            );
          })}
        </div>
      </section>
    </>
  );
}
