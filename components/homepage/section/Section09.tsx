import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* First Section */}
        <section className="relative">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] lg:w-[800px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[50px] sm:blur-[65px] md:blur-[80px] lg:blur-[100px] -z-10" />
          
          {/* Section Header */}
          <div
            className="relative text-center z-10 mb-8 sm:mb-10 md:mb-12 lg:mb-16 2xl:mb-20"
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
            <div>
              <ShinyText text="I Hate to Be the Bearer of Bad News, But" speed={5} className="gradient-white-text" />
             
            </div>
            <div>
              <ShinyText text="This" speed={5} className="gradient-white-text" />  
              {' '}
              <ShinyText text="Pricing" speed={5} className="gradient-mask-text" />
              {' '}
              <ShinyText text="Disappears After Launch" speed={5} className="gradient-white-text" />
            </div>
          </div>
           
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-8 items-center px-4 sm:px-6 lg:px-8">
            {/* Left column - text */}
            <div className="space-y-4 sm:space-y-5 subtext1 text-center lg:text-left order-2 lg:order-1">
              <p>
                As the world's first <strong>smart voice AI</strong> agent for websites, we're offering 
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
            <div className="order-1 lg:order-2 flex justify-center lg:justify-centre">
              <img 
                src="/assets/images/section09/pt1.png" 
                alt="Limited Time Pricing Offer"
                className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section >
          {/* Section Header */}
          <div
            className="relative text-center z-10 py-8 sm:py-10 md:py-12 lg:py-16 2xl:py-20"
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
            <div>
              <ShinyText text="Zero Risk," speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="100%" speed={5} className="percentage gradient-white-text" />    
              {' '}
              <ShinyText text="Guarantee" speed={5} className="gradient-mask-text" />
            </div> 
          </div>

          {/* Content Grid */}
          <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-[72rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            {/* Left column - image */}
            <div className="order-1 flex justify-center ">
              <img 
                src="/assets/images/section09/pt2.png" 
                alt="14-Day Money Back Guarantee"
                className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
            
            {/* Right column - text */}
            <div className="space-y-4 sm:space-y-5 order-2 text-center lg:text-left w-full max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 2xl:max-w-[650px] mx-auto lg:mx-0">
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
        </section>
        
      </div>
      
      {/* Down Arrow */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <DownArrow />
      </div>
    </div>
  )
}

export default Section09