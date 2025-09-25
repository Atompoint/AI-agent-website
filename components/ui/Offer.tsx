import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="mx-auto text-center px-2">
      {/* Heading */}
      <h1
        className="relative z-10 px-2 md:px-0 mt-[0%] md:mt-[2%] md:mb-[1%] text-center md:w-[60%] mx-auto"
        style={{
          fontFamily: 'Basis Grotesque Pro, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(25px, 6vw, 43px)',
          lineHeight: '1.1',
          letterSpacing: '0%',
          color: 'transparent',
          background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',

        }}
      >
        <div>
          <ShinyText text="Limited Time Offer Only A One time Investment Today!" speed={5} className="gradient-white-text" />
        </div>
      </h1>
      <div >
        {/* CTA Button */}
        <div className='py-5'>
          <div className="relative inline-block rounded-full overflow-visible">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>

            {/* Button Background */}
            <div className="relative rounded-full p-[2px]">
              {/* Actual Button */}
              <button className="relative inline-flex items-center justify-center px lg:px-5 py-3 sm:py-4 lg:py-6 cursor-pointer bg-black rounded-full transition-all duration-300 hover:scale-100">
                <p className="GetStarted transition-all duration-300 hover:scale-104 px-4">
                  GET STARTED WITH VOICER - INSTANT ACCESS
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

        {/* Payment Card */}
        <div className="w-full h-full flex justify-center items-center lg:mt-[0.5%]">
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