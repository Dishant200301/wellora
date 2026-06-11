import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Img } from "@/modules/core/components/Img";
import { ChevronDown } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(30),
  time: z.string().min(1, "Choose a preferred time"),
  message: z.string().max(500).min(1, "Please enter a message"),
});
type FormValues = z.infer<typeof schema>;

const times = ["09:00 – 11:00", "11:00 – 13:00", "13:00 – 15:00", "15:00 – 17:00"];

export default function BookingForm({
  heading = "Schedule a consultation with Dr. Wellora for expert diagnosis.",
  className = "mt-16 lg:mt-20",
}: {
  heading?: string;
  className?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { time: "", message: "" },
  });
  const [openTime, setOpenTime] = useState(false);
  const time = watch("time");

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Booking", data);
    toast.success("Appointment requested — we'll be in touch.");
    reset();
  };

  return (
    <section className={className}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* ===== Header ===== */}
        {heading && (
          <>
            {/* Mobile / Tablet / Laptop header — stacked vertically */}
            <div className="lg:hidden mb-6 md:mb-8 text-center flex flex-col items-center">
              <span className="block text-[14px] md:text-[16.2px] leading-[24px] md:leading-[28px] text-[#4C4D4D] font-normal font-sans mb-2 text-center">
                Book appointment
              </span>
              <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[50px] font-medium text-[#111514] font-sans text-center">
                {heading}
              </h2>
            </div>

            {/* Desktop header — side by side */}
            <div className="hidden lg:flex items-start mb-8">
              <div className="w-[40%] shrink-0">
                <span className="text-[16.2px] leading-[28px] text-[#4C4D4D] font-normal font-sans">
                  Book appointment
                </span>
              </div>
              <h2 className="w-[60%] text-[43.9px] leading-[56px] font-medium text-[#111514] font-sans">
                {heading}
              </h2>
            </div>
          </>
        )}

        {/* ===== Mobile / Tablet  ===== */}
        <div className="lg:hidden">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full rounded-[20px] overflow-hidden h-[220px] mb-6 sm:h-[340px] md:h-[420px] lg:h-[480px]"
          >
            <Img
              src="/images/contact/contact.webp"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="bg-[#EFF0EB] rounded-[20px] p-5 sm:p-6 md:p-8 flex flex-col">
              {/* Doctor info */}
              <div className="mb-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Img
                      src="/images/home/doctor_avatar.webp"
                      alt="Dr. Wellora"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-[16px] md:text-[18px] font-medium text-[#111514] font-sans">
                    Dr. Wellora
                  </div>
                </div>
                <div className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-medium text-[#111514] font-sans text-center lg:text-left">
                  Schedule a consultation for expert diagnosis
                </div>
              </div>

              {/* Fields — single column on mobile/tablet */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-4">
                <Field label="Full name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Jane Smith"
                    className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                  />
                </Field>
                <Field label="Email address" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    placeholder="info@welloraneurology.com"
                    className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                  />
                </Field>
                <Field label="Phone number" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    placeholder="+21 3 42 34 56 76"
                    className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                  />
                </Field>
                <Field label="Preferred time" error={errors.time?.message}>
                  <TimeDropdown
                    time={time}
                    openTime={openTime}
                    setOpenTime={setOpenTime}
                    setValue={setValue}
                  />
                </Field>
              </div>

              <div>
                <Field
                  label="Anything you'd like me to know beforehand?"
                  error={errors.message?.message}
                >
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Write Your Message"
                    className="w-full h-[120px] rounded-[12px] bg-[#FEFFFA] px-4 py-3 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40 resize-none"
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full h-[52px] mt-4 rounded-[90px] bg-[#1F9B6A] hover:bg-black text-white font-medium text-sm font-sans transition-colors disabled:opacity-60 overflow-hidden"
            >
              <span className="relative block overflow-hidden h-[20px]">
                <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center justify-center">
                    {isSubmitting ? "Sending..." : "Book Appointment"}
                  </span>
                  <span className="h-[20px] flex items-center justify-center">
                    {isSubmitting ? "Sending..." : "Book Appointment"}
                  </span>
                </span>
              </span>
            </button>
          </motion.form>
        </div>

        {/* ===== Desktop Layout — Side by Side (unchanged) ===== */}
        <div className="hidden lg:grid grid-cols-2 gap-6 rounded-[24px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-secondary rounded-[24px] overflow-hidden"
          >
            <Img
              src="/images/contact/contact.webp"
              alt="Consultation"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between rounded-[24px]"
          >
            <div className="bg-[#EFF0EB] p-8 flex flex-col justify-between rounded-[24px]">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <Img
                      src="/images/home/doctor_avatar.webp"
                      alt="Dr. Wellora"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-lg font-medium text-[#111514] font-sans">Dr. Wellora</div>
                </div>
                <div className="text-[22.1px] leading-[34px] font-medium text-[#111514] font-sans">
                  Schedule a consultation for expert diagnosis
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Field label="Full name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      placeholder="Jane Smith"
                      className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                    />
                  </Field>
                  <Field label="Email address" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      placeholder="info@welloraneurology.com"
                      className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      placeholder="+21 3 42 34 56 76"
                      className="w-full h-12 rounded-[12px] bg-[#FEFFFA] px-4 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40"
                    />
                  </Field>
                  <Field label="Preferred time" error={errors.time?.message}>
                    <TimeDropdown
                      time={time}
                      openTime={openTime}
                      setOpenTime={setOpenTime}
                      setValue={setValue}
                    />
                  </Field>
                </div>
                <div>
                  <Field
                    label="Anything you'd like me to know beforehand?"
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Write Your Message"
                      className="w-full h-[133px] rounded-[12px] bg-[#FEFFFA] px-4 py-3 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40 resize-none"
                    />
                  </Field>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full h-[52px] mt-4 rounded-[90px] bg-[#1F9B6A] hover:bg-black text-white font-medium text-sm font-sans transition-colors disabled:opacity-60 overflow-hidden"
            >
              <span className="relative block overflow-hidden h-[20px]">
                <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                  <span className="h-[20px] flex items-center justify-center">
                    {isSubmitting ? "Sending..." : "Book Appointment"}
                  </span>
                  <span className="h-[20px] flex items-center justify-center">
                    {isSubmitting ? "Sending..." : "Book Appointment"}
                  </span>
                </span>
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ── Time Dropdown ── */
function TimeDropdown({
  time,
  openTime,
  setOpenTime,
  setValue,
}: {
  time: string;
  openTime: boolean;
  setOpenTime: (v: boolean | ((prev: boolean) => boolean)) => void;
  setValue: (name: "time", value: string, options?: { shouldValidate?: boolean }) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenTime((v) => !v)}
        className="w-full h-12 text-left rounded-[12px] bg-[#FEFFFA] px-4 pr-12 text-sm text-[#4C4D4D] font-sans focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]/40 flex items-center justify-between"
      >
        {time || <span className="text-[#4C4D4D]">Choose a time</span>}
        <span className="w-10 h-full bg-white absolute right-0 top-0 flex items-center justify-center rounded-r-[12px]">
          <ChevronDown className="w-4 h-4 text-[#999999]" />
        </span>
      </button>
      {openTime && (
        <motion.ul
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 mt-1 w-full bg-white border border-black/10 rounded-[12px] shadow-lg overflow-hidden"
        >
          {times.map((t) => (
            <li key={t}>
              <button
                type="button"
                onClick={() => {
                  setValue("time", t, { shouldValidate: true });
                  setOpenTime(false);
                }}
                className="block w-full text-left px-4 py-2.5 text-sm font-sans hover:bg-[#EFF0EB]"
              >
                {t}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

/* ── Field Wrapper ── */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-[#111514] font-sans mb-2">{label}</span>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          className="block mt-1 text-xs text-red-600"
        >
          {error}
        </motion.span>
      )}
    </label>
  );
}
