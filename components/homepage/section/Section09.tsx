import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white px-4 sm:px-6 md:px-8 lg:px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* First Section */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[50px] sm:blur-[65px] md:blur-[80px] lg:blur-[100px] -z-10" />
          
          <div
            className="relative text-center z-10 mb-6 sm:mb-8 md:mb-9 lg:mb-10"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 43px)',
              lineHeight: '0.9',
              letterSpacing: '0%',
              margin: '0 0 1.5rem 0',
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
            <div >
              <ShinyText text="I Hate to Be the Bearer of " speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="Bad News, But" speed={5} className="gradient-white-text" />
            </div>
            <div>
              <ShinyText text="This" speed={5} className="gradient-white-text" />  
              {' '}
              <ShinyText text="Pricing" speed={5} className="gradient-mask-text" />
              {' '}
              <ShinyText text="Disappears After Launch" speed={5} className="gradient-white-text" />
            </div>
          </div>
           
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 items-center py-4 sm:py-6 md:py-7 lg:py-8 px-4 sm:px-6 lg:px-25">
            {/* Left column - text */}
            <div className="space-y-3 sm:space-y-4 md:space-y-4 subtext1 p-2 md:p-3 lg:p-2 text-center lg:text-left order-2 lg:order-1">
              <p>
                As the world's first <strong>smart voice AI</strong>  agent for websites, we're offering 
                this exclusive <strong>founding member discount</strong> to help early adopters get 
                maximum advantage over their competitors.
              </p>
             
              <p>
                Right now, you're looking at the lowest barrier to entry for less than 
                what most agencies spend on one chat <strong>software</strong> in a single month. You 
                can jump on board with your website and watch it immediately 
                start converting <strong>visitors into customers</strong>.
              </p>
              
              <p>
                 No ongoing monthly fees. No long-term contracts. Just one simple 
                 <strong> payment</strong> and your website starts making <strong>money</strong> 24/7.
              </p>

              <p className="subtext1 font-semibold">But you need to act NOW.</p>
             
              <p>
                 After this launch period <strong>ends</strong>, we're transitioning to a monthly 
                 subscription <strong>model</strong>. Don't let this opportunity slip away - get 
                 <strong> VoiceAgent AI</strong> at the lowest price it will ever be offered.
              </p>
            </div>

            {/* Right column - image */}
            <div className="order-1 lg:order-2 mx-auto lg:mx-0">
              <img 
                src="/assets/images/section09/pt1.png" 
                alt="Limited Time Pricing Offer"
                className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[350px] w-full max-w-[400px] lg:w-[450px] object-contain rounded-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div>
          <div
            className="relative text-center z-10 py-8 sm:py-12 md:py-16 lg:py-20"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 43px)',
              lineHeight: '1.1',
              letterSpacing: '0%',
              
              textTransform: 'capitalize',
              color: 'transparent',
              background: 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <div>
              <ShinyText text="Zero Risk," speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="100%" speed={5} className="percentage gradient-white-text" />    
              {' '}
              <ShinyText text="Guarantee" speed={5} className="gradient-mask-text" />
            </div> 
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-30 xl:gap-0 items-center px-4 sm:px-6 lg:px-25">
            <div className="order-1 mx-auto lg:mx-0">
              <img 
                src="/assets/images/section09/pt2.png" 
                alt="14-Day Money Back Guarantee"
                className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-69 w-full max-w-[400px] lg:w-120 object-contain rounded-[10px]"
              />
            </div>
            
            <div className="leading-5 space-y-5 w-full order-2 px-2 md:px-3 lg:px-0 text-center lg:text-left">
              <p className="subtext1">
                We're so confident VoiceAgent AI will <strong>transform your website</strong> into a 
                <strong> conversion machine that we're backing it with our iron-clad 14-Day 
                Money-Back Guarantee</strong>.
              </p>
              
              <p className="subtext1">
                Install it, <strong>test it out</strong>, watch the conversations flow in. If you're not 
                completely satisfied for any reason within 14 days, simply email us 
                and we'll refund every penny. You literally cannot lose.
              </p>
              
              <p className="subtext1">
                Either VoiceAgent AI pays for itself many times over by converting 
                more visitors into customers... or you get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section09