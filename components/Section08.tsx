import React from 'react'
import DownArrow from './DownArrow';

const Section08 = () => {
    const statistics = [
    {
      stat: "71%",
      description: "of people use voice assistants to research products before buying (Harvard Business Review)"
    },
    {
      stat: "29.6%",
      description: "Voice AI market growing at 29.6% annually projected to hit $21.7 billion by 2030"
    },
    {
      stat: "47%",
      description: "Businesses using AI-driven voice technology report 47% faster purchase completion"
    },
    {
      stat: "80%",
      description: "of businesses plan to implement voice AI by 2026"
    },
    {
      stat: "12-20%",
      description: "Live chat alone increases conversions by 12-20%, imagine what VOICE can do"
    }
  ];
     const features = [
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-5xl mx-auto leading-tight">
            Just a Few of the Ways VoiceAgent <br />
            AI Turns Visitors Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Customers
            </span>
          </h1>
        </div>

        {/* Features Grid - 3 columns, 3 rows */}
        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              {/* Title */}
              <h3 className="text-white text-lg mb-4 leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
        <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl mx-auto leading-tight">
            The Numbers Don't Lie<br />
            Voice AI Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Dominating
            </span>
          </h1>
        </div>

        {/* Statistics Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First row - 3 equal-width cards */}
          {statistics.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-8 h-full backdrop-blur-sm">
              <div className="text-4xl lg:text-5xl text-white mb-4">
                {item.stat}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        
<div className="col-span-3 flex gap-6">
  <div className="w-1/2 bg-gray-900/80 border border-gray-700/50 rounded-xl p-8 h-full backdrop-blur-sm">
    <div className="text-4xl lg:text-5xl text-white mb-4">
              {statistics[3].stat}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {statistics[3].description}
            </p>
          
  </div>
  <div className="w-1/2 bg-gray-900/80 border border-gray-700/50 rounded-xl p-8 h-full backdrop-blur-sm">
    <div className="text-4xl lg:text-5xl text-white mb-4">
              {statistics[4].stat}
            </div>
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