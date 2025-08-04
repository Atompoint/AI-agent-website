import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';
const Offer = () => {
  return (
    <div className="max-w-4xl mx-auto text-center mb-6">
          {/* Limited Time Offer Header */}
         

 <h2 className="m-auto max-w-[600px] leading-tight text-center ">
  {/* First Line - Normal Text */}
  <ShinyText
    text="Limited Time Offer"
    disabled={false}
    speed={6}
    className="Heading"
  />

  {/* Second Line - With Gradient Text */}
  <ShinyText
    text="Only A One time Investment Today!"
    disabled={false}
    speed={6}
    className="Heading"
  />
</h2>



      

         <div className="mb-8">
  <div className="relative inline-block rounded-full overflow-visible mt-6">
    {/* Glow Effect - Subtle glow that covers borders slightly */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>
   
    {/* Button Background */}
    <div className="relative rounded-full p-[2px] ">
        {/* Actual Button */}
        <button className="relative z-10 inline-flex items-center justify-center px-5 py-6 text-[23px] font-bold text-white rounded-full bg-black transition-all duration-300 hover:text-[24px]">
            GET STARTED WITH VOICER - INSTANT ACCESS
        </button>
    </div>

    {/* Animated Gradient Border (ShineBorder on top) */}
    <ShineBorder
        borderWidth={2}
        duration={16}
        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        className="absolute inset-0 rounded-full pointer-events-none"
    />
</div>
</div>

         <div className="w-full h-full flex justify-center items-center">
  <Image 
    src="/assets/images/card.svg" 
    alt="Payment Card" 
    width={0}
    height={0}
    sizes="100vw"
    className="w-[500px] h-full object-contain"
  />
</div>
        </div>
  )
}

export default Offer