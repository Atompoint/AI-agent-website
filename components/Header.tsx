'use client';
import React from 'react';

const Header = () => {
  return (
    <div className="min-h-screen flex  justify-between px-6 pt-8 relative z-10 space-y-12">
      {/* Logo */}
      <div
        className="text-[32px] sm:text-[48px] lg:text-[40px] leading-tight font-normal capitalize text-transparent bg-clip-text"
        style={{
          backgroundImage:
            'linear-gradient(95.14deg, #50525F 4.45%, #FFFFFF 29.02%, #FFFFFF 60.85%, #9698A6 95.61%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Questrial, sans-serif',
        }}
      >
        Voice Ai
      </div>

      {/* Button */}
      <div className="relative w-[180px] h-[56px]">
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
        <div className="absolute inset-[4px] bg-black rounded-full z-[1]" />

        {/* Button Text */}
        <button className="relative z-[2] w-full h-full bg-transparent text-white font-bold text-[16px] rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center">
          JOIN NOW
        </button>
      </div>

      {/* Keyframe Styles */}
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
          animation: spin-cw 4s linear infinite;
        }

        .animate-spin-cw-delayed {
          animation: spin-cw 4s linear infinite;
          animation-delay: 1.9s;
        }
      `}</style>
    </div>
  );
};

export default Header;
