import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'

const Section12 = () => {
  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-5 2xl:px-4">
      <div className="w-full">
        {/* Main Title */}
        <h1
          className="relative text-center z-10 mb-4 max-w-[271px] mx-auto sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1200px] sm:mb-8 md:mb-9 lg:mb-10 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2"
         
        >
          <div >
            <ShinyText text="The Only Thing Standing Between You" speed={5} className="gradient-white-text" />  
             
          </div>
          <div>
            <ShinyText text="and More Sales Is This" speed={5} className="gradient-white-text inline-block" />
           
            {' '}
            <ShinyText text="One Click" speed={5} className="gradient-mask-text inline-block" />  
          </div>
        </h1>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:px-12 md:px-15 lg:px-0 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 py-0 sm:py-4 md:py-6 max-w-[1700px] items-center justify-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-4 md:space-y-5 w-full text-center lg:text-left 2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-7 font-light order-2 lg:order-1">
            <p>
              If you're on the fence, ask yourself: How much money have you already lost from visitors who left empty-handed?
            </p> 

            <p>
            Every day you wait, your competitors are stealing your customers.
            The math is simple:
            <br/>
              <span className='font-semibold'>
                Keep doing nothing = Keep losing 67% of visitors
                Add VoiceAgent AI = Start converting them into customers
              </span>
            </p>

            <p>
              You're one click away from a 24/7 sales machine. This isn't just another tool—it's the difference between a website that costs you money and one that makes you money.
            </p>

            <p>This deal disappears after launch.</p>

            <p>
              Stay stuck with a silent website that bleeds sales, or start dominating your competition. Don't let another visitor walk away
            </p>
            
            <p>
              Click below and start converting today.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 w-full">
            <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px] 2xl:h-[520px] rounded-[12px] overflow-hidden">
              <Image
                src="/assets/images/fence.png"
                alt="24/7 Sales Machine"
                fill
                className="object-contain rounded-[12px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <DownArrow/>
    </div>
  )
}

export default Section12