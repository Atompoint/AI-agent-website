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
          className="absolute inset-0 w-full h-full z-0 scale-[1.6] mt-25"
          style={{
            backgroundImage: "url('/assets/images/bgimg.png')",
            backgroundPosition: "calc(50% + 20px) center",
            backgroundSize: "cover",
          }}
        />

          {/* Gradient overlay to blend bottom with background color */}
          <div
          className="absolute inset-0 mt-4 w-full h-full z-10"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(1,0,12,0.3) 75%, rgba(1,0,12,0.7) 85%, #01000C 100%)`
          }}
        />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-[25vh]">
          {/* Label */}
          <div
            className="
              sub-text
              mb-5 
              px-5
              py-1.5
              rounded-full
              mt-1
               sm:max-w-none
            "
            style={{
              border: '1px solid #FFFFFF12',
              backdropFilter: 'blur(3px)',
              background: '#FFFFFF08',
            }}
          >
            Tired of Watching 67% of Your Website Visitors Leave Without Buying?
          </div>

          <h1 className="relative font-radio font-normal  text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] font-normal mb-4 sm:mb-6" style={{
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
          <p className="text-[13px] font-light w-175 mt-1 leading-relaxed">
            Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7 Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying Customers—Instantly!
          </p>
        </div>
      </section>

      <section className="relative" style={{ backgroundColor: '#01000C' }}>
        {/* OVERLAID Product Image positioned over section 2 - INCREASED SIZE */}
        <div className="absolute top-[-15rem] sm:top-[-20rem] md:top-[-25rem] lg:top-[-8rem] w-full right-3 flex justify-center z-30">
          
          {/* Container for both glow image and main image - INCREASED BY 50PX */}
          <div className="relative w-full max-w-[1060px]">
            {/* Glow Image - positioned behind main image - SLIGHTLY DECREASED */}
            <div className="absolute top-[-6.1rem] w-full h-full left-1/2  -translate-x-1/2 z-0">
              <Image
                src="/assets/images/glow.png"
                width={1200}
                height={900}
                alt="glow effect"
                className="object-contain opacity-100"
              />
            </div>

            {/* Sparkles - Top Only - ADJUSTED FOR LARGER CONTAINER */}
            <div className="absolute -top-20 left-50 right-0 h-[100px] w-[590px] z-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-80 mix-blend-lighten"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 12% 18%, rgba(255,255,255,0.9) 0.5px, transparent 1px),
                    radial-gradient(circle at 28% 42%, rgba(255,255,255,0.85) 0.5px, transparent 1px),
                    radial-gradient(circle at 45% 70%, rgba(255,255,255,0.75) 0.5px, transparent 1px),
                    radial-gradient(circle at 68% 33%, rgba(255,255,255,0.7) 0.5px, transparent 1px),
                    radial-gradient(circle at 81% 15%, rgba(255,255,255,0.65) 0.5px, transparent 1px),
                    radial-gradient(circle at 90% 45%, rgba(255,255,255,0.6) 0.5px, transparent 1px),
                    radial-gradient(circle at 55% 55%, rgba(255,255,255,0.5) 0.5px, transparent 1px)
                  `,
                  backgroundSize: '150px 150px',
                  filter: 'blur(0.6px)'
                }}
              />
            </div>

            {/* Main Image with Shine Border - SLIGHTLY DECREASED */}
            <div className="relative rounded-2xl overflow-hidden z-10 p-1 w-full">
              <Image
                src="/assets/images/main1.png"
                width={1200}
                height={900}
                alt="product web image"
                className="object-contain w-full h-auto relative z-10 rounded-2xl"
                priority
              />
              <ShineBorder
                borderWidth={2}
                duration={23}
                shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                className="absolute inset-0 rounded-2xl pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2 content can go here - positioned below the image */}
        <div className="pt-[27.5rem] ">
          {/* Your section 2 content goes here */}
        </div>

        {/* Circle with microphone - using original SVG without modifications */}
        <div className="relative z-30 flex justify-center items-center mx-auto w-[160px] h-[160px]">
          <Image
            src='/assets/icons/mymic.png'
            alt="Circle background"
            width={160}
            height={160}
            className="absolute inset-0"
          />
        </div>

        <div className="flex justify-center -mt-2 items-center">
          <div className="inline-flex items-center justify-center border border-gray-900 bg-black text-white rounded-full px-3 py-1">
            <BsStars className="mr-1 text-sm" />
            <span className="font-semibold text-sm">GIVE IT A TRY!</span>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10 text-center sm:text-left">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center sm:justify-start flex-nowrap"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image src="/assets/images/tickmark.svg" alt="Tick" width={28} height={28} />
                </div>

                {/* Text: fixed max width, allow wrap inside this box */}
                <span className="text-sm sm:text-base font-semibold text-white/90 max-w-[330px]">
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