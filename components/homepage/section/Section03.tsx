import React from "react";
import Image from "next/image";
import ShinyText from '@/components/ui/ShinyText';
import DownArrow from '../../ui/DownArrow';
import Gradient from "@/public/assets/images/grad2.png"
import { BsStars } from "react-icons/bs";
import { ShineBorder } from "@/components/magicui/shine-border";  

interface ComparisonItem {
  id: number;
  title: string;
  subtitle?: string;
  icon: string;
  bulletColor: string;
  textColor: string;
  backgroundColor: string;
  features: (string | React.ReactNode)[];
}

const Section03: React.FC = () => {
  // Dynamic data array for statistics cards
  const statisticsData = [
    {
      id: 1,
      icon: '/assets/icons/qmark.svg',
      alt: 'question mark',
      iconSize: { height: 75, width: 75 },
      containerClass: 'w-18 h-18 mb-2',
      textLines: [
        "67% of website visitors abandon sites",
        "when they can't get immediate answers"
      ]
    },
    {
      id: 2,
      icon: '/assets/icons/anxious.svg',
      alt: 'anxious face',
      iconSize: { height: 75, width: 75 },
      containerClass: 'w-18 h-18 mb-2',
      textLines: [
        "79% say they won't return to a",
        "website after a bad user experience"
      ]
    },
    {
      id: 3,
      icon: '/assets/icons/wing.svg',
      alt: 'wings',
      iconSize: { height: 75, width: 75 },
      containerClass: 'w-18 h-18 mb-2',
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
        <span key="visitors">67<span style={{ fontFamily: 'var(--font-manrope)', fontSize: '1.1em', letterSpacing: '-1px' }}>%</span> of visitors leave without buying</span>,
        "No way to overcome objections",
        "Missing sales 24/7",
        "Competitors who adapt will crush you"
      ]
    }
  ];

  return (
    <div className="relative flex flex-col justify-center items-center px-6  overflow-hidden">
      {/* Single Centered Glow Effect */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[900px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[130px] -z-10" />
      
      {/* Spotlight section with ShineBorder */}
      <div className="relative w-full flex mb-10 justify-center">
        <div className="relative w-[95%] rounded-2xl overflow-hidden">
          {/* Background image container with ShineBorder */}
          <div 
            className="relative bg-cover w-full py-7 rounded-2xl bg-center bg-no-repeat flex items-center justify-center z-10 overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/spotlight.png')",
            }}
          >
            {/* ShineBorder overlay */}
            <ShineBorder
              borderWidth={2}
              duration={15}
              shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            />
            
            {/* Content Container */}
            <div className="relative z-10 max-w-5xl w-full text-center">
              {/* Main Heading */}
            
              <div
    className="relative text-center z-10 py-6"
    style={{
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      fontSize: '43px',
      lineHeight: '0.8',
      letterSpacing: '0%',
      margin: '0 0 -0.5rem 0',
      padding: '0.2em 0',
      textTransform: 'capitalize',
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
      <ShinyText text="Stop" speed={5} className=" gradient-white-text" />
      {' '}
      <ShinyText text="Losing Money" speed={5} className=" gradient-mask-text" />
      {' '}
      <ShinyText text="Every Single" speed={5} className=" gradient-white-text" />
    </div>
    <div >
      <ShinyText text="Day Your Website Stays Silent!" speed={5} className=" gradient-white-text" />  
      
    </div>
  </div>

       
              {/* Subtitle */}
              <p className="subtext1 mt-5 mb-10">
                The statistics are brutal!
              </p>
              
              {/* Statistics Cards */}
              <div className="grid grid-cols-3 gap-9  mx-auto">
                {statisticsData.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center text-center">
                    <div className={`${stat.containerClass} flex items-center justify-center`}>
                      <Image 
                        src={stat.icon} 
                        alt={stat.alt} 
                        height={stat.iconSize.height} 
                        width={stat.iconSize.width}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="subtext3 mb-6 py-4 leading-tight">
                      {stat.textLines[0]}               
                        <br />
                      {stat.textLines[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        
      {/* Comparison Section */}
      <div className="relative w-full max-w-6xl mx-auto bg-transparent rounded-3xl p-12 overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Main headline */}
          <div className="text-center mb-10 py-3">

          <div
    className="relative text-center z-10 py-6"
    style={{
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      fontSize: '43px',
      lineHeight: '0.8',
      letterSpacing: '0%',
      margin: '0 0 -0.5rem 0',
      padding: '0.2em 0',
      textTransform: 'capitalize',
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
                  <ShinyText text="Why Business Owners Are Ditching" speed={5} className="gradient-white-text" />
                </div>
                <div >
                  <ShinyText text="Expensive Alternatives for " speed={5} className=" gradient-white-text" />
                  {' '}
                  <ShinyText text="VoiceAgent AI" speed={5} className="gradient-mask-text" />
                </div>
  </div>
            
          
          </div>

            {/* Dynamic Comparison Grid with Center Lines */}
            <div className="w-full max-w-5xl mb-20 mx-auto relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 w-[0.2px] h-full bg-white/10 transform -translate-x-1/2 z-20"></div>
            
            {/* Center horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-[0.2px] bg-white/10 transform -translate-y-1/2 z-20"></div>
            
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
                        <Image src={item.icon} alt={`${item.title} icon`} height={50} width={50} className="py-4"/>
                        {item.id === 4 ? (
                           <ShinyText text={item.title} speed={5} className="subtext3 gradient-text-white  text-start" />
                          
                        ) : (
                          <ShinyText speed={5}  className="subtext3 gradient-text-white text-start"
  text={item.title}

                          />
                        )}
                      </div>

                      {/* Features List */}
                      <ul className={`space-y-3 subtext1 text-start`}>
                        {item.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className={`w-1 h-1 bg-${item.bulletColor} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                            {typeof feature === 'string' ? <span>{feature}</span> : feature}
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
      
      {/* Final CTA Section */}
      <div 
        className="relative w-full max-w-6xl mx-auto rounded-3xl p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center">
        
    <div
    className="relative text-center z-10 mt-8"
    style={{
      fontFamily: 'Radio Grotesk',
      fontWeight: 400,
      fontSize: '43px',
      lineHeight: '0.8',
      letterSpacing: '0%',
      margin: '0 0 -0.5rem 0',
      padding: '0.2em 0',
      textTransform: 'capitalize',
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
              <ShinyText text="But what if I told you there's now a" speed={5} className=" gradient-white-text" />
            </div>
            <div >
              <ShinyText text="way to have a tireless smart voice" speed={5} className=" gradient-white-text" />
             
            </div>
            <div >
              <ShinyText text="agent on your website 24/7!" speed={5} className=" gradient-white-text" />
              <BsStars className="text-[30px] ml-2"/>
            </div>
  </div>

           
          {/* Supporting text */}
          <p className="subtext1  mb-5 ">
            Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
          </p>
        </div>
      </div>
      
      {/* Down Arrow */}
      
        <DownArrow/>
      
    </div>
  );
};

export default Section03;