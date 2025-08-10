import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'
import { ShineBorder } from "@/components/magicui/shine-border";

const Section04 = () => {
  return (
    <div className='flex flex-col items-center px-12 relative'>
   <div
  className="relative text-center z-10 mt-8"
  style={{
     textTransform: 'capitalize',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    
  }}
>
<div className="flex items-center justify-center space-x-3">
          <ShinyText text="Introducing" speed={5} className="Heading2 gradient-white-text" />
          {' '}
          <ShinyText text="VoiceAgent AI" speed={5} className="Heading2 gradient-mask-text" />
        </div>
</div> 
     
      
      {/* Subtitle - Fixed size */}
      <div className='subtext1 text-center py-5 mb-5'>
        The Game-Changer That's Making "Silent" Websites Extinct
      </div>
      
      {/* Image Container with Glow Effect */}
      <div className="relative w-full max-w-[900px]">
        {/* Glow Image - positioned behind main image */}
        <div className="absolute top-[-3rem] w-full h-full left-1/2 transform -translate-x-1/2 z-0">
          <Image
            src="/assets/images/glow.png"
            width={1200}
            height={900}
            alt="glow effect"
            className="object-contain opacity-80 w-full h-auto"
          />
        </div>

        {/* Alternative CSS Glow if image doesn't exist */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[100px] -z-10" />
        
        {/* Main Image with Shine Border */}
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
            className="object-contain w-full h-auto relative z-10 rounded-2xl"
            priority
          />
        </div>
      </div>
      
      {/* Down Arrow - Fixed spacing */}
      <div >
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section04