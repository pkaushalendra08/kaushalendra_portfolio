"use client";
import React, { useState } from 'react';
import certificates from './CertificateData';

const CertificateSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleViewClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificate" className="py-20 md:py-25 text-[#3b2e68] dark:text-[#d6ccff] font-inter">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
          My Certificates
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <style>
          {`
            @keyframes scroll-left {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-scroll {
              animation: scroll-left 30s linear infinite;
            }
            .animate-scroll.paused {
              animation-play-state: paused;
            }
            .certificate-container:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}
        </style>

        <div
          className="relative w-full overflow-hidden py-4 rounded-xl shadow-lg bg-[#cdb3f4] dark:bg-[#161924]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="px-4">
            <div
              className={`flex flex-nowrap certificate-container ${isPaused ? 'paused' : 'animate-scroll'}`}
            >
              {certificates.concat(certificates).map((certificate, index) => (
                <div
                  key={`${certificate.id}-${index}`}
                  className="flex-none w-80 md:w-96 p-4 mx-2 bg-[#b59ef7] dark:bg-[#1e1e2e] rounded-xl shadow-xl transform transition duration-300 hover:scale-105 flex flex-col border-2 border-[#8a6efb]"
                >
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.name}
                    className="w-full h-48 object-cover rounded-lg mb-4 border border-[#a392dc]"
                  />
                  <div className="grow">
                    <h3 className="text-xl font-bold mb-2 text-[#131213] dark:text-[#9990c2]">{certificate.name}</h3>
                    <p className="text-sm text-[#0b0b0c] dark:text-[#c5b9ff] mb-1">
                      <span className="font-semibold">Issuer:</span> {certificate.issuer}
                    </p>
                    <p className="text-sm text-[#0b0b0c] dark:text-[#c5b9ff] mb-4">
                      <span className="font-semibold">Date:</span> {certificate.date}
                    </p>
                  </div>
                  <button
                    onClick={() => handleViewClick(certificate.viewUrl)}
                    className="w-full py-2 px-4 bg-linear-to-r from-[#6335b3] to-[#4fc3f7] text-white font-semibold rounded-lg shadow-md hover:from-[#6a30e8] hover:to-[#36b2ee] focus:outline-none focus:ring-2 focus:ring-[#8245ec] focus:ring-opacity-75 transition duration-300 mt-auto"
                  >
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
