"use client";
import React, { useState, useEffect, useRef } from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image';
import Offer from '@/components/ui/Offer';
import DownArrow from '@/components/ui/DownArrow';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Step {
  number: string;
  stepText: string;
  title: string;
  iconSrc: string;
  centerIconSrc: string;
  iconAlt: string;
  centerIconAlt: string;
  textColor: string;
}

const ThreeStepsComponent = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isInView, setIsInView] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      number: '01',
      stepText: 'STEP',
      title: 'Enter Your Domain Name And Click Add',
      iconSrc: '/assets/icons/onlycircle.svg',
      centerIconSrc: '/assets/icons/globe.svg',
      iconAlt: 'Circle Background',
      centerIconAlt: 'Globe Icon',
      textColor: 'text-white',
    },
    {
      number: '02',
      stepText: 'STEP',
      title: 'Copy And Paste The Code On Your Website',
      iconSrc: '/assets/icons/onlycircle.svg',
      centerIconSrc: '/assets/icons/braces1.svg',
      iconAlt: 'Circle Background',
      centerIconAlt: 'Code Icon',
      textColor: 'text-white',
    },
    {
      number: '03',
      stepText: 'STEP',
      title: "Hit The Call Button & Test It Out. You're Done",
      iconSrc: '/assets/icons/onlycircle.svg',
      centerIconSrc: '/assets/icons/call.svg',
      iconAlt: 'Circle Background',
      centerIconAlt: 'Call Icon',
      textColor: 'text-white',
    },
  ];
  // Intersection Observer to detect when component comes into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Reset animation every time it comes into view
          setCurrentStep(-1);
          setIsInView(true);
          setAnimationKey(prev => prev + 1); // Force re-render of animated elements
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1, // Lower threshold for small screens
        rootMargin: '0px 0px -50px 0px' // Smaller margin for small screens
      }
    );

    const currentRef = componentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-progress through steps when in view
  useEffect(() => {
    if (!isInView) return;

    const isSmallScreen = window.innerWidth < 640; // sm breakpoint
    const stepDelay = isSmallScreen ? 800 : 1000; // Faster animation on small screens
    const initialDelay = currentStep === -1 ? 0 : stepDelay;

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1
      }
    }
  };

  const stepperLineVariants: Variants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0
      }
    }
  };

  const verticalLineVariants: Variants = {
    hidden: { height: '0%' },
    visible: {
      height: '100%',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center sm:pt-8 sm:px-8 overflow-hidden" ref={componentRef}>
      {/* Updated Glow Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[933px] h-[527px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(90, 39, 177, 0.15) 0%, rgba(31, 11, 70, 0) 60%)'
          }}
        >
        </div>
      </div>

      <div className="max-w-7xl w-full relative z-0">
        {/* Heading */}
        <h1
          className="relative z-10 text-center mx-auto "
          style={{
            fontFamily: 'Basis Grotesque Pro, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 60px)',
            lineHeight: '1.1',
            margin: '0 0 0 0',
            padding: '0 0',
            letterSpacing: '0%',
            color: 'transparent',
            background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
  
          }}
        >
          <div>
            <ShinyText text="All It Takes Is 3 Simple" speed={5} className="gradient-white-text" />
          </div>
          <div>
          <ShinyText text="Steps and" speed={5} className="gradient-white-text" />
          {' '}
            <ShinyText text="You're Done" speed={5} className="gradient-mask-text" />
          </div>
        </h1>

        {/* Horizontal Stepper */}
        <div className="mx-auto">
          <div className="py-20 sm:py-15 md:py-20">
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between  gap-8 lg:gap-30">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper */}
                  <div
                    className="relative flex flex-col items-center w-full max-w-[280px] lg:max-w-none"
                    
                  >
                    <AnimatePresence mode="wait">
                      {currentStep >= index && (
                        <motion.div
                          key={`step-${index}-${animationKey}`}
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="flex flex-col items-center w-full"
                        >
                          {/* Step Number Section */}
                          <div className="flex flex-col items-center mb-4 sm:mb-8">
                            {/* Step Label */}
                            <div
                              style={{
                                fontFamily: 'Manrope',
                                fontWeight: 700,
                                fontSize: 'clamp(12px, 3vw, 16px)',
                                lineHeight: '140%',
                                letterSpacing: '0.34em',
                                color: 'white',
                                marginBottom: '0.25rem',
                                textAlign: 'center',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                              }}
                            >
                              {step.stepText}
                            </div>

                            {/* Step Number */}
                            <div className="text-6xl md:text-6xl font-semibold text-center">
                              <ShinyText text={step.number} disabled={false} speed={6} />
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-6 flex items-center justify-center">
                            {/* Rotating Circle Background */}
                            <Image
                              src={step.iconSrc}
                              alt={step.iconAlt}
                              width={80}
                              height={80}
                              className="w-full h-full object-contain rotate-alternate"
                              priority={index === 0}
                            />

                            {/* Centered Static Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center">
                              <Image
                                src={step.centerIconSrc}
                                alt={step.centerIconAlt}
                                width={40}
                                height={40}
                                className="object-contain w-full h-full"
                                priority={index === 0}
                              />
                            </div>
                          </div>

                          {/* Step Title */}
                          <div
                            style={{
                              fontFamily: 'Manrope',
                              fontWeight: 700,
                              fontSize: 'clamp(14px, 4vw, 18px)',
                              lineHeight: '140%',
                              letterSpacing: '0%',
                              textTransform: 'capitalize',
                              textAlign: 'center',
                              width: '70%',
                              padding: '0 0.5rem'
                            }}
                            className={`${step.textColor} md:w-full`}
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Connector Line - Only show between items on desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute"
                        style={{
                          top: '55px',
                          left: '75%',
                          width: '280px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-white/30 origin-left"
                          variants={stepperLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    )}

                    {/* Mobile Connector - Show between items on mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden w-px h-22 mb-[-0.5%] bg-white/0 my-6 mx-auto relative">
                        <motion.div
                          className="absolute inset-0 bg-white/30 origin-top"
                          variants={verticalLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <Offer />
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default ThreeStepsComponent;          <DownArrow />
