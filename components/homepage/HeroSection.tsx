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
        <div className="absolute inset-0 z-20 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-[25vh]">
          {/* Label */}
          <div
            className="
              sub-text
              
              px-6.5
              py-1.5
              rounded-full
              -mt-6
            
            "
            style={{
            border: '1px solid #FFFFFF12',
              backdropFilter: 'blur(3px)',
              background: '#FFFFFF08',
            }}
          >
            Tired of Watching 67% of Your Website Visitors Leave Without Buying?
          </div>

          <h1 className="relative font-radio font-normal  text-[50px] leading-[1.05] font-normal py-6" style={{
            textTransform: 'capitalize',
            color: 'transparent',
            background: 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}>
            <div>
              <ShinyText text="World's First" speed={5} className="font-extralight" />
              {' '}
              <ShinyText text="Smart Voice AI" speed={5} className="gradient-mask-text font-extralight" />
              {' '}
              <ShinyText text="Agent That" speed={5} className="font-extralight" />
            </div>
            <div>
              <ShinyText text="Actually TALKS to Your Website Visitors" speed={5} className="font-medium" />
            </div>
            <div>
              <ShinyText text="Guides Them to Buy... While You Sleep!" speed={5} className="font-medium" />
            </div>
          </h1>

          {/* Subtext */}
          <p className="sub-text w-190 mt-2 leading-relaxed">
            Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7 Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying Customers—Instantly!
          </p>
        </div>
      </section>

      <section className="relative" style={{ backgroundColor: '#01000C' }}>
        {/* OVERLAID Product Image positioned over section 2 - INCREASED SIZE */}
        <div className="absolute top-[-8rem] w-full flex justify-center z-30">
          
          {/* Container for both glow image and main image - INCREASED BY 50PX */}
          <div className="relative w-full max-w-[950px]">
           
           

            {/* Main Image with Shine Border - SLIGHTLY DECREASED */}
            <div className="relative rounded-2xl overflow-hidden  mt-8 z-10 p-0.5 w-full">
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
        <div className="pt-[25.7rem] ">
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
          <div className="inline-flex items-center justify-center border border-white/5 bg-black/50 text-white rounded-full px-3 py-1">
            <BsStars className="mr-2 text-[17px]  -rotate-90" />
            <span className="subtext1 font-semibold">GIVE IT A TRY!</span>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-[950px] mx-auto grid grid-cols-4  gap-y-6 gap-x-12 text-left ">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-1 justify-center sm:justify-start flex-nowrap"
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