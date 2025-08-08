import React from 'react';

const DownArrow = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      {/* Animate this wrapper instead of individual elements - Responsive sizing */}
      <div 
        className="relative w-[200px] h-[200px] flex justify-center items-center animate-bounce" 
        style={{ animationDuration: '2s' }}
      >
        
        {/* Glow Behind Arrow - Responsive sizing */}
        <div className="absolute w-[60px] h-[60px] rounded-full bg-[#773DBA] opacity-60 blur-[40px] z-0" />

        {/* Arrow - Responsive sizing */}
        <svg 
          width="96" 
          height="96"
          viewBox="0 0 438 438" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-[200px] h-[200px]"
        >
          <path 
            d="M219 270.726L270 219.863V230.137L219 281L168 230.137V219.863L219 270.726ZM270 169L219 219.863L168 169V179.274L219 230.137L270 179.274V169Z" 
            fill="url(#paint0_linear_downarrow)"
          />
          <defs>
            <linearGradient 
              id="paint0_linear_downarrow" 
              x1="281.657" 
              y1="135.189" 
              x2="301.269" 
              y2="277.69" 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0451029" stopColor="#1F0B46"/>
              <stop offset="0.290022" stopColor="#DEBFFF"/>
              <stop offset="0.580247" stopColor="#5A27B1"/>
              <stop offset="0.924983" stopColor="#BF84F9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default DownArrow;