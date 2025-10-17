'use client';
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import LightRays from '@/components/ui/LightRays';
import ShinyText from '@/components/ui/ShinyText';
import DownArrow from '../../ui/DownArrow';
import { FaArrowRightLong } from "react-icons/fa6";
import Gradient from "@/public/assets/images/section03/gradient.png"
import { BsStars } from "react-icons/bs";
import MobileComparisonCarousel from '@/components/ui/mobileStack';

const Section03: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isUserScrolling, setIsUserScrolling] = useState<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
            return (prev + 1) % comparisonData.length; // Only loop through the carousel items
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
  }, [isUserScrolling, clearTimeouts]);

  useEffect(() => {
    return () => {
      clearTimeouts();
    };
  }, [clearTimeouts]);

  const comparisonData = [
    {
      id: 1,
      title: 'Traditional Live Chat',
      icon: '/assets/icons/Mask.svg',
      iconAlt: 'Traditional Live Chat icon',
      borderClass: 'border-white/20',
      bgClass: 'bg-[#01000C]',
      shadowStyle: { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' },
      features: [
        'Requires hiring expensive staff ($3,000+ per month)',
        'Limited to business hours only',
        'Agents need training and management',
        'Slow response times frustrate customers',
        'Can only handle a few conversations at a time'
      ]
    },
    {
      id: 2,
      title: 'Text-Based Chatbots',
      icon: '/assets/icons/bot.svg',
      iconAlt: 'Text-Based Chatbots icon',
      borderClass: 'border-white/20',
      bgClass: 'bg-[#01000C]',
      shadowStyle: { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' },
      features: [
        'Customers hate typing long questions',
        'Often misunderstand complex queries',
        'Robotic, impersonal interactions',
        "Can't guide users around your website",
        'High abandonment rates'
      ]
    },
    {
      id: 3,
      title: 'VoiceAgent AI',
      icon: '/assets/icons/AI.svg',
      iconAlt: 'VoiceAgent AI icon',
      borderClass: 'border-white/20',
      bgClass: 'bg-[#01000C]',
      shadowStyle: { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' },
      features: [
        'ONE-TIME payment (not monthly fees)',
        'Works 24/7/365 automatically',
        'Handles simultaneous conversations',
        'Natural voice interactions customers love',
        'Actually navigates your website while talking',
        'Setup in under 60 seconds'
      ]
    }
  ];

  const doNothingData = {
    id: 4,
    title: 'Do Nothing (Current Situation)',
    features: [
      '57% of visitors leave without buying',
      'No way to overcome objections',
      'Missing sales 24/7',
      'Competitors who adapt will crush you'
    ]
  };

  const statistics = [
    {
      id: 1,
      circleImage: "/assets/icons/onlycircle.svg",
      icon: "/assets/icons/qmark.svg",
      iconAlt: "Question Mark Icon",
      text: ["67% of website visitors abandon sites when they can't get immediate answers"],
    },
    {
      id: 2,
      circleImage: "/assets/icons/onlycircle.svg",
      icon: "/assets/icons/anxious.svg",
      iconAlt: "Anxious Face Icon",
      text: ["79% say they won't return to a website after a bad user experience"],
    },
    {
      id: 3,
      circleImage: "/assets/icons/onlycircle.svg",
      icon: "/assets/icons/wing.svg",
      iconAlt: "Wings Icon",
      text: ["You lose an average of $1,430 for every 1,000 visitors who leave confused"],
    }
  ];

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden ">
      {/* Glow Effect */}
      <div
        className="absolute w-[492.07px] h-[861.73px] -z-10"
        style={{
          background: 'linear-gradient(180deg, #1F0B46 5%, #DEBFFF 29%, #5A27B1 58%, #BF84F9 92%)',
          filter: 'blur(150px)',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '0',
          opacity: 0.2
        }}
      />

      {/* Spotlight section - Your Website Stays Silent! */}
      <div className="relative w-full flex  justify-center">
        <div className="relative w-full bg-[#060012] border-t-[0.1px] border-white/10 border-b-[0.1px] overflow-hidden">
          <div className="relative w-full py-10 md:py-15 flex flex-col items-center justify-center z-10 overflow-hidden">

            {/* Light rays container */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 sm:h-80 lg:h-96 z-0 pointer-events-none">
              <LightRays
                raysOrigin="top-center"
                raysColor="#5706B4"
                raysSpeed={1.2}
                lightSpread={1}
                rayLength={0.6}
                fadeDistance={2}
                followMouse={false}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="w-full h-full"
              />
            </div>

            {/* Centered content */}
            <div className="relative z-10 w-full px-4 text-center flex flex-col items-center justify-center">
              <h1
                className="relative z-10 text-center mx-auto 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 max-w-[250px] sm:max-w-[475px] 2xl:max-w-[1150px] md:max-w-[820px]  sm:px-3 Heading2"
              >
                <div>
                  <ShinyText text="Stop Losing Money Every Single Day" speed={5} className="gradient-white-text inline-block" />
                  {' '}
                  <ShinyText text="Your Website Stays Silent!" speed={5} className="gradient-mask-text inline-block" />
                </div>
              </h1>
              <p
                className="mt-3 2xl:mb-10 mb-0 2xl:text-[23px] xl:text-[16px] lg:text-[15px] font-light text-white md:text-[16px] text-[14px]">
                The statistics are brutal!
              </p>


              {/* Statistics Cards - Dynamic */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-2 mx-auto pt-10 pb-5 relative z-10">
                {statistics.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 sm:w-16 mb-3 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 flex items-center justify-center relative">
                      <Image
                        src={stat.circleImage}
                        alt={stat.iconAlt}
                        width={stat.id === 3 ? 56 : 48} // Slightly larger for wing icon
                        height={stat.id === 3 ? 56 : 48}
                        className="w-full h-full object-contain rotate-alternate"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={stat.icon}
                          alt={stat.iconAlt}
                          width={stat.id === 3 ? 28 : 24}
                          height={stat.id === 3 ? 28 : 24}
                          className={`object-contain ${stat.id === 3
                            ? 'w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 2xl:w-17 2xl:h-17'
                            : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11'
                            }`}
                        />
                      </div>
                    </div>
                    <div

                      className="py-2 sm:py-4 max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] md:2xl:mb-10 text-white font-semibold 2xl:text-[28.5px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] leading-tight xl:px-8 2xl:px-10">

                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="relative w-full max-w-[1800px] mx-auto ">
        <div className="relative z-10">

          {/* Main Heading */}
          <div className="py-15 2xl:py-22 w-full mx-auto">
            <h1
              className="relative z-10 text-center mx-auto px-4  2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2"
            >
              <div >
                <ShinyText text="Why Business Owners Are Ditching" speed={5} className="gradient-white-text" />
              </div>
              <div >
                <ShinyText text="Expensive Alternatives" speed={5} className="gradient-white-text " />
                {' '}
                <ShinyText text="for VoiceAgent AI" speed={5} className="gradient-mask-text " />
              </div>
            </h1>
          </div>

          {/* Comparison Grid/Carousel Container */}
          <div className="w-full mx-auto relative">
            {/* Desktop Grid (md and up) - Cards 1-3 in flex layout */}
            <div className="hidden lg:block">
              {/* Card Grid */}
              <div className="flex justify-center items-stretch gap-4 lg:gap-6 xl:gap-15 2xl:gap-12 mx-auto">
                {comparisonData.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col flex-shrink-0 min-w-0 
                   lg:w-[320px] lg:h-[380px] lg:overflow-hidden
                   xl:w-[380px] xl:h-[355px] xl:overflow-hidden
                   2xl:w-[533px] 2xl:h-[500px] 2xl:overflow-hidden"
                  >

                    <div className="relative w-full h-full">
                      <div
                        className={`w-full h-full rounded-[12px] border-2 flex flex-col transition-all duration-300 ${card.bgClass} ${card.borderClass} hover:border-[#BF84F9] hover:bg-gradient-to-br hover:from-[#1F0B46]/10 hover:via-[#DEBFFF]/10 hover:to-[#5A27B1]/10`}
                        style={{
                          ...card.shadowStyle,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(191, 132, 249, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = card.shadowStyle?.boxShadow?.toString() || '0 4px 20px rgba(0, 0, 0, 0.15)';
                        }}
                      >
                        <div className="flex flex-col h-full p-6 ">
                          {/* Header Section */}
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-[56px] mb-5 xl:h-[56px] 2xl:w-[77px] 2xl:h-[77px] flex items-center justify-center">
                              <div className="relative w-full h-full flex flex-col">
                                <Image
                                  src={card.icon}
                                  alt={card.iconAlt}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>

                            {/* Title */}
                            <div
                              className="font-bold text-white 2xl:mb-5 2xl:text-[29px] xl:text-[20px] lg:text-[18px] mb-2 mt-8 xl:mt-8 2xl:mt-8 text-start leading-tight"
                            >
                              {card.title}
                            </div>
                          </div>

                          {/* Features Section */}
                          <div className="flex-1 flex flex-col justify-start mt-2">
                            <ul className="space-y-2">
                              {card.features.map((feature, index) => (
                                <li key={index} className="flex items-start group">
                                  <FaArrowRightLong className="text-white text-[14px] mr-2 lg:mr-1.5 xl:mt-2 xl:mr-2 font-normal flex-shrink-0" />
                                  <p className="2xl:text-[20px] xl:text-[14px] leading-5 font-normal 2xl:leading-8 lg:text-[14px] text-white">
                                    {feature}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Do Nothing Card - Separate Section */}
              <div className="flex justify-center mt-8 2xl:mb:20 xl:mb-10 md:mt-12 lg:mt-16 w-full">
                <div className="w-full  px-4 sm:px-6">
                  <div className="w-full flex flex-col items-center">
                    {/* Heading */}
                    <h1
                      className="relative z-10 text-center mx-auto Heading2  2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 
                     "
                    >
                      <ShinyText text={doNothingData.title} speed={5} className="gradient-white-text" />
                    </h1>

                    {/* Features */}
                    <div className="w-full flex justify-center py-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-3 ">
                        {doNothingData.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <FaArrowRightLong className="text-white font-normal text-[20px] mr-2 flex-shrink-0" />
                            <p className="2xl:text-[20px] xl:text-[14px] leading-5 2xl:leading-8 lg:text-[14px] text-white">
                              {feature}
                            </p>
                          </div>

                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block lg:hidden">
              <MobileComparisonCarousel
                comparisonData={comparisonData}
                doNothingData={doNothingData}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div
        className="relative w-full p-2 sm:p-10 lg:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >
        <div className="w-full py-2 flex flex-col items-center justify-center">
          <h1
            className="relative z-10 text-center mx-auto w-full Heading2"
          >
            <div className="flex 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 flex-col mt-5 justify-center w-full xl:max-w-[75%] lg:max-w-4xl md:max-w-3xl sm:max-w-2xl 2xl:max-w-[1500px] mx-auto items-center">
              <div>
                <ShinyText text="But what if I told you there's now a way to have a tireless smart voice agent on your website " speed={5} className="gradient-white-text" /></div>
              <div className="flex ml-2">
                <ShinyText text="24/7!" speed={5} className="gradient-white-text" />
                <BsStars className="text-white text-[20px] sm:text-[20px] md:text-[20px] lg:text-[33px] 2xl:text-[55px] ml-3 mt-1 -rotate-90" />
              </div>
            </div>
          </h1>
        </div>
        <p className="2xl:text-[23px] xl:text-[16.27px] lg:text-[15px] text-[14px] font-light text-center max-w-[80%] md:max-w-[60%] 2xl:max-w-[1100px] mx-auto py-4">
          Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
        </p>
      </div>

      <DownArrow />
    </div>
  );
};

export default Section03;