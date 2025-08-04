import React from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";

const Section05: React.FC = () => {
  // Header texts
  const headerTexts = [
    "Forget everything you know about website",
    "chat boxes, pop-ups, and static FAQ pages.",
    "This is different. This is REVOLUTIONARY"
  ];

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
    title: "Watch The",
    highlight: "Demo",
    mainImage: "/assets/images/main1.png",
    playIcon: "/icon.png"
  };

  return (
    <div className="text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center ">
          <h2 className="m-auto leading-tight text-center">
            {headerTexts.map((text, index) => (
              <ShinyText
                key={index}
                text={text}
                disabled={false}
                speed={6}
                className="Heading"
              />
            ))}
          </h2>
        </div>

        {/* First Row */}
        <div className="grid lg:grid-cols-2 gap-0 py-20">
          {/* Left Column - Text */}
          <div className="text-[13px] text-white/85 space-y-4 flex flex-col justify-center px-22">
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
      <div className="flex flex-col mt-12 justify-center items-center">
        <div className="Heading py-10">
          {demoSection.title}<span className="px-1 gradient-mask-text"> {demoSection.highlight}</span>
        </div>
        
        <div className="relative inline-block rounded-2xl overflow-hidden p-1 z-10">
  {/* Image with Shine Border */}
  <Image
    src={demoSection.mainImage}
    width={900}
    height={600}
    alt="product web image"
    className="object-contain max-w-full h-auto relative z-10 rounded-2xl"
  />

  {/* Shine border */}
  <ShineBorder
    borderWidth={1}
    duration={23}
    shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
    className="absolute inset-0 rounded-2xl pointer-events-none"
  />

  {/* Play icon overlay */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <Image
      src={demoSection.playIcon}
      width={80}
      height={80}
      alt="play button"
      className="cursor-pointer hover:scale-110 transition-transform duration-200"
    />
  </div>
</div>

      </div>

      <div>
        <DownArrow />
      </div>
    </div>
  );
};

export default Section05;