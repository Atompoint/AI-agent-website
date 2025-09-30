import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

const Offer = () => {
  return (
    <div className="mx-auto text-center ">
      {/* Heading */}
      <h1
        className="relative z-10 text-center mx-auto px-4 Heading2"
      
      >
        <div>
          <ShinyText text="Limited Time Offer" speed={5} className="gradient-white-text pb-0" />
        </div>
        <div> <ShinyText text="Only A One time Investment Today!" speed={5} className="gradient-mask-text" /></div> 
      </h1>
      <div >
        {/* CTA Button */}
        <div className='py-5 2xl:py-10'>
          <div className="relative inline-block rounded-full overflow-visible">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>

            {/* Button Background */}
            <div className="relative rounded-full p-[4px]">
              {/* Actual Button */}
              <button className="relative inline-flex 2xl:w-[818px] 2xl:h-[116px] xl:w-[595px] xl:h-[83px] w-[250px] h-[60px] sm:w-[400px] sm:h-[60px] md:w-[525px] md:h-[75px] lg:w-[600px] lg:h-[80px] items-center justify-center  cursor-pointer bg-black rounded-full transition-all duration-300 hover:scale-100">
                <p 
               
                className="transition-all duration-300 hover:scale-101 2xl:text-[35px] xl:text-[25px] sm:text-[18px] text-[15px]  md:text-[22px] lg:text-[25px] font-extrabold">
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
        <div className="w-full h-full flex justify-center items-center ">
          <Image
            src="/assets/images/card.svg"
            alt="Payment Card"
            width={450}
            height={0}
            className="w-[200px] sm:w-[340px] md:w-[425px] xl:w-[530px] lg:w-[428px] 2xl:w-[590px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Offer