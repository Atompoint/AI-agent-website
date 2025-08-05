import React from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";

// Reusable ContentBox component
const ContentBox: React.FC = () => (
  <div className="bg-[#797979] rounded-[8px] 
    h-40 w-full max-w-[300px] 
    sm:h-48 sm:max-w-[350px] 
    md:h-52 md:max-w-[400px] 
    lg:h-60 lg:max-w-[470px] 
    xl:h-60 xl:max-w-[470px]
    flex items-center justify-center mx-auto">
    {/* Content placeholder */}
  </div>
);

// Reusable TextContent component
interface TextContentProps {
  children: React.ReactNode;
}

const TextContent: React.FC<TextContentProps> = ({ children }) => (
  <div className="text-xs sm:text-sm md:text-[13px] text-white/85 space-y-3 sm:space-y-4 
    flex flex-col justify-center h-full
    px-4 sm:px-6 md:px-8 lg:px-6 xl:px-6">
    {children}
  </div>
);

// Reusable Row component
interface RowProps {
  textContent: React.ReactNode;
  reverse?: boolean;
}

const Row: React.FC<RowProps> = ({ textContent, reverse = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-1  items-center
    py-10 sm:py-12 md:py-16 lg:py-20 
    ${reverse ? 'lg:py-5' : ''}`}>
    {reverse ? (
      <>
        {/* Box first, then text */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1 h-full items-center">
          <ContentBox />
        </div>
        <div className="order-1  h-full flex items-center">
          <TextContent>{textContent}</TextContent>
        </div>
      </>
    ) : (
      <>
        {/* Text first, then box */}
        <div className="order-2 lg:order-1 h-full flex items-center">
          <TextContent>{textContent}</TextContent>
        </div>
        <div className="flex justify-center lg:justify-start order-1 lg:order-2 h-full items-center">
          <ContentBox />
        </div>
      </>
    )}
  </div>
);

const Section05: React.FC = () => {
  // Header texts
  const headerTexts = [
    "Forget everything you know about website",
    "chat boxes, pop-ups, and static FAQ pages.",
    "This is different. This is REVOLUTIONARY"
  ];

  // First row content
  const firstRowContent = (
    <>
      <p>
        <span className="text-white font-medium">VoiceAgent AI</span> is the world's first conversational website assistant that your visitors can actually <span className="text-white font-medium">TALK</span> to just like they're calling your business directly.
      </p>
      <p>But here's where it gets incredible...</p>
      <p>
        Not only does it respond with human-like speech in real-time, it can actually <span className="text-white font-medium">NAVIGATE</span> your website while talking to your visitors, showing them exactly what they need to see, when they need to see it.
      </p>
    </>
  );

  // Second row content
  const secondRowContent = (
    <>
      <p>
        Imagine having your best person available 24/7, who knows every page of your website by heart, never takes a day off, never gets tired, and can handle unlimited customers simultaneously.
      </p>
      <p>
        That's exactly what you get with <span className="text-white font-medium">VoiceAgent AI</span>.
      </p>
    </>
  );

  // Demo section
  const demoSection = {
    title: "Watch The",
    highlight: "Demo",
    mainImage: "/assets/images/main1.png",
    playIcon: "/assets/images/play.png"
  };

  return (
    <div className="text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="m-auto leading-tight text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
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

        {/* First Row - Text left, Box right */}
        <Row textContent={firstRowContent} />

        {/* Second Row - Box left, Text right */}
        <Row textContent={secondRowContent} reverse />
      </div>

      {/* Demo Section */}
      <div className="flex flex-col mt-8 sm:mt-12 justify-center items-center px-4 sm:px-6">
        <div className="Heading py-6 sm:py-8 md:py-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {demoSection.title}<span className="px-1 gradient-mask-text"> {demoSection.highlight}</span>
        </div>
        
        <div className="relative inline-block rounded-xl sm:rounded-2xl overflow-hidden p-1 z-10 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
          {/* Image with Shine Border */}
          <Image
            src={demoSection.mainImage}
            width={900}
            height={600}
            alt="product web image"
            className="object-contain w-full h-auto relative z-10 rounded-xl sm:rounded-2xl"
          />

          {/* Shine border */}
          <ShineBorder
            borderWidth={1}
            duration={23}
            shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
          />

          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              src={demoSection.playIcon}
              width={60}
              height={60}
              alt="play button"
              className="cursor-pointer hover:scale-110 transition-transform duration-200 
                w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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