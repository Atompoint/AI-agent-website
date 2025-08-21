import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white px-4 sm:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto w-full">
        {/* First Section */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[60px] sm:blur-[80px] lg:blur-[100px] -z-10" />
          
          <div
            className="relative text-center z-10 mb-6 sm:mb-8 lg:mb-10"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 43px)',
              lineHeight: '0.9',
              letterSpacing: '0%',
              margin: '0 0 1.5rem 0',
              padding: '0.2em 0',
            
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
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 items-center py-4 sm:py-6 lg:py-8">
            {/* Left column - text */}
            <div className="space-y-3 sm:space-y-4 subtext1 p-2 order-2 md:order-1">
              <p>
                As the world's first smart voice AI agent for websites, we're offering 
                this exclusive founding member discount to help early adopters get 
                maximum advantage over their competitors.
              </p>
             
              <p >
                Right now, you're looking at the lowest barrier to entry for less than 
                what most agencies spend on one chat software in a single month. You 
                can jump on board with your website and watch it immediately 
                start converting visitors into customers.
              </p>
              
              <p >
                 No ongoing monthly fees. No long-term contracts. Just one simple 
                 payment and your website starts making money 24/7.
              </p>

              <p className="subtext1 font-semibold">But you need to act NOW.</p>
             
              <p>
                 After this launch period ends, we're transitioning to a monthly 
                 subscription model. Don't let this opportunity slip away - get 
                 VoiceAgent AI at the lowest price it will ever be offered.
              </p>
            </div>

            {/* Right column - box */}
            <div className="bg-[#797979] h-[250px] sm:h-[300px] lg:h-[350px] w-full sm:w-[350px] md:w-[400px] lg:w-[450px] rounded-[10px] mx-auto order-1 md:order-2"></div>
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <div
            className="relative text-center z-10 py-8 sm:py-12 lg:py-20"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 43px)',
              lineHeight: '1.1',
              letterSpacing: '0%',
              margin: '0 0 0 0',
              padding: '2rem sm:3rem lg:5rem',
             
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 items-center">
            <div className="bg-[#797979] h-[250px] sm:h-[300px] lg:h-69 w-full sm:w-[350px] md:w-[400px] lg:w-120 rounded-[10px] mx-auto md:mx-0 order-1"></div>
            
            <div className="space-y-3 sm:space-y-4 w-full lg:w-110 order-2">
              <p className="subtext1 leading-relaxed ">
                We're so confident VoiceAgent AI will transform your website into a 
                conversion machine that we're backing it with our iron-clad 14-Day 
                Money-Back Guarantee.
              </p>
              
              <p className="subtext1 leading-relaxed ">
                Install it, test it out, watch the conversations flow in. If you're not 
                completely satisfied for ANY reason within 14 days, simply email us 
                and we'll refund every penny. You literally cannot lose.
              </p>
              
              <p className="subtext1 leading-relaxed ">
                Either VoiceAgent AI pays for itself many times over by converting 
                more visitors into customers... or you get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div >
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section09