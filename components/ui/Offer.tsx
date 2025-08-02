import React from 'react'
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from 'next/image'
const Offer = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-6">
          {/* Limited Time Offer Header */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl gradient-white-text font-bold">
              Limited Time Offer
            </h3>
          </div>

          {/* Purple Gradient Subheading */}
          <div className="mb-12">
            <h4 className="text-2xl md:text-3xl font-bold lg:text-4xl">
              <span style={{ wordSpacing: '6px' }} className="gradient-mask-text ">
                Only A One time Investment Today!
              </span>
            </h4>
          </div>

         <div className="mb-8">
  <div className="relative inline-block rounded-full overflow-hidden">
    {/* Actual Button */}
    <button className="relative z-10 inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-medium text-white bg-black rounded-full transition-all duration-300 hover:scale-105">
      GET STARTED WITH VOICER - INSTANT ACCESS
    </button>

    {/* Animated Gradient Border */}
    <ShineBorder
      borderWidth={12}
      
      duration={6}
      shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
    />
  </div>
</div>

         <div className="w-full h-full flex justify-center items-center">
  <Image 
    src="/card.svg" 
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