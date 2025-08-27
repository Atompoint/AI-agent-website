import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'
import { ShineBorder } from "@/components/magicui/shine-border";

const Section04 = () => {
  return (
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 relative'>
      <div
        className="relative text-center z-10 mt-4 sm:mt-6 md:mt-8"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(20px, 5vw, 43px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
          margin: '0 0 -0.5rem 0',
          padding: '0.2em 0',
         
          color: 'transparent',
          background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div>
          <ShinyText text="Introducing" speed={5} className="gradient-white-text" />
          {' '}
          <ShinyText text="VoiceAgent AI" speed={5} className=" gradient-mask-text" />
        </div>
      </div> 
      
      {/* Subtitle - Responsive spacing and text */}
      <div className='subtext1 text-center py-3 sm:py-4 md:py-5 mb-3 sm:mb-4 md:mb-5 '>
        The Game-Changer That's Making "Silent" Websites Extinct
      </div>
      
      {/* Image Container with Glow Effect - Responsive sizing */}
      <div className="relative w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
       

        {/* Alternative CSS Glow if image doesn't exist - Responsive sizing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[150px] sm:w-[350px] sm:h-[250px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 sm:opacity-25 md:opacity-30 blur-[50px] sm:blur-[75px] md:blur-[100px] -z-10" />
        
        {/* Main Image with Shine Border - Responsive border and padding */}
        <div className="relative rounded-2xl overflow-hidden z-10 p-0.5 w-full">
        <ShineBorder
                        borderWidth={2}
                        duration={23}
                        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                      />
                      <Image
                        src="/assets/images/main1.png"
                        width={1200}
                        height={900}
                        alt="product web image"
                        className="object-contain w-full h-auto relative z-10 sm:rounded-xl rounded-2xl"
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