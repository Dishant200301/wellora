import { SEO } from "@/modules/core/components/SEO";
import BookingForm from "@/modules/core/components/BookingForm";
import FAQ from "@/modules/core/components/FAQ";

interface InfoLine {
  text: string;
  href?: string;
}

interface InfoSection {
  label: string;
  lines: InfoLine[];
}

const info: InfoSection[] = [
  {
    label: "Contact",
    lines: [
      { text: "info@welloraneuro.com", href: "mailto:info@welloraneuro.com" },
      { text: "+31 10 123 4567", href: "tel:+31101234567" },
    ],
  },
  {
    label: "Working hours",
    lines: [{ text: "Monday – Friday" }, { text: "09:00 – 17:00" }],
  },
  {
    label: "Location",
    lines: [
      { text: "Hague, Netherlands", href: "https://www.google.com/maps" },
      { text: "Tsukuba, Ninomiya", href: "https://www.google.com/maps" },
    ],
  },
];

const expect = [
  "Comprehensive Evaluation",
  "Neurological Examination",
  "Diagnosis & Guidance",
  "Care Plan & Guidance",
  "Personalized Treatment Plan",
];
const bring = [
  "Previous medical records or reports (if have)",
  "List of current medications",
  "Any imaging reports (MRI, CT scan, etc.)",
  "Details of symptoms (duration, frequency, triggers)",
  "Referral (if required by insurance)",
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch or request an appointment with Dr. Wellora."
        path="/contact"
      />
      <section className="container-px max-w-3xl mx-auto pt-36 lg:pt-44 text-center">
        <span className="inline-block text-md leading-[24px] md:text-lg font-normal md:leading-[28px] bg-[#eff0eb] rounded-full px-5 py-1.5">
          Book appointment
        </span>
        <h1 className="mt-3 text-4xl md:text-6xl md:leading-[70px] lg:text-[80px] lg:leading-[88px] font-medium font-sans">
          Request your <br className="hidden md:block" /> Appointment Today
        </h1>
      </section>

      <BookingForm heading="" />

      <section className="container-px max-w-7xl mx-auto mt-10 mb-16 md:mt-16 md:mb-24">
        <div className="bg-[#EFF0EB] rounded-[16px] md:rounded-[24px] p-3 md:p-4 lg:p-4 flex flex-col gap-3 md:gap-4 lg:gap-4">
          {/* Row 1: Contact, Working hours, Location */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-4">
            {info.map((c) => (
              <div
                key={c.label}
                className="bg-[#FEFFFA] rounded-[14px] md:rounded-[20px] p-3 md:p-4 lg:p-6 flex flex-col justify-between"
              >
                <div className="text-[15px] leading-[22px] md:text-[18px] md:leading-[28px] text-[#111514] font-normal font-sans mb-3 md:mb-6">
                  {c.label}
                </div>
                <div className="space-y-1">
                  {c.lines.map((l) =>
                    l.href ? (
                      <a
                        key={l.text}
                        href={l.href}
                        target="_blank"
                        className="block text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] font-medium text-[#111514] font-sans hover:underline cursor-pointer"
                      >
                        {l.text}
                      </a>
                    ) : (
                      <div
                        key={l.text}
                        className="text-[16px] leading-[22px] md:text-[20px] md:leading-[28px] font-medium text-[#111514] font-sans"
                      >
                        {l.text}
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: What to expect, What to Bring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-4">
            {/* Card 4: What to expect during your visit */}
            <div className="bg-[#FEFFFA] rounded-[14px] md:rounded-[20px] p-4 md:p-6 lg:p-10">
              <h2 className="text-[20px] leading-[28px] md:text-[24px] md:leading-[34px] font-medium text-[#111514] font-sans mb-4 md:mb-6">
                What to expect during your visit
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {expect.map((x) => (
                  <li key={x} className="flex items-start gap-2 md:gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111514] mt-[8px] md:mt-[10px] shrink-0" />
                    <span className="text-[15px] leading-[20px] md:text-[18px] md:leading-[24px] text-[#4C4D4D] font-medium font-sans">
                      {x}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 5: What to Bring */}
            <div className="bg-[#FEFFFA] rounded-[14px] md:rounded-[20px] p-4 md:p-6 lg:p-10">
              <h2 className="text-[20px] leading-[28px] md:text-[24px] md:leading-[34px] font-medium text-[#111514] font-sans mb-4 md:mb-6">
                What to Bring
              </h2>
              <ul className="space-y-2 md:space-y-4">
                {bring.map((x) => (
                  <li key={x} className="flex items-start gap-2 md:gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#111514] mt-[8px] md:mt-[10px] shrink-0" />
                    <span className="text-[15px] leading-[20px] md:text-[18px] md:leading-[24px] text-[#4C4D4D] font-medium font-sans">
                      {x}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
