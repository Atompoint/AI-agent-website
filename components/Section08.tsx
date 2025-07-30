import React from 'react'
import DownArrow from './DownArrow';
import Image from 'next/image';

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
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl gradient-white-text mb-4 max-w-5xl mx-auto leading-tight">
            Just a Few of the Ways VoiceAgent <br />
            AI Turns Visitors Into{" "}
            <span className="gradient-mask-text">
              Customers
            </span>
          </h1>
        </div>

        {/* Features Grid - 3 columns, 3 rows */}
        <div className="flex justify-center max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 lg:gap-3">
            {features.map((feature: Feature, index: number) => (
              <div key={index} className="flex items-center justify-center relative h-44 w-90">
                <img
                  src="/rect2.png"
                  alt="background"
                  className="w-full h-full"
                />
                <h3 className="absolute top-6 left-6 w-58 text-white text-lg mb-4 leading-tight font-normal drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="absolute top-16  mt-3 left-6 right-6 font-light text-gray-200 text-sm leading-relaxed drop-shadow-md">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl gradient-white-text mb-4 max-w-4xl mx-auto font-medium leading-tight">
            The Numbers Don't Lie<br />
            Voice AI Is{" "}
           
              Dominating
            
          </h1>
        </div>

        {/* Statistics Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {/* First row - 3 equal-width cards */}
          {statistics.slice(0, 3).map((item: Statistic, index: number) => (
            <div key={index} className="bg-[#0D0B1B] border border-gray-700/50 rounded-[10px] p-8 h-94 backdrop-blur-sm flex flex-col justify-end">
             
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Second row - 2 half-width cards */}
          <div className="col-span-3 flex gap-3">
            <div className="w-1/2 bg-[#0D0B1B] border border-gray-700/50 rounded-[10px] p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
             
              <p className="text-gray-300 text-sm leading-relaxed">
                {statistics[3].description}
              </p>
            </div>
            <div className="w-1/2 bg-[#0D0B1B] border border-gray-700/50 rounded-[10px] p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {statistics[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <DownArrow/>
    </div>
  )
}

export default Section08