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
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before it's fully visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []); // Remove isInView dependency to allow re-triggering

  // Auto-progress through steps when in view
  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, currentStep === -1 ? 0 : 1500); // Start immediately, then 1.5s intervals

    return () => clearTimeout(timer);
  }, [currentStep, steps.length, isInView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  const stepperLineVariants: Variants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    }
  };

  const verticalLineVariants: Variants = {
    hidden: { height: '0%' },
    visible: { 
      height: '100%',
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        delay: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden" ref={componentRef}>
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
      
      <div className="max-w-6xl w-full relative z-0">
        {/* Header */}
        <div
          className="relative text-center z-10 mb-8 sm:mb-16"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: 'clamp(20px, 5vw, 43px)',
            lineHeight: '0.9',
            letterSpacing: '0%',
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
            <ShinyText text="All It Takes Is 3 Simple" speed={5} className='gradient-white-text'/>
          </div>
          <div>
            <ShinyText text="Steps and " speed={5} className='gradient-white-text'/>
            {' '}
            <ShinyText text="You're Done" speed={5} className='gradient-mask-text'/>
          </div>
        </div>

        {/* Horizontal Stepper */}
        <div className="max-w-[800px] mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block py-10">
            <div className="relative flex items-start justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper - Always maintains space */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '200px', maxWidth: '240px', minHeight: '300px' }}>
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
                          <div className="flex flex-col items-center mb-8">
                            {/* Step Label */}
                            <div className="text-white text-xs ml-3 font-semibold mb-1 tracking-[0.3em]  text-center w-full flex justify-center">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl md:text-6xl font-semibold text-center"
                             
                            >
                              <ShinyText text={step.number} disabled={false} speed={6} />
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center">
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
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
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
                          style={{ fontSize: 'clamp(13px, 5vw, 18.5px)' }}
                            className={`${step.textColor} font-semibold leading-relaxed text-center w-full px-4`}
                           
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Absolutely Positioned Connector Line */}
                    {index < steps.length - 1 && (
                      <div 
                        className="absolute"
                        style={{
                          top: '50px',
                          left: '70%',
                          width: '180px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line - always visible as gray */}
                        <div className="absolute inset-0 bg-white/40"></div>
                        
                        {/* Progress line - fills with white */}
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-white origin-left"
                          variants={stepperLineVariants}
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
{/* xl screen*/}

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="relative flex items-start justify-between mb-12 px-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper - Always maintains space */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '160px', maxWidth: '200px', minHeight: '250px' }}>
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
                          <div className="flex flex-col items-center mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60 text-center">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-semibold mb-4 text-center"
                              
                            >
                              <ShinyText text={step.number} disabled={false} speed={6} />
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                            {/* Rotating Circle Background */}
                            <Image
                              src={step.iconSrc}
                              alt={step.iconAlt}
                              width={56}
                              height={56}
                              className="w-full h-full object-contain animate-spin-slow"
                              priority={index === 0}
                            />
                            
                            {/* Centered Static Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center">
                              <Image
                                src={step.centerIconSrc}
                                alt={step.centerIconAlt}
                                width={28}
                                height={28}
                                className="object-contain w-full h-full"
                                priority={index === 0}
                              />
                            </div>
                          </div>
                          
                          {/* Step Title */}
                          <div 
                            className={`${step.textColor} text-xs leading-relaxed text-center w-full px-1`}
                            style={{ fontFamily: 'Radio Grotesk' }}
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Absolutely Positioned Connector Line */}
                    {index < steps.length - 1 && (
                      <div 
                        className="absolute"
                        style={{
                          top: '50px',
                          left: '70%',
                          width: '130px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line - always visible as gray */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line - fills with white */}
                        <motion.div
                          key={`tablet-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-white origin-left"
                          variants={stepperLineVariants}
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
          
          {/* Small Tablet Layout */}
          <div className="hidden sm:block md:hidden lg:hidden">
            <div className="relative flex items-start justify-between mb-12 px-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper - Always maintains space */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '160px', maxWidth: '200px', minHeight: '250px' }}>
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
                          <div className="flex flex-col items-center mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60 text-center">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-semibold mb-4 text-center"
                            
                            >
                              <ShinyText text={step.number} disabled={false} speed={6} />
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                            {/* Rotating Circle Background */}
                            <Image
                              src={step.iconSrc}
                              alt={step.iconAlt}
                              width={56}
                              height={56}
                              className="w-full h-full object-contain animate-spin-slow"
                              priority={index === 0}
                            />
                            
                            {/* Centered Static Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center">
                              <Image
                                src={step.centerIconSrc}
                                alt={step.centerIconAlt}
                                width={28}
                                height={28}
                                className="object-contain w-full h-full"
                                priority={index === 0}
                              />
                            </div>
                          </div>
                          
                          {/* Step Title */}
                          <div 
                            className={`${step.textColor} text-xs leading-relaxed text-center w-full px-1`}
                            style={{ fontFamily: 'Radio Grotesk' }}
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Absolutely Positioned Connector Line */}
                    {index < steps.length - 1 && (
                      <div 
                        className="absolute"
                        style={{
                          top: '50px',
                          left: '70%',
                          width: '130px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line - always visible as gray */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line - fills with white */}
                        <motion.div
                          key={`small-tablet-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-white origin-left"
                          variants={stepperLineVariants}
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

          {/* Mobile Layout - Vertical Stack */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center space-y-8 mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column - Always maintains space */}
                  <div className="relative flex flex-col items-center w-full max-w-xs" style={{ minHeight: '200px' }}>
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
                          <div className="flex flex-col items-center justify-center h-full mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60 text-center">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-semibold mb-4 text-center"
                            >
                              <ShinyText text={step.number} disabled={false} speed={6} />
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                            {/* Rotating Circle Background */}
                            <Image
                              src={step.iconSrc}
                              alt={step.iconAlt}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain animate-spin-slow"
                              priority={index === 0}
                            />
                            
                            {/* Centered Static Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
                              <Image
                                src={step.centerIconSrc}
                                alt={step.centerIconAlt}
                                width={32}
                                height={32}
                                className="object-contain w-full h-full"
                                priority={index === 0}
                              />
                            </div>
                          </div>
                          
                          {/* Step Title */}
                          <div 
                            className={`${step.textColor} text-sm leading-relaxed text-center w-full px-4`}
                            style={{ fontFamily: 'Radio Grotesk' }}
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Vertical Connector Line for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center w-full">
                      <div className="relative w-px h-12">
                        {/* Background line - always visible as gray */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line - fills with white */}
                        <motion.div
                          key={`mobile-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-white origin-top"
                          variants={verticalLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Offer/>
          <DownArrow/>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepsComponent;