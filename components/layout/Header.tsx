'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";
import Logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';


 
const Header = () => {
  
  return (
    <header className="w-full h-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32 py-4 sm:py-5 md:py-2 lg:py-2 xl:py-0 2xl:py-2 relative z-10 mx-auto">
      {/* Logo */}
      <div>
        <Image 
          src={Logo} 
          alt="Logo"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 xl:h-[95px] xl:w-[95px]"
          priority
        />
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[70px] h-[22px] sm:w-[80px] sm:h-[24px] md:w-[85px] md:h-[25px] xl:w-[90px] xl:h-[26px] 2xl:w-[100px] 2xl:h-[28px] rounded-full ">
        {/* Actual Button */}
        <button className="flex items-center justify-center w-full h-full z-10 relative rounded-full">
          <div className='Button gradient-white-text text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl'>JOIN NOW</div>
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