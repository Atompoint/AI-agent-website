'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";
import Logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';


 
const Header = () => {
  
  return (
    <header className="w-full h-auto flex justify-between items-center px-6 sm:px-12 md:px-16 lg:px-20 py-6 sm:py-6 md:py-6 lg:py-6 relative z-10 mx-auto">
      {/* Logo */}
      <div>
        
       <Image src={Logo} alt="Logo"  height={94} width={94}/>
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[105px] h-[30px] rounded-full overflow-hidden">
        {/* Actual Button */}
        <button className="flex items-center justify-center w-full h-full  z-10 relative rounded-full">
          
          <div style={{fontSize: 13,

letterSpacing: 1,

}} className=' gradient-white-text font-extrabold'>JOIN NOW</div>
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