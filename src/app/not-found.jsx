import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050414] text-white px-4 text-center">
      {/* Big 404 Watermark */}
      <h1 className="text-9xl font-black text-white/5 select-none">404</h1>
      
      <div className="absolute flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        {/* Return Home Button */}
        <Link 
          href="/" 
          className="mt-4 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}