"use client";

const projectData = [
  {
    id: 6,
    title: "MyMentor.ai",
    description: "A full-stack AI career platform featuring mock interviews, performance analytics, and resume building.",
    longDescription: "MyMentor.ai is a comprehensive AI-powered career coach designed to help job seekers land their dream roles. It utilizes Gemini AI to conduct realistic mock interviews, providing real-time feedback on your answers. The platform also includes tools for generating ATS-friendly resumes and cover letters, tracking application progress, and analyzing interview performance metrics.",
    // Carousel images 
    images: [
      "/projects/mymentor.ai.png",
      "/projects/mymentor-dashboard.png", 
      "/projects/mymentor-interview.png",
    ],
    snapshot: "/projects/mymentor.ai.png",
    live: "https://chit-chatter-app.vercel.app/", 
    github: "https://github.com/pkaushalendra08/MyMentor.ai-Your-AI-Career-Coach",
    // Key Features
    features: [
      "AI Mock Interviews with Gemini",
      "Real-time Performance Analytics",
      "Automated Resume Builder",
      "Cover Letter Generation",
      "Clerk Authentication",
      "Neon Postgres Database"
    ],
    tags: ["NextJS", "Tailwind", "Prisma", "Shadcn UI", "Clerk", "Neon", "Inngest", "Gemini AI"]
  },
  {
    id: 7,
    title: "MarketTrack",
    description: "A full-stack price tracking platform that monitors product prices and provides alerts.",
    longDescription: "MarketTrack is an intelligent e-commerce tool that helps users save money by tracking product prices across various websites. It uses Firecrawl for robust web scraping to monitor price fluctuations in real-time. Users can set desired price points and receive automated email alerts when a product goes on sale, ensuring they never miss a deal.",
    images: [
      "/projects/markettrack.png", 
      "/projects/markettrack-graph.png",
    ],
    snapshot: "/projects/markettrack.png", 
    live: "https://chit-chatter-app.vercel.app/", 
    github: "https://github.com/pkaushalendra08/MarketTrack-Price-Tracker-Platform",
    features: [
      "Automated Web Scraping",
      "Price History Visualization",
      "Email Drop Alerts",
      "Product Trend Analysis",
      "Supabase Backend",
      "Cron Job Scheduling"
    ],
    tags: ["NextJS", "Supabase", "Firecrawl", "Shadcn UI"]
  },
  {
    id: 5,
    title: "ChitChatter",
    description: "Real-time chat application enabling instant messaging through a modern interface.",
    longDescription: "ChitChatter is a robust real-time messaging application built to demonstrate the power of WebSockets. It features instant bidirectional communication, allowing users to create rooms, send private messages, and see live status updates. The backend is powered by Node.js and Socket.io, ensuring low-latency delivery of messages.",
    images: [
      "/projects/chitchatter/cc1.png",
      "/projects/chitchatter/cc2.png",
      "/projects/chitchatter/cc3.png",
      "/projects/chitchatter/cc4.png",
      "/projects/chitchatter/cc5.png",
      "/projects/chitchatter/cc6.png", 
    ],
    snapshot: "/projects/chitchatter/cc1.png",
    live: "https://chit-chatter-app.vercel.app/",
    github: "https://github.com/pkaushalendra08/ChitChatter",
    features: [
      "Real-time Messaging (Socket.io)",
      "User Authentication (JWT)",
      "Online Status Indicators",
      "Message History (MongoDB)",
      "Responsive Chat UI"
    ],
    tags: ["React 19", "Tailwind CSS", "Context API", "NodeJS", "Express", "MongoDB", "Socket.io"]
  },
  {
    id: 1,
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
    id: 2,
    title: "GeoAtlas",
    description: "Dynamic web application allowing users to explore detailed information about countries.",
    longDescription: "GeoAtlas serves as a digital encyclopedia for geography enthusiasts. It interfaces with the REST Countries API to fetch comprehensive data about every nation, including population, currencies, languages, and borders. The app features a dark mode, advanced filtering by region, and a search function that updates instantly as you type.",
    images: [
      "/projects/geoatlas.png",
      "/projects/geoatlas-details.png",
    ],
    snapshot: "/projects/geoatlas.png",
    live: "https://geoatlas-app.netlify.app/",
    github: "https://github.com/pkaushalendra08/GeoAtlas",
    features: [
      "REST Countries API Integration",
      "Region-based Filtering",
      "Live Search Functionality",
      "Dark/Light Mode Toggle",
      "Detailed Country Views"
    ],
    tags: ["React 19", "Axios", "CSS Modules"]
  },
  {
    id: 3,
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
    id: 4,
    title: "Plan&Do",
    description: "Simple, efficient To-Do List application built using HTML, CSS, and JavaScript.",
    longDescription: "Plan&Do is a minimalist task management tool designed to demonstrate core DOM manipulation concepts. It uses Local Storage to persist data, so your tasks remain saved even after refreshing the page. It features a clean, colorful interface with options to mark tasks as completed or delete them entirely.",
    images: [
      "/projects/plan&do.png",
    ],
    snapshot: "/projects/plan&do.png",
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