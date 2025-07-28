import React from "react";
import Header from "./Header";
import Image from "next/image";
import { TiMicrophoneOutline } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { Check } from 'lucide-react';

import DownArrow from "./DownArrow";

const features = [
  'Available 24/7',
  'Complete Brand Matching',
  'Instant Voice Conversations',
  'Unlimited Customers',
  'Smart Visitor Guidance',
  'Works On Any Website',
  'One-Click Installation',
  'Automatic Website Learning',
];

export default function HeroHeader() {
  return (
    <div className="overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scroll */}
      {/* Hero Section - Full Height with Background */}
      <section className="relative w-full min-h-[130vh] overflow-visible">
        <Header />

        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0 scale-[1.6]  mt-30"
          style={{
            backgroundImage: "url('/bgimg.png')",
            backgroundPosition: "calc(50% + 20px) center",
            backgroundSize: "cover",
          }}
        />

        {/* Gradient overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
          }}
        />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-[25vh]">
          {/* Label */}
          <div
            className="
              mb-4 sm:mb-6
              text-[6px] sm:text-xs lg:text-[12px]
              px-3 sm:px-4 py-1.5 sm:py-2
              rounded-full
              border border-white/30
              text-white
              bg-white/10
              backdrop-blur-md
              max-w-[90%] sm:max-w-none
            "
          >
            Tired of Watching 95% of Your Website Visitors Leave Without Buying?
          </div>

          {/* Headline */}
          <div
            className="gradient-white-text max-w-[90%] sm:max-w-4xl lg:max-w-[60rem] text-center text-transparent text-[24px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[52px] leading-[1.05] font-normal bg-clip-text mb-4 sm:mb-6"
           
          >
            World's First{" "}
          <span className="gradient-mask-text">
    Smart Voice AI
  </span>{" "}
            Agent That Actually TALKS to Your Website Visitors & Guides Them to
            Buy... While You Sleep!
          </div>

          {/* Subtext */}
          <p className="max-w-[90%] sm:max-w-xl lg:max-w-3xl text-xs sm:text-sm lg:text-base text-gray-300 font-light leading-relaxed">
            Just Press One Line of Code & Instantly Watch This Revolutionary AI
            Turn Your Website Visitors Into 24/7 Sales Machines That Answer
            Questions, Overcome Objections & Convert Visitors Into Paying
            Customers — Instantly!
          </p>
        </div>
      </section>

      {/* Section 2 - with overlapping image */}
      <section className="relative min-h-80 bg-black">
        {/* OVERLAID Product Image positioned over section 2 */}
        <div className="absolute top-[-15rem] sm:top-[-20rem] md:top-[-25rem] lg:top-[-8rem] w-full right-3 flex justify-center z-30">
          {/* Glow Effect */}
          <div className="absolute -top-8 w-[800px] h-[80px] bg-[#773DBA] opacity-90 blur-2xl rounded-full z-[-1]" />

          <div className="relative rounded-xl overflow-hidden bg-black">
            <Image
              src="/main.png"
              width={900}
              height={600}
              alt="product web image"
              className="object-contain max-w-full h-auto relative z-10"
            />
          </div>
        </div>

        {/* Section 2 content can go here - positioned below the image */}
        <div className="pt-[15rem] sm:pt-[20rem] md:pt-[25rem] lg:pt-[30rem]">
          {/* Your section 2 content goes here */}
        </div>

        <div className="absolute top-[400px] left-[600px] z-80 flex m-auto justify-center h-[80px] w-[80px] items-center rounded-full bg-[#5D11D5]/30 backdrop-blur-md border border-white/20">
          <TiMicrophoneOutline className="z-90 text-white text-[30px]" />
        </div>
        <div className="text-white mr-[70px] flex justify-center py-4 ">
          <div><BsStars className="mr-[6px]"/></div> 
          <div className="font-semibold text-sm"> GIVE IT A TRY!</div>
        </div>

    <div className="py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10 text-center sm:text-left">
    {features.map((feature, i) => (
      <div key={i} className="flex items-center gap-3 justify-center sm:justify-start">
        <span className="text-[#9D4DFF]">
          <Check size={20} />
        </span>
        <span className="text-sm sm:text-base font-medium text-white">
          {feature}
        </span>
      </div>
    ))}
  </div>
  
 <DownArrow/>
  
</div>

      </section>

    </div>
  );
}