import { SEO } from "@/modules/core/components/SEO";
import BookingForm from "@/modules/core/components/BookingForm";
import FAQ from "@/modules/core/components/FAQ";

export default function BookAppointment() {
  return (
    <>
      <SEO
        title="Book Appointment"
        description="Request an appointment with Dr. Wellora for a clear, structured neurology consultation."
        path="/book-appointment"
      />
      <section className="container-px max-w-3xl mx-auto pt-28 md:pt-36 text-center">
        <span className="inline-block text-xs bg-secondary rounded-full px-3 py-1">
          Book appointment
        </span>
        <h1 className="mt-3 text-4xl md:text-6xl font-display text-ink leading-[1.05]">
          Request your Appointment Today
        </h1>
      </section>
      <BookingForm heading="" />
      <FAQ />
    </>
  );
}
