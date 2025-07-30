import React from 'react'
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
              <span className="gradient-mask-text ">
                Only A One time Investment Today!
              </span>
            </h4>
          </div>

          {/* CTA Button with Glow Effect */}
          <div className="mb-8">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-medium text-white bg-black rounded-full border-2 border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3),0_0_40px_rgba(147,51,234,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4),0_0_60px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105">
              GET STARTED WITH VOICER - INSTANT ACCESS
            </button>
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