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
            return (prev + 1) % 4; // 4 comparison cards including "Do Nothing"
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

  return (
    <div className="relative flex flex-col justify-center items-center overflow-hidden pt-0 -mt-4">
      {/* Enhanced Glow Effect - Responsive */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient(circle at center, rgba(90, 39, 177, 0.15) 0%, rgba(31, 11, 70, 0) 60%)">
        </div>
      </div>
      
      {/* Spotlight section with ShineBorder */}
      <div className="relative w-full flex mb-6 sm:mb-8 lg:mb-10 justify-center">
        <div className="relative w-full bg-[#060012] rounded-2xl overflow-hidden">
          <div className="relative w-full py-4 sm:py-6 lg:py-7 flex flex-col items-center justify-center z-10 overflow-hidden">
            
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
              <div
                className="relative text-center px-3 py-3 sm:py-4 lg:py-5"
                style={{
                  fontFamily: 'Radio Grotesk',
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 6vw, 43px)',
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

              <p className="subtext1 mb-6 sm:mb-8 lg:mb-10">
                The statistics are brutal!
              </p>

              {/* Statistics Cards - Hardcoded */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-2 mx-auto">
                {/* Stat 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2 flex items-center justify-center relative">
                    <Image 
                      src="/assets/icons/onlycircle.svg" 
                      alt="question mark" 
                      height={75} 
                      width={75}
                      className="w-full h-full object-contain rotate-alternate"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                      <Image
                        src="/assets/icons/qmark.svg"
                        alt="Question Mark Icon"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="subtext3 mb-4 sm:mb-6 py-2 sm:py-4 leading-tight px-8">
                    67% of website visitors abandon sites               
                    <br />
                    when they can't get immediate answers
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2 flex items-center justify-center relative">
                    <Image 
                      src="/assets/icons/onlycircle.svg" 
                      alt="anxious face" 
                      height={75} 
                      width={75}
                      className="w-full h-full object-contain rotate-alternate"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                      <Image
                        src="/assets/icons/anxious.svg"
                        alt="Anxious Face Icon"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="subtext3 mb-4 sm:mb-6 py-2 sm:py-4 leading-tight px-8">
                    79% say they won't return to a               
                    <br />
                    website after a bad user experience
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 mb-2 flex items-center justify-center relative">
                    <Image 
                      src="/assets/icons/onlycircle.svg" 
                      alt="wings" 
                      height={75} 
                      width={75}
                      className="w-full h-full object-contain rotate-alternate"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center">
                      <Image
                        src="/assets/icons/wing.svg"
                        alt="Wings Icon"
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="subtext3 mb-4 sm:mb-6 py-2 sm:py-4 leading-tight px-8">
                    You lose an average of $1,430 for every               
                    <br />
                    1,000 visitors who leave confused
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      {/* Comparison Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
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
          <div className="w-full mx-auto relative">
            {/* Desktop Grid (md and up) - Cards 1-3 in flex layout */}
            <div className="hidden md:block">
              <div className="flex justify-center gap-6 lg:gap-5 mb-12">
                {/* Card 1: Traditional Live Chat */}
                <div className="flex-shrink-0 w-full max-w-[400px] h-[400px]">
                  <div className="relative w-full h-full">
                    {/* Background div for styling */}
                    <div className="w-full h-full border border-white/20 bg-[#01000C]" style={{ borderRadius: '12px' }}>
                      {/* Content overlay */}
                      <div className="flex flex-col justify-between h-full overflow-hidden p-6">
                        {/* Header Section */}
                        <div className="flex-shrink-0 mb-4">
                          <div className="flex flex-col items-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                              <div className="relative w-full h-full">
                                <Image 
                                  src="/assets/icons/Mask.svg" 
                                  alt="Traditional Live Chat icon" 
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 40px, 56px"
                                />
                              </div>
                            </div>
                            <ShinyText 
                              text="Traditional Live Chat" 
                              speed={5} 
                              className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                            />
                          </div>
                        </div>

                        {/* Features Section */}
                        <div className="flex-1 flex flex-col justify-start">
                          <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Requires hiring expensive staff ($3,000+ per month)
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Limited to business hours only
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Agents need training and management
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Slow response times frustrate customers
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Can only handle a few conversations at a time
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Text-Based Chatbots */}
                <div className="flex-shrink-0 w-full max-w-[400px] h-[400px]">
                  <div className="relative w-full h-full">
                    {/* Background div for styling */}
                    <div className="w-full h-full border border-white/20 bg-[#01000C]" style={{ borderRadius: '12px' }}>
                      {/* Content overlay */}
                      <div className="flex flex-col justify-between h-full overflow-hidden p-6">
                        {/* Header Section */}
                        <div className="flex-shrink-0 mb-4">
                          <div className="flex flex-col items-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                              <div className="relative w-full h-full">
                                <Image 
                                  src="/assets/icons/bot.svg" 
                                  alt="Text-Based Chatbots icon" 
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 40px, 56px"
                                />
                              </div>
                            </div>
                            <ShinyText 
                              text="Text-Based Chatbots" 
                              speed={5} 
                              className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                            />
                          </div>
                        </div>

                        {/* Features Section */}
                        <div className="flex-1 flex flex-col justify-start">
                          <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Customers hate typing long questions
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Often misunderstand complex queries
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Robotic, impersonal interactions
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Can't guide users around your website
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                High abandonment rates
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: VoiceAgent AI */}
                <div className="flex-shrink-0 w-full max-w-[400px] h-[400px]">
                  <div className="relative w-full h-full">
                    {/* Background div for styling */}
                    <div className="w-full h-full rounded-[12px] bg-[linear-gradient(135deg,_rgba(31,11,70,0.17)_5%,_rgba(222,191,255,0.17)_29%,_rgba(90,39,177,0.17)_58%,_rgba(191,132,249,0.17)_92%)] border border-[#BF84F9]">
                      {/* Content overlay */}
                      <div className="flex flex-col justify-between h-full overflow-hidden p-6">
                        {/* Header Section */}
                        <div className="flex-shrink-0 mb-4">
                          <div className="flex flex-col items-start">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                              <div className="relative w-full h-full">
                                <Image 
                                  src="/assets/icons/AI.svg" 
                                  alt="VoiceAgent AI icon" 
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 40px, 56px"
                                />
                              </div>
                            </div>
                            <ShinyText 
                              text="VoiceAgent AI" 
                              speed={5} 
                              className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                            />
                          </div>
                        </div>

                        {/* Features Section */}
                        <div className="flex-1 flex flex-col justify-start">
                          <ul className="space-y-2 sm:space-y-3">
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                ONE-TIME payment (not monthly fees)
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Works 24/7/365 automatically
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Handles simultaneous conversations
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Natural voice interactions customers love
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Actually navigates your website while talking
                              </p>
                            </li>
                            <li className="flex items-start group">
                              <div className="flex-shrink-0 mt-1 mr-2">
                                <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                Setup in under 60 seconds
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Do Nothing Card - Separate Section */}
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="w-full flex flex-col items-center">
                    <ShinyText 
                      text="Do Nothing (Current Situation)" 
                      speed={5} 
                      className="Heading2 mb-4 text-center leading-tight" 
                    />
                    
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      <div className="flex items-start">
                        <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-white/90 subtextpt2 leading-relaxed">57% of visitors leave without buying</span>
                      </div>
                      <div className="flex items-start">
                        <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-white/90 subtextpt2 leading-relaxed">No way to overcome objections</span>
                      </div>
                      <div className="flex items-start">
                        <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-white/90 subtextpt2 leading-relaxed">Missing sales 24/7</span>
                      </div>
                      <div className="flex items-start">
                        <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                        <span className="text-white/90 subtextpt2 leading-relaxed">Competitors who adapt will crush you</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div id="default-carousel" className="relative w-full pb-16" data-carousel="slide">
                {/* Carousel container with dynamic height */}
                <div className="relative overflow-visible min-h-[600px]">
                  {/* Slide 1: Traditional Live Chat */}
                  <div
                    className={`w-full transition-all duration-500 ease-in-out transform ${
                      0 === activeSlide 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                    data-carousel-item
                    style={{
                      transform: 0 === activeSlide 
                        ? 'translateX(0)' 
                        : 0 < activeSlide 
                          ? 'translateX(-100%)' 
                          : 'translateX(100%)',
                      padding: '0 1rem'
                    }}
                  >
                    <div className="w-full h-full flex justify-center">
                      <div className="w-full max-w-8xl mx-auto">
                        <div className="relative w-full h-auto flex justify-center">
                          {/* Background div for styling */}
                          <div className="w-full max-w-[1200px] border border-white/20 min-h-[600px] rounded-xl bg-[#01000C]">
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-start overflow-hidden p-6">
                              {/* Header Section */}
                              <div className="flex-shrink-0 mb-4">
                                <div className="flex flex-col items-start">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                      <Image 
                                        src="/assets/icons/Mask.svg" 
                                        alt="Traditional Live Chat icon" 
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 40px, 56px"
                                      />
                                    </div>
                                  </div>
                                  <ShinyText 
                                    text="Traditional Live Chat" 
                                    speed={5} 
                                    className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                                  />
                                </div>
                              </div>

                              {/* Features Section */}
                              <div className="flex-1 max-h-[60%] overflow-hidden">
                                <ul className="space-y-2 sm:space-y-3">
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Requires hiring expensive staff ($3,000+ per month)
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Limited to business hours only
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Agents need training and management
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Slow response times frustrate customers
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Can only handle a few conversations at a time
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Text-Based Chatbots */}
                  <div
                    className={`w-full transition-all duration-500 ease-in-out transform ${
                      1 === activeSlide 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                    data-carousel-item
                    style={{
                      transform: 1 === activeSlide 
                        ? 'translateX(0)' 
                        : 1 < activeSlide 
                          ? 'translateX(-100%)' 
                          : 'translateX(100%)',
                      padding: '0 1rem'
                    }}
                  >
                    <div className="w-full h-full flex justify-center">
                      <div className="w-full max-w-8xl mx-auto">
                        <div className="relative w-full h-auto flex justify-center">
                          {/* Background div for styling */}
                          <div className="w-full max-w-[1200px] min-h-[600px] rounded-xl border border-white/20 bg-[#01000C]">
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-start overflow-hidden p-6">
                              {/* Header Section */}
                              <div className="flex-shrink-0 mb-4">
                                <div className="flex flex-col items-start">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                      <Image 
                                        src="/assets/icons/bot.svg" 
                                        alt="Text-Based Chatbots icon" 
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 40px, 56px"
                                      />
                                    </div>
                                  </div>
                                  <ShinyText 
                                    text="Text-Based Chatbots" 
                                    speed={5} 
                                    className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                                  />
                                </div>
                              </div>

                              {/* Features Section */}
                              <div className="flex-1 max-h-[60%] overflow-hidden">
                                <ul className="space-y-2 sm:space-y-3">
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Customers hate typing long questions
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Often misunderstand complex queries
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Robotic, impersonal interactions
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Can't guide users around your website
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      High abandonment rates
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3: VoiceAgent AI */}
                  <div
                    className={`w-full transition-all duration-500 ease-in-out transform ${
                      2 === activeSlide 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                    data-carousel-item
                    style={{
                      transform: 2 === activeSlide 
                        ? 'translateX(0)' 
                        : 2 < activeSlide 
                          ? 'translateX(-100%)' 
                          : 'translateX(100%)',
                      padding: '0 1rem'
                    }}
                  >
                    <div className="w-full h-full flex justify-center">
                      <div className="w-full max-w-8xl mx-auto">
                        <div className="relative w-full h-auto flex justify-center">
                          {/* Background div for styling */}
                          <div className="w-full max-w-[1200px] min-h-[600px] rounded-xl border border-white/20 bg-[#01000C]">
                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-start overflow-hidden p-6">
                              {/* Header Section */}
                              <div className="flex-shrink-0 mb-4">
                                <div className="flex flex-col items-start">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mb-3 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                      <Image 
                                        src="/assets/icons/AI.svg" 
                                        alt="VoiceAgent AI icon" 
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 40px, 56px"
                                      />
                                    </div>
                                  </div>
                                  <ShinyText 
                                    text="VoiceAgent AI" 
                                    speed={5} 
                                    className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 text-start leading-tight" 
                                  />
                                </div>
                              </div>

                              {/* Features Section */}
                              <div className="flex-1 max-h-[60%] overflow-hidden">
                                <ul className="space-y-2 sm:space-y-3">
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      ONE-TIME payment (not monthly fees)
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Works 24/7/365 automatically
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Handles simultaneous conversations
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Natural voice interactions customers love
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Actually navigates your website while talking
                                    </p>
                                  </li>
                                  <li className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1 mr-2">
                                      <div className="w-1 h-1 rounded-full bg-white/80 mt-2 group-hover:bg-white transition-colors"></div>
                                    </div>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed">
                                      Setup in under 60 seconds
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4: Do Nothing */}
                  <div
                    className={`w-full transition-all duration-500 ease-in-out transform ${
                      3 === activeSlide 
                        ? 'opacity-100 translate-x-0 relative' 
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                    data-carousel-item
                    style={{
                      transform: 3 === activeSlide 
                        ? 'translateX(0)' 
                        : 3 < activeSlide 
                          ? 'translateX(-100%)' 
                          : 'translateX(100%)',
                      padding: '0 1rem'
                    }}
                  >
                    <div className="w-full h-full flex justify-center">
                      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                        <ShinyText 
                          text="Do Nothing (Current Situation)" 
                          speed={5} 
                          className="Heading2 mb-4 text-center leading-tight" 
                        />
                        
                        <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                          <div className="flex items-start">
                            <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                            <span className="text-white/90 subtextpt2 leading-relaxed">57% of visitors leave without buying</span>
                          </div>
                          <div className="flex items-start">
                            <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                            <span className="text-white/90 subtextpt2 leading-relaxed">No way to overcome objections</span>
                          </div>
                          <div className="flex items-start">
                            <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                            <span className="text-white/90 subtextpt2 leading-relaxed">Missing sales 24/7</span>
                          </div>
                          <div className="flex items-start">
                            <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                            <span className="text-white/90 subtextpt2 leading-relaxed">Competitors who adapt will crush you</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Arrow navigation */}
              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Next slide"
                  onClick={() => handleDotClick((activeSlide + 1) % 4)}
                >
                  <FaArrowRightLong className="text-white text-xl" />
                </button>
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
                <BsStars className="text-white text-[20px] sm:text-[20px] md:text-[20px] lg:text-[30px] lg:ml-5 ml-4 -rotate-90"/>
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

export default Section03;