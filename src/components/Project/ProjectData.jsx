"use client";

const projectData = [
  {
    id: 1,
    title: "MeetIQ - AI Powered Smart Meeting Assistant",
    description: "A next-gen video platform featuring a voice-activated AI assistant that delivers real-time transcription and context-aware meeting insights on command.",
    longDescription: "MeetIQ revolutionizes virtual meetings by integrating a passive AI agent directly into the call. Built with Stream SDK for low-latency video and Google Gemini for intelligence, the assistant listens silently and only activates when addressed ('Hey Assistant'). It provides real-time transcription, answers questions based on meeting context, and features a responsive, glassmorphic UI. The system solves common AI delays with optimistic UI updates and efficient context management.",
    images: [
      "/projects/meetiq/meetiq.png",
      "/projects/meetiq/meetiq1.png",
      "/projects/meetiq/meetiq2.png",
      "/projects/meetiq/meetiq3.png",
      "/projects/meetiq/meetiq5.png",
      "/projects/meetiq/meetiq6.png",
      "/projects/meetiq/meetiq7.png",
      "/projects/meetiq/meetiq8.png",
      "/projects/meetiq/meetiq9.png",
    ],
    snapshot: "/projects/meetiq/meetiq.png",
    live: "https://github.com/pkaushalendra08/MeetIQ-AI-Smart-Meeting-Assistant",
    github: "https://github.com/pkaushalendra08/MeetIQ-AI-Smart-Meeting-Assistant",
    features: [
      "Voice-Activated AI ('Hey Assistant')",
      "Real-time Live Transcription",
      "Context-Aware Q&A (Gemini )",
      "Smart 'Thinking' UI Indicators",
      "Screen Share Functionality",
      "Reaction emojis share in real-time chat",
      "Scalable Grid Video Layout",
    ],
    tags: ["Next.js 16", "Python", "Vision Agents", "Google Gemini", "Stream SDK", "Tailwind CSS","Shadcn UI", "Lucide React"]
  },
  {
  "id": 2,
  "title": "DigiFRA (SentinelX)",
  "description": "A complex WebGIS frontend built to visualize Forest Rights Act data and satellite asset mapping.",
  "longDescription": "DigiFRA (SentinelX) is a frontend-focused Decision Support System (DSS) prototype designed to digitize and monitor the implementation of the Forest Rights Act (FRA). Built with React 19 and Vite, the application features a high-performance interactive Atlas for visualizing satellite-mapped assets (farms, water bodies) and layered tribal land data. I engineered the dashboard interface to handle complex state management for scheme eligibility filtering and secure user authentication via Clerk.",
  "images": [
    "/projects/digifra/digi2.png",
    "/projects/digifra/digi1.png",
    "/projects/digifra/digi3.png",
    "/projects/digifra/digi4.png",
    "/projects/digifra/digi5.png",
    "/projects/digifra/digi6.png",
    "/projects/digifra/digi7.png",
    "/projects/digifra/digi8.png",
    "/projects/digifra/digi9.png",
    "/projects/digifra/digi10.png",
    "/projects/digifra/digi11.png",
  ],
  "snapshot": "/projects/digifra/digi2.png",
  "live": "https://github.com/pkaushalendra08/DigiFRA",
  "github": "https://github.com/pkaushalendra08/DigiFRA",
  "features": [
    "Geospatial Data Rendering (Maps)",
    "Client-Side Data Filtering (DSS Logic)",
    "Secure Authentication Flow (Clerk)",
    "Responsive Dashboard Grid (Tailwind)",
    "Interactive Asset Overlays"
  ],
  "tags": ["React 19", "Vite", "Tailwind CSS", "Clerk Auth", "Express", "Axios", "React Router"]
},

  {
    id: 3,
    title: "AI Resume Generator",
    description: "AI-powered application that leverages the Groq API to create professional resumes.",
    longDescription: "This tool leverages the blazing-fast Groq API to democratize professional resume writing. Users can input their raw details, and the AI structures it into a polished, professional format. It includes support for generating tailored cover letters based on specific job descriptions, significantly streamlining the job search process.",
    images: [
      "/projects/resume&CV.png",
      "/projects/resume-editor.png",
    ],
    snapshot: "/projects/resume&CV.png",
    live: "https://ai-resume-generator-tech.vercel.app/",
    github: "https://github.com/pkaushalendra08/ai-resume-generator",
    features: [
      "Fast AI Generation (Groq)",
      "Professional Templates",
      "PDF Export Functionality",
      "Cover Letter Writing",
      "Real-time Preview"
    ],
    tags: ["React 19", "Tailwind CSS", "Axios", "NodeJS", "Express"]
  },
  {
    id: 4,
    title: "GeoAtlas",
    description: "Dynamic web application allowing users to explore detailed information about countries.",
    longDescription: "GeoAtlas serves as a digital encyclopedia for geography enthusiasts. It interfaces with the REST Countries API to fetch comprehensive data about every nation, including population, currencies, languages, and borders. The app features a dark mode, advanced filtering by region, and a search function that updates instantly as you type.",
    images: [
      "projects/geoatlas/GeoAtlas.png",
      "projects/geoatlas/ga1.png",
      "projects/geoatlas/ga2.png",
      "projects/geoatlas/ga3.png",
    ],
    snapshot: "/projects/geoatlas/GeoAtlas.png",
    live: "https://geoatlas-app.netlify.app/",
    github: "https://github.com/pkaushalendra08/GeoAtlas",
    features: [
      "REST Countries API Integration",
      "Region-based Filtering",
      "Live Search Functionality",
      "Ascending and Descending Order of Country",
      "Detailed Country Views"
    ],
    tags: ["React 19", "Axios", "CSS Modules"]
  },
  {
    id: 5,
    title: "DailyPulse",
    description: "Responsive news application fetching latest articles using the GNews API.",
    longDescription: "DailyPulse keeps you informed with the latest headlines from around the world. Built with React-Bootstrap for a consistent layout, it fetches real-time articles via the GNews API. Users can filter news by categories such as Technology, Business, and Health, ensuring they see only what matters to them.",
    images: [
      "/projects/dailypulse.png",
    ],
    snapshot: "/projects/dailypulse.png",
    live: "https://daily-pulse-news.vercel.app/",
    github: "https://github.com/pkaushalendra08/DailyPulse",
    features: [
      "GNews API Integration",
      "Category Filtering",
      "Responsive Grid Layout",
      "React-Bootstrap Components",
      "Fast Loading Speed"
    ],
    tags: ["Bootstrap", "React 19", "Rest API"]
  },
  {
    id: 6,
    title: "Plan&Do",
    description: "Simple, efficient To-Do List application built using HTML, CSS, and JavaScript.",
    longDescription: "Plan&Do is a minimalist task management tool designed to demonstrate core DOM manipulation concepts. It uses Local Storage to persist data, so your tasks remain saved even after refreshing the page. It features a clean, colorful interface with options to mark tasks as completed or delete them entirely.",
    images: [
      "/projects/plan&do/plan&do.png",
      "/projects/plan&do/p&d.png",
    ],
    snapshot: "/projects/plan&do/plan&do.png",
    live: "https://plan-do.vercel.app/",
    github: "https://github.com/pkaushalendra08/Plan-and-Do-Task-Manager",
    features: [
      "Local Storage Persistence",
      "CRUD Operations",
      "DOM Manipulation",
      "Responsive Design",
      "Interactive UI"
    ],
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
];

export default projectData;