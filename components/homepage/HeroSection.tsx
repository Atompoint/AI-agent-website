"use client";
import Header from '../layout/Header';

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import LightRays from "@/components/ui/LightRays";
import { gsap } from "gsap";
import DownArrow from '../ui/DownArrow';
import { FiCheck } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import ShinyText from "@/components/ui/ShinyText";

gsap.registerPlugin(ScrollTrigger);

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const circleImageRef = useRef<HTMLImageElement | null>(null);

  // Preload particles immediately
  useEffect(() => {
    // Force particles to load first
    const timer = setTimeout(() => {
      setParticlesLoaded(true);
    }, 50); // Small delay to ensure particles are rendered

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !circleImageRef.current) return;

    const img = circleImageRef.current;
    let ctx: gsap.Context;

    const startAnimation = () => {
      ctx = gsap.context(() => {
       
        // Animate Circle with parallax effect
        gsap.to(img, {
          rotation: "+=190",
          y: 30,
          opacity:0.7,
      
          force3D: true,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.1,
            invalidateOnRefresh: true,
          },
        });
      }, sectionRef);
    };

    // Start animation immediately
    startAnimation();

    return () => {
      ctx?.revert();
    };
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!micRef) return;
      const micOriginalRect = micRef.getBoundingClientRect();
      const micOriginalTop = micOriginalRect.top + window.scrollY;
      if (window.scrollY > micOriginalTop - window.innerHeight / 12) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [micRef]);

  return (
    <div>
      <section 
        ref={sectionRef}
        className="relative w-full  bg-[#0a0014] overflow-hidden"
      >
        {/* PRIORITY: Particles Background - Render first with highest priority */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            willChange: 'transform',
            contain: 'layout style paint',
            transform: 'translate3d(0,0,0)' // Force GPU layer
          }}
        >
          <Particles
            className="absolute inset-0 w-full h-full"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh={true}
          />
        </div>

        {/* Background gradient overlay - lower priority */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(1,0,12,0.1) 70%, rgba(1,0,12,0.3) 80%, rgba(1,0,12,0.6) 90%, #01000C 100%)",
            willChange: 'auto', // Lower priority
          }}
        />

        {/* Light rays - load after particles */}
        <div 
          className={`absolute inset-0 z-30 pointer-events-none overflow-hidden transition-opacity duration-500 ${
            particlesLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <LightRays
            raysOrigin="top-left"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>

{/* Main content flow - fade in after particles */}
<div className="flex flex-col min-h-[50vh] sm:min-h-[50vh] md:min-h-screen lg:min-h-screen gap-10 sm:gap-12 md:gap-18 lg:gap-30">
  {/* Header */}
  <div className="flex-none">
    <Header />
  </div>

  {/* Text content - centered with responsive spacing */}
  <div className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 md:px-10 gap-3 sm:gap-4 lg:gap-5">
    {/* Label */}
    <div
      className="subtext1 h-[33px] w-[86%] sm:w-[80%] md:w-[90%] lg:w-[498px] max-w-[480px] flex items-center justify-center rounded-full px-3 py-1"
      style={{
        border: "1px solid #FFFFFF12",
        backdropFilter: "blur(3px)",
        background: "#FFFFFF08",
        lineHeight: 1.6,
        letterSpacing: 0.4,
      }}
    >
      Tired of Watching 67% of Your Website Visitors Leave Without Buying?
    </div>

    {/* Gradient Heading - style preserved exactly */}
    <div
      className="relative z-10"
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
        <ShinyText text="World's First" speed={5} className="gradient-white-text" />{' '}
        <ShinyText text="Smart Voice AI" speed={5} className="gradient-mask-text" />{' '}
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
    <p className="subtext1 w-full px-5 lg:w-[760px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6]">
      Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent
      Website Into A 24/7 Sales Machine That Answers Questions, Overcomes
      Objections & Converts Visitors Into Paying Customers Instantly!
    </p>
  </div>

  
 <div className="flex-none flex justify-center  mt-0 md:-mt-[10%] lg:-mt-[15%] xl:-mt-[5%]">
  <div className="relative w-full max-w-6xl flex flex-col items-center">

    {/* Circle image behind */}
    <div
      style={{ clipPath: "inset(0 0 30% 0)" }} // hides bottom 30% only
      className="w-full flex justify-center z-0"
    >
      <Image
        ref={circleImageRef}
        src="/assets/images/Circle.png"
        alt="circle"
        width={2000}
        height={1800}
        className=" lg:w-[1900px] h-auto object-contain scale-none sm:scale-none md:scale-none lg:scale-[1.1]" // slightly increased size
        draggable={false}
      />
    </div>

    {/* Main1 image in front, shifted 40% up relative to circle */}
    <div className="w-full flex justify-center -mt-[75%] sm:-mt-[75%] md:-mt-[82%] lg:-mt-[80%] z-10">
      <ContainerScroll>
     
        <img
          src="/assets/images/main1.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-bottom "
          draggable={false}
        />
      </ContainerScroll>
    </div>

  </div>
</div>

</div>


      </section>
   
      {/* Section 2 */}
      <section className="relative z-50 bg-[#01000C] -mt-[5%]">
        <div className="relative w-full z-40 px-3 md:px-8 lg:px-0">
          <div ref={setMicRef} className="relative z-40 flex justify-center items-center mx-auto">
            <div className="relative group">
              <Image
                src="/assets/icons/mymic.png"
                alt="Voice Agent Microphone"
                width={130}
                height={130}
                className={`w-[70px] h-[70px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] object-contain cursor-pointer transition-all duration-1000 ease-in-out ${
                  isSticky ? 'fixed bottom-6 right-6 z-50 group-hover:scale-110' : 'group-hover:scale-110 transform-gpu'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="pt-0 relative z-20">
          <div className="flex justify-center -mt-1 items-center px-4 relative z-20">
            <div className="inline-flex items-center justify-center border border-white/5 bg-black/50 rounded-full px-3 py-1.5 sm:py-2">
              <BsStars className="mr-1.5 sm:mr-2 text-[14px] sm:text-[15px] md:text-[17px] -rotate-90" />
              <span className="subtextpt2">GIVE IT A TRY!</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-18 px-4 sm:px-6 relative z-20">
            <div className="max-w-full sm:max-w-[90%] md:max-w-[960px] lg:max-w-[960px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-left">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 justify-start flex-nowrap py-1.5">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 flex items-center justify-center relative">
                    <Image
                      src="/assets/icons/onlycircle.svg"
                      alt="Circle"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                    <FiCheck className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 m-auto text-white" />
                  </div>
                  <span className="subtext2">{feature}</span>
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