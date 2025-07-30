import React from "react";
import Image from "next/image";
import DownArrow from "./DownArrow";

const RevolutionaryAIComponent = () => {
  return (
    <div className=" text-white min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-4xl font-medium leading-tight gradient-white-text max-w-3xl mx-auto">
            Forget everything you know about website chat boxes, pop-ups, and static FAQ pages. 
            <span className="text-white"> This is different. This is </span>
            <span className="gradient-mask-text ">REVOLUTIONARY</span>
          </h1>
        </div>

        {/* First Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Text */}
          <div className="space-y-6 flex flex-col p-6 text-lg text-gray-300">
            <p>
              <span className="text-white font-medium">VoiceAgent AI</span> is the world's first conversational website assistant that your visitors can actually <span className="text-whitwe font-medium">TALK</span> to just like they're calling your business directly.
            </p>
            
            <p className="text-xl ">
              But here's where it gets incredible...
            </p>
            
            <p>
              Not only does it respond with human-like speech in real-time, it can actually <span className="text-white font-medium">NAVIGATE</span> your website while talking to your visitors, showing them exactly what they need to see, when they need to see it.
            </p>
          </div>
          
          {/* Right Column - Box */}
          <div className="bg-gray-500 rounded-2xl h-86 w-[550px] flex items-center justify-center">
           
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-32">
          {/* Left Column - Box */}
          <div className="bg-gray-500 rounded-2xl h-86 w-[550px] flex items-center justify-center">

          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-6  p-6 text-lg text-gray-300">
            <p>
              Imagine having your best person available 24/7, who knows every page of your website by heart, never takes a day off, never gets tired, and can handle unlimited customers simultaneously.
            </p>
            
            <p className="text-xl">
              That's exactly what you get with <span className="text-white font-medium">VoiceAgent AI</span>.
            </p>
          </div>
        </div>
      </div>
<div className="flex flex-col mt-12 justify-center items-center">
  <div className="text-3xl  py-10">
    Watch The<span className="px-1 gradient-mask-text"> Demo</span>
  </div>
  
  <div className="relative inline-block">
    <Image
      src="/main.png"
      width={900}
      height={600}
      alt="product web image"
      className="object-contain max-w-full h-auto relative z-10"
    />
    
    {/* Play icon overlay */}
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <Image
        src="/icon.png"
        width={80}
        height={80}
        alt="play button"
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </div>
  </div>
</div>
<div className="mt-12">   <DownArrow /></div>

   </div>
  );
};

export default RevolutionaryAIComponent;