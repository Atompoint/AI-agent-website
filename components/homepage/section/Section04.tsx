import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'
import { ShineBorder } from "@/components/magicui/shine-border";

const Section04 = () => {
  return (
    <div className='flex flex-col items-center px-3 sm:px-3 md:px-5 lg:px-12 relative'>
      <div
        className="relative text-center z-10 mt-4 sm:mt-6 md:mt-8 Heading2"
       
      >
        <div>
          <ShinyText text="Introducing" speed={5} className="gradient-white-text inline-block" />
          {' '}
          <ShinyText text="VoiceAgent AI" speed={5} className=" gradient-mask-text inline-block" />
        </div>
      </div> 
      
      {/* Subtitle - Responsive spacing and text */}
      <div 
      style={{
        fontSize: 'clamp(13px, 2.73vw - 19px, 23px)',
        fontWeight: 300,
        color: 'white',
        
      }}
      
      
      className='text-center mt-5 mb-10 '>
        The Game-Changer That's Making "Silent" Websites Extinct
      </div>
      
      {/* Image Container with Glow Effect - Responsive sizing */}
      <div className="relative w-full max-w-[1300px]">
       

        {/* Alternative CSS Glow if image doesn't exist - Responsive sizing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[150px] sm:w-[350px] sm:h-[250px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 sm:opacity-25 md:opacity-30 blur-[50px] sm:blur-[75px] md:blur-[100px] -z-10" />
        
        {/* Main Image with Shine Border - Responsive border and padding */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/assets/images/mainimage.png"
            width={1200}
            height={900}
            alt="product web image"
            className="object-contain h-auto w-full 2xl:w-[1295px] 2xl:h-[745px] relative z-10 rounded-2xl"
            priority
          />
        </div>

      </div>
      
      {/* Down Arrow - Responsive spacing */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section04