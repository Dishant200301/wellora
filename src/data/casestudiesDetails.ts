export type CaseStudy = {
  slug: string;
  number: string;
  date: string;
  title: string;
  summary: string;
  patient: { age: string; gender: string; symptoms: string; history: string };
  testimonial: { name: string; role: string; text: string };
  overview: string;
  situation: { intro: string; challenges: string[] };
  approach: { intro: string; steps: string[]; goal: string };
  outcome: { intro: string; results: string[] };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "early-diagnosis-long-term-management",
    number: "01",
    date: "Apr 20, 2026",
    title: "Early diagnosis to long-term management cases",
    summary:
      "How early diagnosis and consistent follow-up turned an uncertain neurological condition into a clear long-term plan.",
    patient: {
      age: "52",
      gender: "Male",
      symptoms: "Occasional dizziness, mild memory lapses",
      history: "No prior neurological diagnosis",
    },
    testimonial: {
      name: "Liam",
      role: "Patient",
      text: "I finally felt heard, and the plan made the next steps simple.",
    },
    overview:
      "Early evaluation and an honest conversation led to a clear management plan and steady improvement over months.",
    situation: {
      intro: "The patient noticed subtle changes that had been dismissed as stress.",
      challenges: [
        "Unclear pattern of symptoms",
        "Anxiety about what they might mean",
        "No previous baseline",
      ],
    },
    approach: {
      intro: "A structured evaluation focused on clarity.",
      steps: ["Detailed history and exam", "Targeted testing", "Regular reassessment"],
      goal: "Move from uncertainty to a clear, sustainable plan.",
    },
    outcome: {
      intro: "Within months, both the patient and family felt confident in the path forward.",
      results: ["Clear diagnosis and plan", "Reduced anxiety", "Steady follow-up cadence"],
    },
  },
  {
    slug: "personalized-neurological-care",
    number: "02",
    date: "Apr 20, 2026",
    title: "Personalized neurological care with ongoing follow-up",
    summary:
      "A tailored plan with regular check-ins kept symptoms manageable and quality of life high.",
    patient: {
      age: "67",
      gender: "Male",
      symptoms: "Back pain with nerve involvement",
      history: "Long-standing osteoarthritis",
    },
    testimonial: {
      name: "Henrik",
      role: "Patient",
      text: "The plan was tailored to me, not just a checklist.",
    },
    overview:
      "Care adapted as the patient's needs evolved, with regular follow-up keeping things on track.",
    situation: {
      intro: "The patient needed a plan that respected daily life.",
      challenges: ["Chronic pain", "Limited mobility", "Multiple existing conditions"],
    },
    approach: {
      intro: "Coordinated, conservative-first care.",
      steps: ["Medication review", "Physical therapy partnership", "Quarterly reassessment"],
      goal: "Comfortable function and confidence in the plan.",
    },
    outcome: {
      intro: "Daily function improved meaningfully.",
      results: ["Less pain", "Better sleep", "More activity"],
    },
  },
  {
    slug: "structured-care-reduced-symptoms",
    number: "03",
    date: "Apr 21, 2026",
    title: "Structured care reduced symptoms, improved function",
    summary:
      "Methodical assessment and a stepwise plan reduced symptom load and restored daily function.",
    patient: {
      age: "44",
      gender: "Male",
      symptoms: "Recurrent migraines with aura",
      history: "Family history of migraine",
    },
    testimonial: {
      name: "Daniel",
      role: "Patient",
      text: "The structure made a hard problem feel solvable.",
    },
    overview: "A clear treatment ladder turned scattered care into measurable progress.",
    situation: {
      intro: "Prior care had been fragmented.",
      challenges: [
        "No clear preventive plan",
        "Mixed medication history",
        "Inconsistent follow-up",
      ],
    },
    approach: {
      intro: "Reset and rebuild.",
      steps: ["Medication consolidation", "Preventive strategy", "Symptom diary review"],
      goal: "Fewer attacks and reliable rescue care.",
    },
    outcome: {
      intro: "Attacks became less frequent and shorter.",
      results: ["Reduced attack frequency", "Faster recovery", "Clear written plan"],
    },
  },
  {
    slug: "guided-neurological-care",
    number: "04",
    date: "Apr 17, 2026",
    title: "Guided neurological care improves stability outcomes",
    summary: "Step-by-step guidance restored stability and confidence for daily activity.",
    patient: {
      age: "71",
      gender: "Male",
      symptoms: "Balance issues, occasional falls",
      history: "Hypertension, prior minor stroke",
    },
    testimonial: {
      name: "Marten",
      role: "Patient",
      text: "Each visit made the next step obvious.",
    },
    overview: "Risk reduction and rehabilitation combined for measurable gains.",
    situation: {
      intro: "Falls were eroding confidence.",
      challenges: ["Imbalance", "Fear of activity", "Medication interactions"],
    },
    approach: {
      intro: "Whole-picture care.",
      steps: ["Medication audit", "Targeted PT referral", "Home safety review"],
      goal: "Restore confident, safe movement.",
    },
    outcome: {
      intro: "No further falls in six months.",
      results: ["Improved balance", "Resumed daily walks", "Better medication tolerance"],
    },
  },
  {
    slug: "neurological-treatment-outcomes-tracked-over-time",
    number: "05",
    date: "Apr 22, 2026",
    title: "Neurological treatment outcomes tracked over time",
    summary:
      "This case study highlights the importance of early diagnosis and personalized treatment in managing Parkinson's disease. Through careful evaluation and ongoing monitoring, the patient achieved improved symptom control and quality of life.",
    patient: {
      age: "60",
      gender: "Female",
      symptoms: "Balance issues, stiffness, slow movement progression",
      history: "Early-stage neurological condition diagnosed over time",
    },
    testimonial: {
      name: "Naira",
      role: "Brand Manager",
      text: "Over time, the treatment made a real difference. What once felt difficult became manageable, and I regained confidence in my daily movements with continuous support.",
    },
    overview:
      "Patients with common neurological conditions often experience gradual changes in movement, coordination, and stability. With a structured treatment approach and continuous care over time, symptoms can be effectively managed, improving both function and quality of life.",
    situation: {
      intro:
        "Patients initially presented with mild but progressive symptoms such as imbalance, stiffness, and slowed movements. Over time, these challenges began to interfere with daily routines and independence. Many patients lacked a clear understanding of their condition early on, leading to uncertainty and delayed action.",
      challenges: [
        "Gradual decline in balance and coordination",
        "Increased muscle stiffness and reduced flexibility",
        "Slower response and movement control",
        "Difficulty performing everyday tasks independently",
      ],
    },
    approach: {
      intro:
        "A long-term, patient-centered neurological care plan was implemented to address evolving symptoms and improve outcomes.",
      steps: [
        "Early diagnosis and continuous monitoring",
        "Personalized therapy plans based on condition progression",
        "Guided rehabilitation and movement support",
        "Regular evaluation and adjustment of care strategies",
      ],
      goal: "The goal was to ensure steady improvement while adapting to each patient's changing needs over time.",
    },
    outcome: {
      intro:
        "With consistent treatment and support, patients showed measurable improvement in stability, coordination, and overall mobility.",
      results: [
        "Improved balance and controlled movement",
        "Reduced stiffness and better physical flexibility",
        "Enhanced independence in daily activities",
        "Increased confidence and long-term condition management",
      ],
    },
  },
  {
    slug: "structured-care-improved-symptoms-and-routines",
    number: "06",
    date: "Apr 18, 2026",
    title: "Structured care improved symptoms and daily routines",
    summary:
      "Routine-aware care delivered consistent symptom reduction and better quality of life.",
    patient: {
      age: "58",
      gender: "Male",
      symptoms: "Persistent headaches with anxiety",
      history: "Prior generalized anxiety",
    },
    testimonial: {
      name: "Owen",
      role: "Patient",
      text: "Care that fit my life — not the other way around.",
    },
    overview: "Care designed around the patient's daily rhythm produced reliable improvement.",
    situation: {
      intro: "Symptoms had outsized impact on routines.",
      challenges: ["Headaches at peak work hours", "Sleep disruption", "Anxiety amplification"],
    },
    approach: {
      intro: "Routine-first planning.",
      steps: ["Sleep hygiene review", "Trigger mapping", "Preventive medication trial"],
      goal: "Predictable days and restful nights.",
    },
    outcome: {
      intro: "Routines stabilized.",
      results: ["Reduced headache days", "Better sleep", "Lower baseline anxiety"],
    },
  },
];
