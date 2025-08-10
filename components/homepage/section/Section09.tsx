import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white  ">
      <div className="max-w-6xl mx-auto ">
        {/* First Section */}
        <div className=" relative">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[100px] -z-10" />
          <div
  className="relative text-center z-10 mb-10"
  style={{
     textTransform: 'capitalize',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  
  }}
>
<div >
               <ShinyText text="I Hate to Be the Bearer of Bad News, But" speed={5} className="Heading2 gradient-white-text" />
             </div>
             <div className="flex items-center justify-center space-x-3">
               <ShinyText text="This" speed={5} className="Heading2 gradient-white-text" />  
               
               <ShinyText text="Pricing" speed={5} className="Heading2 gradient-mask-text" />
              
               <ShinyText text="Disappears After Launch" speed={5} className="Heading2 gradient-white-text" />
             </div>
</div>
           

          
          
       <div className="grid md:grid-cols-2 gap-7 items-center px-17 py-8">
          {/* Left column - text */}
          <div className="space-y-4 subtext1 w-110 p-2">
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
          <div className="bg-[#797979] h-[350px] w-[450px] rounded-[10px] mx-auto md:mx-0"></div>
          
        </div>

        </div>

        {/* Second Section */}
        <div>
        <div
  className="relative text-center z-10 py-20"
  style={{
     textTransform: 'capitalize',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  
  }}
>
<div className="flex items-center justify-center space-x-3">
    <ShinyText text="Zero Risk, 100%" speed={5} className="Heading2 gradient-white-text" />  
   <ShinyText text="Guarantee" speed={5} className="Heading2 gradient-mask-text" />
  </div> 
</div>

        
          <div className="grid md:grid-cols-2 gap-0 items-center ">
            <div className="bg-[#797979] h-69 w-120 rounded-[10px]"></div>
            
            <div className="space-y-4 w-110 ">
              <p className="subtext1 leading-relaxed">
                We're so confident VoiceAgent AI will transform your website into a 
                conversion machine that we're backing it with our iron-clad 14-Day 
                Money-Back Guarantee.
              </p>
              
              <p className="subtext1 leading-relaxed">
                Install it, test it out, watch the conversations flow in. If you're not 
                completely satisfied for ANY reason within 14 days, simply email us 
                and we'll refund every penny. You literally cannot lose.
              </p>
              
              <p className="subtext1 leading-relaxed">
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