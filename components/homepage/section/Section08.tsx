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
      <div className="container mx-auto px-6 ">
        {/* Header */}
        
        <div className="text-center mb-16">
        

           <h2
  className="relative font-radio font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
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
    <ShinyText text="Just a Few of the Ways VoiceAgent" speed={5} className="Heading" />
  </div>
  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="AI Turns Visitors Into " speed={5} className="Heading" />  
    {' '}
    <ShinyText text="Customers" speed={5} className="Heading gradient-mask-text" />
  </div>
</h2>
        </div>
          
         
        {/* Features Grid - 3 columns, 3 rows */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute top-[10rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-[100px] -z-10" />
          <div className="flex justify-center max-w-7xl mx-auto relative">
            <div className="grid grid-cols-3 gap-3 lg:gap-3">
            {features.map((feature: Feature, index: number) => (
              <div key={index} className="flex items-center justify-center relative h-44 w-90">
                <img
                  src="/rect2.png"
                  alt="background"
                  className="w-full h-full"
                />
                <h3 className="absolute top-6 left-6 w-68 subtext2 drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="absolute top-16 w-70 py-5 left-6 right-6 sub-text leading-relaxed drop-shadow-md">
                  {feature.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 ">
        {/* Header */}
        <div className="text-center mt-10 mb-16">

         
           <h2
  className="relative font-radio font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
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
    <ShinyText text="The Numbers Don't Lie" speed={5} className="Heading" />
  </div>
  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="Voice AI Is " speed={5} className="Heading" />  
    {' '}
    <ShinyText text="Dominating" speed={5} className="Heading gradient-mask-text" />
  </div>
</h2>


<h1 className="relative z-10" style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 500,
                fontSize: '65px',
                lineHeight: '67px',
                letterSpacing: '0%',
                margin: '0 0 -0.5rem 0',
                padding: '0.2em 0',
                textTransform: 'capitalize',
                color: 'transparent',
                background: 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                <div>
                  <ShinyText text="Simplify" speed={5} className="font-extralight" />
                  {' '}
                  <ShinyText text="Cloud" speed={5} className="font-medium" />
                </div>
                <div>
                  <ShinyText text="Security" speed={5} className="font-medium" />
                  {' '}
                  <ShinyText text="Without" speed={5} className="font-extralight" />
                </div>
                <div>
                  <ShinyText text="Compromise" speed={5} className="font-medium" />
                </div>
              </h1>






        </div>

        {/* Statistics Grid */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto relative">
          {/* First row - 3 equal-width cards */}
          {statistics.slice(0, 3).map((item: Statistic, index: number) => (
            <div key={index} className="bg-[#0D0B1B] border border-white/5 rounded-[10px] p-8 h-84 backdrop-blur-sm flex flex-col justify-end">
             
              <p className="text-gray-300 subheading px-1 max-w-[300px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Second row - 2 half-width cards */}
          <div className="col-span-3 flex gap-3">
            <div className="w-1/2 bg-[#0D0B1B] border border-gray-700/50 rounded-[10px] p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
             
              <p className="subheading leading-relaxed max-w-[400px]">
                {statistics[3].description}
              </p>
            </div>
            <div className="w-1/2 bg-[#0D0B1B] border border-gray-700/50 rounded-[10px] p-8 h-74 backdrop-blur-sm flex flex-col justify-end">
              
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