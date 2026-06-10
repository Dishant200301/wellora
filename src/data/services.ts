export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  offers: string[];
  testimonial: { name: string; role: string; text: string };
  overview: string;
  symptoms: string[];
  causes: string[];
  evaluation: string[];
  treatment: string[];
  expect: string[];
};

export const services: Service[] = [
  {
    slug: "migraine-headache-care",
    number: "01",
    title: "Migraine & Headache Care",
    short: "Advanced diagnosis and personalized migraine management plans.",
    offers: ["Personalized Treatment", "Specialist Care", "Therapeutic Support", "Trigger Management", "Follow-ups", "Neuro Assessment"],
    testimonial: { name: "Michael Chen", role: "Business man", text: "I finally understood what was causing it and how to manage it." },
    overview: "Comprehensive evaluation and treatment for chronic migraines and persistent headaches, focused on identifying triggers and creating a sustainable care plan.",
    symptoms: ["Throbbing or pulsing pain", "Sensitivity to light or sound", "Nausea or vomiting", "Visual disturbances (aura)", "Neck stiffness"],
    causes: ["Genetic predisposition", "Hormonal fluctuations", "Diet and dehydration", "Sleep disruption", "Stress and tension"],
    evaluation: ["Detailed history and symptom diary", "Neurological exam", "Imaging when indicated", "Trigger identification", "Comorbidity screening"],
    treatment: ["Acute and preventive medication", "Lifestyle and trigger coaching", "CGRP-targeted therapies when appropriate", "Botox for chronic migraine", "Regular follow-up"],
    expect: ["Fewer and less intense attacks", "Better sleep and energy", "Clear plan for breakthrough pain", "Ongoing monitoring", "Long-term symptom control"],
  },
  {
    slug: "nerve-pain-neuropathy",
    number: "02",
    title: "Nerve Pain & Neuropathy",
    short: "Clear diagnosis and structured care for persistent nerve-related pain and sensory changes.",
    offers: ["Pain Assessment", "Nerve Testing", "Medication Guidance", "Lifestyle Support", "Follow-Up Care", "Symptom Monitoring"],
    testimonial: { name: "Mark Jensen", role: "Warehouse Supervisor", text: "My nerve pain was explained clearly, and I felt understood throughout." },
    overview: "Targeted assessment of nerve dysfunction and structured treatment to reduce pain, restore function, and prevent progression.",
    symptoms: ["Burning or shooting pain", "Tingling or numbness", "Weakness in hands or feet", "Sensitivity to touch", "Loss of coordination"],
    causes: ["Diabetes and metabolic disease", "Vitamin deficiencies", "Autoimmune conditions", "Nerve compression or injury", "Toxin exposure"],
    evaluation: ["Nerve conduction studies", "EMG when indicated", "Blood and metabolic panels", "Detailed sensory exam", "Imaging if structural cause suspected"],
    treatment: ["Targeted nerve-pain medications", "Physical therapy referrals", "Treatment of underlying cause", "Lifestyle and nutrition guidance", "Ongoing symptom review"],
    expect: ["Reduced pain intensity", "Better daily function", "Slower progression", "Personalized care plan", "Long-term support"],
  },
  {
    slug: "seizures-epilepsy-care",
    number: "03",
    title: "Seizures & Epilepsy Care",
    short: "Careful evaluation and long-term management to reduce seizure frequency and improve stability.",
    offers: ["Seizure Evaluation", "Diagnostic Review", "Treatment Planning", "Medication Adjustment", "Ongoing Monitoring", "Safety Guidance"],
    testimonial: { name: "Ahmed Khan", role: "Taxi Driver", text: "I felt reassured knowing my condition was carefully assessed and explained." },
    overview: "Comprehensive epilepsy care from diagnosis through long-term medication management and lifestyle planning.",
    symptoms: ["Loss of awareness", "Convulsive movements", "Staring spells", "Sudden falls", "Unusual sensations or auras"],
    causes: ["Genetic factors", "Brain injury or stroke", "Infection history", "Structural brain changes", "Unknown (idiopathic)"],
    evaluation: ["EEG and video EEG when needed", "MRI imaging", "Detailed seizure history", "Medication review", "Lifestyle risk assessment"],
    treatment: ["Antiseizure medication", "Medication optimization", "Safety planning", "Lifestyle counseling", "Specialist referral when needed"],
    expect: ["Reduced seizure frequency", "Better understanding of triggers", "Improved daily safety", "Clear long-term plan", "Steady follow-up"],
  },
  {
    slug: "movement-related-disorders",
    number: "04",
    title: "Movement Related Disorders",
    short: "Assessment and care for tremor, stiffness, and changes in movement affecting daily life.",
    offers: ["Movement Assessment", "Tremor Evaluation", "Treatment Planning", "Progress Monitoring", "Therapy Guidance", "Follow-Up Visits"],
    testimonial: { name: "Peter de Vries", role: "Retired Teacher", text: "My symptoms were taken seriously, and I now understand what to expect." },
    overview: "Movement Disorders Care focuses on diagnosing and managing conditions that affect body movement, coordination, and control. These disorders can impact daily activities, balance, and muscle function. This service aims to identify the cause, reduce symptoms, and improve mobility through a structured and personalized care approach.",
    symptoms: ["Tremors or shaking (hands, arms, or head)", "Slowed movements (bradykinesia)", "Muscle stiffness or rigidity", "Involuntary movements or spasms", "Poor balance or coordination", "Difficulty walking or maintaining posture"],
    causes: ["Nervous system disorders (e.g., Parkinsonian conditions)", "Genetic or hereditary factors", "Brain injury or trauma", "Side effects of certain medications", "Infections or metabolic imbalances", "Degenerative neurological conditions"],
    evaluation: ["Detailed medical and symptom history", "Physical and neurological examination", "Movement and coordination testing", "Imaging tests if required (MRI or CT scan)", "Medication and treatment history review", "Ongoing monitoring of symptom progression"],
    treatment: ["Medication to control movement symptoms", "Physical therapy and rehabilitation", "Lifestyle and activity modifications", "Speech or occupational therapy if needed", "Supportive care and symptom management", "Regular follow-up and treatment adjustments"],
    expect: ["Improved movement control", "Reduced tremors and stiffness", "Better balance and coordination", "Enhanced ability to perform daily tasks", "Continuous care and monitoring"],
  },
  {
    slug: "memory-cognitive-changes",
    number: "05",
    title: "Memory & Cognitive Changes",
    short: "Evaluation of memory concerns and thinking changes, with clear guidance on next steps and ongoing care.",
    offers: ["Memory Assessment", "Cognitive Testing", "Diagnostic Clarification", "Care Planning", "Family Guidance", "Follow-Up Support"],
    testimonial: { name: "Johan Bakker", role: "Accountant", text: "I finally got clear answers about my memory concerns and next steps." },
    overview: "Structured evaluation of memory and thinking changes, including cognitive testing and a clear long-term plan.",
    symptoms: ["Short-term memory lapses", "Word-finding difficulty", "Trouble with planning", "Disorientation in familiar places", "Mood or personality changes"],
    causes: ["Age-related changes", "Vascular changes", "Neurodegenerative conditions", "Sleep and mood disorders", "Medication side effects"],
    evaluation: ["Standardized cognitive testing", "Detailed history including family", "Bloodwork to rule out reversible causes", "Imaging when indicated", "Functional assessment"],
    treatment: ["Treating reversible factors", "Targeted medications", "Cognitive strategies", "Family education and planning", "Coordination with allied care"],
    expect: ["Clear diagnosis or monitoring plan", "Better day-to-day strategies", "Family support and guidance", "Regular re-evaluation", "Long-term care continuity"],
  },
];
