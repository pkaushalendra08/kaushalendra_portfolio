"use client";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
   
    <footer className="relative z-50 bg-[#050414] text-white border-t border-white/10 overflow-hidden pb-52 md:pb-8">
      
      {/* Background Glow */}
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col items-center justify-center space-y-4 relative z-10">
        
        {/* 1. Main Credit */}
        <div className="text-center space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-white">
                Kaushalendra Pratap
            </h3>
            <p className="text-xs text-gray-400 tracking-wide">
                Software Developer • India
            </p>
        </div>

        {/* 2. Email Link */}
        <a 
          href="mailto:pkaushalendra08@gmail.com" 
          className="group flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
        >
          <MdEmail className="text-purple-500 group-hover:scale-110 transition-transform" size={16} />
          <span className="text-xs text-gray-300 group-hover:text-white font-medium tracking-wide">
            pkaushalendra08@gmail.com
          </span>
        </a>

        {/* 3. Copyright */}
        <div className="w-full border-t border-white/5 mt-2 pt-3 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Designed & Built by <span className="text-purple-500 font-bold">Kaushalendra Pratap</span> 
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;