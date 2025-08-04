import React from "react";
import Image from "next/image";
import ShinyText from '@/components/ui/ShinyText';
import DownArrow from '../../ui/DownArrow';
import Gradient from "@/public/assets/images/grad2.png"

interface ComparisonItem {
  id: number;
  title: string;
  subtitle?: string;
  icon: string;
  bulletColor: string;
  textColor: string;
  backgroundColor: string;
  features: string[];
}

const Section03: React.FC = () => {
  // Dynamic data array for statistics cards
  const statisticsData = [
    {
      id: 1,
      icon: '/assets/icons/qmark.svg',
      alt: 'question mark',
      iconSize: { height: 70, width: 70 },
      containerClass: 'w-16 h-16 md:w-20 md:h-20 mb-2',
      textLines: [
        "67% of website visitors abandon sites",
        "when they can't get immediate answers"
      ]
    },
    {
      id: 2,
      icon: '/assets/icons/anxious.svg',
      alt: 'anxious face',
      iconSize: { height: 70, width: 70 },
      containerClass: 'w-16 h-16 md:w-20 md:h-20 mb-2',
      textLines: [
        "79% say they won't return to a",
        "website after a bad user experience"
      ]
    },
    {
      id: 3,
      icon: '/assets/icons/wing.svg',
      alt: 'wings',
      iconSize: { height: 70, width: 70 },
      containerClass: 'w-16 h-16 md:w-20 md:h-20 mb-2',
      textLines: [
        "You lose an average of $1,430 for every",
        "1,000 visitors who leave confused"
      ]
    }
  ];

  // Dynamic data array for comparison sections
  const comparisonData: ComparisonItem[] = [
    {
      id: 1,
      title: "Traditional Live Chat",
      icon: "assets/icons/Mask.svg",
      bulletColor: "white",
      textColor: "white/80",
      backgroundColor: "transparent",
      
      features: [
        "Requires hiring expensive staff ($3,000+ per month)",
        "Limited to business hours only",
        "Agents need training and management",
        "Slow response times frustrate customers",
        "Can only handle a few conversations at a time"
      ]
    },
    {
      id: 2,
      title: "Text-Based Chatbots",
      icon: "assets/icons/bot.svg",
      bulletColor: "white",
      textColor: "gray-300",
      backgroundColor: "transparent",
 
      features: [
        "Customers hate typing long questions",
        "Often misunderstand complex queries",
        "Robotic, impersonal interactions",
        "Can't guide users around your website",
        "High abandonment rates"
      ]
    },
    {
      id: 3,
      title: "VoiceAgent AI",
      icon: "assets/icons/AI.svg",
      bulletColor: "white",
      textColor: "gray-100",
      backgroundColor: "transparent",
    
      features: [
        "ONE-TIME payment (not monthly fees)",
        "Works 24/7/365 automatically",
        "Handles simultaneous conversations",
        "Natural voice interactions customers love",
        "Actually navigates your website while talking",
        "Setup in under 60 seconds"
      ]
    },
    {
      id: 4,
      title: "Do Nothing (Current Situation)",
      icon: "assets/icons/none.svg",
      bulletColor: "white",
      textColor: "gray-100",
      backgroundColor: "transparent",
     
      features: [
        "67% of visitors leave without buying",
        "No way to overcome objections",
        "Missing sales 24/7",
        "Competitors who adapt will crush you"
      ]
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center p-6">
      
      {/* Spotlight section with external glow */}
      <div className="relative w-full flex mb-10 justify-center">
        {/* Glow effect containers - positioned outside the spotlight */}
        <div className="absolute inset-x-0 bottom-0 h-32 z-0">
          <div 
            className="w-full h-full rounded-full blur-3xl opacity-50"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.8) 0%, rgba(75, 0, 130, 0.6) 30%, rgba(72, 61, 139, 0.4) 50%, transparent 80%)'
            }}
          />
        </div>
        
        {/* Secondary glow for more intensity */}
        <div className="absolute inset-x-0 bottom-5 h-20 z-0">
          <div 
            className="w-full h-full rounded-full blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(147, 112, 219, 0.9) 0%, rgba(138, 43, 226, 0.5) 40%, transparent 70%)'
            }}
          />
        </div>

        {/* Spotlight container */}
        <div 
          className="relative bg-cover w-[90%] py-7 border border-gray-900 rounded-2xl bg-center bg-no-repeat flex items-center justify-center  z-10"
          style={{
            backgroundImage: "url('/assets/images/Spotlight.png')",
          }}
        >
          
          {/* Content Container */}
          <div className="relative z-10 max-w-5xl w-full text-center">
            {/* Main Heading */}
           <h2 className="m-auto max-w-[600px] leading-tight text-center ">
             {/* First Line - Normal Text */}
             <ShinyText
               text="Stop Losing Money Every Single"
               disabled={false}
               speed={6}
               className="Heading"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="Day Your Website Stays Silent!"
               disabled={false}
               speed={6}
               className="Heading"
             />
           </h2>
           
           
            {/* Subtitle */}
            <p className="text-gray-300 text-sm py-7 font-light">
              The statistics are brutal!
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {statisticsData.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center text-center">
                  <div className={`${stat.containerClass} flex items-center justify-center`}>
                    <Image 
                      src={stat.icon} 
                      alt={stat.alt} 
                      height={stat.iconSize.height} 
                      width={stat.iconSize.width}
                    />
                  </div>
                  <p className="text-white font-normal text-sm md:text-base mb-6 py-4 leading-tight max-w-xs">
                    <span>{stat.textLines[0]}</span>
                    <br />
                    {stat.textLines[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        
      <div className="relative w-full max-w-6xl mx-auto bg-transparent rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Main headline */}
          <div className="text-center mb-12 py-7">
            <h2 className="m-auto  leading-tight text-center ">
             {/* First Line - Normal Text */}
             <ShinyText
               text="Why Business Owners Are Ditching"
               disabled={false}
               speed={6}
               className="Heading"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="Expensive Alternatives for VoiceAgent AI"
               disabled={false}
               speed={6}
               className="Heading"
             />
           </h2>
          </div>

          {/* Dynamic Comparison Grid with Center Lines */}
          <div className="w-full max-w-5xl mb-20 mx-auto relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 w-px h-full bg-gray-800 transform -translate-x-1/2 z-20"></div>
            
            {/* Center horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-800 transform -translate-y-1/2 z-20"></div>
            
            <div className="grid grid-cols-2 gap-10">
              {comparisonData.map((item: ComparisonItem, index: number) => (
                <div 
                  key={item.id}
                  className={`
                    ${item.backgroundColor} 
                    rounded-xl p-8 h-80 relative overflow-hidden
                  `}
                >
                  {/* Gradient overlay for special sections */}
                  {item.backgroundColor.includes('gradient') && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                  )}
                  
                  <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    {/* Content container - centered in grid but content starts from left */}
                    <div className={`w-full max-w-sm ${item.id === 4 ? '-mt-15' : ''}`}>
                      {/* Header */}
                      <div className="flex flex-col items-start mb-4">
                        <Image src={item.icon} alt={`${item.title} icon`} height={50} width={50} className="py-3"/>
                        {item.id === 4 ? (
                          <h3 className="gradient-mask-text text-lg font-semibold text-start">{item.title}</h3>
                        ) : (
                          <h3 className="text-white text-lg font-semibold text-start">
                            {item.title}
                            {item.subtitle && (
                              <>
                                <br/>
                                <span className="text-yellow-200 text-sm">{item.subtitle}</span>
                              </>
                            )}
                          </h3>
                        )}
                      </div>

                      {/* Features List */}
                      <ul className={`space-y-3 font-light text-[14px] text-${item.textColor} text-start`}>
                        {item.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className={`w-1 h-1 bg-${item.bulletColor} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="relative w-full  max-w-6xl mx-auto rounded-3xl p-8 md:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center">
         

 <h2 className="m-auto max-w-[600px] leading-tight text-center ">
             {/* First Line - Normal Text */}
             <ShinyText
               text=" But what if I told you there's now a"
               disabled={false}
               speed={6}
               className="Heading"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="way to have a tireless smart voice"
               disabled={false}
               speed={6}
               className="Heading"
             />
             <ShinyText
               text=" agent on your website 24/7!"
               disabled={false}
               speed={6}
               className="Heading"
             />
           </h2>







          
          {/* Supporting text */}
          <p className="sub-text lg:text-sm max-w-4xl py-5 mx-auto">
            Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
          </p>
        </div>
      </div>
      
      <DownArrow/>
    </div>
  );
};

export default Section03;