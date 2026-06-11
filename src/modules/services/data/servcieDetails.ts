export type ServiceDetail = {
  slug: string;
  number: string;
  title: string;
  short: string;
  offers: string[];
  testimonial: { name: string; role: string; text: string };
  overview: string;
  symptoms: { intro: string; items: string[] };
  causes: { intro: string; items: string[] };
  evaluation: { intro: string; items: string[] };
  treatment: { intro: string; items: string[] };
  expect: { intro: string; items: string[] };
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "migraine-headache-care",
    number: "01",
    title: "Migraine & Headache Care",
    short: "Advanced diagnosis and personalized migraine management plans.",
    offers: [
      "Personalized Treatment",
      "Special Care",
      "Diagnostic Support",
      "Trigger Management",
      "Follow-Up",
      "Neuro Assessment",
    ],
    testimonial: {
      name: "Michael Chen",
      role: "Business man",
      text: "I finally understood what was causing it and how to manage it.",
    },
    overview:
      "Comprehensive evaluation and treatment for chronic migraines and persistent headaches, focused on identifying triggers and creating a sustainable care plan.",
    symptoms: {
      intro:
        "You may experience one or more of the following symptoms. Proper evaluation helps define the type of headache:",
      items: [
        "Throbbing or pulsing pain, often on one side of the head",
        "Sensitivity to light, sound, or specific odors",
        "Nausea or vomiting during headache episodes",
        "Visual disturbances (aura), such as flashing lights or blind spots",
        "Neck stiffness and muscle tension in the shoulders",
      ],
    },
    causes: {
      intro:
        "Headaches and migraines are triggered by various genetic, environmental, and physiological factors:",
      items: [
        "Genetic predisposition and family history of migraines",
        "Hormonal fluctuations, particularly in women",
        "Dietary triggers, including caffeine, alcohol, and processed foods",
        "Sleep disruption, lack of sleep, or irregular sleep cycles",
        "Environmental stressors, bright lights, and intense weather changes",
      ],
    },
    evaluation: {
      intro:
        "Our diagnostic approach targets finding the root causes and establishing trigger patterns:",
      items: [
        "Detailed medical history and symptom diary evaluation",
        "Comprehensive neurological examination",
        "Brain imaging (MRI or CT scan) to rule out structural issues",
        "Targeted tracking to identify environmental and dietary triggers",
        "Screening for associated conditions like anxiety or sleep disorders",
      ],
    },
    treatment: {
      intro: "Treatment focuses on prevention, acute symptom relief, and lifestyle adjustments:",
      items: [
        "Acute medications to stop headaches when they start",
        "Daily preventive treatments to reduce frequency and severity",
        "Advanced CGRP-targeted therapies for difficult-to-treat migraines",
        "Botox therapy for qualified chronic migraine sufferers",
        "Ongoing lifestyle coaching and trigger mitigation strategies",
      ],
    },
    expect: {
      intro:
        "A collaborative care plan helps patients achieve long-term control over their symptoms:",
      items: [
        "Fewer and significantly less intense headache attacks",
        "Better sleep quality and increased daily energy levels",
        "Clear step-by-step plan for treating breakthrough pain",
        "Consistent tracking and adjustment of therapies",
        "Long-term symptom control and improved life quality",
      ],
    },
  },
  {
    slug: "nerve-pain-neuropathy",
    number: "02",
    title: "Nerve Pain & Neuropathy",
    short:
      "Clear diagnosis and structured care for persistent nerve-related pain and sensory changes.",
    offers: [
      "Pain Assessment",
      "Nerve Testing",
      "Medication Guidance",
      "Lifestyle Support",
      "Follow-Up Care",
      "Symptom Monitoring",
    ],
    testimonial: {
      name: "Mark Jensen",
      role: "Warehouse Supervisor",
      text: "My nerve pain was explained clearly, and I felt understood throughout.",
    },
    overview:
      "Targeted assessment of nerve dysfunction and structured treatment to reduce pain, restore function, and prevent progression.",
    symptoms: {
      intro:
        "Neuropathy symptoms often start gradually and may vary depending on the nerves affected:",
      items: [
        "Gradual onset of numbness, prickling, or tingling in feet or hands",
        "Sharp, jabbing, throbbing, or burning pain",
        "Extreme sensitivity to touch, even light touch",
        "Lack of coordination and falling due to balance issues",
        "Muscle weakness or feeling as if you are wearing gloves or socks when you are not",
      ],
    },
    causes: {
      intro:
        "Nerve damage can result from systemic conditions, trauma, toxins, or inherited factors:",
      items: [
        "Diabetes and poorly controlled blood sugar levels",
        "Vitamin deficiencies, especially B vitamins",
        "Autoimmune diseases affecting peripheral nerves",
        "Physical trauma, nerve compression, or repetitive stress",
        "Exposure to toxic substances or heavy metals",
      ],
    },
    evaluation: {
      intro:
        "Evaluating nerve damage involves specialized neurological tests to determine the extent of neuropathy:",
      items: [
        "Nerve conduction studies (NCS) to measure electrical activity in nerves",
        "Electromyography (EMG) to evaluate muscle response to nerve signals",
        "Comprehensive blood tests to screen for diabetes, vitamin levels, and inflammation",
        "Detailed physical and sensory examination of reflexes and vibration perception",
        "High-resolution imaging studies if structural nerve compression is suspected",
      ],
    },
    treatment: {
      intro: "Treatment strategies aim to address underlying causes and control pain symptoms:",
      items: [
        "Targeted nerve pain medications to soothe overactive nerve signals",
        "Physical therapy referrals to improve balance, strength, and mobility",
        "Treatment and optimization of primary causes, such as diabetes control",
        "Nutritional counseling and lifestyle adjustments to support nerve health",
        "Regular neurological checkups to monitor progress and adapt dosage",
      ],
    },
    expect: {
      intro:
        "With structured management, most patients can expect significant symptom control and recovery:",
      items: [
        "Reduced intensity of burning, tingling, and sharp pain",
        "Improved balance, coordination, and walking stability",
        "Stabilization of nerve function and slower disease progression",
        "Actionable, personalized plan for at-home nerve care",
        "Continuous support and symptom monitoring",
      ],
    },
  },
  {
    slug: "seizures-epilepsy-care",
    number: "03",
    title: "Seizures & Epilepsy Care",
    short:
      "Careful evaluation and long-term management to reduce seizure frequency and improve stability.",
    offers: [
      "Seizure Evaluation",
      "Diagnostic Review",
      "Treatment Planning",
      "Medication Adjustment",
      "Ongoing Monitoring",
      "Safety Guidance",
    ],
    testimonial: {
      name: "Ahmed Khan",
      role: "Taxi Driver",
      text: "I felt reassured knowing my condition was carefully assessed and explained.",
    },
    overview:
      "Seizures & Epilepsy Care focuses on diagnosing, managing, and reducing the impact of seizure-related conditions. This service provides a structured, personalized approach to help control seizures, identify triggers, and improve daily functioning. The goal is long-term stability, safety, and a better quality of life.",
    symptoms: {
      intro:
        "You may experience one or more of the following signs. Early recognition is important for proper care:",
      items: [
        "Sudden uncontrolled shaking movements",
        "Temporary confusion or loss of awareness",
        "Staring spells or periods of unresponsiveness",
        "Loss of consciousness",
        "Unusual sensations (tingling, dizziness, or visual changes)",
        "Memory lapses after episodes",
      ],
    },
    causes: {
      intro:
        "Seizures can occur due to different underlying factors. Identifying the cause helps guide treatment:",
      items: [
        "Abnormal electrical activity in the brain",
        "Head injury or brain trauma",
        "Genetic or inherited conditions",
        "Infections affecting the brain",
        "Stroke or neurological disorders",
        "Sleep deprivation or extreme stress",
      ],
    },
    evaluation: {
      intro:
        "Care starts with a detailed assessment to understand your condition and seizure patterns:",
      items: [
        "Full medical and family history review",
        "Neurological examination",
        "Brain activity testing (EEG)",
        "Imaging tests if needed (MRI or CT scan)",
        "Identification of triggers and seizure patterns",
        "Review of past treatments and responses",
      ],
    },
    treatment: {
      intro: "Treatment plans are customized based on your symptoms and medical history:",
      items: [
        "Anti-seizure medications",
        "Lifestyle and trigger management",
        "Dietary therapy (if recommended)",
        "Stress and sleep management strategies",
        "Regular monitoring and medication adjustments",
        "Specialist referral if advanced care is needed",
      ],
    },
    expect: {
      intro:
        "Management focuses on controlling seizures and improving daily life over time. With proper care, many patients experience:",
      items: [
        "Reduced seizure frequency",
        "Better control over triggers",
        "Improved safety and independence",
        "Enhanced cognitive and daily functioning",
        "Ongoing monitoring and care support",
      ],
    },
  },
  {
    slug: "movement-related-disorders",
    number: "04",
    title: "Movement Related Disorders",
    short:
      "Assessment and care for tremor, stiffness, and changes in movement affecting daily life.",
    offers: [
      "Movement Assessment",
      "Tremor Evaluation",
      "Treatment Planning",
      "Progress Monitoring",
      "Therapy Guidance",
      "Follow-Up Visits",
    ],
    testimonial: {
      name: "Peter de Vries",
      role: "Retired Teacher",
      text: "My symptoms were taken seriously, and I now understand what to expect.",
    },
    overview:
      "Movement Disorders Care focuses on diagnosing and managing conditions that affect body movement, coordination, and control. These disorders can impact daily activities, balance, and muscle function. This service aims to identify the cause, reduce symptoms, and improve mobility through a structured and personalized care approach.",
    symptoms: {
      intro: "Movement disorders can cause a range of physical challenges that evolve over time:",
      items: [
        "Tremors or shaking in the hands, arms, legs, or head",
        "Slowed movements (bradykinesia), making daily tasks harder",
        "Muscle stiffness, rigidity, or difficulty flexing limbs",
        "Involuntary movements, muscle spasms, or sustained contractions",
        "Impaired balance, posture problems, and frequent falls",
        "Changes in walking style, shuffling, or difficulty initiating steps",
      ],
    },
    causes: {
      intro:
        "Disruptions in brain circuitry or neurotransmitter levels are the primary causes of movement changes:",
      items: [
        "Nervous system degeneration (e.g., Parkinson's or Parkinsonian conditions)",
        "Genetic or inherited chromosomal factors",
        "Brain injury, structural stroke, or mechanical trauma",
        "Side effects from long-term use of specific psychiatric medications",
        "Infections, heavy metal toxicities, or systemic metabolic imbalances",
        "Degenerative cellular changes in the basal ganglia",
      ],
    },
    evaluation: {
      intro: "An accurate diagnosis requires specialized motor testing and detailed monitoring:",
      items: [
        "Comprehensive physical, motor, and neurological examination",
        "Detailed review of symptom onset and progression over time",
        "Functional motor testing, balance, gait, and reflex evaluation",
        "Brain imaging (high-resolution MRI or CT scans)",
        "Review of medications and response history to dopamine-active drugs",
        "Routine clinical monitoring of changes in gait and tremor severity",
      ],
    },
    treatment: {
      intro: "Multidisciplinary treatment plans focus on restoring mobility and managing symptoms:",
      items: [
        "Targeted medications to balance neurotransmitters and control tremors",
        "Physical therapy and gait retraining to improve balance and strength",
        "Occupational therapy to assist with daily living adjustments",
        "Speech and language therapy to address swallowing or vocal changes",
        "Lifestyle adaptations, safety planning, and exercise programs",
        "Consistent follow-up appointments to adjust treatment as symptoms shift",
      ],
    },
    expect: {
      intro:
        "Patients benefit from structural management targeted at sustaining functional independence:",
      items: [
        "Enhanced body control and movement coordination",
        "Noticeable reduction in tremors, rigidity, and muscle stiffness",
        "Increased balance, mobility, and confidence in walking",
        "Better independence in performing self-care and daily tasks",
        "Consistent monitoring and updates to the care plan",
      ],
    },
  },
  {
    slug: "memory-cognitive-changes",
    number: "05",
    title: "Memory & Cognitive Changes",
    short:
      "Evaluation of memory concerns and thinking changes, with clear guidance on next steps and ongoing care.",
    offers: [
      "Memory Assessment",
      "Cognitive Testing",
      "Diagnostic Clarification",
      "Care Planning",
      "Family Guidance",
      "Follow-Up Support",
    ],
    testimonial: {
      name: "Johan Bakker",
      role: "Accountant",
      text: "I finally got clear answers about my memory concerns and next steps.",
    },
    overview:
      "Structured evaluation of memory and thinking changes, including cognitive testing and a clear long-term plan.",
    symptoms: {
      intro:
        "Memory and cognitive changes can display in various ways, affecting daily routines and thinking:",
      items: [
        "Short-term memory lapses, like repeating questions or misplacing items",
        "Difficulty finding words, expressing thoughts, or following conversations",
        "Trouble with complex planning, organizing, or managing finances",
        "Disorientation in familiar places or confusion about time and dates",
        "Noticeable shifts in mood, social behavior, or personality traits",
      ],
    },
    causes: {
      intro:
        "Cognitive declines can be caused by reversible issues, age-related factors, or structural brain changes:",
      items: [
        "Age-associated memory changes or mild cognitive impairment",
        "Vascular changes and decreased blood flow to the brain",
        "Neurodegenerative conditions, such as Alzheimer's or related demetias",
        "Chronic sleep disorders, clinical depression, or severe anxiety",
        "Medication interactions, chemical imbalances, or systemic metabolic issues",
      ],
    },
    evaluation: {
      intro: "A detailed diagnosis involves cognitive metrics alongside medical checks:",
      items: [
        "Standardized paper or digital cognitive and memory testing",
        "Detailed medical history, including feedback from family members",
        "Comprehensive blood panels to rule out reversible metabolic causes",
        "Brain imaging (MRI or CT) to check for vascular changes or atrophy",
        "Functional assessment of independent living abilities",
      ],
    },
    treatment: {
      intro: "We coordinate customized strategies to manage symptoms and support memory:",
      items: [
        "Addressing and correcting reversible causes like vitamin deficiencies",
        "Prescribing cognitive medications to support memory and focus",
        "Implementing behavioral and cognitive adaptation strategies",
        "Providing guidance, education, and resources for family members",
        "Collaborating with social workers, occupational therapists, and counselors",
      ],
    },
    expect: {
      intro: "Structured cognitive care helps secure patient safety and gives clarity to families:",
      items: [
        "Clear diagnostic answers and a comprehensive monitoring schedule",
        "Practical strategies to handle daily memory challenges",
        "Ongoing support and education for family caretakers",
        "Routine re-evaluations to update cognitive baseline metrics",
        "Uninterrupted care and coordination for future needs",
      ],
    },
  },
];
