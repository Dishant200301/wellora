export type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  content: { heading: string; body?: string; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "what-causes-frequent-headaches-and-migraines",
    title: "What causes frequent headaches and migraines",
    date: "Apr 23, 2026",
    readTime: "8 min read",
    excerpt:
      "Explore common triggers and patterns behind recurring headaches and how they can be managed.",
    category: "Headaches",
    content: [
      {
        heading: "Understanding the pattern",
        body: "Frequent headaches often follow a pattern. Recognizing it is the first step toward fewer and less intense attacks.",
      },
      {
        heading: "Common triggers",
        bullets: [
          "Skipped meals or dehydration",
          "Disrupted sleep",
          "Hormonal shifts",
          "Bright light or screen strain",
          "Stress and tension",
        ],
      },
      {
        heading: "When to seek care",
        body: "If headaches change in pattern, become sudden and severe, or come with neurological symptoms, see a clinician promptly.",
      },
    ],
  },
  {
    slug: "understanding-the-early-signs-of-stroke",
    title: "Understanding the early signs of stroke",
    date: "Apr 21, 2026",
    readTime: "10 min read",
    excerpt:
      "A clear guide to understanding epilepsy, its causes, symptoms, and modern treatment options for better control.",
    category: "Stroke",
    content: [
      {
        heading: "What is a stroke?",
        body: "Understanding stroke concepts is crucial for recognizing symptoms. This awareness enables individuals to respond quickly and appropriately in potential stroke scenarios, ensuring timely intervention and better outcomes for those affected.",
      },
      {
        heading: "A simple explanation",
        bullets: [
          "A stroke happens when blood flow to part of the brain is interrupted",
          "This prevents oxygen from reaching brain cells",
          "Brain cells can begin to get damaged within minutes",
          "Early action can reduce long-term effects",
          "Clear explanation of findings and next steps throughout the process",
        ],
      },
      {
        heading: "Early warning signs",
        body: "These symptoms can arise suddenly and should not be ignored, even if they seem minor at first. It's important to keep a close watch on them and consult a doctor if they continue or get worse.",
      },
      {
        heading: "Symptoms that should not be ignored",
        bullets: [
          "Sudden weakness or numbness, often on one side of the body",
          "Difficulty speaking or understanding words clearly",
          "Sudden vision problems in one or both eyes",
          "Loss of balance or coordination",
          "Severe, unexplained headache",
        ],
      },
      {
        heading: "Use the FAST check",
        bullets: [
          "Face: One side of the face may droop",
          "Arms: One arm may feel weak or difficult to lift",
          "Speech: Words may be slurred or hard to understand",
          "Time: Seek help immediately if you notice these signs",
        ],
      },
      {
        heading: "Act without waiting",
        bullets: [
          "Seek emergency medical care immediately",
          "Some treatments only work within a limited time window",
          "Faster care improves recovery outcomes",
          "Delays can increase long-term complications",
        ],
      },
      {
        heading: "Closing note",
        body: "If you are unsure about what you're experiencing, it is always reasonable to seek guidance. Clear understanding helps you make informed decisions.",
      },
    ],
  },
  {
    slug: "seek-help-when-nerve-pain-persists",
    title: "Seek help when nerve pain persists",
    date: "Apr 22, 2026",
    readTime: "6 min read",
    excerpt:
      "Understand when nerve-related symptoms may need medical attention and what to expect.",
    category: "Nerve Pain",
    content: [
      {
        heading: "Recognizing the signs",
        body: "Nerve pain that persists for weeks or interferes with sleep, work, or daily activities deserves evaluation.",
      },
      {
        heading: "What to bring up",
        bullets: [
          "When the pain started",
          "What makes it better or worse",
          "Other symptoms like weakness or numbness",
          "Past medical conditions",
        ],
      },
    ],
  },
  {
    slug: "understanding-memory-changes-as-you-age",
    title: "Understanding memory changes as you age",
    date: "Apr 21, 2026",
    readTime: "7 min read",
    excerpt:
      "Learn which changes are normal and when it may be helpful to seek further evaluation.",
    category: "Memory",
    content: [
      {
        heading: "Normal vs concerning",
        body: "Some forgetfulness is part of healthy aging. Persistent changes that affect daily life are worth discussing with a clinician.",
      },
    ],
  },
  {
    slug: "signs-your-symptoms-may-need-evaluation",
    title: "Signs your symptoms may need evaluation",
    date: "Apr 23, 2026",
    readTime: "5 min read",
    excerpt: "A simple guide to recognising when symptoms should be assessed by a specialist.",
    category: "General",
    content: [
      {
        heading: "When to ask for help",
        body: "Symptoms that change suddenly, persist, or interfere with daily life are worth a professional opinion.",
      },
    ],
  },
  {
    slug: "what-to-expect-during-your-first-consultation",
    title: "What to expect during your first consultation",
    date: "Apr 17, 2026",
    readTime: "5 min read",
    excerpt:
      "A simple overview of your first visit, including how the consultation is structured and what to prepare.",
    category: "Visits",
    content: [
      {
        heading: "Before the visit",
        body: "Bring a list of medications, prior records, and a written summary of your symptoms and questions.",
      },
      {
        heading: "During the visit",
        body: "Expect a detailed conversation, a neurological exam, and a clear plan for next steps.",
      },
    ],
  },
];
