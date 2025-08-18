import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="mx-auto text-center mb-6 px-4 sm:px-8 lg:px-12 py-4">
      <div
        className="relative text-center z-10"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(24px, 8vw, 43px)', // Adjusted for better mobile scaling
          lineHeight: '0.9', // Slightly increased for better mobile readability
          letterSpacing: '0%',
          margin: '0 0 -0.5rem 0',
          padding: '0.2em 0',
          textTransform: 'capitalize',
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
          <ShinyText text="Limited Time Offer" speed={5} className="gradient-white-text" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-1 sm:gap-2">
          <ShinyText text="Only A One time" speed={5} className="gradient-mask-text" />
          <ShinyText text="Investment Today!" speed={5} className="gradient-mask-text" />
        </div>
      </div>
      
      <div className='py-4 sm:py-6 lg:py-8'>
        {/* CTA Button Section */}
        <div className="mb-6 sm:mb-8">
          <div className="relative inline-block rounded-full overflow-visible">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>
           
            {/* Button Background */}
            <div className="relative rounded-full p-[2px]">
              {/* Actual Button */}
              <button className="relative inline-flex items-center justify-center px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5 bg-black rounded-full transition-all duration-300 hover:scale-100">
                <p className="GetStarted transition-all duration-300 hover:scale-104 text-xs sm:text-sm lg:text-base text-center">
                  <span className="block sm:hidden">GET STARTED - INSTANT ACCESS</span>
                  <span className="hidden sm:block lg:hidden">GET STARTED WITH VOICER</span>
                  <span className="hidden lg:block">GET STARTED WITH VOICER - INSTANT ACCESS</span>
                </p> 
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
        <div className="w-full h-full flex justify-center items-center -mt-3 sm:-mt-4 lg:-mt-5">
          <Image 
            src="/assets/images/card.svg" 
            alt="Payment Card" 
            width={450}
            height={0}
            className="w-[280px] sm:w-[350px] lg:w-[450px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Offer