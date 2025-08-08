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
    playIcon: "/icon.png"
  };

  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      {/* Background Glow Effect */}
      
      
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center">
        <h2
className="relative font-radio font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
style={{
  
  color: 'transparent',
  background:
    'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
}}
>
<div className="m-0 leading-[1]">
  <ShinyText text="Forget everything you know about website" speed={5} className="Heading" />
</div>
<div className="m-0 leading-[1]">
  <ShinyText text="chat boxes, pop-ups, and static FAQ pages." speed={5} className="Heading" />
</div>
<div className="m-0 leading-[1]">
  <ShinyText text="This is different. This is" speed={5} className="Heading" />
  {' '}
  <ShinyText text="REVOLUTIONARY" speed={5} className="Heading gradient-mask-text" />
</div>
</h2>
        </div>

        {/* First Row */}
        <div className="grid lg:grid-cols-2 gap-0 py-20">
          {/* Left Column - Text */}
          <div className="sub-text space-y-4 flex flex-col justify-center px-22">
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
          
          {/* Right Column - Box */}
          <div className="flex justify-start">
            <div className="bg-[#797979] rounded-[8px] h-60 w-[470px] flex items-center justify-center">
             
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-0 py-5">
          {/* Left Column - Box */}
          <div className="flex justify-end">
            <div className="bg-[#797979] rounded-[8px] h-60 w-[470px] flex items-center justify-center">

            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="text-[13px] text-white/85  space-y-4 flex flex-col justify-center px-19">
            {secondRowText.map((text, index) => (
              <p key={index}>
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

      {/* Demo Section */}
      <div className="flex flex-col mt-12 justify-center items-center ">
      <h2
className="relative font-radio font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
style={{

  color: 'transparent',
  background:
    'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
}}
>

<div >
  <ShinyText text="Watch" speed={5} className="Heading" />
  {' '}
  <ShinyText text="The Demo" speed={5} className="Heading gradient-mask-text" />
</div>
</h2>
        
        {/* Fixed Demo Container - Removed overflow hidden and adjusted positioning */}
        <div className="relative inline-block mt-8 rounded-2xl p-1 z-10">
          
          {/* Image with Shine Border */}
          <div className="relative">
            <Image
              src={demoSection.mainImage}
              width={900}
              height={600}
              alt="product web image"
              className="object-contain max-w-full h-auto relative z-10 rounded-2xl"
            />

            {/* Shine border */}
            <ShineBorder
              borderWidth={2}
              duration={23}
              shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />
          </div>

          {/* Large Play icon overlay - Positioned outside the image container */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="relative">
              {/* Play button background circle for better visibility */}
              <div className="absolute inset-0 bg-black/30 rounded-full blur-sm transform scale-110"></div>
              <Image
                src={demoSection.playIcon}
                width={150}
                height={150}
                alt="play button"
                className="cursor-pointer hover:scale-110 transition-transform duration-200 relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

      </div>
     
      
        <DownArrow />
      
    </div>
  );
};

export default Section05;