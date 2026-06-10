import { SEO } from "@/components/common/SEO";
import { termsSections } from "@/data/terms";

export default function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="The terms that govern use of this website and Dr. Wellora's services."
        path="/terms-conditions"
      />
      <section className="container-px max-w-[840px] mx-auto pt-28 md:pt-36 text-center">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] leading-tight md:leading-[68px] lg:leading-[88px] font-medium text-[#111514] font-display">
          Terms & Conditions
        </h1>
        <div className="mt-4 md:mt-2 text-[18px] leading-[28px] font-normal text-[#111514] font-display">
          Last updated: Apr 24, 2026
        </div>
      </section>
      <section className="container-px max-w-[1000px] mx-auto mt-10 mb-20">
        <div className="rounded-[16px] md:rounded-[16px] bg-[#eff0eb] p-3 md:p-4">
          <div className="rounded-[16px] md:rounded-[16px] bg-[#fefffa] p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            {termsSections.map((s) => (
              <div key={s.title}>
                <h2 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-[32px] lg:leading-[40px] font-medium text-[#111514] font-display">
                  {s.title}
                </h2>
                {s.body && (
                  <p className="mt-3 text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] font-normal text-[#4C4D4D] font-display">
                    {s.body}
                  </p>
                )}
                {s.lead && (
                  <p className="mt-3 text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] font-normal text-[#4C4D4D] font-display">
                    {s.lead}
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-2 list-disc pl-[22px] text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] font-normal text-[#4C4D4D] font-display">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
