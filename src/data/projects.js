import smartResumeImg from "../assets/smartresume.png";
export const projectsData = [
  {
    id: 1,
    title: "Smart Resume Analyzer & Builder",
    subtitle: "AI-Powered ATS Optimization",
    description: "Built an ATS Resume Analyzer that parses resumes, calculates ATS scores, and matches resumes with job descriptions. Developed features for resume building, skill analysis, role prediction, interview preparation, and PDF export.",
    bullets: [
      "Built an ATS Resume Analyzer that parses resumes, calculates ATS scores, and matches resumes with job descriptions.",
      "Developed features for resume building, skill analysis, role prediction, interview preparation, and PDF export."
    ],
    tech: ["FastAPI", "Python", "JavaScript", "NLP"],
    github: "https://github.com/prameela-66", // Placeholder or actual link
    live: "https://ats-resume-builder-sable.vercel.app/",
    image: smartResumeImg,
  },
  {
    id: 2,
    title: "Personal Developer Portfolio",
    subtitle: "Modern Responsive Portfolio with 60-30-10 Design",
    description: "Designed and engineered an accessible personal developer portfolio following the 60-30-10 color architecture and WCAG AA/AAA standards (≥ 4.5:1 contrast). Features dynamic dark/light theme switching, live code syntax highlighting (One Dark Pro & GitHub Light), and fluid Framer Motion orbital animations.",
    bullets: [
      "Engineered an accessible portfolio adhering to the 60-30-10 color rule and WCAG AA contrast standards.",
      "Implemented dynamic dark/light theme toggling, interactive code syntax themes (One Dark Pro & GitHub Light), and responsive Framer Motion animations."
    ],
    tech: ["React", "Vite", "Tailwind CSS v4", "Framer Motion", "Lucide React"],
    github: "https://github.com/prameela-66/portfolio",
    live: "#home",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    role: "Frontend & UI/UX Developer",
    category: "Web Development",
    problem: "Many developer portfolios suffer from inconsistent color schemes, low text contrast, and static designs that fail to demonstrate engineering craftsmanship.",
    solution: "Built a modern, accessible web portfolio implementing a disciplined 60-30-10 color hierarchy, WCAG AA contrast, fluid animations, and developer-familiar syntax highlighting.",
    features: [
      "60-30-10 color system across dark and light modes",
      "Guaranteed WCAG AA/AAA text contrast (≥ 4.5:1)",
      "Interactive code syntax highlighting block with One Dark Pro & Dracula options",
      "Interactive internship timeline, skill grids, and project case cards",
      "Optimized orbital animation header with responsive layout"
    ],
    challenges: "Calibrating contrast tokens across themes while preserving modern gradients and subtle orbital effects.",
    outcome: "High-performance, accessible portfolio showcasing full-stack capabilities with a 100% responsive design."
  },
  {
    id: 3,
    title: "Orphanage Connect",
    subtitle: "Donation Management Platform",
    description: "Developed a Django-based platform connecting donors with orphanages, enabling seamless donation management and communication. Implemented donation tracking, image upload functionality, and automated PDF receipt generation for donors.",
    bullets: [
      "Developed a Django-based platform connecting donors with orphanages, enabling seamless donation management and communication.",
      "Implemented donation tracking, image upload functionality, and automated PDF receipt generation for donors."
    ],
    tech: ["Django", "Python", "SQLite", "PostgreSQL"],
    github: "https://github.com/prameela-66/orphanage-connect",
    live: "#",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Smart Chatbot",
    subtitle: "AI Context-Aware Assistant",
    description: "Built an AI-powered chatbot using Python and LLMs that processes YouTube links and PDFs to deliver context-aware answers. Leveraging NLP for high accuracy.",
    bullets: [
      "Processes YouTube links and PDFs to deliver context-aware answers.",
      "Leveraging NLP for high accuracy."
    ],
    tech: ["Python", "LLMs", "NLP"],
    github: "https://github.com/prameela-66/smart-chatbot",
    live: "#",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Todo Management Web Application",
    subtitle: "Task Tracking System",
    description: "Built a full-stack Todo Management Web Application using Django, Python, and SQLite with complete CRUD functionality. Implemented Django ORM, MVT architecture, and task completion tracking for efficient task management.",
    bullets: [
      "Built a full-stack Todo Management Web Application using Django, Python, and SQLite with complete CRUD functionality.",
      "Implemented Django ORM, MVT architecture, and task completion tracking for efficient task management."
    ],
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    github: "https://github.com/prameela-66/Todo-Management-Web-Application",
    live: "https://todo-management-web-application-three.vercel.app",
    image: "src/assets/todoapp.png",
  },
  {
    id: 6,
    title: "FestivePal UI/UX",
    subtitle: "Cultural Event Application",
    description: "Designed a complete UI/UX, event alarms, shopping lists, Puja guides, and reels feature to enhance festival engagement and experience.",
    bullets: [
      "Designed a complete UI/UX, event alarms, shopping lists, Puja guides, and reels feature.",
      "Focus on enhancing festival engagement and experience."
    ],
    tech: ["Figma", "UI/UX Design"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
  }
];
