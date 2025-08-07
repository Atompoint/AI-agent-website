import React from 'react';

const DownArrow = () => {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Animate this wrapper instead of individual elements - Responsive sizing */}
      <div 
        className="relative w-[120px] h-[120px] xs:w-[140px] xs:h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px] 2xl:w-[240px] 2xl:h-[240px] flex justify-center items-center animate-bounce" 
        style={{ animationDuration: '2s' }}
      >
        
        {/* Glow Behind Arrow - Responsive sizing */}
        <div className="absolute w-[60px] h-[60px] xs:w-[70px] xs:h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] rounded-full bg-[#773DBA] opacity-20 blur-[15px] xs:blur-[16px] sm:blur-[18px] md:blur-[19px] lg:blur-[20px] xl:blur-[20px] 2xl:blur-[25px] z-0" />

        {/* Arrow - Responsive sizing */}
        <svg 
          width="96" 
          height="96"
          viewBox="0 0 438 438" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-[96px] h-[96px] xs:w-[112px] xs:h-[112px] sm:w-[128px] sm:h-[128px] md:w-[144px] md:h-[144px] lg:w-[160px] lg:h-[160px] xl:w-[160px] xl:h-[160px] 2xl:w-[192px] 2xl:h-[192px]"
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