import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/modules/home/data/testimonials";
import { Img } from "@/modules/core/components/Img";

export default function Testimonials() {
  /* ── Desktop carousel (unchanged) ── */
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [embla, selected]);

  const scrollTo = (i: number) => embla?.scrollTo(i);

  /* ── Mobile / Tablet / Laptop carousel ── */
  const [mobileRef, mobileEmbla] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [mobileSelected, setMobileSelected] = useState(0);

  const onMobileSelect = useCallback(() => {
    if (!mobileEmbla) return;
    setMobileSelected(mobileEmbla.selectedScrollSnap());
  }, [mobileEmbla]);

  useEffect(() => {
    if (!mobileEmbla) return;
    mobileEmbla.on("select", onMobileSelect);
    onMobileSelect();
  }, [mobileEmbla, onMobileSelect]);

  useEffect(() => {
    if (!mobileEmbla) return;
    const id = setInterval(() => mobileEmbla.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [mobileEmbla, mobileSelected]);

  const mobileScrollTo = (i: number) => mobileEmbla?.scrollTo(i);
  const mobileScrollPrev = () => mobileEmbla?.scrollPrev();
  const mobileScrollNext = () => mobileEmbla?.scrollNext();

  return (
    <section className=" mt-24 md:mt-32 overflow-hidden">
      {/* ===== Header Block ===== */}
      {/* Mobile / Tablet / Laptop header — left aligned, stacked */}
      <div className="container-px xl:hidden mb-8 md:mb-10 text-center px-1 flex flex-col items-center lg:items-start">
        <div className="text-[14px] md:text-[16.2px] leading-[24px] md:leading-[28px] text-[#4C4D4D] font-normal font-sans mb-2">
          Patient stories
        </div>
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[50px] font-medium text-[#111514] font-sans text-center lg:text-left">
          Stories of trust, care, and life-changing neurological outcomes.
        </h2>
      </div>

      {/* Desktop header — grid layout (unchanged) */}
      <div className="hidden xl:grid max-w-[1250px] mx-auto grid-cols-12 gap-6 mb-12 items-start text-left">
        <div className="col-span-4 text-[16.2px] leading-[28px] text-[#4C4D4D] font-normal font-sans">
          Patient stories
        </div>
        <h2 className="col-span-8 text-[44.4px] leading-[56px] font-medium text-[#111514] font-sans">
          Stories of trust, care, and life-changing neurological outcomes.
        </h2>
      </div>

      {/* ===== Mobile / Tablet / Laptop Carousel ===== */}
      <div className="xl:hidden">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={mobileRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_48%] lg:flex-[0_0_40%] min-w-0 px-2"
              >
                {/* Vertical Card: Quote on top, Image on bottom */}
                <div className="bg-[#EFF0EB] rounded-[20px] overflow-hidden border border-black/[0.06] flex flex-col">
                  {/* Quote Section */}
                  <div className="bg-[#FEFFFA] rounded-[16px] m-3 p-5 sm:p-6 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="size-4 sm:size-5 fill-[#111514] text-[#111514]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-[15px] sm:text-[16px] md:text-[17px] leading-[24px] sm:leading-[26px] font-medium text-[#111514] font-sans">
                        "{t.text}"
                      </blockquote>
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-3 mt-5">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="size-[42px] sm:size-[48px] rounded-[10px] border border-[#EAE9E9] object-cover shrink-0"
                      />
                      <div>
                        <div className="text-[14px] sm:text-[15px] leading-[22px] font-normal text-[#111514] font-sans">
                          {t.name}
                        </div>
                        <div className="text-[12px] sm:text-[13px] leading-[20px] font-normal text-[#4C4D4D] font-sans">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Patient Image */}
                  <div className="mx-3 mb-3 rounded-[16px] overflow-hidden h-[180px] sm:h-[200px] md:h-[220px]">
                    <Img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation with Arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={mobileScrollPrev}
            className="size-8 rounded-full flex items-center justify-center text-[#4C4D4D] hover:text-[#111514] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className="w-[10px] h-[10px] flex items-center justify-center shrink-0"
              >
                <button
                  onClick={() => mobileScrollTo(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === mobileSelected
                      ? "w-[10px] h-[10px] bg-[#1F9B6A]"
                      : "w-[8px] h-[8px] bg-[#C8C9C5]"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={mobileScrollNext}
            className="size-8 rounded-full flex items-center justify-center text-[#4C4D4D] hover:text-[#111514] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* ===== Desktop Carousel (unchanged) ===== */}
      <div className="hidden xl:block">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing py-4" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_auto] min-w-0 px-2">
                {/* Outer Patient Story Card */}
                <div className="relative bg-[#EFF0EB] rounded-[20px] p-4 flex flex-row gap-4 w-[1344px] h-[726px] border border-black/[0.06] overflow-hidden">
                  {/* Left Side: Quote Card & Patient Image */}
                  <div className="w-1/2 flex flex-col gap-4 justify-between h-full">
                    {/* Quote Card */}
                    <div className="bg-[#FEFFFA] rounded-[16px] p-10 flex flex-col justify-between flex-grow min-h-[220px]">
                      <div>
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: t.rating }).map((_, idx) => (
                            <Star key={idx} className="size-5 fill-[#111514] text-[#111514]" />
                          ))}
                        </div>

                        {/* Testimonial Quote */}
                        <blockquote className="text-[22.1px] leading-[34px] font-medium text-[#111514] font-sans">
                          "{t.text}"
                        </blockquote>
                      </div>

                      {/* Reviewer Details */}
                      <div className="flex items-center gap-3 mt-6">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="size-[52px] rounded-[12px] border border-[#EAE9E9] object-cover shrink-0"
                        />
                        <div>
                          <div className="text-[16.7px] leading-[28px] font-normal text-[#111514] font-sans">
                            {t.name}
                          </div>
                          <div className="text-[14.6px] leading-[24px] font-normal text-[#4C4D4D] font-sans">
                            {t.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Patient Image */}
                    <div className="w-full h-[394px] rounded-[16px] overflow-hidden shrink-0">
                      <Img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Right Side: Detailed Story Card */}
                  <div className="w-1/2 bg-[#FEFFFA] rounded-[16px] p-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Patient Info Header */}
                      <div className="flex items-center gap-3">
                        <span className="text-[18.1px] leading-[32px] font-normal text-[#111514] font-sans">
                          {t.patientName}
                        </span>
                        <div className="bg-[#EFF0EB] rounded-[12px] px-4 py-1.5 flex items-center justify-center">
                          <span className="text-[16.6px] leading-[28px] font-normal text-[#111514] font-sans">
                            {t.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Diagnosis & Treatments */}
                      <div className="mt-8">
                        <h3 className="text-[22.1px] leading-[34px] font-medium text-[#111514] font-sans">
                          {t.title}
                        </h3>

                        {/* Problem and Solution Cards */}
                        <div className="flex flex-col gap-4 mt-6">
                          {/* Problem Card */}
                          <div className="bg-[#FEFFFA] border border-[#EAE9E9] rounded-[16px] p-6 w-full">
                            <h4 className="text-[18.4px] leading-[28px] font-medium text-[#111514] font-sans mb-1">
                              Problem:
                            </h4>
                            <p className="text-[16.3px] leading-[28px] font-normal text-[#4C4D4D] font-sans">
                              {t.problem}
                            </p>
                          </div>

                          {/* Solution Card */}
                          <div className="bg-[#FEFFFA] border border-[#EAE9E9] rounded-[16px] p-6 w-full">
                            <h4 className="text-[18.4px] leading-[28px] font-medium text-[#111514] font-sans mb-1">
                              Solution:
                            </h4>
                            <p className="text-[16.5px] leading-[28px] font-normal text-[#4C4D4D] font-sans">
                              {t.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Book Appointment CTA Button */}
                    <Link
                      to="/book-appointment"
                      className="group w-full h-[48px] rounded-[90px] bg-[#1F9B6A] hover:bg-black hover:text-white transition-all duration-300 text-white flex items-center justify-center font-sans text-[14.9px] font-medium leading-[24px] mt-6 overflow-hidden"
                    >
                      <span className="relative block overflow-hidden h-[24px]">
                        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                          <span className="h-[24px] flex items-center justify-center">
                            Book Appointment
                          </span>
                          <span className="h-[24px] flex items-center justify-center">
                            Book Appointment
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar Group Pagination Controls (Desktop) */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {testimonials.map((t, idx) => {
            const isActive = idx === selected;
            return (
              <div
                key={idx}
                className="w-[72px] h-[72px] flex items-center justify-center shrink-0"
              >
                <button
                  onClick={() => scrollTo(idx)}
                  className={`relative rounded-full transition-all duration-300 overflow-hidden shrink-0 ${
                    isActive
                      ? "w-[72px] h-[72px] border-4 border-[#1F9B6A]"
                      : "w-[58px] h-[58px] border border-[#EAE9E9] opacity-80 hover:opacity-100"
                  }`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
