'use client';
import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Header from "../layout/Header";
import Image from "next/image";
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
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Full Height with Background */}
      <section className="relative w-full min-h-[130vh] overflow-visible">
        <Header />

        {/* Background Image - NO GRADIENT OVERLAY */}
        <div
          className="absolute inset-0 w-full overflow-x-hidden h-full z-0 scale-[1.6] mt-25"
          style={{
            backgroundImage: "url('/assets/images/bgimg.webp')",
            backgroundPosition: "calc(50% - 20px)  center",
            backgroundSize: "cover",
          }}
        />

<div
  className="absolute inset-0 mt-4 w-full h-full z-10"
  style={{
    background: `linear-gradient(to bottom, transparent 0%, transparent 85%, rgba(1,0,12,0.5) 92%, #01000C 100%)`
  }}
/>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center text-center px-4 pt-[25vh]">
          {/* Label */}
          <div
            className="
              subtext1
              h-[33px]
              w-[478px]
              
              flex items-center justify-center
              rounded-full
              -mt-9
            
            "
            style={{
            border: '1px solid #FFFFFF12',
              backdropFilter: 'blur(3px)',
              background: '#FFFFFF08',
              lineHeight: 18.2,
              letterSpacing: 0.4,
           
            }}
          >
            Tired of Watching 67% of Your Website Visitors Leave Without Buying?
          </div>

      
          <div
  className="relative py-3 z-10"
  style={{

    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }}
>
  <div style={{ marginBottom: '-18px' }} className='flex items-center justify-center space-x-4'>
    <ShinyText text="World's First" speed={5} className="Heading1 gradient-white-text" />
    
    <ShinyText text="Smart Voice AI" speed={5} className="gradient-mask-text Heading1" />
  
    <ShinyText text="Agent That" speed={5} className="Heading1 gradient-white-text" />
  </div>

  <div style={{ marginBottom: '-18px' }}>
    <ShinyText text="Actually TALKS to Your Website Visitors" speed={5} className="Heading1 gradient-white-text" />
  </div>

  <div>
    <ShinyText text="Guides Them to Buy... While You Sleep!" speed={5} className="Heading1 gradient-white-text" />
  </div>
</div>






          {/* Subtext */}
          <p   style={{ lineHeight: '22.1px'}} className="subtext1 w-190 mt-3">
            Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7 Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying Customers—Instantly!
          </p>
        </div>
      </section>

      <section className="relative" style={{ backgroundColor: '#01000C' }}>
        {/* OVERLAID Product Image positioned over section 2 - INCREASED SIZE */}
        <div className="absolute top-[-8rem] w-full flex justify-center z-30">
          
          {/* Container for both glow image and main image - INCREASED BY 50PX */}
          <div className="relative w-full max-w-[980px]">
           
           

            {/* Main Image with Shine Border - SLIGHTLY DECREASED */}
            <div className="relative rounded-2xl overflow-hidden  mt-7 z-10 p-0.5 w-full">
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
          </div>
        </div>

        {/* Section 2 content can go here - positioned below the image */}
        <div className="pt-[26rem] ">
          {/* Your section 2 content goes here */}
        </div>

        {/* Circle with microphone - using original SVG without modifications */}
        <div className="relative z-30 mt-2 flex justify-center items-center mx-auto w-[130px] h-[130px]">
          <Image
            src='/assets/icons/mymic.png'
            alt="Circle background"
            width={130}
            height={130}
            className="absolute inset-0"
          />
        </div>

        <div className="flex justify-center -mt-1 items-center">
          <div className="inline-flex items-center justify-center border border-white/5 bg-black/50 rounded-full px-3 py-2">
            <BsStars className="mr-2 text-[17px]  -rotate-90" />
            <span className="subtextpt2">GIVE IT A TRY!</span>
          </div>
        </div>

        <div className="mt-18">
          <div className="max-w-[960px] mx-auto grid grid-cols-4  gap-y-6 gap-x-12 text-left ">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-1 justify-start flex-nowrap"
              >
                {/* Icon */}
                <div className="w-13 h-13 flex items-center justify-center flex-shrink-0">
                  <Image src="/assets/images/tickmark.svg" alt="Tick" width={31} height={31} />
                </div>

                {/* Text: fixed max width, allow wrap inside this box */}
                <span className="subtext2 max-w-[300px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <DownArrow />
        </div>
      </section>
    </div>
  );
}