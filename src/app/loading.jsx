export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050414]">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-500 animate-spin" 
               style={{ animationDuration: '1.5s' }} />
          {/* Inner Ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-400 border-l-yellow-400 animate-spin" 
               style={{ animationDuration: '2.5s', animationDirection: 'reverse' }} />
          {/* Center Dot */}
          <div className="absolute inset-[42%] bg-white rounded-full shadow-[0_0_15px_white]" />
        </div>
        
        {/* Text */}
        <div className="flex items-center gap-1 text-sm font-bold text-purple-400 tracking-widest">
          INITIALIZING
          <span className="animate-bounce [animation-delay:-0.3s]">.</span>
          <span className="animate-bounce [animation-delay:-0.15s]">.</span>
          <span className="animate-bounce">.</span>
        </div>
      </div>
    </div>
  );
}