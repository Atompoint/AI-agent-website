'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";


 
const Header = () => {
  
  return (
    <header className="w-full h-auto flex justify-between items-center px-28 py-6 relative z-10 mx-auto">
      {/* Logo */}
      <div className="text-[25px] leading-tight font-medium">
        
        <div className='font-logo gradient-white-text'>Voice Ai</div>
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[100px] h-[28px] rounded-full overflow-hidden">
        {/* Actual Button */}
        <button className="w-full h-full  text-[10px] font-medium tracking-widest z-10 relative rounded-full">
          
          <div className='font-radio gradient-white-text'>JOIN NOW</div>
        </button>

        {/* Shimmer Border */}
        <ShineBorder
          borderWidth={2}
          duration={6}
          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        />
      </div>
    </header>
  );
};

export default Header;