'use client';
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import LightRays from '@/components/ui/LightRays';
import ShinyText from '@/components/ui/ShinyText';
import DownArrow from '../../ui/DownArrow';
import { FaArrowRightLong } from "react-icons/fa6";
import Gradient from "@/public/assets/images/gradient.png"
import { BsStars } from "react-icons/bs";

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
        'Can\'t guide users around your website',
        'High abandonment rates'
      ]
    },
    {
      id: 3,
      title: 'VoiceAgent AI',
      icon: '/assets/icons/AI.svg',
      iconAlt: 'VoiceAgent AI icon',
      borderClass: 'border-[#BF84F9]',
      bgClass: 'bg-gradient-to-br from-[#1F0B46]/10 via-[#DEBFFF]/10 to-[#5A27B1]/10',
      shadowStyle: { boxShadow: '0 4px 20px rgba(191, 132, 249, 0.2)' },
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
      iconSize: 24,
      text: ["67% of website visitors abandon sites", "when they can't get immediate answers"],
      iconContainerClass: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
    },
    {
      id: 2,
      circleImage: "/assets/icons/onlycircle.svg",
      icon: "/assets/icons/anxious.svg",
      iconAlt: "Anxious Face Icon",
      iconSize: 24,
      text: ["79% say they won't return to a", "website after a bad user experience"],
      iconContainerClass: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
    },
    {
      id: 3,
      circleImage: "/assets/icons/onlycircle.svg",
      icon: "/assets/icons/wing.svg",
      iconAlt: "Wings Icon",
      iconSize: 32,
      text: ["You lose an average of $1,430 for every", "1,000 visitors who leave confused"],
      iconContainerClass: "w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
    }
  ];

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden ">
      {/* Enhanced Glow Effect - Responsive */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient(circle at center, rgba(90, 39, 177, 0.15) 0%, rgba(31, 11, 70, 0) 60%)">
        </div>
      </div>

      {/* Spotlight section with ShineBorder */}
      <div className="relative w-full flex  justify-center">
        <div className="relative w-full bg-[#060012] rounded-2xl overflow-hidden">
          <div className="relative w-full py-10 md:py-15 flex flex-col items-center justify-center z-10 overflow-hidden">

            {/* Light rays container */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-64 sm:h-80 lg:h-96 z-0 pointer-events-none">
              <LightRays
                raysOrigin="top-center"
                raysColor="#480596"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="w-full h-full"
              />
            </div>

            {/* Centered content */}
            <div className="relative z-10 w-full text-center flex flex-col items-center justify-center">
              <h1
                className="relative z-10 text-center mx-auto max-w-[730px] 2xl:max-w-[1150px] xl:max-w-[820px]"
                style={{
                  fontFamily: 'Basis Grotesque Pro, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3vw, 60px)',
                  lineHeight: '1.1',
                  margin: '0 0 0 0',
                  padding: '0 0',
                  letterSpacing: '0%',
                  color: 'transparent',
                  background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',

                }}
              >
                <div>
                  <ShinyText text="Stop Losing Money Every Single Day Your Website Stays Silent!
" speed={5} className="gradient-white-text" />
                </div>

              </h1>

              <p
                style={{
                  fontSize: 'clamp(14px, 0.18vw + 13.7px, 23px)',
                  fontWeight: 200,
                  color: 'white',
                  letterSpacing: '0.6px',

                }}

                className="mt-5">
                The statistics are brutal!
              </p>

              {/* Statistics Cards - Dynamic */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-2 mx-auto py-10">
                {statistics.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2 flex items-center justify-center relative">
                      <Image
                        src={stat.circleImage}
                        alt={stat.iconAlt}
                        height={75}
                        width={75}
                        className="w-full h-full object-contain rotate-alternate"
                      />
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${stat.iconContainerClass} flex items-center justify-center`}>
                        <Image
                          src={stat.icon}
                          alt={stat.iconAlt}
                          width={stat.iconSize}
                          height={stat.iconSize}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(15px, 0.216vw + 17.2px, 28.5px)',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.9)',
                      }}
                      className="py-2 sm:py-4 leading-tight px-4 ">
                      {stat.text[0]}
                      <br />
                      {stat.text[1]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="relative z-10">
          <div className="py-15 w-full flex flex-col items-center justify-center">
            <h1
              className="relative z-10 text-center mx-auto max-w-[730px] 2xl:max-w-[1150px] xl:max-w-[820px] px-4"
              style={{
                fontFamily: 'Basis Grotesque Pro, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(22px, 3vw, 60px)',
                lineHeight: '1.1',
                margin: '0 auto',
                padding: '0',
                letterSpacing: '0%',
                color: 'transparent',
                background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <div >
                <ShinyText text="Why Business Owners Are Ditching" speed={5} className="gradient-white-text" />
              </div>
              <div >
                <ShinyText text="Expensive Alternatives" speed={5} className="gradient-white-text" />
                {' '}
                <ShinyText text="for VoiceAgent AI" speed={5} className="gradient-mask-text" />
              </div>
            </h1>
          </div>



          {/* Comparison Grid/Carousel Container */}
          <div className="w-full mx-auto relative">
            {/* Desktop Grid (md and up) - Cards 1-3 in flex layout */}
            <div className="hidden lg:block">
  {/* Card Grid */}
  <div className="flex justify-center items-stretch gap-6 lg:gap-12  mx-auto">
    {comparisonData.map((card) => (
      <div
        key={card.id}
       
        className="flex flex-col flex-shrink-0 min-w-0 
                   xl:w-[380px] xl:h-[355px] 
                   2xl:w-[533px] 2xl:h-[500px]"
      >
      
      
        <div className="relative w-full h-full">
          <div
            className={`w-full h-full rounded-[12px] border flex flex-col ${card.bgClass} ${card.borderClass}`}
            style={card.shadowStyle}
          >
            <div className="flex flex-col h-full p-4 sm:p-5 md:p-6">
              {/* Header Section */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 2xl:w-[77px] 2xl:h-[77px] flex items-center justify-center">
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
                  style={{
                    fontSize: "clamp(18px, 0.65vw + 14px, 29px)", 
                    fontWeight: 600,
                    color: "white",
                  }}
                  className="font-bold text-white mb-3 mt-8 text-start leading-tight"
                >
                  {card.title}
                </div>
              </div>

              {/* Features Section */}
              <div className="flex-1 flex flex-col justify-start mt-2">
                <ul className="space-y-2">
                  {card.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <FaArrowRightLong className="text-white text-xs mt-1.5 mr-3 flex-shrink-0" />
                      <p
                        className="pr-6 text-white"
                        style={{
                          fontSize: 'clamp(12px, 10vw , 20px)',
                          lineHeight: 1.5,
                          letterSpacing: '0.6px',
                         
                        }}
                      >
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
  <div className="flex justify-center mt-8 md:mt-12 lg:mt-16 w-full">
    <div className="w-full  px-4 sm:px-6">
      <div className="w-full flex flex-col items-center">
        {/* Heading */}
        <h1
          className="relative z-10 text-center mx-auto 
                     "
          style={{
            fontFamily: "Basis Grotesque Pro, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 3vw, 60px)",
            lineHeight: "1.1",
            margin: "0 0 30px 0",
            color: "transparent",
            background:
              "linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <ShinyText text={doNothingData.title} speed={5} className="gradient-white-text" />
        </h1>

        {/* Features */}
        <div className="w-full flex justify-center mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-3 ">
            {doNothingData.features.map((feature, index) => (
              <div key={index} className="flex items-center lg:items-start">
                <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                <p
                   className=" text-white"
                   style={{
                     fontSize: 'clamp(12px, 10vw , 20px)',
                     lineHeight: 1.5,
                     letterSpacing: '0.6px',
                    
                   }}
                >
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
              <div id="default-carousel" className="relative w-full min-h-[410px]" data-carousel="slide">
                {/* Carousel container with dynamic height */}
                <div className="relative overflow-visible min-h-[410px]">
                  {comparisonData.map((card, index) => (
                    <div
                      key={card.id}
                      className={`w-full transition-all duration-500 ease-in-out transform ${index === activeSlide
                          ? 'opacity-100 translate-x-0 relative'
                          : 'opacity-0 absolute inset-0 pointer-events-none'
                        }`}
                      data-carousel-item
                      style={{
                        transform: index === activeSlide
                          ? 'translateX(0)'
                          : index < activeSlide
                            ? 'translateX(-100%)'
                            : 'translateX(100%)',

                      }}
                    >
                      <div className="w-full h-full flex justify-center px-0">
                        <div className="w-full max-w-md mx-auto">
                          <div className="relative w-full h-auto flex justify-center overflow-visible">
                            <div
                              className={`w-full max-w-[1300px] rounded-[12px] py-5 px-5 sm:py-6 sm:px-6 border ${card.bgClass} ${card.borderClass}`}
                              style={card.shadowStyle}
                            >
                              <div className="flex flex-col justify-start">
                                {/* Header Section */}
                                <div className="flex-shrink-0 mb-4 md:mb-5 lg:mb-6">
                                  <div className="flex flex-col items-start">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                                      <div className="relative w-full h-full flex flex-col">
                                        <Image
                                          src={card.icon}
                                          alt={card.iconAlt}
                                          fill
                                          className="object-contain"
                                          sizes="(max-width: 768px) 40px, 56px"
                                        />
                                      </div>
                                    </div>
                                    <ShinyText
                                      text={card.title}
                                      speed={5}
                                      className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight"
                                    />
                                  </div>
                                </div>

                                {/* Features Section */}
                                <div className="flex-1">
                                  <ul className="space-y-2 sm:space-y-3">
                                    {card.features.map((feature, featureIndex) => (
                                      <li key={featureIndex} className="flex items-start group">
                                        <div className="flex-shrink-0 mt-1 mr-2">
                                          <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                        </div>
                                        <p style={{

                                          fontSize: 'clamp(12px, 0.152vw + 12.05px, 20px)',
                                          lineHeight: '1.5',
                                          color: 'white',
                                          letterSpacing: '0.6px',
                                          wordWrap: 'break-word',
                                          overflowWrap: 'break-word',
                                        }}
                                          className="font-light pr-6"
                                        >{feature}</p>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot navigation */}
              <div className="flex justify-center mt-6 space-x-3">
                {comparisonData.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeSlide ? 'bg-white w-3' : 'bg-white/50 w-3'
                      }`}
                    aria-current={index === activeSlide}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>

              {/* Do Nothing Card - Outside Carousel */}
              <div className="w-full py-12 ">
                <div className="w-full max-w-6xl mx-auto flex flex-col ">
                  <h1
                    className="relative z-10 mx-auto text-center"
                    style={{
                      fontFamily: 'Basis Grotesque Pro, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(22px, 3vw, 60px)',
                      lineHeight: '1.1',
                      margin: '0 0 30px 0',
                      padding: '0',
                      letterSpacing: '0%',
                      color: 'transparent',
                      background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',

                    }}
                  >
                    <div >
                      <ShinyText text={doNothingData.title} speed={5} className="gradient-white-text" />
                    </div>

                  </h1>

                  <div className="w-full flex justify-center">
                    <div className="grid grid-cols-1 gap-x-3 gap-y-2 max-w-md w-full">
                      {doNothingData.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                          <span className="text-white/90 subtextpt2 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Final CTA Section */}
      <div
        className="relative w-full p-6 sm:p-10 lg:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Gradient.src})`
        }}
      >

        <div className="w-full py-2 flex flex-col items-center justify-center">
          <h1
            className="relative z-10 text-center mx-auto max-w-[730px] 2xl:max-w-[1400px] xl:max-w-[920px] px-4"
            style={{
              fontFamily: 'Basis Grotesque Pro, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 60px)',
              lineHeight: '1.2',
              margin: '0 auto',
              padding: '0',
              letterSpacing: '0%',
              color: 'transparent',
              background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <div> <ShinyText text="But what if I told you there's now a way to have a tireless smart voice agent on your website " speed={5} className="gradient-white-text" /></div>
              <div className="flex ml-2">
                <ShinyText text="24/7!" speed={5} className="gradient-white-text" />
                <BsStars className="text-white text-[20px] sm:text-[20px] md:text-[20px] lg:text-[30px] 2xl:text-[60px] ml-3  -rotate-90" />
              </div>
            </div>



          </h1>
        </div>

        <p
          style={{
            fontSize: "clamp(13px, 2.73vw - 19px, 23px)",
            fontWeight: 200,
            color: 'white',
            letterSpacing: '0.6px',

          }
          }

          className="text-center max-w-[1100px] mx-auto py-4">
          Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
        </p>
      </div>


      <DownArrow />
    </div>
  );
};

export default Section03;