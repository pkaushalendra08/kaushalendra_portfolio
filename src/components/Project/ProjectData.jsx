import plan_do from "../Project/snapshots/plan&do.png"
import dailypulse from "../Project/snapshots/dailypulse.png"
import geoatlas from "../Project/snapshots/geoatlas.png"
import airesume from "../Project/snapshots/resume&CV.png"



const projectData = [
    {
        id:1,
        title: "AI based Resume and Cover Letter Generator",
        description: "An AI-powered application that leverages the blazing-fast Groq API to help you create professional resumes and cover letters in seconds. Get instant, high-quality content suggestions tailored to your profile and streamline your job search.",
        snapshot: airesume ,
        live: "https://ai-resume-generator-tech.vercel.app/",
        github: "https://github.com/pkaushalendra08/ai-resume-generator",
        tags:["REACT19","TAILWIND CSS", "Axios", "NODEJS", "EXPRESSJS"]
    },
    {
        id:2,
        title: "GeoAtlas",
        description: "GeoAtlas is a dynamic, multi-page web application that allows users to explore and find detailed information about countries from around the world. The application fetches data using Axios from the REST Countries API and provides powerful search and filtering tools for a seamless user experience.",
        snapshot:geoatlas ,
        live: "https://geoatlas-app.netlify.app/",
        github: "https://github.com/pkaushalendra08/GeoAtlas",
        tags:["REACT19", "Axios"]
    },
    {
        id:3,
        title: "DailyPulse: Get latest News! ",
        description: "A responsive React-based news application that fetches and displays the latest articles using the GNews API. Built with React-Bootstrap and deployed on Vercel, the app features category-based filtering (Technology, Health, Business, etc.), a modern UI, and smooth navigation.",
        live: "https://daily-pulse-news.vercel.app/",
        github: "https://github.com/pkaushalendra08/DailyPulse",
        snapshot:dailypulse,
        tags:["BOOTSTRAP", "REACT19", "API"]
    },
    {
        id: 4,
        title: "Plan&Do: Manage Task!",
        description: "Plan&Do is a simple, efficient, and visually appealing To-Do List application built using HTML, CSS, and JavaScript. It helps users plan their tasks smartly and stay productive with a clean and interactive UI.",
        live: "https://plan-do.vercel.app/",
        github: "https://github.com/pkaushalendra08/Plan-and-Do-Task-Manager",
        snapshot: plan_do,
        tags: ["HTML", "CSS", "JAVASCRIPT"]
    },
];

export default projectData;