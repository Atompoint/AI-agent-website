import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

const Section09 = () => {
  return (
    <div className="flex justify-center flex-col items-center text-white  ">
      <div className="max-w-6xl mx-auto">
        {/* First Section */}
        <div className="mb-20 relative">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[100px] -z-10" />
          
           

            <h2
             className="relative font-radio text-center  font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
             style={{
               textTransform: 'capitalize',
               color: 'transparent',
               background:
                 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
               WebkitBackgroundClip: 'text',
               backgroundClip: 'text',
             }}
           >
             <div className="m-0 leading-[1]">
               <ShinyText text="I Hate to Be the Bearer of Bad News, But" speed={5} className="Heading" />
             </div>
             <div className="m-0 leading-[1] -mt-2">
               <ShinyText text="This" speed={5} className="Heading" />  
               {' '}
               <ShinyText text="Pricing" speed={5} className="Heading gradient-mask-text" />
               {' '}
               <ShinyText text="Disappears After Launch" speed={5} className="Heading" />
             </div>
           </h2>
          
       <div className="grid md:grid-cols-2 gap-4 items-center px-17 py-8">
          {/* Left column - text */}
          <div className="space-y-4 text-sm text-gray-300 w-115 p-2">
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
        <div className='py-10'>

           <h2
  className="relative font-radio font-normal text-center text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
  style={{
    textTransform: 'capitalize',
    color: 'transparent',
    background:
      'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>

  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="Zero Risk, 100%" speed={5} className="Heading" />  
    {' '}
    <ShinyText text="Guarantee" speed={5} className="Heading gradient-mask-text" />
  </div>
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