"use client"; 

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({ error, reset }) {
  
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050414] text-white px-4 text-center">
      
      {/* Icon */}
      <div className="mb-6 p-4 bg-red-500/10 rounded-full border border-red-500/20">
        <AlertTriangle size={48} className="text-red-500" />
      </div>

      <h2 className="text-3xl md:text-4xl font-black mb-3 tracking-tight">
        Something went wrong!
      </h2>
      
      <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
        A critical error occurred while loading this page.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()} 
          className="flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-bold transition-all active:scale-95"
        >
          <RefreshCcw size={18} />
          Try Again
        </button>
        
        <button
          onClick={() => window.location.href = "/"} 
          className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}