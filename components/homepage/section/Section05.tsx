import React from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";

const Section05: React.FC = () => {

  // First row content
  const firstRowText = [
    "VoiceAgent AI is the world's first conversational website assistant that your visitors can actually TALK to just like they're calling your business directly.",
    "But here's where it gets incredible...",
    "Not only does it respond with human-like speech in real-time, it can actually NAVIGATE your website while talking to your visitors, showing them exactly what they need to see, when they need to see it."
  ];

  // Second row content
  const secondRowText = [
    "Imagine having your best person available 24/7, who knows every page of your website by heart, never takes a day off, never gets tired, and can handle unlimited customers simultaneously.",
    "That's exactly what you get with VoiceAgent AI."
  ];

  // Demo section
  const demoSection = {
    mainImage: "/assets/images/main1.png",
    playIcon: "/assets/images/play.png"
  };

  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[80px] sm:blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className="relative text-center z-10 mt-8"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: 'clamp(18px, 4vw, 35px)',
            lineHeight: '0.9',
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
          <div className="flex flex-col gap-1">
            <div>
              <ShinyText text="Forget everything you know" speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="about website" speed={5} className="gradient-white-text" />
            </div>
            <div>
              <ShinyText text="chat boxes, pop-ups, and static" speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="FAQ pages." speed={5} className="gradient-white-text" />
            </div>
            <div>
              <ShinyText text="This is different. This is" speed={5} className="gradient-white-text" />
              {' '}
              <ShinyText text="REVOLUTIONARY" speed={5} className="gradient-mask-text" />
            </div>
          </div>
        </div> 

        {/* First Row - Box first on mobile, text on left for desktop */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 py-12 sm:py-16 lg:py-20">
          {/* Box - First on mobile/tablet */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
            <div className="bg-[#797979] rounded-[8px] h-48 sm:h-56 lg:h-60 w-full max-w-[400px] sm:max-w-[460px] flex items-center justify-center">
             
            </div>
          </div>
          
          {/* Text - Second on mobile/tablet, first on desktop */}
          <div className="order-2 lg:order-1 subtext1 space-y-4 flex flex-col text-center lg:text-start justify-center px-0 lg:px-22">
            {firstRowText.map((text, index) => (
              <p key={index}>
                {index === 0 ? (
                  <>
                    <span className="text-white font-medium">VoiceAgent AI</span> is the world's first conversational website assistant that your visitors can actually <span className="text-white font-medium">TALK</span> to just like they're calling your business directly.
                  </>
                ) : index === 2 ? (
                  <>
                    Not only does it respond with human-like speech in real-time, it can actually <span className="text-white font-medium">NAVIGATE</span> your website while talking to your visitors, showing them exactly what they need to see, when they need to see it.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Second Row - Box first on mobile, text on right for desktop */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 py-8 lg:py-5">
          {/* Box - First on mobile/tablet */}
          <div className="order-1 flex justify-center lg:justify-end">
            <div className="bg-[#797979] rounded-[8px] h-48 sm:h-56 lg:h-60 w-full max-w-[400px] sm:max-w-[470px] flex items-center justify-center">

            </div>
          </div>
          
          {/* Text - Second on mobile/tablet */}
          <div className="order-2 subtext1 space-y-4 flex flex-col  text-center lg:text-start justify-center px-0 lg:px-19">
            {secondRowText.map((text, index) => (
              <p key={index} >
                {index === 1 ? (
                  <>
                    That's exactly what you get with <span className="text-white font-medium">VoiceAgent AI</span>.
                  </>
                ) : (
                  text
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section Header */}
      <div
        className="relative text-center z-10"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(24px, 6vw, 43px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
          margin: '30px 0 -0.5rem 0',
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
          <ShinyText text="Watch" speed={5} className="gradient-white-text" />
          {' '}
          <ShinyText text="The Demo" speed={5} className="gradient-mask-text" />
        </div>
      </div> 

      {/* Image Container with Glow Effect */}
      <div className="relative max-w-[900px] m-auto mt-8 px-4">
        {/* Glow Image - positioned behind main image */}
        <div className="absolute top-[0%] lg:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[80px] sm:blur-[100px] -z-10" />
        
        {/* Main Image with Shine Border */}
        <div className="relative rounded-2xl overflow-hidden z-10 p-0.5 w-full">
          <ShineBorder
            borderWidth={2}
            duration={23}
            shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            className="absolute inset-0 rounded-2xl pointer-events-none"
          />
          <Image
            src="/assets/images/main1.png"
            width={1200}
            height={900}
            alt="product web image"
            className="object-contain w-full h-auto relative z-10 rounded-2xl"
            priority
          />
        </div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative">
            {/* Play button background circle for better visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-full blur-sm transform scale-110"></div>
            <Image
              src={demoSection.playIcon}
              width={150}
              height={150}
              alt="play button"
              className="cursor-pointer hover:scale-110 transition-transform duration-200 relative z-10 drop-shadow-2xl w-[80px] sm:w-[120px] lg:w-[150px] h-auto"
            />
          </div>
        </div>
      </div>
      
      <DownArrow />
    </div>
  );
};

export default Section05;