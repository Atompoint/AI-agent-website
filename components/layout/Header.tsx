'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";
import Logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';

const Header = () => {
  return (
<header className="w-full h-auto flex justify-between items-center relative z-10 mx-auto pt-7 max-w-[200px] sm:max-w-[470px] md:max-w-[620px] lg:max-w-[854px] xl:max-w-[1200px] 2xl:max-w-[1750px]">

      <div className="w-20 sm:w-24 md:w-28 xl:w-[93px] 2xl:w-[130px]">
        <Image 
          src={Logo} 
          alt="Logo" 
          className="w-full h-auto" 
          priority
        />
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[110px] h-[40px] sm:w-[120px] sm:h-[42px] md:w-[133px] md:h-[45px] xl:w-[133px] xl:h-[41px] 2xl:w-[187px] 2xl:h-[57px] rounded-full overflow-hidden">
        <button className="flex items-center justify-center w-full h-full z-10 relative rounded-full">
          <div className="text-xs sm:text-sm md:text-[14.23px] 2xl:text-[20px] font-extrabold gradient-white-text" style={{letterSpacing: '1px'}}>
            JOIN NOW
          </div>
        </button>
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