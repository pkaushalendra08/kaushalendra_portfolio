export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#050414]">
      <div className="flex flex-col items-center gap-8">

        {/* Spinner */}
        <div className="relative h-20 w-20">

          {/* Outer Ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-purple-500 animate-spin"
            style={{ animationDuration: "1.6s" }}
          />

          {/* Inner Ring */}
          <div
            className="absolute inset-2 rounded-full border-4 border-transparent border-b-yellow-400 border-l-yellow-400 animate-spin"
            style={{
              animationDuration: "2.4s",
              animationDirection: "reverse",
            }}
          />

          {/* Center Glow */}
          <div className="absolute inset-[42%] bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-pulse" />
        </div>

        {/* Animated Name */}
        <div className="text-center">

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide bg-linear-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Kaushalendra Pratap
          </h1>

          <p className="mt-2 text-xs sm:text-sm tracking-widest text-purple-300 animate-pulse">
            Loading Portfolio...
          </p>

        </div>

      </div>
    </div>
  );
}