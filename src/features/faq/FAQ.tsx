import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { faqCategories } from "@/data/faq";

export default function FAQ() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const openParam = searchParams.get("open");
  
  const [tab, setTab] = useState(tabParam || faqCategories[0].id);
  const [open, setOpen] = useState<number | null>(openParam ? parseInt(openParam, 10) : null);

  useEffect(() => {
    setOpen(null);
  }, [tab]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (tab !== faqCategories[0].id) {
      params.set("tab", tab);
    } else {
      params.delete("tab");
    }
    if (open !== null) {
      params.set("open", open.toString());
    } else {
      params.delete("open");
    }
    setSearchParams(params, { replace: true });
  }, [tab, open, searchParams, setSearchParams]);

  const category = faqCategories.find((c) => c.id === tab)!;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-[750px] mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm text-[#4C4D4D] leading-[28px]">FAQ’s</span>
          <h2 className="mt-2 text-[30px] md:text-[32px] lg:text-[44.8px] leading-[36px] md:leading-[40px] lg:leading-[56px] font-medium text-[#111514] max-w-[520px] mx-auto">Common Questions, Clear Answers</h2>
        </div>

        <div className="bg-[#EFF0EB] rounded-[20px] p-4">
          {/* Tab Buttons */}
          <div className="overflow-x-auto pb-2 mb-6">
            <div className="flex gap-2 w-fit mx-auto md:mx-auto">
              {faqCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setTab(c.id)}
                  className={`relative cursor-pointer px-6 py-3 lg:py-3.5 text-sm rounded-[90px] transition-colors whitespace-nowrap ${
                    tab === c.id 
                      ? "bg-[#1F9B6A] text-white" 
                      : "text-[#111514] hover:bg-[#1F9B6A] hover:text-white"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <AnimatePresence mode="wait">
            <motion.ul
              key={category.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {category.items.map((it, i) => {
                const isOpen = i === open;
                return (
                  <li key={it.q} className="bg-[#FEFFFA] rounded-[16px]">
                    <motion.div
                      layout
                      className="overflow-hidden"
                    >
                      <button onClick={() => setOpen(isOpen ? null : i)} className="cursor-pointer w-full text-left flex items-center justify-between gap-4 px-4 py-4 md:px-6 md:py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#F1F3E8] flex items-center justify-center">
                            <div className={`relative w-3 h-3 transition-transform duration-300 ${isOpen ? "-rotate-[45deg]" : ""}`}>
                              <span className="absolute w-[1.5px] h-3 bg-[#111514] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                              <span className="absolute w-3 h-[1.5px] bg-[#111514] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                            </div>
                          </div>
                          <span className="text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] font-medium text-[#111514]">{it.q}</span>
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-sm text-[#4C4D4D]">{it.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
