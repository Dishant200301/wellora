import { SEO } from "@/modules/core/components/SEO";
import { privacySections } from "@/modules/privacy-policy/data/privacy";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How we collect, use, and protect your personal and medical information."
        path="/privacy-policy"
      />
      <section className="container-px max-w-[840px] mx-auto pt-28 md:pt-36 text-center">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] leading-tight md:leading-[68px] lg:leading-[88px] font-medium text-[#111514] font-display">
          Privacy Policy
        </h1>
        <div className="mt-4 md:mt-2 text-[18px] leading-[28px] font-normal text-[#111514] font-display">
          Last updated: Apr 22, 2026
        </div>
      </section>
      <section className="container-px max-w-[1000px] mx-auto mt-10 mb-20">
        <div className="rounded-[16px] md:rounded-[16px] bg-[#eff0eb] p-3 md:p-4">
          <div className="rounded-[16px] md:rounded-[16px] bg-[#fefffa] p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            {privacySections.map((s) => (
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
