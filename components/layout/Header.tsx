'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";
import Logo from '@/public/assets/icons/logo.svg';
import Image from 'next/image';


 
const Header = () => {
  
  return (
    <header className="w-full h-auto flex justify-between items-center px-24 py-6 relative z-10 mx-auto">
      {/* Logo */}
      <div>
        
       <Image src={Logo} alt="Logo"  height={95} width={95}/>
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[90px] h-[26px] rounded-full overflow-hidden">
        {/* Actual Button */}
        <button className="flex items-center justify-center w-full h-full  z-10 relative rounded-full">
          
          <div className='Button gradient-white-text'>JOIN NOW</div>
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