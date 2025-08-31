'use client';

import React, { useEffect, useRef, useState } from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Header from '../layout/Header';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { ShineBorder } from '@/components/magicui/shine-border';
import DownArrow from '../ui/DownArrow';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const sectionRef = useRef<HTMLElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate Circle
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: 80,
          y: 160,
          x: 70, // ← shift slightly left so rotation stays visually centered
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      // Animate main1.png
      if (mainRef.current) {
        gsap.to(mainRef.current, {
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

    
      gsap.to(headingRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative w-full min-h-[50vh] lg:min-h-[180vh] overflow-hidden pb-0"
      >
        {/* Background */}
        <div
          className="absolute inset-0 w-full min-h-full z-0"
          style={{
            backgroundImage: "url('/assets/images/bgimg.webp')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        />

        {/* Circle.png */}
        <div
          ref={circleRef}
          className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 z-[5] pointer-events-none w-[2000px] max-w-none"
        >
          <Image
            src="/assets/images/Circle.png"
            alt="circle background"
            width={2000}
            height={2000}
            className="w-[2000px] h-auto object-none scale-[1.2]"
            priority
          />
        </div>

        {/* Gradient overlay */}
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

        {/* Text */}
        <div
          ref={headingRef}
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

        {/* main1 */}
        <div
          ref={mainRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center will-change-transform"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-20">
            <Image
              src="/assets/images/glow.png"
              width={1400}
              height={1000}
              alt="glow effect"
              className="w-[75vw] max-w-[720px] h-auto"
              priority
            />
          </div>

          <div className="relative">
            <ShineBorder
              borderWidth={2}
              duration={23}
              shineColor={['#C67DFF', '#3420C6', '#0079FF00']}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />
            <Image
              src="/assets/images/main1.png"
              alt="main image"
              width={900}
              height={700}
              className="w-[85vw] max-w-[780px] h-auto object-contain rounded-md lg:rounded-2xl relative z-10 p-0.5"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative z-50 bg-[#01000C]">
        <div className="relative w-full z-40 px-3 md:px-8 lg:px-0">
          <div ref={setMicRef} className="relative z-40 flex justify-center items-center mx-auto mt-0">
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
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center relative">
                    <Image
                      src="/assets/icons/onlycircle.svg"
                      alt="Circle"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                    <FiCheck className="absolute inset-0 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 m-auto text-white" />
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
