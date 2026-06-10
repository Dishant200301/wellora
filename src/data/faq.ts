export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      { q: "What does a neurologist treat?", a: "Neurologists treat conditions of the brain, spinal cord, and nerves, including headaches, epilepsy, stroke, memory changes, movement disorders, and nerve pain." },
      { q: "When should I see a neurologist?", a: "Consider a visit for persistent headaches, unexplained weakness or numbness, memory or speech changes, seizures, or sudden neurological symptoms." },
      { q: "Do I need a referral?", a: "Referral requirements depend on your insurance and country. We can guide you on the most efficient route in the Netherlands." },
      { q: "What are the early signs of stroke?", a: "Use the FAST check: facial droop, arm weakness, slurred speech, and time — call emergency services immediately." },
      { q: "Can migraines be cured?", a: "While many migraines cannot be 'cured,' modern preventive and acute treatments can dramatically reduce frequency and intensity." },
    ],
  },
  {
    id: "conditions",
    label: "Conditions",
    items: [
      { q: "How is epilepsy diagnosed?", a: "Diagnosis combines history, EEG, and imaging such as MRI when indicated." },
      { q: "Is memory loss always serious?", a: "Some forgetfulness is normal. Persistent or progressive changes deserve a structured evaluation." },
      { q: "What causes nerve pain?", a: "Common causes include diabetes, vitamin deficiencies, autoimmune disease, and nerve compression." },
    ],
  },
  {
    id: "appointments",
    label: "Appointments",
    items: [
      { q: "How do I book an appointment?", a: "Use the Book Appointment page or send a message via the contact form and we will reply within one working day." },
      { q: "What should I bring to my first visit?", a: "Bring prior medical records, a list of medications, and a written summary of your symptoms and questions." },
      { q: "Are virtual visits available?", a: "Selected follow-up consultations can be done virtually after an initial in-person visit." },
    ],
  },
  {
    id: "treatment",
    label: "Treatment",
    items: [
      { q: "How long until I see results?", a: "Many patients see meaningful change within several weeks of starting a structured plan." },
      { q: "Will I need medication?", a: "Treatment is individualized. Some plans rely on medication, others on lifestyle and rehabilitation, often both." },
      { q: "Do you coordinate with other clinicians?", a: "Yes — we routinely coordinate with primary care, rehabilitation, and surgical specialists." },
    ],
  },
];
