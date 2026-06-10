export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
  image: string;
  patientName: string;
  subtitle: string;
  title: string;
  problem: string;
  solution: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hasan",
    role: "Architect",
    rating: 5,
    text: "I finally understood exactly what was causing it and how to properly manage it.",
    avatar: "/images/services/review-1.webp",
    image: "/images/home/CaseStudies.webp",
    patientName: "Patient, 42",
    subtitle: "Chronic Migraines",
    title: "Migraine Relief",
    problem: "Struggled with severe migraines multiple times a week.",
    solution:
      "Dr. Wellora created a personalized treatment plan with medication and lifestyle adjustments.",
  },
  {
    name: "Sarah Ahmed",
    role: "Marketing Executive",
    rating: 5,
    text: "I can now work peacefully without constant head pressure throughout my day.",
    avatar: "/images/services/review-2.webp",
    image: "/images/services/services-1.webp",
    patientName: "Patient, 35",
    subtitle: "Tension Headaches",
    title: "Headache Relief",
    problem: "Daily tension headaches disrupted focus and reduced productivity.",
    solution:
      "Doctor introduced stress management techniques and prescribed effective mild medications for relief.",
  },
  {
    name: "David Miller",
    role: "Business Owner",
    rating: 5,
    text: "My pain is controlled now and I finally sleep better every single night.",
    avatar: "/images/services/review-3.webp",
    image: "/images/services/services-2.webp",
    patientName: "Patient, 50",
    subtitle: "Nerve Pain",
    title: "Nerve Pain Management",
    problem: "Persistent nerve pain in legs caused discomfort and poor sleep quality.",
    solution:
      "Personalized treatment plan with medications and physiotherapy improved comfort and sleep quality.",
  },
  {
    name: "Ayesha Rahman",
    role: "University Student",
    rating: 5,
    text: "I understand triggers better now and can prevent migraines before they even start.",
    avatar: "/images/services/review-4.webp",
    image: "/images/services/services-4.webp",
    patientName: "Patient, 28",
    subtitle: "Migraine",
    title: "Chronic Migraine Care",
    problem: "Frequent migraines triggered by stress and light affected routine.",
    solution:
      "Lifestyle changes and preventive therapy significantly reduced migraine frequency and severity overall.",
  },
  {
    name: "Rashid Khan",
    role: "Sales Manager",
    rating: 5,
    text: "My migraines reduced significantly and I can manage them much better now.",
    avatar: "/images/services/review-5.webp",
    image: "/images/services/services-5.webp",
    patientName: "Patient, 43",
    subtitle: "Chronic Migraines",
    title: "Migraine Relief",
    problem: "Severe migraines occurred weekly affecting productivity and daily life.",
    solution:
      "Personalized treatment plan with medications and lifestyle adjustments reduced migraine attacks significantly.",
  },
];
