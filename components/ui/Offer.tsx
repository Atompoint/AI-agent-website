import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="mx-auto text-center mb-6 px-12 py-4">





          <div
  className="relative text-center z-10 mb-10"
  style={{
   
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}
>
<div>
            <ShinyText text="Limited Time Offer" speed={5} className="Heading2 gradient-white-text" />
          </div>
          <div>
            
            <ShinyText text="Only A One time Investment Today!" speed={5} className="Heading2 gradient-mask-text" />
          </div>
</div>

      {/* CTA Button Section */}
      <div className="mb-8">
        <div className="relative inline-block rounded-full overflow-visible">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>
         
          {/* Button Background */}
          <div className="relative rounded-full p-[2px]">
            {/* Actual Button */}
           <button className="relative inline-flex items-center justify-center px-5 py-6  bg-black rounded-full  transition-all duration-300 hover:scale-100">
             <p className="GetStarted transition-all duration-300 hover:scale-104">GET STARTED WITH VOICER - INSTANT ACCESS</p> 
            </button>
          </div>

          {/* Animated Gradient Border */}
          <ShineBorder
            borderWidth={2}
            duration={9}
            shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            className="absolute inset-0 rounded-full pointer-events-none"
          />
        </div>
      </div>

      {/* Payment Card Image */}
      <div className="w-full h-full flex justify-center items-center -mt-5">
        <Image 
          src="/assets/images/card.svg" 
          alt="Payment Card" 
          width={450}
          height={0}
          className="w-[450px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  )
}

export default Offer