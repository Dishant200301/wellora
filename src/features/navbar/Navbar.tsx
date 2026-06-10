import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { HamburgerButton } from "@/components/ui/hamburger-button";

const links = [
  { to: "/about", label: "About me" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
];

function Avatar() {
  return (
    <div className="size-8 xl:size-12 rounded-full overflow-hidden bg-[#1c8e6a] flex items-center justify-center shrink-0">
      <img src="/images/home/doctor_avatar.webp" alt="Dr. Arden" className="w-full h-full object-cover object-top" />
    </div>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useMotionValueEvent(scrollY, "change", (v) => {
    // On the home page we wait until hero scrolls past; elsewhere expand immediately.
    const threshold = pathname === "/" ? window.innerHeight * 1.0 : 40;
    setExpanded(v > threshold);
  });

  const navTransition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  return (
    <header className="fixed top-8 md:top-8 xl:top-10 inset-x-0 z-50 pointer-events-none">
      <div className="px-[24px] md:px-[30px] xl:container-px flex justify-center">
        {/* Desktop Navbar */}
        <div
          className="hidden xl:flex pointer-events-auto relative items-center gap-3 md:gap-4 rounded-full bg-[#eff0eb] backdrop-blur-xl border border-black/5 pl-2 pr-2 md:pl-3 md:pr-3 py-3 transition-all duration-500 ease-in-out"
        >
          <div className="flex items-center gap-4 pl-1">
            <Link to="/" className="flex items-center gap-4">
              <Avatar />
              <span
                className={cn(
                  "overflow-hidden whitespace-nowrap font-medium text-xl text-[#1c8e6a] transition-all duration-500 ease-in-out",
                  expanded || pathname !== "/" ? "max-w-[150px] opacity-100 mr-2" : "max-w-0 opacity-0 mr-0"
                )}
              >
                Dr. Arden
              </span>
            </Link>
          </div>
          <ul className="flex items-center gap-1 text-sm text-ink/80">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2.5 rounded-full transition-colors font-sans text-base font-normal leading-6 text-[#111514] hover:bg-[#e5e5e5]",
                      isActive && "bg-[#e5e5e5]"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              expanded || pathname !== "/" ? "max-w-[250px] opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"
            )}
          >
            <Link
              to="/book-appointment"
              className="group inline-flex items-center gap-3 rounded-full bg-[#1f9b6a] text-white text-lg font-medium leading-6 pl-2 pr-6 py-2 border border-transparent hover:bg-white hover:text-[#111514] hover:border-black/5 transition-all duration-300 whitespace-nowrap overflow-hidden"
            >
              <span className="size-8 grid place-items-center rounded-full bg-white text-[#1f9b6a] group-hover:bg-[#1f9b6a] group-hover:text-white transition-colors duration-300 shrink-0">
                <Calendar className="size-4" />
              </span>
              <span className="relative block overflow-hidden h-6">
                <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                  <span className="h-6 flex items-center justify-center">Book Appointment</span>
                  <span className="h-6 flex items-center justify-center">Book Appointment</span>
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Navbar */}
        <div
          className="xl:hidden pointer-events-auto relative flex flex-col w-full bg-[#eff0eb] backdrop-blur-xl border border-black/5 rounded-[24px] overflow-hidden"
        >
          <div className="flex items-center justify-between pl-2 pr-4 py-1 xl:py-3">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <Avatar />
              <span className="font-medium text-lg text-[#1c8e6a]">Dr. Arden</span>
            </Link>
            <HamburgerButton
              isOpen={open}
              onClick={() => setOpen((v) => !v)}
              variant="elastic"
              color="#111514"
              className="size-10"
            />
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col px-6 pb-8 pt-4">
                  <ul className="flex flex-col gap-2 mb-4">
                    {links.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "block px-2 py-1 rounded-xl transition-colors font-sans text-lg font-normal leading-6 text-[#111514] hover:bg-[#e5e5e5]",
                              isActive && "bg-[#e5e5e5]"
                            )
                          }
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/book-appointment"
                    onClick={() => setOpen(false)}
                    className="group inline-flex w-max items-center gap-3 rounded-full bg-[#1f9b6a] text-white text-lg font-medium leading-6 pl-2 pr-6 py-2 border border-transparent hover:bg-white hover:text-[#111514] hover:border-black/5 transition-all duration-300 whitespace-nowrap overflow-hidden"
                  >
                    <span className="size-8 grid place-items-center rounded-full bg-white text-[#1f9b6a] group-hover:bg-[#1f9b6a] group-hover:text-white transition-colors duration-300 shrink-0">
                      <Calendar className="size-4" />
                    </span>
                    <span className="relative block overflow-hidden h-6">
                      <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                        <span className="h-6 flex items-center justify-center">Book Appointment</span>
                        <span className="h-6 flex items-center justify-center">Book Appointment</span>
                      </span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
