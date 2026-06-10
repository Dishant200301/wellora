import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About me" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/articles", label: "Articles" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full bg-[#FEFFFA] p-2 sm:p-3 lg:p-4 mt-12">
      <footer className="relative text-white overflow-hidden rounded-[24px] lg:rounded-[30px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/shared/footer_baground.webp')" }}
        />

        <div className="relative container mx-auto px-6 xl:px-12 pt-16 pb-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="text-[18px] leading-[28px] font-normal font-sans text-white max-w-md">
                Dr. Wellora provides expert neurological care with a focus on precision, compassion,
                and long-term health outcomes.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) {
                    toast.success("Subscribed — thank you.");
                    setEmail("");
                  }
                }}
                className="mt-6"
              >
                <label className="block text-[24px] leading-[34px] font-medium font-sans text-white mb-3">
                  Subscribe to my newsletter
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full sm:flex-1 rounded-full bg-white px-4 py-3 text-sm placeholder:text-[#B7B7B7] text-[#111514] focus:outline-none focus:ring-2 focus:ring-[#1F9B6A]"
                  />
                  <button className="cursor-pointer w-full sm:w-auto group relative rounded-full bg-[#1F9B6A] hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 text-sm font-medium text-white overflow-hidden shrink-0 text-center flex items-center justify-center">
                    <span className="relative block overflow-hidden h-5 w-full">
                      <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2 w-full">
                        <span className="h-5 flex items-center justify-center text-center">
                          Subscribe
                        </span>
                        <span className="h-5 flex items-center justify-center text-center">
                          Subscribe
                        </span>
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-[#868686] text-[20px] leading-[28px] font-medium font-sans mb-3">
                  Quick links
                </h4>
                <ul className="space-y-2 text-base">
                  {quickLinks.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="inline-block text-white hover:text-[#1F9B6A] transition-colors duration-300 text-[18px] leading-[28px] font-normal font-sans"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#868686] text-[20px] leading-[28px] font-medium font-sans mb-3">
                  Social Media
                </h4>
                <ul className="space-y-2 text-base">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-white hover:text-[#1F9B6A] transition-colors duration-300 text-[18px] leading-[28px] font-normal font-sans"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              {
                label: "Contact",
                icon: Mail,
                lines: [
                  { text: "info@welloraneuro.com", href: "mailto:info@welloraneuro.com" },
                  { text: "+31 10 123 4567", href: "tel:+31101234567", icon: Phone },
                ],
              },
              {
                label: "Working hours",
                lines: [{ text: "Monday – Friday" }, { text: "09:00 – 17:00" }],
              },
              {
                label: "Location",
                lines: [
                  {
                    text: "Hague, Netherlands",
                    href: "https://maps.google.com/?q=Hague, Netherlands",
                  },
                  {
                    text: "Tsukuba, Ninomiya",
                    href: "https://maps.google.com/?q=Tsukuba, Ninomiya",
                  },
                ],
              },
            ].map((card, index) => (
              <div
                key={card.label}
                className={`rounded-xl bg-white/10 border border-[#444447] p-4 md:p-6 backdrop-blur-sm ${index === 2 ? "lg:col-span-2 xl:col-span-1" : "lg:col-span-1 xl:col-span-1"}`}
              >
                <div className="text-[18px] leading-[28px] font-normal font-sans text-white/90 mb-4 md:mb-6">
                  {card.label}
                </div>
                <ul className="space-y-3">
                  {card.lines.map((ln, i) => {
                    const Icon =
                      (ln as { icon?: React.ComponentType<{ className?: string }> }).icon ??
                      (i === 0
                        ? (card as { icon?: React.ComponentType<{ className?: string }> }).icon
                        : undefined);
                    const hasHref = "href" in ln && !!ln.href;
                    const content = (
                      <span className="inline-flex items-center gap-3">
                        {Icon && (
                          <span className="w-7 h-7 rounded-full bg-white/[0.09] flex items-center justify-center">
                            <Icon className="size-3.5 text-white" />
                          </span>
                        )}
                        <span
                          className={`text-[18px] leading-[28px] font-normal font-sans break-all ${hasHref ? "hover:underline" : ""}`}
                        >
                          {ln.text}
                        </span>
                      </span>
                    );
                    return (
                      <li key={i}>
                        {hasHref ? (
                          <a
                            href={ln.href}
                            target={ln.href.startsWith("http") ? "_blank" : undefined}
                            rel={ln.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-block text-white hover:underline transition-colors duration-300"
                          >
                            {content}
                          </a>
                        ) : (
                          <span className="text-white">{content}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <h2 className="text-white font-sans font-medium text-center text-[50px] leading-[50px] md:text-[140px] md:leading-[140px] lg:text-[200px] xl:text-[250px] xl:leading-[250px] tracking-tight select-none">
              Dr. Wellora
            </h2>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-md text-white/80">
            <span>
              © {new Date().getFullYear()}{" "}
              <a
                href="https://tryzemiq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1F9B6A] transition-colors duration-300 font-medium"
              >
                TryzenIQ
              </a>{" "}
              all right reserve
            </span>
            <div className="flex items-center gap-5">
              <Link
                to="/privacy-policy"
                className="hover:text-[#1F9B6A] transition-colors duration-300 text-[16px] leading-[16px] md:text-[18px] md:leading-[28px] font-normal font-sans "
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-[#1F9B6A] transition-colors duration-300 text-[16px] leading-[16px] md:text-[18px] md:leading-[28px] font-normal font-sans "
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { ArrowRight };
