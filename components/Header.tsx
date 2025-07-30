'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 relative z-10 max-w-7xl mx-auto">
      {/* Logo */}
      <div
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-tight font-logo capitalize text-transparent bg-clip-text"
        style={{
          backgroundImage:
            'linear-gradient(95.14deg, #50525F 4.45%, #FFFFFF 29.02%, #FFFFFF 60.85%, #9698A6 95.61%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        
        }}
      >
        Voice Ai
      </div>

      {/* Button */}
      <div className="relative w-[120px] h-[40px] sm:w-[125px] sm:h-[42px] md:w-[135px] md:h-[44px] lg:w-[140px] lg:h-[48px]">
        {/* Spinning Trails */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 rounded-full">
            {/* Trail 1 - clockwise from 0deg */}
            <div
              className="absolute inset-0 rounded-full animate-spin-cw"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 70%, #C67DFF 80%, #3420C6 90%, transparent 100%)',
                filter: 'blur(6px)',
              }}
            />
            {/* Trail 2 - clockwise from 180deg (opposite side) */}
            <div
              className="absolute inset-0 rounded-full animate-spin-cw-delayed"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 65%, #C67DFF 75%, #3420C6 85%, transparent 100%)',
                filter: 'blur(5px)',
              }}
            />
          </div>
        </div>

        {/* Inner black button core */}
        <div className="absolute inset-[2px] sm:inset-[3px] md:inset-[4px] bg-black rounded-full z-[1]" />

        {/* Button Text */}
        <button 
          className="relative z-[2] w-full h-full bg-transparent gradient-white-text font-medium text-xs sm:text-sm md:text-[14px] rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          aria-label="Join Now"
         
        >
          JOIN NOW
        </button>
      </div>

      <style jsx>{`
        @keyframes spin-cw {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-cw {
          animation: spin-cw 5s linear infinite;
        }

        .animate-spin-cw-delayed {
          animation: spin-cw 5s linear infinite;
          animation-delay: 2.5s;
        }
      `}</style>
    </header>
  );
};

export default Header;