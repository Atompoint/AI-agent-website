import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="mx-auto text-center mb-6 px-12 py-4">
      
      <h2
          className="relative mb-10"
          style={{
            textTransform: 'capitalize',
            color: 'transparent',
            background:
              'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
          }}
        >
          <div className="m-0">
            <ShinyText text="Limited Time Offer" speed={5} className="Heading" />
          </div>
          <div className="m-0 leading-[1]">
            
            <ShinyText text="Only A One time Investment Today!" speed={5} className="Heading gradient-mask-text" />
          </div>
        </h2>

      {/* CTA Button Section */}
      <div className="mb-8">
        <div className="relative inline-block rounded-full overflow-visible">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>
         
          {/* Button Background */}
          <div className="relative rounded-full p-[2px]">
            {/* Actual Button */}
           <button className="relative inline-flex items-center justify-center px-7 py-6 text-[25px]  font-bold text-white bg-black rounded-full  transition-all duration-300 hover:scale-100">
             <p className=" transition-all duration-300 hover:scale-104">GET STARTED WITH VOICER - INSTANT ACCESS</p> 
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
      <div className="w-full h-full flex justify-center items-center">
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