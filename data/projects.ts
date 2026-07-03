export type ProjectCategory =
  | "AI & ML"
  | "Data Analytics"
  | "Desktop Apps"
  | "Developer Tools"
  | "Distributed Systems"
  | "Embedded & IoT"
  | "Homelab & Infra"
  | "Systems Programming"
  | "Web Apps";

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  categories: ProjectCategory[];
  githubLink?: string;
  deploymentLink?: string;
  featured?: boolean;
  featuredRank?: number;
};

export const projectsData: Project[] = [
  {
    id: "project-id-15",
    name: "Overland Media Vault",
    description:
      "Built a rugged, offline-first GoPro backup and integrity verification system for riders and adventure travellers. It pairs a React/Vite dashboard for backup stats and AI travel journals with a native Python/Qt client that supports GUI and headless CLI workflows across laptops and Raspberry Pi devices.",
    githubLink: "https://github.com/kabir325/overland-media-vault",
    techStack: [
      "Python",
      "PySide6",
      "React",
      "Vite",
      "SHA-256",
      "Raspberry Pi",
    ],
    categories: ["Web Apps", "Desktop Apps" as ProjectCategory, "Homelab & Infra"],
    featured: true,
    featuredRank: 1,
  },
  {
    id: "project-id-18",
    name: "Nimbus",
    description:
      "Created a DAG-based task runner that executes dependent jobs with bounded parallelism and an optional coordinator-worker distributed execution layer over gRPC. The project is designed to showcase scheduler design, execution guarantees, observability, and distributed systems tradeoffs.",
    githubLink: "https://github.com/kabir325/nimbus",
    techStack: ["Java", "Gradle", "gRPC", "DAG Scheduler", "JSON"],
    categories: ["Developer Tools", "Distributed Systems", "Systems Programming"],
    featured: true,
    featuredRank: 2,
  },
  {
    id: "project-id-16",
    name: "Therepy",
    description:
      "Developed an ML-powered therapy chat application with a Flask backend, Next.js frontend, and Ollama integration. Messages are saved instantly, model replies are generated asynchronously in the background, and each signed-in user keeps persistent chat history across mobile and laptop-friendly sessions.",
    githubLink: "https://github.com/kabir325/Therapy",
    techStack: ["Next.js", "Flask", "Ollama", "Python", "Async UX"],
    categories: ["AI & ML", "Web Apps"],
    featured: true,
    featuredRank: 3,
  },
  {
    id: "project-id-19",
    name: "Pi Registry",
    description:
      "Built a Raspberry Pi homelab registry service that tracks hosted apps, allocates ports from a fixed pool, and syncs service state with Docker labels and event streams. It acts as an operational control layer for keeping self-hosted services organized without polling-heavy overhead.",
    githubLink: "https://github.com/kabir325/Pi_registry",
    techStack: ["Python", "REST API", "SQLite", "Docker", "Raspberry Pi"],
    categories: ["Homelab & Infra", "Developer Tools", "Web Apps"],
    featured: true,
    featuredRank: 4,
  },
  {
    id: "project-id-17",
    name: "Raspberry Pi Interview Transcriber",
    description:
      "Designed a local browser dashboard for Raspberry Pi 5 that records interview question-answer pairs, transcribes them with Whisper, and cleans transcripts with Ollama before exporting structured text data. Audio stays in memory, which keeps storage lean and the workflow training-data focused.",
    githubLink: "https://github.com/kabir325/Raspberry-Pi-Interview-Transcriber",
    techStack: ["Python", "Whisper", "Ollama", "Raspberry Pi", "JSONL"],
    categories: ["AI & ML", "Data Analytics", "Web Apps"],
    featured: true,
    featuredRank: 5,
  },
  {
    id: "project-id-1",
    name: "Smart Farming using IoT",
    description:
      "Developed an intelligent farming system integrating IoT sensors, fog computing, and AI to assist farmers with crop disease detection, soil health monitoring, and irrigation management through a natural language-based interface.",
    techStack: ["Python", "IoT", "AI", "Agriculture"],
    categories: ["AI & ML", "Embedded & IoT", "Data Analytics"],
  },
  {
    id: "project-id-12",
    name: "PaperPi",
    description:
      "Developed a Raspberry Pi-hosted SaaS platform that lets users upload PDFs, read them in the browser, create notes, and maintain a TODO list from a lightweight self-hosted interface.",
    techStack: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/kabir325/PaperPi",
    categories: ["Web Apps", "Homelab & Infra"],
  },
  {
    id: "project-id-13",
    name: "GitGuide",
    description:
      "Built an AI-powered execution engine for Git operations with Ollama integration to guide users through repo workflows and command generation from natural-language intent.",
    techStack: ["TypeScript", "Node.js", "npm", "Ollama"],
    githubLink: "https://github.com/kabir325/GitGuide",
    categories: ["Developer Tools", "AI & ML"],
  },
  {
    id: "project-id-14",
    name: "TodoTracker",
    description:
      "Built a local-first, repo-native task tracker that stores task state inside the repository so history stays versioned with Git and works from any editor setup.",
    techStack: ["Python", "Git", "CLI"],
    githubLink: "https://github.com/kabir325/Todo_Tracker",
    categories: ["Developer Tools"],
  },
  {
    id: "project-id-10",
    name: "Mini File System in C",
    description:
      "Simulated a Unix-like file system in C with support for directory and file operations, metadata handling, and robust error paths to reinforce low-level systems concepts.",
    githubLink: "https://github.com/kabir325/File_system_in_C",
    techStack: ["C", "File System", "Simulation"],
    categories: ["Systems Programming"],
  },
  {
    id: "project-id-2",
    name: "Emotion Analysis from Speech Data",
    description:
      "Built an unsupervised learning system to cluster emotions from speech audio using the RAVDESS dataset. The project extracts acoustic features, applies clustering, and explores a real-time emotion recognition workflow in Python.",
    githubLink: "https://github.com/kabir325/Emotion-Analysis-from-Speech-Data",
    techStack: ["Python", "Machine Learning", "Audio Analysis", "Jupyter"],
    categories: ["AI & ML", "Data Analytics"],
  },
  {
    id: "project-id-4",
    name: "Pi Music Player",
    description:
      "Created a Python-based music scheduler for Raspberry Pi that plays designated playlists by time of day, supports automation flows, and keeps CSV logs for reproducible routines.",
    githubLink: "https://github.com/kabir325/Pi-Music-Player",
    techStack: ["Python", "Raspberry Pi", "Automation"],
    categories: ["Embedded & IoT", "Homelab & Infra"],
  },
  {
    id: "project-id-5",
    name: "Solana",
    description:
      "Built a Next.js starter application configured for Vercel deployment with TypeScript and modern font integration for fast full-stack prototyping.",
    githubLink: "https://github.com/kabir325/Solana",
    deploymentLink: "https://solana-ghen2si03-kabir325s-projects.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Web Development"],
    categories: ["Web Apps"],
  },
  {
    id: "project-id-6",
    name: "Smart Resume Screening System",
    description:
      "Implemented an AI-powered resume classifier using BERT and logistic regression for automated job-role prediction from uploaded PDF resumes, wrapped in a PyQt desktop interface.",
    githubLink: "https://github.com/kabir325/Smart-Resume-Screening-System",
    techStack: ["Python", "NLP", "BERT", "ML", "PyQt"],
    categories: ["AI & ML", "Data Analytics"],
  },
  {
    id: "project-id-7",
    name: "Collaborative Recruitment Platform",
    description:
      "Developed a cross-organization desktop hiring platform for candidates, recruiters, and organizations, with role-based authentication and a MySQL-backed Python/PyQt6 application.",
    githubLink:
      "https://github.com/kabir325/Collaborative-Recruitment-Platform",
    techStack: ["Python", "PyQt", "MySQL", "Desktop App"],
    categories: ["Web Apps"],
  },
  {
    id: "project-id-8",
    name: "Job Scheduler",
    description:
      "Built a terminal job scheduler in C with priority-queue and round-robin execution, live timers, keyboard navigation, and CRUD operations for task management on Windows.",
    githubLink: "https://github.com/kabir325/job_schedular",
    techStack: ["C", "Data Structures", "Scheduling"],
    categories: ["Systems Programming", "Developer Tools"],
  },
  {
    id: "project-id-9",
    name: "Hangman Game",
    description:
      "Coded a classic terminal Hangman game in C with hints, custom word lists, points-based rounds, and configurable settings for replayable learning and entertainment.",
    githubLink: "https://github.com/kabir325/Hangman-Game",
    techStack: ["C", "Game Development"],
    categories: ["Systems Programming"],
  },
  {
    id: "project-id-11",
    name: "ESP32 Sensor Data Transmission",
    description:
      "Designed a wireless IoT sensor platform using ESP32 microcontrollers to capture and transmit real-time health and environmental data with modular PlatformIO-based C++ code.",
    githubLink: "https://github.com/kabir325/Esp32_Sensor_Data_Transmission",
    techStack: ["C++", "Embedded", "IoT", "PlatformIO"],
    categories: ["Embedded & IoT", "Data Analytics"],
  },
];
