import React from 'react'
import DownArrow from '../../ui/DownArrow';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white py-16 ">
      <div className="max-w-6xl mx-auto">
        {/* First Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-12 leading-tight">
            I Hate to Be the Bearer of Bad News, But<br />
            This <span className="gradient-mask-text">Pricing</span> Disappears After Launch
          </h2>
          
       <div className="grid md:grid-cols-2 gap-4 items-center px-17 py-8">
          {/* Left column - text */}
          <div className="space-y-4 text-gray-300 w-122 p-2">
            <p>As the world's first smart voice AI agent for websites, we're offering 
            this exclusive founding member discount to help early adopters get 
            maximum advantage over their competitors.</p>
           
            <p>
              Right now, you're looking at the lowest barrier to entry for less than 
              what most agencies spend on one chat software in a single month. You 
              can jump on board with your website and watch it immediately 
              start converting visitors into customers.
            </p>
            
            <p>
               No ongoing monthly fees. No long-term contracts. Just one simple 
               payment and your website starts making money 24/7.
            </p>

            <p>But you need to act NOW.</p>
           
            <p>
               After this launch period ends, we're transitioning to a monthly 
               subscription model. Don't let this opportunity slip away - get 
               VoiceAgent AI at the lowest price it will ever be offered.
            </p>
           
          </div>

          {/* Right column - box */}
          <div className="bg-[#797979] h-[400px] w-[500px] rounded-[10px] mx-auto md:mx-0"></div>
          
        </div>

        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium text-center mb-22">
            Zero Risk, 100% <span className="gradient-mask-text">Guarantee</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-0 items-center ">
            <div className="bg-[#797979] h-69 w-120 rounded-[10px]"></div>
            
            <div className="space-y-4 text-gray-300 w-120 my-12">
              <p className="text-sm leading-relaxed">
                We're so confident VoiceAgent AI will transform your website into a 
                conversion machine that we're backing it with our iron-clad 14-Day 
                Money-Back Guarantee.
              </p>
              
              <p className="text-sm leading-relaxed">
                Install it, test it out, watch the conversations flow in. If you're not 
                completely satisfied for ANY reason within 14 days, simply email us 
                and we'll refund every penny. You literally cannot lose.
              </p>
              
              <p className="text-sm leading-relaxed">
                Either VoiceAgent AI pays for itself many times over by converting 
                more visitors into customers... or you get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DownArrow/>
    </div>
  )
}

export default Section09