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
      <section>
<div className="absolute inset-0 h-full z-[10]">
        <Particles />
      </div>
      <div className="relative z-30">
          <Header />
        </div>
        <div
                className="relative z-30  flex flex-col items-center text-center px-3 sm:px-6 md:px-10 pt-10 lg:pt-0 will-change-transform"
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

                <p className="subtext1 w-full px-5 lg:w-[760px] leading-[1.4] sm:leading-[1.5] md:leading-[1.6] lg:mb-[15%]">
                  Just Paste One Line of Code & Watch This Revolutionary AI Turn Your Silent Website Into A 24/7
                  Sales Machine That Answers Questions, Overcomes Objections & Converts Visitors Into Paying
                  Customers Instantly.
                </p>
              </div>
      <div>
      <ContainerScroll
          titleComponent={
            <>
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
