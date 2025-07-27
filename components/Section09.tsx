import React from 'react'
import DownArrow from './DownArrow'

const Section09 = () => {
  return (
    <div className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* First Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
            I Hate to Be the Bearer of Bad News, But<br />
            This <span className="text-purple-400">Pricing</span> Disappears After Launch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-700 h-64 rounded-lg"></div>
            
            <div className="space-y-6 text-gray-300">
              
                As the world's first smart voice AI agent for websites, we're offering 
                this exclusive founding member discount to help early adopters get 
                maximum advantage over their competitors.
              
                Right now, you're looking at the lowest barrier to entry for less than 
                what most agencies spend on one chat software in a single month. You 
                can jump on board with your website and watch it immediately 
                start converting visitors into customers.
              
                No ongoing monthly fees. No long-term contracts. Just one simple 
                payment and your website starts making money 24/7.
              
              
              
                But you need to act NOW.
             
              
         
                After this launch period ends, we're transitioning to a monthly 
                subscription model. Don't let this opportunity slip away - get 
                VoiceAgent AI at the lowest price it will ever be offered.
              
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Zero Risk, 100% <span className="text-purple-400">Guarantee</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-700 h-64 rounded-lg"></div>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                We're so confident VoiceAgent AI will transform your website into a 
                conversion machine that we're backing it with our iron-clad 14-Day 
                Money-Back Guarantee.
              </p>
              
              <p className="text-lg leading-relaxed">
                Install it, test it out, watch the conversations flow in. If you're not 
                completely satisfied for ANY reason within 14 days, simply email us 
                and we'll refund every penny. You literally cannot lose.
              </p>
              
              <p className="text-lg leading-relaxed">
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