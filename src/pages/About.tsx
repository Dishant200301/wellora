import { SEO } from "@/components/common/SEO";
import { Img } from "@/components/common/Img";
import { useState } from "react";
import { Link } from "react-router-dom";

const affiliations = [
  {
    title: "Erasmus Medical Center",
    period: "2018 Present",
    role: "Consultant Neurologist",
    image: "/images/services/services-1.webp"
  },
  {
    title: "Maasstad Hospital",
    period: "2015–2018",
    role: "Attending Neurologist",
    image: "/images/services/services-2.webp"
  },
  {
    title: "Erasmus Medical University",
    period: "2010–2015",
    role: "Neurology Residency",
    image: "/images/services/services-3.webp"
  },
  {
    title: "Leiden Medical University",
    period: "2008–2010",
    role: "Clinical Internship",
    image: "/images/services/services-4.webp"
  },
  {
    title: "Leiden University",
    period: "2002–2008",
    role: "MD (Doctor of Medicine)",
    image: "/images/services/services-5.webp"
  }
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <SEO title="About me" description="Patient-first neurology with accurate diagnosis, clear communication, and long-term care strategies." path="/about" />
      <section className="container-px max-w-[1320px] mx-auto pt-28 md:pt-36">
        <div className="relative w-full xl:h-[626px] bg-[#EFF0EB] rounded-[20px] p-4 flex flex-col xl:flex-row gap-4 items-center">
          {/* Left Column - Profile Image */}
          <div className="w-full xl:w-[631.11px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[450px] xl:h-[591.28px] rounded-[12px] overflow-hidden shrink-0">
            <Img 
              src="/images/about/about.webp" 
              alt="A doctor in a white coat uses a stethoscope to listen to a teenage boy's chest" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full flex-grow xl:h-[594px] bg-[#FEFFFA] rounded-[16px] p-6 md:p-8 xl:px-[32px] xl:py-[40px] flex flex-col relative">
            <div className="flex-grow">
              <div className="mb-[24px] md:mb-[40px]">
                <div className="text-[15px] md:text-[16.6px] leading-[24px] md:leading-[28px] text-[#4C4D4D] font-normal font-sans">Care Philosophy</div>
                <h1 className="mt-[4px] text-[24px] sm:text-[28px] md:text-[29.5px] leading-[32px] sm:leading-[38px] md:leading-[40px] font-medium text-[#111514] font-sans">A mindful approach to brain care.</h1>
              </div>

              <div className="space-y-[20px] md:space-y-[28px]">
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#4C4D4D] font-sans">
                  I chose neurology for its link between brain and body. Early on, I met a patient who felt misunderstood, shaping how I approach every consultation.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#4C4D4D] font-sans">
                  I prioritize listening in my practice to understand how your symptoms affect your daily life. I provide clear explanations so you leave each visit knowing our findings, their significance, and the next steps.
                </p>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-[#4C4D4D] font-sans">
                  This practice stands out for its clear and steady approach to care. I take my time with decisions and eliminate unnecessary steps, aiming to provide structured, calm care rooted in genuine understanding.
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-auto w-full md:w-auto md:self-end flex flex-col items-end md:items-end">
              <img 
                src="/images/about/signature.webp" 
                alt="Signature" 
                className="w-[150px] h-[60px] object-contain"
              />
              <div className="w-full text-right text-[18px] leading-[28px] text-[#4C4D4D] font-sans mt-0 md:mt-0">
                Dr. Arden max
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-[60px] md:py-[100px]">
        <div className="max-w-[1520px] mx-auto px-3 md:px-4">
          <div className="bg-[#262626] rounded-[32px] p-5 md:p-[20px] lg:p-[40px] xl:p-[80px] flex flex-col items-center">
            <div className="text-center mb-[40px] md:mb-[80px]">
              <div className="text-[16.3px] leading-[28px] text-[#CDCDCD] font-normal font-sans">Education, Certifications & Awards</div>
              <h2 className="mt-[22px] text-[32px] md:text-[45.2px] leading-[40px] md:leading-[56px] font-medium text-white font-sans max-w-[600px] mx-auto">
                Credentials & Professional excellence
              </h2>
            </div>

            <div className="w-full bg-[#2E2D2D] rounded-[20px] p-1.5 md:p-[16px] grid xl:grid-cols-2 gap-4 md:gap-[16px]">
              {/* Education Section */}
              <div className="bg-[#1C1C1C] rounded-[20px] p-4 md:p-[32px]">
                <div className="mb-[32px]">
                  <h3 className="text-[22.3px] leading-[34px] font-medium text-white font-sans">Education</h3>
                  <p className="mt-[22.5px] text-[16.5px] leading-[28px] text-[#CDCDCD] font-sans">
                    A strong foundation of education, continuous training, and recognized contributions in neurology.
                  </p>
                </div>

                <div className="space-y-[40px] mt-[40px]">
                  {/* Doctor of Medicine */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[18.4px] leading-[28px] font-medium text-white font-sans">Doctor of Medicine (MD)</h4>
                      <div className="text-[16.3px] leading-[28px] text-[#CDCDCD] font-normal font-sans mt-[4px]">Specialization in Neurology</div>
                      <p className="text-[16.6px] leading-[28px] text-[#CDCDCD] font-sans mt-[15px]">
                        Completed advanced medical training with a focus on brain and nervous system disorders.
                      </p>
                    </div>
                  </div>

                  {/* Residency */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[18.4px] leading-[28px] font-medium text-white font-sans">Residency in Neurology</h4>
                      <p className="text-[16.6px] leading-[28px] text-[#CDCDCD] font-sans mt-[15px]">
                        Comprehensive clinical training in diagnosis and treatment of neurological conditions.
                      </p>
                    </div>
                  </div>

                  {/* Clinical Fellowship */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="shrink-0 mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[18.6px] leading-[28px] font-medium text-white font-sans">Clinical Fellowship</h4>
                      <p className="text-[16.6px] leading-[28px] text-[#CDCDCD] font-sans mt-[15px]">
                        Advanced training in movement disorders / stroke care / neurophysiology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className="p-3 md:p-[32px]">
                <div className="mb-[32px]">
                  <h3 className="text-[22.1px] leading-[34px] font-medium text-white font-sans">Awards & Certifications</h3>
                  <p className=" text-[16px] leading-[28px] text-[#CDCDCD] font-sans">
                    A strong foundation of education, continuous training, and recognized contributions in neurology.
                  </p>
                </div>

                <div className="space-y-[28px] mt-[40px]">
                  {[
                    "Research Contribution Award",
                    "Patient Choice Recognition",
                    "Board-Certified Neurologist",
                    "Advanced Neurodiagnostic Certification"
                  ].map((award, index) => (
                    <div key={award} className={`flex items-center gap-6 pb-[20px] md:pb-[28px] ${index !== 3 ? 'border-b border-[#424242]' : ''}`}>
                      <div className="shrink-0 w-[48px] h-[48px] bg-[#262626] border border-[#424242] rounded-sm flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h4 className="text-[18px] leading-[28px] font-medium text-white font-sans">{award}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px max-w-[1320px] mx-auto py-[100px]">
        <div className="mb-[40px] md:mb-[80px]">
          <div className="text-[17.4px] leading-[28px] text-[#4C4D4D] font-normal font-sans text-left">Training</div>
          <h2 className="mt-[21.5px] text-[32px] md:text-[44.1px] leading-[40px] md:leading-[56px] font-medium text-[#111514] font-sans max-w-[680px] text-left mx-0">
            Clinical training and institutional affiliations in neurology.
          </h2>
        </div>

        <div className="bg-[#EFF0EB] rounded-[20px] p-[16px]">
          {/* Card-based layout for Mobile, Tablet, and Laptop (< xl) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:hidden mb-[16px]">
            {affiliations.map((item, index) => (
              <div
                key={index}
                className="bg-[#FEFFFA] rounded-[16px] p-3 flex flex-col gap-4"
              >
                <div className="w-full h-[180px] sm:h-[240px] md:h-[280px] lg:h-[220px] rounded-[12px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[18px] md:text-[22.3px] font-medium text-[#111514] font-sans leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[16px] md:text-[22.1px] text-[#4C4D4D] font-sans mt-[4px]">
                    {item.period}
                  </div>
                  <div className="text-[16px] md:text-[22.3px] text-[#4C4D4D] font-sans mt-[2px]">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row-based table layout for Desktop (>= xl) */}
          <div className="hidden xl:block space-y-[16px] mb-[16px]">
            {affiliations.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center h-[82px] rounded-[16px] transition-all duration-500 overflow-hidden cursor-default
                  ${hoveredIndex === index ? "bg-[#1F9B6A]" : "bg-[#FEFFFA]"}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image that appears on hover */}
                <div 
                  className={`absolute left-[10px] top-[10px] bottom-[10px] transition-all duration-500 ease-in-out overflow-hidden rounded-[8px]
                    ${hoveredIndex === index ? "w-[120px] opacity-100" : "w-0 opacity-0"}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-[120px] object-cover"
                  />
                </div>

                <div className="cursor-pointer flex flex-row items-center w-full px-[24px] transition-all duration-500 ease-in-out">
                  <div className={`w-[40%] text-[22.3px] font-medium transition-all duration-500 ease-in-out
                    ${hoveredIndex === index ? "text-white pl-[128px]" : "text-[#111514] pl-0"}`}>
                    {item.title}
                  </div>
                  <div className={`w-[20%] text-center text-[22.1px] font-medium transition-colors duration-500
                    ${hoveredIndex === index ? "text-white" : "text-[#111514]"}`}>
                    {item.period}
                  </div>
                  <div className={`w-[40%] text-right text-[22.3px] font-medium transition-colors duration-500
                    ${hoveredIndex === index ? "text-white" : "text-[#111514]"}`}>
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#FEFFFA] rounded-[16px] p-6 md:p-[24px] flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-[14px] text-center lg:text-left w-full lg:w-auto">
              <div>
                <div className="text-[16.6px] leading-[28px] text-[#4C4D4D]">License number</div>
                <div className="text-[21.9px] leading-[34px] font-medium text-[#111514]">12345678901</div>
              </div>
              <div className="text-[16.3px] leading-[24px] italic text-[#4C4D4D]">
                Registered with Dutch healthcare authority (BIG register)
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6 md:gap-[27px] w-full lg:w-auto">
              <div className="text-[20px] md:text-[21.9px] leading-[34px] font-medium text-[#111514] text-center lg:text-right">
                12+ years in clinical practice
              </div>
              <Link 
                to="/contact"
                className="group flex items-center gap-[12px] bg-[#1F9B6A] hover:bg-black transition-all duration-300 rounded-[90px] pl-[8px] pr-[20px] py-[8px] w-fit"
              >
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden bg-white shrink-0">
                  <img 
                    src="/images/home/doctor_avatar.webp" 
                    alt="Dr. Arden" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white text-[14.8px] font-medium font-sans transition-colors duration-300">
                  Dr. Arden’s CV
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px max-w-[1320px] mx-auto py-[60px] md:py-[80px] xl:py-[100px]">
        <div className="text-center mb-[40px] md:mb-[60px] xl:mb-[80px]">
          <div className="text-[16.7px] leading-[28px] text-[#4C4D4D] font-normal font-sans">My Approach</div>
          <h2 className="mt-[21.5px] text-[28px] md:text-[36px] xl:text-[44.1px] leading-[36px] md:leading-[48px] xl:leading-[56px] font-medium text-[#111514] font-sans max-w-[400px] lg:max-w-[500px] mx-auto">
            Principles that shape every consultation I have
          </h2>
        </div>

        <div className="bg-[#EFF0EB] rounded-[20px] p-[16px]">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px]">
            {[
              {
                num: "01",
                title: "Clear explanations",
                desc: "I explain your diagnosis clearly, so you understand what’s happening next."
              },
              {
                num: "02",
                title: "Time to listen",
                desc: "Feel free to share all your symptoms, even minor ones or those difficult to explain."
              },
              {
                num: "03",
                title: "Structured care",
                desc: "I’ll let you know when things are unclear and explain what our next steps are."
              }
            ].map((principle, index) => (
              <div key={index} className="bg-[#FEFFFA] rounded-[16px] p-[24px] md:p-[32px] h-auto xl:h-[244px] flex flex-col">
                <div className="text-[21.4px] md:text-[22.9px] leading-[34px] font-medium text-[#B7B7B7] font-sans mb-[24px] xl:mb-[41px]">
                  {principle.num}
                </div>
                <div className="mt-auto">
                  <h3 className="text-[20px] md:text-[22.1px] leading-[30px] md:leading-[34px] font-medium text-[#111514] font-sans">
                    {principle.title}
                  </h3>
                  <p className="mt-[11px] text-[15px] md:text-[16.3px] leading-[24px] md:leading-[28px] text-[#4C4D4D] font-sans">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[60px] xl:mt-[100px] relative max-w-[1200px] mx-auto px-4 lg:px-0">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-6 xl:gap-0">
            {/* Arrow - Centered on mobile/tablet/laptop, Left on desktop */}
            <div className="relative shrink-0 mb-4 xl:mb-0 xl:mt-12 xl:mr-4 transform -rotate-12 xl:rotate-0">
              <img 
                src="/images/about/arrow-icon.png" 
                alt="Arrow" 
                className="w-[80px] md:w-[120px] xl:w-[180px] h-auto object-contain"
              />
            </div>

            {/* Quote Content - Centered on mobile/tablet/laptop, Left on desktop */}
            <div className="flex flex-col items-center xl:items-start space-y-4 max-w-[500px] text-center xl:text-left">
              <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] border-2 border-[#111514] rounded-full flex items-center justify-center p-1 md:p-2">
                <img 
                  src="/images/about/quote.png" 
                  alt="Quote Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h4 className="text-[20px] md:text-[24px] xl:text-[29.3px] leading-[28px] md:leading-[36px] xl:leading-[40px] font-medium text-[#111514] font-sans">
                Three things I believe every patient deserves at every visit
              </h4>

              <div className="flex items-center gap-[12px] pt-2 xl:pt-4">
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden shrink-0 border border-black/10">
                  <img 
                    src="/images/home/doctor_avatar.webp" 
                    alt="Dr. Arden" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[16px] md:text-[18.4px] leading-[28px] font-medium text-[#111514] font-sans">
                  Dr. Arden
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
