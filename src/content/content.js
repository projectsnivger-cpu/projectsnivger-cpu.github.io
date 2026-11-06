// ─────────────────────────────────────────────────────────────────────────────
// content.js — the single source of truth for the whole portfolio.
// Every component imports from this file. To change any text, link, date or
// list on the site, edit it here; no component needs to be touched.
// ─────────────────────────────────────────────────────────────────────────────

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Regvin Vinod Kumar",
  initials: "RVK",
  role: "AI & ML Engineer",
  tagline: "Building intelligent systems the",
  taglineAccent: "practical way",
  intro:
    "I build and deploy ML, deep learning, NLP and computer vision solutions, from data pipelines and models to LLM-powered agents and production APIs.",
  greeting: "Hello! I am",
  handle: "regvin_vinod_kumar",
  // Put your photo at public/photo.jpg (portrait works best). If the file is missing the
  // site shows your initials instead. Change the file name here to use a different one.
  photo: `${BASE}photo.jpg`,
  interests: ["AI", "ML", "Data Science", "Design", "Photography", "Sports"],
  languages: ["English", "Malayalam", "Hindi"],
};

export const contact = {
  phone: "+91 8078851881",
  email: "regvinvk@gmail.com",
  // Add your LinkedIn profile URL here. The button is hidden while this is empty.
  linkedin: "",
};

export const resume = {
  file: `${BASE}Regvin_Vinod_Kumar_Resume.pdf`,
  downloadName: "Regvin_Vinod_Kumar_Resume.pdf",
};

// Each entry is one editor tab. `slug` is appended to the window title bar.
export const navLinks = [
  { label: "_hello", id: "home", slug: "" },
  { label: "_about me", id: "about", slug: "about" },
  { label: "_experience", id: "experience", slug: "experience" },
  { label: "_projects", id: "projects", slug: "projects" },
  { label: "_skills", id: "skills", slug: "skills" },
  { label: "_credentials", id: "credentials", slug: "credentials" },
  { label: "_contact", id: "contact", slug: "contact" },
];

// The prompt on the hello tab. Typing one of these words and pressing Enter opens that tab.
export const terminal = {
  prompt: "// write the code below to continue:",
  command: "whois",
};

// The "explorer" panel next to the About tab. Each file is shown as <name>.md
export const explorer = {
  title: "my interests",
  folders: [
    { name: "Tech", files: ["AI", "Machine Learning", "Data Science"] },
    { name: "Creative", files: ["Design", "Photography"] },
    { name: "Sports", files: ["Football"] },
    { name: "Languages", files: ["English", "Malayalam", "Hindi"] },
  ],
};

export const about = {
  heading: { eyebrow: "Who I am", lead: "About", accent: "me" },
  paragraphs: [
    "I'm an AI & Machine Learning Engineer with hands-on experience in end-to-end ML pipeline development, model deployment and LLM integration across OpenAI, Gemini, Claude and Mistral, using agent frameworks such as LangChain and CrewAI.",
    "I've applied AI to pricing prediction, financial forecasting, speech analysis and real-time object detection, and I pair it with BI and data visualization in Tableau and Power BI for decision support.",
    "Away from the keyboard I'm drawn to design, photography and football. I play for my college football team and have served on the media committee as a photographer.",
  ],
};

export const experience = {
  heading: { eyebrow: "Where I've worked", lead: "My", accent: "Experience" },
  items: [
    {
      role: "Artificial Intelligence Engineer",
      company: "goBlue International",
      location: "",
      period: "March 2026 – Present",
      type: "",
      highlights: [],
    },
    {
      role: "Designer",
      company: "Echelon Marketing House",
      location: "",
      period: "Jan 2026 – Mar 2026",
      type: "Freelance",
      highlights: [],
    },
    {
      role: "Software Engineer Intern",
      company: "Sasken Technologies",
      location: "Bengaluru",
      period: "Feb 2025 – May 2025",
      type: "Internship",
      highlights: [],
    },
    {
      role: "Machine Learning Intern",
      company: "NativeSoftTech",
      location: "",
      period: "Jan 2025 – Feb 2025",
      type: "Internship",
      highlights: [],
    },
    {
      role: "Software Programming Intern (Python)",
      company: "Softora Technologies Pvt. Ltd.",
      location: "Bengaluru",
      period: "Feb 2023 – Mar 2023",
      type: "Internship",
      highlights: [],
    },
  ],
};

export const projects = {
  heading: { eyebrow: "What I've built", lead: "Featured", accent: "Projects" },
  items: [
    {
      title: "FtblPro",
      subtitle: "Football tournament management web app",
      date: "",
      featured: true,
      summary:
        "A web app for running football tournaments. It covers player registration, team auctions, fixtures, results and awards in one place.",
      highlights: [
        "Players register themselves with their IDs, phone number, position and photo.",
        "Sign-in uses secure server-side sessions with idle and maximum lifetimes.",
        "Admins can open or close self-registration with a switch in Operations, and can still add players by hand.",
        "Three role-based portals serve admins, team owners and players. Owners and players see the auction and tournament read-only.",
        "Admins manage players, register teams with owners, manager, icon and captain, and run the live auction against each team's balance and squad limit.",
        "The NFL 2026–27 section runs the tournament itself.",
        "The Files tab generates share-ready material in the browser: a PowerPoint of unassigned players for the auction (shuffled if wanted), plus 1600×1600 images of group tables, fixtures, results, playoffs, top scorers, awards, champions and each team's squad.",
        "The interface is light, modern and mobile-friendly, and carries the tournament's own logo.",
      ],
      tags: ["React", "TypeScript", "Vite", "Node.js", "Express", "MySQL", "Render", "Aiven"],
      link: "",
    },
    {
      title: "AUTO-RAG Customer Support Assistant",
      date: "Aug 2025",
      summary:
        "An AI-powered customer service automation built in n8n, combining Google Gemini and a Pinecone vector database for RAG-based email replies.",
      highlights: [
        "Email classification and retrieval workflows that detect customer queries and surface relevant policy data.",
        "Generates contextually accurate responses in real time, cutting manual workload and improving SLA compliance.",
      ],
      tags: ["n8n", "Google Gemini", "Pinecone", "RAG"],
    },
    {
      title: "Predictive Analysis & Trend Forecasting using Generative AI",
      date: "Nov 2024",
      summary:
        "Stock forecasts and quarterly performance indicators produced with generative AI techniques.",
      highlights: [
        "HTML interface and Power BI / Tableau-style dashboards to visualize forecasts.",
        "SMS-based alerts notify users of stock price changes in real time.",
      ],
      tags: ["Generative AI", "Forecasting", "Power BI", "Tableau"],
    },
    {
      title: "Anti-Theft Home Automation System",
      date: "Jun 2024",
      summary:
        "Intrusion detection on an ESP32 microcontroller with a piezoelectric sensor that captures images of intruders when a threshold is exceeded.",
      highlights: ["SMS notifications and an alternate GUI for real-time monitoring."],
      tags: ["ESP32", "Embedded", "IoT"],
    },
    {
      title: "Problematic Speech Detection",
      date: "Jun 2024",
      summary:
        "A speech classification system that detects problematic or hate-spreading language and labels input audio as positive or negative.",
      highlights: [
        "Designed to plug into prompt-engineering or transformer pipelines to support ethical speech propagation.",
      ],
      tags: ["Speech", "NLP", "Classification"],
    },
    {
      title: "Stock Price Prediction Model",
      date: "Sep 2023",
      summary:
        "A machine learning model that predicts stock prices from historical data, with graphical views of the computations and predictions.",
      highlights: [],
      tags: ["Machine Learning", "Prediction"],
    },
    {
      title: "Interactive Interface for Sports Statistical Database",
      date: "Sep 2023",
      summary:
        "A sports statistics database with a Java-based GUI for querying and retrieving records.",
      highlights: [],
      tags: ["Java", "Database", "GUI"],
    },
    {
      title: "Data Visualization: Weather Dataset",
      date: "Apr 2023",
      summary:
        "Power BI and Tableau dashboards presenting graphical analysis of a weather dataset, with forecasting on dynamically generated data.",
      highlights: [],
      tags: ["Power BI", "Tableau", "Forecasting"],
    },
  ],
};

export const skills = {
  heading: { eyebrow: "What I work with", lead: "Tech", accent: "Toolkit" },
  groups: [
    {
      title: "Stack",
      items: ["Python", "React", "Node.js", "FastAPI", "Pydantic", "Express", "SQL"],
    },
    {
      title: "Tools",
      items: ["Claude Code", "Power BI", "Tableau", "Google AI Studio"],
    },
    {
      title: "Skills",
      items: [
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "C Programming",
        "Python",
        "Kernel Programming",
        "Operating Systems",
        "Linux",
        "MQTT",
        "Device Drivers",
      ],
    },
    {
      title: "ML & AI Frameworks",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LangChain", "CrewAI"],
    },
    {
      title: "LLMs & Retrieval",
      items: ["OpenAI", "Google Gemini", "Anthropic Claude", "Mistral", "RAG", "Pinecone", "n8n", "Qwen (quantized)"],
    },
  ],
};

export const credentials = {
  heading: { eyebrow: "Learning & recognition", lead: "Education &", accent: "Certifications" },
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
      school: "N.M.A.M. Institute of Technology, Nitte",
      period: "2021 – 2025",
      detail: "CGPA: 8.31",
      notes:
        "Coursework: Artificial Intelligence, Machine Learning, Deep Learning, Operating Systems, Natural Language Processing, Algorithms.",
    },
    {
      degree: "AISSCE / 12th Grade",
      school: "The Indian School Bahrain",
      period: "2021",
      detail: "85.2%",
      notes: "",
    },
    {
      degree: "AISSE / 10th Grade",
      school: "The Indian School Bahrain",
      period: "2019",
      detail: "86.6%",
      notes: "",
    },
  ],
  certifications: [
    {
      title: "Maximum Performance and Technology in Sports",
      issuer: "Escuela Universitaria Real Madrid Universidad Europea",
      date: "Aug 2026",
    },
    {
      title: "Mastering MLOps: From Model Development to Deployment",
      issuer: "Udemy",
      date: "Jan 2025",
    },
    {
      title: "Introduction to Business and Data Analysis",
      issuer: "MTF Institute of Management, Technology and Finance (Udemy)",
      date: "Jan 2025",
    },
    {
      title: "Cybersecurity Job Simulation",
      issuer: "Mastercard (Forage)",
      date: "Jan 2025",
    },
    {
      title: "Accelerating Deep Learning with GPUs",
      issuer: "IBM (Cognitive Class)",
      date: "Dec 2024",
    },
    {
      title: "Software Engineering and Testing",
      issuer: "NMAM Institute of Technology",
      date: "Sep 2023",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "",
      link: "https://www.credly.com/badges/c57f7979-e725-45e8-ab5d-7ea2857fc150",
    },
  ],
};

export const activities = {
  heading: { eyebrow: "Beyond code", lead: "Activities &", accent: "Interests" },
  items: [
    "Member, College Football Team",
    "Media Committee member (Photography) for college-level events",
    "Committee member for various sporting events",
    "Active volunteer for department-level hackathons and events",
  ],
};

export const contactSection = {
  heading: { eyebrow: "Get in touch", lead: "Let's", accent: "Work Together" },
  message:
    "Have a project, an opportunity or just want to talk AI, design or football? My inbox is open.",
};
