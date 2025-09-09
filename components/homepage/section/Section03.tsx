'use client';

import React, { useState, useEffect, useCallback, useRef } from "react";
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

interface StatisticItem {
  id: number;
  icon: string;
  centerIcon: string;
  alt: string;
  centerAlt: string;
  iconSize: { height: number; width: number };
  centerIconSize: { width: number; height: number };
  containerClass: string;
  centerIconContainerClass: string;
  textLines: string[];
}

const Section03: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic data array for statistics cards
  const statisticsData: StatisticItem[] = [
    {
      id: 1,
      icon: '/assets/icons/onlycircle.svg',
      centerIcon: '/assets/icons/qmark.svg',
      alt: 'question mark',
      centerAlt: 'Question Mark Icon',
      iconSize: { height: 75, width: 75 },
      centerIconSize: { width: 24, height: 24 },
      containerClass: 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2',
      centerIconContainerClass: 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10',
      textLines: [
        "67% of website visitors abandon sites",
        "when they can't get immediate answers"
      ]
    },
    {
      id: 2,
      icon: '/assets/icons/onlycircle.svg',
      centerIcon: '/assets/icons/anxious.svg',
      alt: 'anxious face',
      centerAlt: 'Anxious Face Icon',
      iconSize: { height: 75, width: 75 },
      centerIconSize: { width: 24, height: 24 },
      containerClass: 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2',
      centerIconContainerClass: 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10',
      textLines: [
        "79% say they won't return to a",
        "website after a bad user experience"
      ]
    },
    {
      id: 3,
      icon: '/assets/icons/onlycircle.svg',
      centerIcon: '/assets/icons/wing.svg',
      alt: 'wings',
      centerAlt: 'Wings Icon',
      iconSize: { height: 75, width: 75 },
      centerIconSize: { width: 32, height: 32 },
      containerClass: 'w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2',
      centerIconContainerClass: 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12',
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
      icon: "/assets/icons/Mask.svg",
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
      icon: "/assets/icons/bot.svg",
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
      icon: "/assets/icons/AI.svg",
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
      icon: "/assets/icons/none2.svg",
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

  // Clear existing timeouts
  const clearTimeouts = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // Handle dot click with proper state management
  const handleDotClick = useCallback((index: number): void => {
    clearTimeouts();
    setIsUserScrolling(true);
    setActiveSlide(index);
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
  }, [clearTimeouts]);

  // Auto-scroll effect for mobile carousel
  useEffect(() => {
    const setupAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }

      if (typeof window !== 'undefined' && window.innerWidth < 768 && !isUserScrolling) {
        autoScrollIntervalRef.current = setInterval(() => {
          setActiveSlide(prev => {
            return (prev + 1) % comparisonData.length;
          });
        }, 3000);
      }
    };

    setupAutoScroll();

    const handleResize = () => {
      setupAutoScroll();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearTimeouts();
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isUserScrolling, comparisonData.length, clearTimeouts]);

  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, [clearTimeouts]);

  return (
    <div className="relative flex flex-col justify-center items-center px-4 lg:px-6 overflow-hidden">
      {/* Single Centered Glow Effect - Responsive */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[600px] sm:w-[350px] sm:h-[750px] lg:w-[400px] lg:h-[900px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[100px] sm:blur-[120px] lg:blur-[130px] -z-10" />
      
      {/* Spotlight section with ShineBorder */}
      <div className="relative w-full flex mb-6 sm:mb-8 lg:mb-10 justify-center">
        <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden">
          <div 
            className="relative bg-cover w-full py-4 sm:py-6 lg:py-7 rounded-2xl bg-center bg-no-repeat flex items-center justify-center z-10 overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/spotlight.png')",
            }}
          >
            <ShineBorder
              borderWidth={2}
              duration={15}
              shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            />
            
            <div className="relative z-10 max-w-5xl w-full text-center ">
              <div
                className="relative text-center px-3 z-10 py-3 sm:py-4 lg:py-6"
                style={{
                  fontFamily: 'Radio Grotesk',
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 6vw, 43px)',
                  lineHeight: '0.8',
                  letterSpacing: '0%',
                  margin: '0 0 -0.5rem 0',
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
                <div>
                  <ShinyText text="Stop" speed={5} className="gradient-white-text" />
                  {' '}
                  <ShinyText text="Losing Money" speed={5} className="gradient-mask-text" />
                  {' '}
                  <ShinyText text="Every Single" speed={5} className="gradient-white-text" />
                </div>
                <div>
                  <ShinyText text="Day Your Website" speed={5} className="gradient-white-text" />  
                  {' '}
                  <ShinyText text="Stays Silent!" speed={5} className="gradient-white-text" />  
                </div>
              </div>
       
              <p className="subtext1 mt-3 sm:mt-4 lg:mt-5 mb-6 sm:mb-8 lg:mb-10">
                The statistics are brutal!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-9 mx-auto max-w-4xl lg:max-w-5xl">
                {statisticsData.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center text-center">
                    <div className={`${stat.containerClass} flex items-center justify-center relative`}>
                      <Image 
                        src={stat.icon} 
                        alt={stat.alt} 
                        height={stat.iconSize.height} 
                        width={stat.iconSize.width}
                        className="w-full h-full object-contain rotate-alternate"
                      />
                      
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${stat.centerIconContainerClass} flex items-center justify-center`}>
                        <Image
                          src={stat.centerIcon}
                          alt={stat.centerAlt}
                          width={stat.centerIconSize.width}
                          height={stat.centerIconSize.height}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="subtext3 mb-4 sm:mb-6 py-2 sm:py-4 leading-tight">
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
      <div className="relative w-full max-w-6xl mx-auto bg-transparent rounded-3xl lg:p-12 overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10 py-2 sm:py-3">
            <div
              className="relative text-center z-10 py-3 sm:py-4 lg:py-6"
              style={{
                fontFamily: 'Radio Grotesk',
                fontWeight: 400,
                fontSize: 'clamp(20px, 5vw, 43px)',
                lineHeight: '0.8',
                letterSpacing: '0%',
                margin: '0 0 -0.5rem 0',
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
              <div>
                <ShinyText text="Why Business Owners" speed={5} className="gradient-white-text" />
                {' '}
                <ShinyText text="Are Ditching" speed={5} className="gradient-white-text" />
              </div>
              <div>
                <ShinyText text="Expensive Alternatives for " speed={5} className="gradient-white-text" />
                {' '}
                <ShinyText text="VoiceAgent AI" speed={5} className="gradient-mask-text" />
              </div>
            </div>
          </div>

          {/* Comparison Grid/Carousel Container */}
          <div className="w-full max-w-5xl px-3 mx-auto relative">
            {/* Desktop Grid (md and up) */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 top-0 w-[0.2px] h-full bg-white/10 transform -translate-x-1/2 z-20"></div>
              <div className="absolute top-1/2 left-0 w-full h-[0.2px] bg-white/10 transform -translate-y-1/2 z-20"></div>
              
              <div className="grid grid-cols-2 gap-8 lg:gap-10">
                {comparisonData.map((item: ComparisonItem) => (
                  <ComparisonCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-70 overflow-hidden rounded-lg ">
                  {comparisonData.map((item, index) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                        index === activeSlide 
                          ? 'opacity-100 translate-x-0' 
                          : index < activeSlide 
                            ? 'opacity-0 -translate-x-full' 
                            : 'opacity-0 translate-x-full'
                      }`}
                      data-carousel-item
                    >
                      <div className="flex items-center justify-center h-full px-4">
                        <ComparisonCard item={item} isMobile={true} />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center py-5 space-x-3">
                  {comparisonData.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                        index === activeSlide
                          ? 'bg-white scale-125 shadow-lg'
                          : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                      }`}
                      aria-current={index === activeSlide ? 'true' : 'false'}
                      aria-label={`Slide ${index + 1}`}
                      data-carousel-slide-to={index}
                      onClick={() => handleDotClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA Section */}
      <div 
        className="relative w-full max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        <div className="relative z-10 text-center">
          <div
            className="relative text-center z-10 mt-4 sm:mt-6 lg:mt-8"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(20px, 5vw, 43px)',
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
              <ShinyText text="But what if I told you " speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="there's now a" speed={5} className="gradient-white-text" />
            </div>
            <div>
              <ShinyText text="way to have a tireless" speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="smart voice" speed={5} className="gradient-white-text" />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div> <ShinyText text="agent on your website " speed={5} className="gradient-white-text" /></div>
              <div className="flex ml-2">
                <ShinyText text="24/7!" speed={5} className="gradient-white-text" />
                <BsStars className="text-white text-[30px] lg:text-[30px] ml-5  -rotate-90"/>
              </div>
            </div>
          </div>
           
          <p className="subtext1 py-4">
            Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
          </p>
        </div>
      </div>
      
      <DownArrow/>
    </div>
  );
};

interface ComparisonCardProps {
  item: ComparisonItem;
  isMobile?: boolean;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ item, isMobile = false }) => {
  return (
    <div className={`flex ${!isMobile ? 'justify-center items-start' : ''} h-full`}>
      <div 
        className={`
          rounded-xl p-4 sm:p-6 lg:p-8 ${
            isMobile ? 'h-80' : 'h-auto'
          } relative overflow-hidden w-full max-w-md bg-transparent
        `}
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-shrink-0 mb-3 sm:mb-4">
            <div className="flex flex-col items-start">
              <div className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[57px] md:h-[57px] lg:w-[60px] lg:h-[60px] mb-3 flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={`${item.title} icon`} 
                  height={60} 
                  width={60} 
                  className="w-full h-full object-contain"
                />
              </div>
              <ShinyText text={item.title} speed={5} className="subtext3 gradient-text-white text-start" />
            </div>
          </div>

          <div className="flex-1">
            <ul className="space-y-2 sm:space-y-3 subtext1 text-start">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <div className="w-1 h-1 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                  {typeof feature === 'string' ? <span>{feature}</span> : feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;