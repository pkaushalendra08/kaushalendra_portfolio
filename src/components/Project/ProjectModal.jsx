"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Star, Info, Code2, CheckCircle2, ChevronDown, Layers } from "lucide-react"; 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- 1. SCROLL LOCK ---
const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isLocked]);
};

// --- 2. ACCORDION ITEM (Mobile) ---
const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => (
  <div className="border-b border-neutral-100 dark:border-white/5 last:border-0">
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-5 text-left group"
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className={`transition-colors ${isOpen ? 'text-purple-600' : 'text-neutral-400'}`} />
        <span className={`text-sm font-bold uppercase tracking-wider ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
          {title}
        </span>
      </div>
      <ChevronDown 
        size={16} 
        className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-600' : ''}`} 
      />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pb-6 pt-2 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- 3. DESKTOP SECTION HEADER ---
const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-2 mb-4 text-purple-600 dark:text-purple-400 border-b border-neutral-100 dark:border-white/5 pb-2">
    <Icon size={18} />
    <h3 className="text-xs font-bold uppercase tracking-widest">{title}</h3>
  </div>
);

// --- 4. MAIN MODAL ---
const ProjectModal = ({ project, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [openSection, setOpenSection] = useState("about");

  useBodyScrollLock(!!project);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const galleryImages = project?.images?.length > 0 
    ? project.images 
    : (project?.snapshot ? [project.snapshot] : []);

  if (!mounted || !project) return null;

  return createPortal(
    <AnimatePresence>
      <div className="
        fixed inset-0 z-9999 
        flex justify-center           
        items-start pt-10             
        md:items-center md:pt-0
      ">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="
            relative 
            w-[90%] max-h-[85%]
            
            /* MOBILE: Moves it up */
            mb-20  
            
            /* DESKTOP: Resets margins so it centers perfectly */
            md:mb-0 md:w-full md:h-[650px] md:max-w-6xl
            
            bg-white dark:bg-[#0f0f0f] 
            rounded-2xl md:rounded-3xl shadow-2xl 
            overflow-y-auto md:overflow-hidden
            flex flex-col md:flex-row
          "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-transform hover:scale-110 active:scale-95 border border-white/10"
          >
            <IoClose size={22} />
          </button>

          {/* ============================== */}
          {/* DESKTOP VIEW (GRID)      */}
          {/* ============================== */}
          <div className="hidden md:flex w-full h-full">
            
            {/* LEFT COLUMN: Images (Top) + Key Features (Bottom) */}
            <div className="w-[60%] h-full flex flex-col border-r border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-[#121212]">
              
              {/* Top: Image Carousel (Fixed Height) */}
              <div className="relative w-full h-[400px] bg-black group">
                 <Carousel setApi={setApi} className="w-full h-full">
                    <CarouselContent className="h-full ml-0">
                      {galleryImages.map((img, index) => (
                        <CarouselItem key={index} className="h-full pl-0 relative">
                           {/* Blur Back */}
                           <div className="absolute inset-0 z-0">
                              <Image src={img} alt="" fill className="object-cover opacity-40 blur-3xl scale-110" />
                           </div>
                           {/* Main Image */}
                           <div className="relative z-10 w-full h-full">
                             <Image src={img} alt="" fill className="object-contain" priority={index === 0} />
                           </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {galleryImages.length > 1 && (
                      <>
                        <CarouselPrevious className="left-4 bg-black/20 text-white border-transparent hover:bg-black/60" />
                        <CarouselNext className="right-4 bg-black/20 text-white border-transparent hover:bg-black/60" />
                      </>
                    )}
                 </Carousel>
                 {/* Pagination Dots */}
                 {count > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full z-20 border border-white/10">
                    {Array.from({ length: count }).map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${i === current - 1 ? "bg-white w-6" : "bg-white/40 w-1.5"}`} />
                    ))}
                  </div>
                 )}
              </div>

              {/* Bottom: Key Features (Scrollable if needed) */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <SectionTitle title="Key Features" icon={Star} />
                <ul className="grid grid-cols-2 gap-4">
                  {project.features?.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start p-3 rounded-xl bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/5 shadow-sm">
                      <CheckCircle2 size={18} className="text-purple-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Description (Top) + Tech Stack (Bottom) */}
            <div className="w-[40%] h-full flex flex-col bg-white dark:bg-[#0f0f0f]">
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                
                {/* Header Info */}
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">
                    {project.title}
                  </h2>
                  
                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-500/20 active:scale-95"
                      >
                        <BsBoxArrowUpRight size={16} /> Live Demo
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl font-bold text-sm transition-all hover:bg-neutral-200 dark:hover:bg-neutral-700 active:scale-95"
                    >
                      <FaGithub size={16} /> Source Code
                    </Link>
                  </div>

                  {/* Overview */}
                  <SectionTitle title="Overview" icon={Info} />
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed whitespace-pre-line mb-8">
                    {project.longDescription || project.description}
                  </p>

                  {/* Tech Stack */}
                  <SectionTitle title="Technologies Used" icon={Code2} />
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5 rounded-lg border border-neutral-200 dark:border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ============================== */}
          {/* MOBILE VIEW (STACK)     */}
          {/* ============================== */}
          <div className="md:hidden flex flex-col h-auto bg-white dark:bg-[#0f0f0f]">
            
            {/* 1. Image Carousel (Top Fixed) */}
            <div className="w-full h-[35vh] bg-black shrink-0 relative">
               <Carousel setApi={setApi} className="w-full h-full">
                  <CarouselContent className="h-full ml-0">
                    {galleryImages.map((img, index) => (
                      <CarouselItem key={index} className="h-full pl-0 relative">
                         <div className="relative w-full h-full bg-black">
                           {/* FIX: Changed object-cover to object-contain */}
                           <Image src={img} alt="" fill className="object-contain" priority={index === 0} />
                         </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
               </Carousel>
               {count > 1 && (
                  <div className="absolute bottom-3 left-3 flex gap-1.5 px-2 py-1 bg-black/50 rounded-full z-20">
                    {Array.from({ length: count }).map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all ${i === current - 1 ? "bg-white w-4" : "bg-white/40 w-1"}`} />
                    ))}
                  </div>
               )}
            </div>

            {/* 2. Scrollable Content */}
            <div className="block">
              <div className="px-10 py-6"> 
                
                <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-xs font-medium text-neutral-500 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Mobile Buttons */}
                <div className="flex gap-3 mb-8">
                   {project.live && (
                      <Link href={project.live} target="_blank" className="flex-1 py-3 bg-purple-600 text-white rounded-xl text-center font-bold text-sm shadow-lg shadow-purple-500/20">
                        Live Demo
                      </Link>
                   )}
                   <Link href={project.github} target="_blank" className="flex-1 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl text-center font-bold text-sm">
                      GitHub
                   </Link>
                </div>

                {/* Accordions */}
                <AccordionItem title="Overview" icon={Info} isOpen={openSection === 'about'} onClick={() => toggleSection('about')}>
                   <p className="whitespace-pre-line">{project.longDescription || project.description}</p>
                </AccordionItem>

                <AccordionItem title="Tech Stack" icon={Layers} isOpen={openSection === 'tech'} onClick={() => toggleSection('tech')}>
                   <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-white/5 rounded-md border border-neutral-200 dark:border-white/5">
                          {tag}
                        </span>
                      ))}
                   </div>
                </AccordionItem>

                <AccordionItem title="Key Features" icon={Star} isOpen={openSection === 'features'} onClick={() => toggleSection('features')}>
                   <ul className="space-y-3">
                      {project.features?.map((feature, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                   </ul>
                </AccordionItem>

                <div className="h-8" /> 
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;