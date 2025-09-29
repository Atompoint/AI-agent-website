import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'

const Section12 = () => {
  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="w-full">
        {/* Main Title */}
        <div
          className="relative text-center z-10 mb-4 sm:mb-8 md:mb-9 lg:mb-10"
          style={{
            fontFamily: 'Basis Grotesque Pro, sans-serif',
                         fontWeight: 700,
                         fontSize: 'clamp(25px, 3vw, 60px)',
                         lineHeight: '1.1',
                         margin: '0 0 0 0',
                         
                         letterSpacing: '0%',
                         color: 'transparent',
                         background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                         WebkitBackgroundClip: 'text',
                         backgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
          }}
        >
          <div >
            <ShinyText text="The Only Thing Standing Between" speed={5} className="gradient-white-text" />  
             
          </div>
          <div>
            <ShinyText text="You and More Sales Is This" speed={5} className="gradient-white-text" />
           
            {' '}
            <ShinyText text="One Click" speed={5} className="gradient-mask-text" />  
          </div>
        </div>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 py-0 sm:py-10 md:py-12 lg:py-16">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full subtext1 text-base sm:text-lg md:text-xl order-2 lg:order-1">
            <p>
              If you're on the fence, ask yourself: How much money have you already lost from visitors who left empty-handed?
            </p> 

            <p>
              Every day you wait, your competitors are stealing your customers.
              The math is simple:
            </p>
            
            <p>
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