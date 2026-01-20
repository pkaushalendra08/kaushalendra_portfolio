"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Trophy, CheckCircle2, Lock, Award, Users,
    ChevronLeft, ChevronRight, MapPin, Zap, Layers, Code2, Star, ExternalLink, ArrowRight,
    ChevronDown, ChevronUp
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

// --- DATA SECTION ---
const ACHIEVEMENTS_DATA = [
    {
        id: "sih-2025",
        title: "National Winner SIH'25",
        subtitle: [
            "Team Name: Team SENTINELX",
            "Smart India Hackathon 2025",
            "Problem ID: SIH25237",
            "Ministry: National Technical Research Organization"
        ],
        content: {
            problem: "Enterprises running mixed OS environments (Windows, Ubuntu, CentOS) struggle with manual security hardening. The lack of a centralized tool to enforce CIS Benchmarks leads to configuration drift, security gaps, and failed audits.",
            solution: "We as 'Team SentinelX', developed a unified security suite that automates system hardening. It intelligently detects the OS, applies 100+ security parameters (CIS Level 1 & 2), generates legally compliant PDF audit reports, and features a failsafe rollback engine.",
            contribution: "As the Full Stack Developer, I was responsible for Frontend, and architected the communication bridge between the ReactJS frontend and the Golang/Wails backend. I executed the GUI to visualize kernel-level script progress instantly. I also designed the 'One-Click Rollback' state management system.",
            features: [
                "Intelligent OS Detection",
                "CIS Benchmark Compliance",
                "Cross-Platform Support (Windows/Linux)",
                "One-Click Rollback Engine",
                "Detailed Audit & Compliance Reports(pdf)",
                "Dual Interface (GUI & CLI)",
                "Customizable Hardening Profiles (Basic/Moderate/Strict)",
                "Real-time Execution",
                "Secure Offline Mode (.exe)"
            ],
            techStack: ["ReactJS", "Golang", "Wails", "Cobra CLI", "TailwindCSS", "SQLite"],
        },
        badges: [
            { icon: Award, text: "Awarded by AICTE Chairman", color: "purple" },
        ],
        images: [
            "https://res.cloudinary.com/drnyfpkm1/image/upload/f_auto,q_auto/v1768733675/SIHWIn_cyenyt.jpg",
            "https://res.cloudinary.com/drnyfpkm1/image/upload/f_auto,q_auto/v1768733649/SIHpresen_ounwku.jpg",
            "https://res.cloudinary.com/drnyfpkm1/image/upload/f_auto,q_auto/v1768733641/SIHpartici_w19wg9.jpg",
            "https://res.cloudinary.com/drnyfpkm1/image/upload/f_auto,q_auto/v1768733531/SIHstandee_pyqhjq.jpg",
            "https://res.cloudinary.com/drnyfpkm1/image/upload/f_auto,q_auto/v1768733481/sihID_bhlwxr.jpg"
        ],
        links: [
            { text: "My Winning Post(5K+ Impressions)", url: "https://www.linkedin.com/feed/update/urn:li:activity:7404724182564937729/", icon: FaLinkedin },
            { text: "College Announcement", url: "https://www.linkedin.com/posts/abesit-college-of-engineering_abesit-bestengineeringcollege-prizewinner-activity-7405480017612185600-EuNH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD-rlk8BSDoEFXshfk98aMyBweX8qVNhYD8", icon: FaLinkedin },
            { text: "Venue Winner List", url: "https://www.linkedin.com/posts/iimlucknow-incubator_iiml-eic-grand-finale-sih-2025-activity-7404837683358801922-CrBH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD-rlk8BSDoEFXshfk98aMyBweX8qVNhYD8", icon: MapPin },
        ],
        isClassified: true,
    },
    
];

// --- COMPONENTS ---

const ExpandableText = ({ children, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col items-start w-full">
            <p className={`${className} ${isExpanded ? "" : "line-clamp-3 md:line-clamp-none text-ellipsis"}`}>
                {children}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-bold text-purple-600 dark:text-purple-400 md:hidden flex items-center gap-1 hover:underline active:scale-95 transition-transform"
            >
                {isExpanded ? (
                    <>Read Less <ChevronUp size={14} /></>
                ) : (
                    <>Read More <ChevronDown size={14} /></>
                )}
            </button>
        </div>
    );
};

const ExpandableFeatures = ({ features }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <ul className="space-y-3">
                {features.map((feature, i) => (
                    <li
                        key={i}
                        className={`flex items-start gap-3 text-xs md:text-sm font-bold text-neutral-700 dark:text-neutral-300 ${!isExpanded && i > 2 ? 'hidden md:flex' : 'flex'}`}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1" />
                        {feature}
                    </li>
                ))}
            </ul>

            {features.length > 3 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-3 text-xs font-bold text-purple-600 dark:text-purple-400 md:hidden flex items-center gap-1 hover:underline active:scale-95 transition-transform self-start"
                >
                    {isExpanded ? (
                        <>Read Less <ChevronUp size={14} /></>
                    ) : (
                        <>View All Features <ChevronDown size={14} /></>
                    )}
                </button>
            )}
        </div>
    );
};

// Image Slider - Fixed width constraints
const ImageSlider = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div
            className="relative w-full h-full aspect-video lg:aspect-auto min-h-[200px] sm:min-h-[300px] rounded-2xl overflow-hidden group shadow-xl border border-white/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} highlight`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60" />

            <div className="absolute inset-0 hidden md:flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={prevImage} className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md border border-white/10"><ChevronLeft size={24} /></button>
                <button onClick={nextImage} className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md border border-white/10"><ChevronRight size={24} /></button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full">
                {images.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
                ))}
            </div>
        </div>
    );
};

// Achievement Card - Added min-w-0 to prevent grid blowout
const AchievementCard = ({ data, isActive }) => {
    const { title, subtitle, content, badges, images, links, isClassified } = data;

    return (
        <div
            className={`w-full max-w-7xl mx-auto bg-white/95 dark:bg-[#1a142f]/95 backdrop-blur-3xl rounded-3xl md:rounded-[2.5rem] border transition-all duration-700 overflow-hidden shadow-2xl p-4 sm:p-8 md:p-10
                    ${isActive
                    ? 'border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.15)] opacity-100 scale-100'
                    : 'border-white/10 opacity-30 scale-[0.98] md:scale-95 pointer-events-none grayscale'}`}
        >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8 border-b border-neutral-200 dark:border-white/10 pb-8">

                {/* Header Section - Added min-w-0 */}
                <div className="flex flex-col justify-center order-2 lg:order-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-black border tracking-widest bg-yellow-400 text-yellow-950 border-yellow-500 shadow-md">
                            <Trophy className="w-3 h-3" /> WINNER
                        </span>
                        {badges.map((badge, idx) => (
                            <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border tracking-wider uppercase
                  ${badge.color === 'red' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                    badge.color === 'purple' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                                        'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}>
                                {badge.text}
                            </span>
                        ))}
                    </div>

                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white leading-tight md:leading-[0.9] tracking-tight mb-4 wrap-break-word">
                        {title}
                    </h2>

                    <div className="space-y-1">
                        {Array.isArray(subtitle) ? (
                            subtitle.map((line, index) => (
                                <p key={index} className="text-xs sm:text-sm md:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                    {line}
                                </p>
                            ))
                        ) : (
                            <p className="text-xs sm:text-sm md:text-lg font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>

                {/* Slider Section - Added min-w-0 */}
                <div className="order-1 lg:order-2 w-full min-w-0">
                    <ImageSlider images={images} title={title} />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <div className="p-4 md:p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                        <h4 className="text-sm md:text-base font-black text-red-500 uppercase mb-4 flex items-center gap-2 tracking-tight">
                            <Lock className="w-4 h-4 md:w-5 md:h-5" /> Problem Statement
                        </h4>
                        <ExpandableText className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {content.problem}
                        </ExpandableText>
                    </div>
                    <div className="p-4 md:p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                        <h4 className="text-sm md:text-base font-black text-green-500 uppercase mb-4 flex items-center gap-2 tracking-tight">
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> Solution
                        </h4>
                        <ExpandableText className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {content.solution}
                        </ExpandableText>
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-purple-600/5 dark:bg-purple-500/5 border border-purple-500/10 p-5 md:p-6 rounded-2xl">
                        <h4 className="text-sm md:text-base font-black text-purple-500 uppercase mb-4 flex items-center gap-2 tracking-tight">
                            <Code2 className="w-4 h-4 md:w-5 md:h-5" /> My Contribution
                        </h4>
                        <ExpandableText className="text-sm md:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-semibold">
                            {content.contribution}
                        </ExpandableText>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 md:p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                            <h4 className="text-sm md:text-base font-black text-purple-500 uppercase mb-4 flex items-center gap-2 tracking-tight">
                                <Star className="w-4 h-4 md:w-5 md:h-5" /> Key Features
                            </h4>
                            <ExpandableFeatures features={content.features} />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="p-4 md:p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                                <h4 className="text-sm md:text-base font-black text-neutral-500 uppercase mb-4 tracking-tight flex items-center gap-2">
                                    <Layers className="w-4 h-4 md:w-5 md:h-5" /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {content.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 rounded-md bg-white dark:bg-white/10 text-neutral-800 dark:text-neutral-200 text-[10px] font-black border border-neutral-200 dark:border-white/5 shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 md:p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
                                <h4 className="text-sm md:text-base font-black text-neutral-500 uppercase mb-4 tracking-tight flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" /> Major Posts Links
                                </h4>
                                <div className="flex flex-col gap-2">
                                    {links.map((link, idx) => (
                                        <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:border-purple-500 transition-all border border-neutral-200 dark:border-white/5 group">
                                            <div className="flex items-center gap-2">
                                                <link.icon className="w-4 h-4 text-purple-500" />
                                                <span className="font-bold text-[11px] truncate max-w-[150px]">{link.text}</span>
                                            </div>
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                                {isClassified && (
                                    <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-white/10 flex items-center justify-center gap-1.5 text-[10px] font-black text-amber-600/60 uppercase tracking-tighter">
                                        <Lock className="w-2.5 h-2.5" /> Source Classified (NTRO)
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- MAIN PAGE ---
const Achievement = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % ACHIEVEMENTS_DATA.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + ACHIEVEMENTS_DATA.length) % ACHIEVEMENTS_DATA.length);

    return (
        <section id="achievements" className="py-20 md:py-28 relative overflow-hidden">
            <div ref={containerRef} className="w-full relative z-10">
                <div className="text-center mb-12 md:mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-6xl md:text-7xl font-black mb-6 text-neutral-900 dark:text-neutral-100 tracking-tighter">
                            Major ACHIEVEMENTS
                            <div className="w-24 h-2 bg-linear-to-r from-yellow-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
                    <div className="overflow-visible touch-pan-y">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${activeIndex * 100}%` }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {ACHIEVEMENTS_DATA.map((data, index) => (
                                <div key={data.id} className="w-full shrink-0 px-0 md:px-6">
                                    <AchievementCard data={data} isActive={index === activeIndex} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {ACHIEVEMENTS_DATA.length > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-8 md:absolute md:inset-0 md:mt-0 md:pointer-events-none">
                            <button onClick={prevSlide} className="md:pointer-events-auto md:absolute md:left-5 lg:left-[-60px] p-4 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-white/10 hover:scale-110 active:scale-95 transition-all">
                                <ChevronLeft className="w-6 h-6 text-neutral-800 dark:text-white" />
                            </button>
                            <button onClick={nextSlide} className="md:pointer-events-auto md:absolute md:right-5 lg:right-[-60px] p-4 rounded-full bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-white/10 hover:scale-110 active:scale-95 transition-all">
                                <ChevronRight className="w-6 h-6 text-neutral-800 dark:text-white" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Achievement;