"use client";

import { useState, useEffect } from "react";
import { WifiOff } from "lucide-react"; 

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial state
    setIsOnline(navigator.onLine);

    // Define handlers
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-99999 flex items-center gap-3 px-5 py-3 bg-red-600/90 backdrop-blur-md text-white rounded-full shadow-2xl animate-bounce">
      <WifiOff size={18} />
      <span className="text-sm font-bold tracking-wide">No Internet Connection</span>
    </div>
  );
};

export default OfflineIndicator;