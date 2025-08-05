import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-6xl mx-auto text-center mb-4 xs:mb-5 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-16">
      {/* Limited Time Offer Header - Responsive */}
      <h2 className="m-auto max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[600px] 2xl:max-w-[700px] leading-tight text-center">
        {/* First Line - Normal Text */}
        <ShinyText
          text="Limited Time Offer"
          disabled={false}
          speed={6}
          className="Heading text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
        />

        {/* Second Line - With Gradient Text */}
        <ShinyText
          text="Only A One time Investment Today!"
          disabled={false}
          speed={6}
          className="Heading text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
        />
      </h2>

      {/* CTA Button Section - Responsive */}
      <div className="mb-6 xs:mb-7 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-10">
        <div className="relative inline-block rounded-full overflow-visible mt-4 xs:mt-5 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-8">
          {/* Glow Effect - Responsive blur */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm xs:blur-sm sm:blur-md md:blur-md lg:blur-lg xl:blur-sm 2xl:blur-lg opacity-50 scale-100"></div>
         
          {/* Button Background - Responsive padding */}
          <div className="relative rounded-full p-[1px] xs:p-[1.5px] sm:p-[2px] md:p-[2px] lg:p-[2px] xl:p-[2px] 2xl:p-[3px]">
            {/* Actual Button - Comprehensive responsive sizing */}
            <button className="relative z-10 inline-flex items-center justify-center px-3 xs:px-4 sm:px-4 md:px-5 lg:px-5 xl:px-5 2xl:px-6 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-6 xl:py-6 2xl:py-7 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] 2xl:text-2xl font-bold text-white rounded-full bg-black transition-all duration-300 hover:text-[13px] xs:hover:text-[15px] sm:hover:text-[17px] md:hover:text-[20px] lg:hover:text-[22px] xl:hover:text-[24px] 2xl:hover:text-[26px] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">GET STARTED</span>
              <span className="hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden">GET STARTED - ACCESS</span>
              <span className="hidden lg:block xl:hidden 2xl:hidden">GET STARTED WITH VOICER</span>
              <span className="hidden xl:block 2xl:hidden">GET STARTED WITH VOICER - INSTANT ACCESS</span>
              <span className="hidden 2xl:block">GET STARTED WITH VOICER - INSTANT ACCESS</span>
            </button>
          </div>

          {/* Animated Gradient Border - Responsive border width */}
          <ShineBorder
            borderWidth={2}
            duration={16}
            shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            className="absolute inset-0 rounded-full pointer-events-none"
          />
        </div>
      </div>

      {/* Payment Card Image - Comprehensive responsive sizing */}
      <div className="w-full h-full flex justify-center items-center">
        <Image 
          src="/assets/images/card.svg" 
          alt="Payment Card" 
          width={0}
          height={0}
          sizes="(max-width: 475px) 280px, (max-width: 640px) 320px, (max-width: 768px) 360px, (max-width: 1024px) 400px, (max-width: 1280px) 450px, (max-width: 1366px) 500px, 550px"
          className="w-[280px] xs:w-[320px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  )
}

export default Offer