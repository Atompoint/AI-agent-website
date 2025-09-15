"use client";
import React, { useState, useEffect } from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image';
import Offer from '@/components/ui/Offer';
import DownArrow from '@/components/ui/DownArrow';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      number: '01',
      stepText: 'STEP',
      title: 'Enter Your Domain Name And Click Add',
      iconSrc: '/assets/icons/onlycircle.svg',
      centerIconSrc: '/assets/icons/globe1.svg',
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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stepperLineVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
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
        <div className="max-w-4xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '200px', maxWidth: '240px' }}>
                    <AnimatePresence>
                      {currentStep >= index && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-col items-center w-full"
                        >
                          {/* Step Number Section */}
                          <div className="flex flex-col items-center mb-8">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.5em] opacity-60">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-6xl md:text-7xl font-bold mb-6"
                              style={{ fontFamily: 'Radio Grotesk' }}
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
                            className={`${step.textColor} text-sm md:text-base leading-relaxed text-center w-full px-2`}
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
                          top: '60px', // Fixed position - 10px below the step number area
                          left: '70%',
                          width: '230px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line */}
                        <motion.div
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

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="relative flex items-start justify-between mb-12 px-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '160px', maxWidth: '200px' }}>
                    <AnimatePresence>
                      {currentStep >= index && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-col items-center w-full"
                        >
                          {/* Step Number Section */}
                          <div className="flex flex-col items-center mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-bold mb-4"
                              style={{ fontFamily: 'Radio Grotesk' }}
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
                          top: '50px', // Adjusted for tablet
                          left: '70%',
                          width: '130px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white to-purple-400 origin-left"
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
          <div className="hidden sm:block md:hidden lg:hidden">
            <div className="relative flex items-start justify-between mb-12 px-4">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper */}
                  <div className="relative flex flex-col items-center" style={{ minWidth: '160px', maxWidth: '200px' }}>
                    <AnimatePresence>
                      {currentStep >= index && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-col items-center w-full"
                        >
                          {/* Step Number Section */}
                          <div className="flex flex-col items-center mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-bold mb-4"
                              style={{ fontFamily: 'Radio Grotesk' }}
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
                          top: '50px', // Adjusted for tablet
                          left: '70%',
                          width: '130px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        {/* Background line */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white to-purple-400 origin-left"
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
                  {/* Step Column */}
                  <div className="relative flex flex-col items-center w-full max-w-xs">
                    <AnimatePresence>
                      {currentStep >= index && (
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex flex-col items-center w-full"
                        >
                          {/* Step Number Section */}
                          <div className="flex flex-col items-center mb-6">
                            {/* Step Label */}
                            <div className="text-white text-xs font-medium mb-2 tracking-[0.2em] opacity-60">
                              {step.stepText}
                            </div>
                            
                            {/* Step Number */}
                            <div 
                              className="text-5xl font-bold mb-4"
                              style={{ fontFamily: 'Radio Grotesk' }}
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
                        {/* Background line */}
                        <div className="absolute inset-0 bg-gray-600"></div>
                        
                        {/* Progress line */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-white to-purple-400 origin-top"
                          initial={{ height: '0%' }}
                          animate={currentStep > index ? { height: '100%' } : { height: '0%' }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
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

export default ThreeStepsComponent