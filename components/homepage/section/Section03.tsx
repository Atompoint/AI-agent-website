import React from "react";
import { MessageCircle, Bot, Mic, AlertTriangle } from 'lucide-react';
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import DownArrow from '../../ui/DownArrow';
import Gradient from "@/public/assets/images/grad2.png"

interface ComparisonItem {
  id: number;
  title: string;
  subtitle?: string;
  icon: string;
  iconType: "image" | "lucide";
  bulletColor: string;
  textColor: string;
  backgroundColor: string;
  borderStyle: string;
  features: string[];
}

const Section03: React.FC = () => {
  // Dynamic data array for comparison sections
  const comparisonData: ComparisonItem[] = [
    {
      id: 1,
      title: "Traditional Live Chat",
      icon: "/mask.svg",
      iconType: "image",
      bulletColor: "white",
      textColor: "white/80",
      backgroundColor: "transparent",
      borderStyle: "border-r  border-gray-800",
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
      icon: "/bot.svg",
      iconType: "image",
      bulletColor: "white",
      textColor: "gray-300",
      backgroundColor: "transparent",
      borderStyle: "",
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
      iconType: "image",
      icon: "/AI.svg",
      bulletColor: "white",
      textColor: "gray-100",
      backgroundColor: "transparent",
      borderStyle: "border-r border-t border-gray-800",
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
      icon: "none.svg",
      iconType: "image",
      bulletColor: "white",
      textColor: "gray-100",
      backgroundColor: "transparent",
      borderStyle: "border-t  border-gray-800",
      features: [
        "67% of visitors leave without buying",
        "No way to overcome objections",
        "Missing sales 24/7",
        "Competitors who adapt will crush you"
      ]
    }
  ];

  const renderIcon = (item: ComparisonItem): React.ReactElement => {
    if (item.iconType === "image") {
      return (
        <Image src={item.icon} alt={`${item.title} icon`} height={50} width={50}/>
      );
    } else if (item.iconType === "lucide") {
      if (item.icon === "mic") {
        return (
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
            <Mic className="w-8 h-8 text-white" />
          </div>
        );
      } else if (item.icon === "alert") {
        return (
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 relative">
            <AlertTriangle className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
        );
      }
    }
    
    // Return a default element if none of the conditions match
    return <div></div>;
  };

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
          className="relative bg-cover w-[97%] py-7 border border-gray-900 rounded-2xl bg-center bg-no-repeat flex items-center justify-center px-4 z-10"
          style={{
            backgroundImage: "url('/Spotlight.png')",
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0"></div>
          
          {/* Content Container */}
          <div className="relative z-10 max-w-5xl w-full text-center">
            {/* Main Heading */}
            <div className="gradient-white-text font-heading mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl gradient-white-text font-medium leading-tight">
                Stop{" "}
                <span className="gradient-mask-text font-normal"> Losing Money</span>{" "}
                Every Single
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-2">
                Day Your Website Stays{" "}
                <span className="">Silent!</span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-gray-300 text-sm md:text-base mb-7 font-light">
              The statistics are brutal!
            </p>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* Card 1 - Question Mark */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center">
                  <Image src='qmark.svg' alt='question mark' height={50} width={50}/>
                </div>
                <p className="text-white font-normal text-sm md:text-base leading-relaxed max-w-xs">
                  <span>67% of website visitors abandon sites</span>
                  <br />
                  when they can't get immediate answers
                </p>
              </div>
              
              {/* Card 2 - Sad Emoji */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center">
                  <Image src='anxious.svg' alt='question mark' height={50} width={50}/>
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed font-normal max-w-xs">
                  <span>79% say they won't return to a</span>
                  <br />
                  website after a bad user experience
                </p>
              </div>
              
              {/* Card 3 - Wings */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center">
                  <Image src='wing.svg' alt='question mark' height={50} width={50}/>
                </div>
                <p className="text-white text-sm md:text-base leading-relaxed font-normal max-w-xs">
                  <span>You lose an average of $1,430 for every</span>
                  <br />
                  1,000 visitors who leave confused
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <div className="relative w-full max-w-6xl mx-auto bg-transparent rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Main headline */}
          <div className="text-center mb-12">
            <h1 className="gradient-white-text text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-2">
              Business Owners Are Ditching<br />
              Expensive Alternatives for <span className="gradient-mask-text">VoiceAgent</span> AI
            </h1>
          </div>

          {/* Dynamic Comparison Grid */}
          <div className="w-full max-w-4xl mb-20 mx-auto">
            <div className="grid grid-cols-2 rounded-2xl ">
              {comparisonData.map((item: ComparisonItem, index: number) => (
                <div 
                  key={item.id}
                  className={`
                    ${item.backgroundColor} 
                    ${item.borderStyle} 
                    rounded-xl p-8 h-80 relative overflow-hidden
                  `}
                >
                  {/* Gradient overlay for special sections */}
                  {item.backgroundColor.includes('gradient') && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Header */}
                                      {/* Header */}
                    <div className={`flex flex-col  ${item.icon === 'mic' || item.icon === 'alert' ? 'items-center text-center' : 'items-start text-left'} mb-6`}>
                      {renderIcon(item)}
                      {item.id === 4 ? (
                        <div className="flex flex-row items-center gap-2 flex-wrap">
                          <h3 className="gradient-mask-text text-lg font-semibold">{item.title}</h3>
                         
                        </div>
                      ) : (
                        <h3 className="text-white text-lg font-semibold">
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
                    <ul className={`space-y-3 text-xs text-${item.textColor}`}>
                      {item.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className={`w-1 h-1 bg-${item.bulletColor} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="relative w-full max-w-6xl mx-auto rounded-3xl p-8 md:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Main headline */}
         <h1 className="gradient-white-text text-xl md:text-3xl lg:text-3xl xl:text-4xl font-medium leading-tight mb-6">
  But what if I told you there's now a<br />
  way to have a tireless smart voice<br />
  agent on your website 24/7!
  <span className="inline-flex items-center">
    &nbsp;<BsStars className="text-3xl md:text-4xl text-white/90 lg:text-5xl" />
  </span>
</h1>

          
          {/* Supporting text */}
          <p className="text-white/90 lg:text-sm max-w-4xl mx-auto">
            Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
          </p>
        </div>
      </div>
      
      <DownArrow/>
    </div>
  );
};

export default Section03;