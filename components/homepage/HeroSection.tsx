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
  'Available\n24/7',
  'Instant Voice\nConversations',
  'Smart Visitor\nGuidance',
  'One-Click\nInstallation',
  'Complete Brand\nMatching',
  'Unlimited\nCustomers',
  'Works On Any\nWebsite',
  'Automatic Website\nLearning',
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
          y: 20,
          opacity: 0.7,

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
      {/* Section 1 */}
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
          className={`absolute inset-0 z-30 pointer-events-none overflow-hidden transition-opacity duration-500 ${particlesLoaded ? 'opacity-100' : 'opacity-0'
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
        <div className="flex flex-col min-h-[50vh] sm:min-h-[50vh] md:min-h-screen lg:min-h-screen gap-6 sm:gap-8 md:gap-8 lg:gap-10">

          {/* Header */}
          <div className="flex-none">
            <Header />
          </div>

          {/* Hero Heading & Content */}
          <div className="max-w-7xl lg:gap-4 flex flex-col items-center justify-center flex-1 text-center mx-auto mt-[5%] lg:mt-[3%] 2xl:mt-[6%]">
            {/* Label */}
            <h2
              className="relative max-w-[85%] md:max-w-[100%] px-4 py-2 sm:px-6 lg:px-6 h-auto min-h-[40px] sm:min-h-[40px] inline-flex items-center justify-center text-center border-1 border-[#BF84F9] rounded-[32px] shadow-[0_0_10px_rgba(191,132,249,0.3)]"
              style={{
                fontFamily: 'Basis Grotesque Pro, sans-serif',
                fontSize: 'clamp(14px, 4vw, 20px)',
                fontWeight: 300,
                lineHeight: '1.2',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                textAlign: 'center',
                background: `linear-gradient(135deg, rgba(31,11,70,0.24) 5%, rgba(222,191,255,0.24) 29%, rgba(90,39,177,0.24) 58%, rgba(191,132,249,0.24) 92%)`,
                boxShadow: '0 0 10px rgba(191, 132, 249, 0.5), 0 0 20px rgba(191, 132, 249, 0.2)'
              }}
            >
              Tired of Watching 67% of Your Website Visitors Leave Without Buying?
            </h2>

            {/* Heading */}
            <h1
              className="relative z-10 px-2 md:px-0 mt-[5%] md:mt-[1%] 2xl:mt-[2%]"
              style={{
                fontFamily: 'Basis Grotesque Pro, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(25px, 6vw, 55px)',
                lineHeight: '1.1',
                letterSpacing: '0%',
                color: 'transparent',
                background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
               
              }}
            >
              <div>
                <ShinyText text="World's First Smart Voice AI Agent That Actually TALKS to Your Website Visitors & Guides Them to Buy... While You Sleep!" speed={5} className="gradient-white-text" />
              </div>
            </h1>

            {/* Subtext */}
            <p className="w-[90%] md:w-[80%] " style={{
              fontFamily: 'Basis Grotesque Pro, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(16px, 5vw, 20px)',
              lineHeight: '1.4',
              letterSpacing: '0%',
              color: '#FFFFFF'
            }}>
              Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent
              Website Into A 24/7 Sales Machine That Answers Questions, Overcomes
              Objections & Converts Visitors Into Paying Customers Instantly!
            </p>
          </div>

          {/* Image With Circle Background */}
          <div className="flex-none flex justify-center -mt-[10%] md:-mt-[13%] lg:mt-[-10%] 2xl:mt-[-7%]">
            <div className="relative w-full max-w-6xl flex flex-col items-center">
              {/* Circle image behind */}
              <div
                style={{ clipPath: "inset(10% 0 40% 0)" }} // hides bottom 30% only
                className="w-full flex justify-center z-0"
              >
                <Image
                  ref={circleImageRef}
                  src="/assets/images/Circle.png"
                  alt="circle"
                  width={2000}
                  height={1800}
                  className="w-full max-w-[1600px] sm:max-w-[1500px] md:max-w-[1700px] lg:max-w-[2100px] h-auto object-contain scale-[0.9] sm:scale-[0.9] md:scale-none lg:scale-[1]" // slightly increased size
                  draggable={false}
                />
              </div>

              {/* Main1 image in front, shifted 40% up relative to circle */}
              <div className="w-full flex justify-center -mt-[75%] sm:-mt-[80%] md:-mt-[75%] lg:-mt-[75%] xl:-mt-[78%] z-10">
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
      <section className="relative z-50 ">

        {/* MIC Image */}
        <div className="relative w-full z-40 px-2 md:px-8 lg:px-4 mx-auto flex flex-col items-center justify-center">
          <div ref={setMicRef} className="relative z-40 shadow-md flex justify-center items-center w-full">
            {/* MIC Image */}
            <div className="relative group flex flex-col items-center">
              <Image
                src="/assets/icons/mymic.png"
                alt="Voice Agent Microphone"
                width={130}
                height={130}
                className={`w-[100px] h-[100px] shadow-md sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] 2xl:w-[170px] 2xl:h-[170px] object-contain cursor-pointer transition-all duration-1000 ease-in-out ${isSticky ? 'fixed bottom-6 right-6 z-50 group-hover:scale-110' : 'group-hover:scale-110 transform-gpu'}`}
              />
              <div className="mt-0 inline-flex items-center justify-center border border-white/5 bg-black/50 rounded-full px-3 py-1.5 sm:py-2">
                <BsStars className="mr-1.5 sm:mr-2 text-[14px] sm:text-[15px] md:text-[17px] 2xl:text-[20px] -rotate-90" />
                <span className="2xl:text-[20px] 2xl:font-semibold">GIVE IT A TRY!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-20 pt-8 sm:pt-14 md:pt-16 lg:pt-20 flex justify-center">
          <div className="w-full max-w-7xl 2xl:max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 md:gap-x-20 gap-y-6 md:gap-y-12 max-w-6xl 2xl:max-w-7xl">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 group">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center relative">
                        <Image
                          src="/assets/icons/onlycircle.svg"
                          alt="Checkmark"
                          width={36}
                          height={36}
                          className="w-full h-full object-contain"
                        />
                        <FiCheck className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-white" />
                      </div>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold text-white/90 group-hover:text-white transition-colors whitespace-pre-line leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 sm:mt-16 text-center">
              <DownArrow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}