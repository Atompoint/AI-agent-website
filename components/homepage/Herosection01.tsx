"use client";
import Header from '../layout/Header';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Particles } from "@/components/magicui/particles";
import LightRays from "@/components/ui/LightRays";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import ShinyText from "@/components/ui/ShinyText";

gsap.registerPlugin(ScrollTrigger);

const Section01: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    // Transform origin for proper rotation
    gsap.set(circle, { transformOrigin: "50% 50%" });

    // Scroll animation: rotate 60° and move slightly down
    gsap.to(circle, {
      rotation: 60,
      y: 80, 
      ease: "none",
      scrollTrigger: {
        trigger: circle,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <section className="relative w-full h-[180vh] overflow-hidden bg-[#0a0014]">
      {/* Circle2.png overlay - 50% visible from bottom */}
      <div
        ref={circleRef}
        className="absolute left-1/2 bottom-0 z-[5] pointer-events-none"
        style={{
          width: "1600px",
          height: "auto",
          transform: "translateX(-50%) translateY(50%)", // 50% below section
        }}
      >
        <Image
          src="/assets/images/Circle2.png"
          alt="circle background"
          width={1600}
          height={1600}
          style={{ width: "1600px", height: "auto", objectFit: "cover" }}
          priority
        />
      </div>

      {/* Particle background */}
      <div className="absolute inset-0 h-full z-[10]">
        <Particles />
      </div>
 <div
          className="absolute inset-0 w-full min-h-full z-10"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(1,0,12,0.1) 70%, rgba(1,0,12,0.3) 80%, rgba(1,0,12,0.6) 90%, #01000C 100%)',
          }}
        />

        {/* Header */}
        <div className="relative z-30">
          <Header />
        </div>
      {/* Light rays */}
      <div className="absolute top-0 left-0 w-full h-full z-[20] overflow-hidden pointer-events-none">
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Heading + main1.png component */}
      <div className="flex flex-col overflow-hidden relative z-[30]">
        <ContainerScroll
          titleComponent={
            <>
              <div
                className="relative z-30 flex flex-col items-center text-center px-3 sm:px-6 md:px-10 pt-10 lg:pt-20 will-change-transform"
              >
                <div
                  className="subtext1 h-[33px] px-3 lg:px-6 flex items-center justify-center rounded-full mb-4 lg:mb-6"
                  style={{
                    border: '1px solid #FFFFFF12',
                    backdropFilter: 'blur(3px)',
                    background: '#FFFFFF08',
                    lineHeight: 1.6,
                    letterSpacing: 0.4,
                  }}
                >
                  Tired of Watching 67% of Your Website Visitors Leave Without Buying?
                </div>

                <div
                  className="relative z-10 mb-4 lg:mb-6"
                  style={{
                    fontFamily: 'Radio Grotesk',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 5vw, 52px)',
                    lineHeight: '0.8',
                    color: 'transparent',
                    background:
                      'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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

                <p className="subtext1 w-full px-5 lg:w-[760px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] mb-8 md:mb-12">
                  Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7
                  Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying
                  Customers Instantly.
                </p>
              </div>
            </>
          }
        >
          <img
            src="/assets/images/main1.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default Section01;
