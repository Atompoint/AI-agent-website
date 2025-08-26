'use client';
import React, { useEffect, useState } from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Header from "../layout/Header";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { ShineBorder } from "@/components/magicui/shine-border";
import DownArrow from "../ui/DownArrow";

const features = [
  'Available 24/7',
  'Instant Voice Conversations',
  'Smart Visitor Guidance',
  'One-Click Installation',
  'Complete Brand Matching',
  'Unlimited Customers',
  'Works On Any Website',
  'Automatic Website Learning',
];

export default function HeroHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [micRef, setMicRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!micRef) return;

      const micOriginalRect = micRef.getBoundingClientRect();
      const micOriginalTop = micOriginalRect.top + window.scrollY;
      
      // When user scrolls past the original mic position
      if (window.scrollY > micOriginalTop - window.innerHeight / 12) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [micRef]);

  return (
    <div>
      {/* Hero Section - Full Height with Background */}
     
      <section className="relative w-full min-h-[20vh] lg:min-h-screen overflow-visible">
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full min-h-full z-0"
    style={{
      backgroundImage: "url('/assets/images/bgimg.webp')",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    }}
  />

  {/* Gradient Overlay */}
  <div
    className="absolute inset-0 w-full min-h-full z-10"
    style={{
      background: `linear-gradient(to bottom, transparent 0%, transparent 85%, #01000C 92%, #01000C 100%)`,
    }}
  />

  {/* Header */}
  <div className="relative z-30">
    <Header />
  </div>

  {/* Main Content Container */}
  <div className="relative z-20 w-full flex flex-col justify-between " style={{ minHeight: 'calc(100vh - 80px)' }}>
    {/* Text Content */}
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 pt-20">
      {/* Label */}
      <div
        className="subtext1 h-[33px] w-[86%] sm:w-[80%] md:w-[90%] lg:w-[498px] max-w-[480px] flex items-center justify-center rounded-full px-3 py-1 mb-6"
        style={{
          border: '1px solid #FFFFFF12',
          backdropFilter: 'blur(3px)',
          background: '#FFFFFF08',
          lineHeight: 1.6,
          letterSpacing: 0.4,
        }}
      >
        Tired of Watching 67% of Your Website Visitors Leave Without Buying?
      </div>

      {/* Main Heading */}
      <div
        className="relative z-10 mb-6"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(16px, 5vw, 52px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
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
          <ShinyText text="World's First" speed={5} className="gradient-white-text" />
          {' '}
          <ShinyText text="Smart Voice AI" speed={5} className="gradient-mask-text" />
          {' '}
          <ShinyText text="Agent That" speed={5} className="gradient-white-text" />
        </div>
        <div>
          <ShinyText text="Actually TALKS to Your Website Visitors &" speed={5} className="gradient-white-text" />
        </div>
        <div>
          <ShinyText text="Guides Them to Buy... While You Sleep!" speed={5} className="gradient-white-text" />
        </div>
      </div>       

      {/* Subtext */}
      <p className="subtext1 w-full px-5 lg:w-[760px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mb-8 md:mb-12">
        Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7 Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying Customers—Instantly!
      </p>
    </div>

    <div className="w-full flex justify-center items-end relative">
  {/* Circle Image */}
  <Image
          src="/assets/images/mycircle.png"
          alt="circle background"
          width={2304}  // Increased from 1920 (20% larger)
          height={1296} // Increased from 1080 (20% larger)
          className="w-full h-auto object-contain scale-[1.1] "
          priority
        />

  {/* Glow + Main1 Container (locked together) */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 scale-130 ">
    
    {/* Glow behind Main1 */}
    <div className="absolute  w-full -translate-y-[24%]">
      <Image
        src="/assets/images/glow1.png"
        width={1200}
        height={900}
        alt="glow effect"
        className="object-contain w-full sm:max-w-[400px] md:max-w-[600px] lg:max-w-[870px]"
        priority
      />
    </div>

    {/* Main1 Image */}
    <div className="relative w-full "> {/* Slightly bigger */}
      <ShineBorder
        borderWidth={2}
        duration={23}
        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        className="absolute inset-0 rounded-2xl pointer-events-none"
      />
      <Image
        src="/assets/images/main1.png"
        alt="main image"
        width={1500}  // Increased to 1500px
        height={1500} // Increased to 1500px
        className="w-full h-auto object-contain rounded-2xl relative z-10 "
        priority
      />
    </div>
  </div>
</div>

  </div>
</section>

      {/* Section 2 */}
      <section className="relative z-30 bg-[#01000C]">
        {/* Product Images on top of section */}
        <div className="relative w-full z-40 px-3 md:px-8 lg:px-0">
          

          {/* Microphone Icon - Smoothly moving between positions */}
          <div 
            ref={setMicRef}
            className="relative z-40 flex justify-center items-center mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 opacity-70  group-hover:opacity-100 transition-opacity duration-1000"></div>
              <Image
                src='/assets/icons/mymic.png'
                alt="Voice Agent Microphone"
                width={130}
                height={130}
                className={`w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] object-contain cursor-pointer  transition-all duration-1000 ease-in-out ${
                  isSticky 
                    ? 'fixed bottom-6 right-6 z-50 group-hover:scale-110 ' 
                    : 'group-hover:scale-110 transform-gpu'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Section 2 content */}
        <div className="pt-[0rem] sm:pt-[0rem] md:pt-[0rem] lg:pt-[0rem] relative z-20">
          <div className="flex justify-center -mt-1 items-center px-4 relative z-20">
            <div className="inline-flex items-center justify-center border border-white/5 bg-black/50 rounded-full px-3 py-1.5 sm:py-2">
              <BsStars className="mr-1.5 sm:mr-2 text-[14px] sm:text-[15px] md:text-[17px] -rotate-90" />
              <span className="subtextpt2 ">GIVE IT A TRY!</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-18 px-4 sm:px-6 relative z-20">
            <div className="max-w-full sm:max-w-[90%] md:max-w-[960px] lg:max-w-[960px] mx-auto grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-left">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 justify-start flex-nowrap py-1.5"
                >
                  {/* Icon with only circle rotating */}
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center relative">
                    {/* Background circle with alternating rotation */}
                    <Image 
                      src="/assets/icons/onlycircle.svg" 
                      alt="Circle" 
                      width={24} 
                      height={24}
                      className="w-full h-full object-contain rotate-alternate"
                    />
                    {/* Check icon centered and stationary */}
                    <FiCheck className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 m-auto text-white" />
                  </div>

                  {/* Text */}
                  <span className="subtext2 max-w-[calc(100%-2.5rem)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
              <DownArrow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
