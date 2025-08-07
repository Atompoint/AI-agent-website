import React from "react";
import Image from "next/image";
import ShinyText from '@/components/ui/ShinyText';
import DownArrow from '../../ui/DownArrow';
import Gradient from "@/public/assets/images/grad2.png"
import { BsStars } from "react-icons/bs";

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
      containerClass: 'w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 mb-2',
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
      containerClass: 'w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 mb-2',
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
      containerClass: 'w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 mb-2',
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
    <div className="relative flex flex-col justify-center items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-6 2xl:px-16 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 xl:py-6 2xl:py-12 overflow-hidden">
      {/* Single Centered Glow Effect */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[900px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[130px] -z-10" />
      
      {/* Spotlight section with external glow - Fully Responsive */}
      <div className="relative w-full flex mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 xl:mb-10 2xl:mb-12 justify-center">
        
        {/* Spotlight container - Responsive width and padding */}
        <div 
          className="relative bg-cover w-[95%] xs:w-[92%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[85%] py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8 xl:py-7 2xl:py-9 border border-gray-900 rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl bg-center bg-no-repeat flex items-center justify-center z-10"
          style={{
            backgroundImage: "url('/assets/images/Spotlight.png')",
          }}
        >
          
          {/* Content Container - Responsive max-width */}
          <div className="relative z-10 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl 2xl:max-w-6xl w-full text-center">
            {/* Main Heading - Responsive typography */}
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
  <span className="block leading-[1]">
    <ShinyText text="Stop" speed={5} className="Heading" />
    {' '}
    <ShinyText text="Losing Money" speed={5} className="Heading" />
    {' '}
    <ShinyText text="Every Single Day" speed={5} className="Heading" />
  </span>
  <span className="block leading-[1] -mt-2">
    <ShinyText
      text="Day Your Website Stays Silent!"
      speed={5}
      className="Heading gradient-mask-text"
    />
    
  </span>
</h2>

            {/* Subtitle - Responsive sizing */}
            <p className="text-gray-300 text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-sm 2xl:text-base py-4 xs:py-5 sm:py-6 md:py-7 lg:py-7 xl:py-7 2xl:py-8 font-light">
              The statistics are brutal!
            </p>
            
            {/* Statistics Cards - Responsive grid and spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
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
                  <p className="text-white font-normal text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-sm 2xl:text-base mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 py-2 xs:py-3 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-5 leading-tight max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-xs xl:max-w-xs 2xl:max-w-sm">
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
        
      {/* Comparison Section - Responsive container */}
      <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-6xl 2xl:max-w-7xl mx-auto bg-transparent rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl 2xl:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* Main headline - Responsive typography */}
          <div className="text-center mb-8 xs:mb-9 sm:mb-10 md:mb-11 lg:mb-12 xl:mb-12 2xl:mb-16 py-4 xs:py-5 sm:py-6 md:py-7 lg:py-7 xl:py-7 2xl:py-9">
           
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
    <ShinyText text="Why Business Owners Are Ditching" speed={5} className="Heading" />
  </div>
  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="Expensive Alternatives for " speed={5} className="Heading" />
    {' '}
    <ShinyText text="VoiceAgent AI" speed={5} className="Heading gradient-mask-text" />
  </div>
</h2>
       
          </div>

          {/* Dynamic Comparison Grid - Responsive layout */}
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl 2xl:max-w-6xl mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-20 2xl:mb-24 mx-auto relative">
            {/* Center lines - Only visible on larger screens */}
            <div className="hidden lg:block xl:block 2xl:block absolute left-1/2 top-0 w-px h-full bg-gray-800 transform -translate-x-1/2 z-20"></div>
            <div className="hidden lg:block xl:block 2xl:block absolute top-1/2 left-0 w-full h-px bg-gray-800 transform -translate-y-1/2 z-20"></div>
            
            {/* Grid - Responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-10 2xl:gap-12">
              {comparisonData.map((item: ComparisonItem, index: number) => (
                <div 
                  key={item.id}
                  className={`
                    ${item.backgroundColor} 
                    rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-8 2xl:p-10 h-64 xs:h-72 sm:h-80 md:h-80 lg:h-80 xl:h-80 2xl:h-96 relative overflow-hidden
                  `}
                >
                  {/* Gradient overlay for special sections */}
                  {item.backgroundColor.includes('gradient') && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                  )}
                  
                  <div className="relative z-10 flex flex-col justify-center items-center h-full">
                    {/* Content container */}
                    <div className={`w-full max-w-xs xs:max-w-sm sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm 2xl:max-w-md ${item.id === 4 ? '-mt-8 xs:-mt-10 sm:-mt-12 md:-mt-15 lg:-mt-15 xl:-mt-15 2xl:-mt-20' : ''}`}>
                      {/* Header - Responsive icon and text */}
                      <div className="flex flex-col items-start mb-3 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5">
                        <Image 
                          src={item.icon} 
                          alt={`${item.title} icon`} 
                          height={50} 
                          width={50} 
                          className="py-2 xs:py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-4 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 object-contain"
                        />
                        {item.id === 4 ? (
                          <h3 className="gradient-mask-text text-[14px] xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-start">{item.title}</h3>
                        ) : (
                          <h3 className="text-white text-[14px] xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-start">
                            {item.title}
                            {item.subtitle && (
                              <>
                                <br/>
                                <span className="text-yellow-200 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">{item.subtitle}</span>
                              </>
                            )}
                          </h3>
                        )}
                      </div>

                      {/* Features List - Responsive text sizing */}
                      <ul className={`space-y-2 xs:space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4 font-light text-[14px] text-${item.textColor} text-start`}>
                        {item.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className={`w-1 h-1 bg-${item.bulletColor} rounded-full mt-1.5 mr-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed text-[14px]">{feature}</span>
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
      
      {/* Final CTA Section - Responsive */}
      <div 
        className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-6xl 2xl:max-w-7xl mx-auto rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl 2xl:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center">
         <h2 className="m-auto max-w-[95%] xs:max-w-[90%] sm:max-w-[85%] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[600px] 2xl:max-w-[700px] leading-tight text-center">
             <ShinyText
               text=" But what if I told you there's now a"
               disabled={false}
               speed={6}
               className="Heading text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
             />
           
             <ShinyText
               text="way to have a tireless smart voice"
               disabled={false}
               speed={6}
               className="Heading text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
             />
             <div className="flex items-center">
             <ShinyText
               text=" agent on your website 24/7!"
               disabled={false}
               speed={6}
               className="Heading text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
             />
<BsStars className="text-[30px] ml-2"/>
</div>
           </h2>
          
          {/* Supporting text - Responsive */}
          <p className="sub-text text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-sm 2xl:text-base max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl 2xl:max-w-5xl py-3 xs:py-4 sm:py-5 md:py-5 lg:py-5 xl:py-5 2xl:py-6 mx-auto leading-relaxed">
            Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
          </p>
        </div>
      </div>
      
      {/* Down Arrow with responsive spacing */}
      <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-6 2xl:mt-12">
        <DownArrow/>
      </div>
    </div>
  );
};

export default Section03;