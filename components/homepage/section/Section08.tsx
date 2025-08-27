import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

interface Feature {
  title: string;
  description: string;
}

interface Statistic {

  description: string;
}

const Section08: React.FC = () => {
  const statistics: Statistic[] = [
    {
      
      description: " 71% of people use voice assistants to research products before buying (Harvard Business Review)"
    },
    {
    
      description: "Voice AI market growing at 29.6% annually projected to hit $21.7 billion by 2030"
    },
    {
  
      description: "Businesses using AI-driven voice technology report 47% faster purchase completion"
    },
    {
      
      description: "80% of businesses plan to implement voice AI by 2026"
    },
    {
   
      description: "Live chat alone increases conversions by 12-20% imagine what VOICE can do"
    }
  ];

  const features: Feature[] = [
    {
      title: "Answer Last-Minute Questions That Make Sales",
      description: "Visitors can quickly ask about shipping, returns, compatibility, reasons for leaving and it's saved customers."
    },
    {
      title: "Qualify Leads Who Are Ready to Engage",
      description: "Your AI gathers visitor information through conversation and hands them to your business pages on contact form."
    },
    {
      title: "Turn Product Pages Into Personal Shopping Experiences",
      description: "Visitors can ask: \"Which size should I get?\" or \"How does this compare to...?\" just like talking to a sales associate."
    },
    {
      title: "Handle Peak Traffic Without Hiring Extra Staff",
      description: "Unlimited visitors get instant, voice answers while your competitors' chat boxes crash or have long wait times."
    },
    {
      title: "Help Serious Buyers Get the Information They Need",
      description: "Visitors get detailed explanations to their specific questions instead of scrolling through pages trying to find it."
    },
    {
      title: "Capture Information From Motivated Prospects",
      description: "Your AI gathers engaged visitors to contact forms or lead capture pages after a real conversation."
    },
    {
      title: "Make Complex Products Easy to Understand",
      description: "Visitors can simply ask: \"How does this work?\" or \"Is this right for my situation?\" and get clear answers."
    },
    {
      title: "Make Mobile Shopping Easier Than Ever Before",
      description: "Mobile visitors click once and speak their questions instead of typing on small keyboards or forms."
    },
    {
      title: "Help Visitors Choose the Right Pricing Plan",
      description: "Visitors can ask: \"What plan fits my needs?\" and your AI can recommend the perfect option and guide them to sign up."
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        
        <div className="relative text-center z-10 mb-8 sm:mb-12 lg:mb-15">
          <div className='py-10'
            style={{
              fontFamily: 'Radio Grotesk',
              fontSize: 'clamp(24px, 6vw, 43px)',
              fontWeight: 400,
              lineHeight: '0.8',
              letterSpacing: '0%',
              
              
              color: 'transparent',
              background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            <div>
              <ShinyText text="Just a Few of the Ways" speed={5} className="gradient-white-text" />
           {' '}
              <ShinyText text="VoiceAgent" speed={5} className="gradient-white-text" />
            </div>
            <div >
              <ShinyText text="AI Turns Visitors Into " speed={5} className="gradient-white-text inline" />
              {' '}
              <ShinyText text="Customers" speed={5} className="gradient-mask-text inline" />
            </div>
          </div>
        </div>

        
     
         
        {/* Features Grid - Responsive */}
        <div className="relative">
          {/* Glow Effect - Responsive */}
          <div className="absolute top-[5rem]  lg:top-[10rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[600px] lg:w-[800px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[50px] sm:blur-[75px] lg:blur-[100px] -z-10" />
          
          <div className="flex justify-center max-w-7xl mx-auto relative ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-3 w-full">
              {features.map((feature: Feature, index: number) => (
                <div key={index} className="flex items-center justify-center relative h-40  lg:h-44 w-full">
                  <img
                    src="/assets/images/rect2.png"
                    alt="background"
                    className="w-full h-full rounded-lg"
                  />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-[calc(100%-2rem)] sm:w-68 text-sm sm:text-base font-medium drop-shadow-lg leading-5 sm:leading-6">
                    {feature.title}
                  </div>
                  <p className="absolute top-16 sm:top-20 left-4 sm:left-6 right-4 sm:right-6 text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
      

  <div className="relative text-center z-10 mt-16 sm:mt-20 lg:mt-25 mb-8 sm:mb-10">
    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[43px] font-normal leading-tight sm:leading-tight lg:leading-[0.8] tracking-normal capitalize"
      style={{
        fontFamily: 'Radio Grotesk',
        fontWeight: 400,
        fontSize: 'clamp(24px, 6vw, 43px)',
        lineHeight: '0.8',
        letterSpacing: '0%',
        margin: '50px 0 4rem 0',
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
        <ShinyText text="The Numbers Don't Lie" speed={5} className="gradient-white-text" />
      </div>
      <div>
        <ShinyText text="Voice AI Is " speed={5} className="gradient-white-text " />
        {' '}
        <ShinyText text="Dominating" speed={5} className="gradient-mask-text " />
      </div>
    </div>
  </div>


        {/* Statistics Grid - Responsive */}
        <div className="relative">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto relative">
    {/* First row - 3 equal-width cards on lg, 2 cols on sm, 1 col on mobile */}
    {statistics.slice(0, 3).map((item: Statistic, index: number) => (
      <div key={index} className="bg-[#0D0B1B] border border-white/5 rounded-[10px] p-4 h-84 backdrop-blur-sm flex flex-col justify-end">
        <p className="subtext4 max-w-[270px] leading-6">
          {item.description}
        </p>
      </div>
    ))}

    {/* Second row - 2 half-width cards on lg, stacked on sm/mobile */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/2 bg-[#0D0B1B] border border-white/5 rounded-[10px] p-4 sm:p-6 lg:p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
        <p className="subheading leading-relaxed max-w-[400px]">
          {statistics[3].description}
        </p>
      </div>
      <div className="w-full sm:w-1/2 bg-[#0D0B1B] border border-white/5 rounded-[10px] p-4 sm:p-6 lg:p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
        <p className="subheading max-w-[400px] leading-relaxed">
          {statistics[4].description}
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
      <DownArrow/>
    </div>
  )
}

export default Section08