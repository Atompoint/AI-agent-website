import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';

const Section12 = () => {
  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Main Title */}
        <div
          className="relative text-center z-10 mb-6 sm:mb-8 md:mb-9 lg:mb-10"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: 'clamp(18px, 4vw, 43px)',
            lineHeight: '0.85',
            letterSpacing: '0%',
            margin: '0 0 1.5rem 0',
            padding: '0 0',
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
          <div className="mb-1 sm:mb-2">
            <ShinyText text="The Only Thing Standing" speed={5} className="gradient-white-text" />  
            {' '}
            <ShinyText text="Between" speed={5} className="gradient-white-text" />  
          </div>
          <div>
            <ShinyText text="You and More Sales" speed={5} className="gradient-white-text" />
            {' '}
            <ShinyText text="Is This" speed={5} className="gradient-white-text" />  
            {' '}
            <ShinyText text="One Click" speed={5} className="gradient-mask-text" />  
          </div>
        </div>  

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-1 py-6 sm:py-8 md:py-9 lg:py-10">
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-3.5 md:space-y-4 w-full lg:w-100 subtext1 text-sm sm:text-base order-2 lg:order-1">
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

          {/* Image Placeholder */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="bg-[#797979] h-64 w-full max-w-sm sm:h-72 sm:max-w-md md:h-80 md:max-w-lg lg:h-95 lg:w-[480px] rounded-[10px]"></div>
          </div>
        </div>
      </div>
      <DownArrow/>
    </div>
  )
}

export default Section12