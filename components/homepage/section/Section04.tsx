import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'
import { ShineBorder } from "@/components/magicui/shine-border";

const Section04 = () => {
  return (
    <div className='flex flex-col items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 2xl:px-16 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-8 2xl:py-16'>
    
      {/* Main Heading - Comprehensive responsive typography */}
      <h2 className="flex justify-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl leading-tight text-center max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full">
        <ShinyText 
          text="Introducing VoiceAgent AI" 
          disabled={false} 
          speed={6} 
          className='Heading'
        />
      </h2>
      
      {/* Subtitle - Responsive sizing and spacing */}
      <div className='sub-text text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-base 2xl:text-xl py-4 xs:py-5 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-8 text-center max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[600px] 2xl:max-w-[800px] leading-relaxed'>
        The Game-Changer That's Making "Silent" Websites Extinct
      </div>
    
      {/* Image Container - Fully responsive with optimal sizing for your screen */}
      <div className="relative rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl overflow-hidden z-10 p-[1px] xs:p-[1px] sm:p-1 md:p-1 lg:p-1 xl:p-1 2xl:p-1.5 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-8 2xl:mb-16 w-full max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] 2xl:max-w-[1000px]">
        <Image
          src="/assets/images/main1.png"
          width={900}
          height={600}
          alt="product web image"
          className="object-contain w-full h-auto relative z-10 rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl"
          priority
          sizes="(max-width: 475px) 95vw, (max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 700px, (max-width: 1280px) 800px, (max-width: 1366px) 900px, 1000px"
        />
        <ShineBorder
          borderWidth={1}
          duration={23}
          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
          className="absolute inset-0 rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl pointer-events-none"
        />
      </div>
      
      {/* Down Arrow with responsive spacing */}
      <div className="mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-4 2xl:mt-10">
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section04