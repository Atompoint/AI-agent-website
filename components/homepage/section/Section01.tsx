"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
  imageSrc: string;
  imageAlt: string;
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
      iconSrc: '/assets/icons/icon-1.svg',
      centerIconSrc: '/assets/icons/center-1.svg',
      iconAlt: 'Step 1 Icon',
      centerIconAlt: 'Step 1 Center Icon',
      imageSrc: '/assets/images/section01/01.png',
      imageAlt: 'Step 1',
      textColor: 'text-black',
    },
    {
      number: '02',
      stepText: 'STEP',
      title: 'Copy And Paste The Code On Your Website',
      iconSrc: '/assets/icons/icon-2.svg',
      centerIconSrc: '/assets/icons/center-2.svg',
      iconAlt: 'Step 2 Icon',
      centerIconAlt: 'Step 2 Center Icon',
      imageSrc: '/assets/images/section01/0002.png',
      imageAlt: 'Step 2',
      textColor: 'text-black',
    },
    {
      number: '03',
      stepText: 'STEP',
      title: "Hit The Call Button & Test It Out. You're Done",
      iconSrc: '/assets/icons/icon-3.svg',
      centerIconSrc: '/assets/icons/center-3.svg',
      iconAlt: 'Step 3 Icon',
      centerIconAlt: 'Step 3 Center Icon',
      imageSrc: '/assets/images/section01/03.png',
      imageAlt: 'Step 3',
      textColor: 'text-black',
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
    <div className="relative h-auto  bg-white sm:pt-8 sm:px-8 overflow-hidden" ref={componentRef}>
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

      <div className=" w-full mx-auto items-center justify-center relative z-0">
        {/* Heading */}
        <h1
          className="relative z-10 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-10 md:leading-8 2xl:leading-15 md:mb-[3%] text-center text-black mx-auto font-extrabold"
          style={{ fontFamily: 'Basis Grotesque Pro, sans-serif',
}}
        >
          <div>      
    <div>All It Takes Is 3 Simple</div>{' '}
    <div> Steps and You're Done</div>
    
  
          </div>

        </h1>

        {/* Horizontal Stepper */}
        <div className="w-full flex justify-center">
          <div className="py-10 w-full max-w-[1676px] px-4 sm:px-6 lg:px-8 mx-auto sm:py-15 md:py-20 lg:py-25 2xl:py-30">
            <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-20">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Step Column with Relative Wrapper */}
                  <div
                   className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-20 mx-auto"

                    
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
                                color: 'black',
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
                            <div className="text-6xl md:text-6xl text-black font-extrabold text-center">
                              <div />{step.number}
                            </div>
                          </div>

                          {/* Icon Container */}
                          <div className="relative  2xl:w-[452px] h-auto mb-4 sm:mb-6 flex items-center justify-center">
                            {/* Rotating Circle Background */}
                            <Image
                              src={step.imageSrc}
                              alt={step.imageAlt}
                              width={452}
                              height={321}
                              className="w-full h-full "
                           
                            />

                          </div>

                          {/* Step Title */}
                          <div
                            style={{
                              fontFamily: 'Manrope',
                              fontWeight: 700,
                              lineHeight: '140%',
                              letterSpacing: '0%',
                              textTransform: 'capitalize',
                              textAlign: 'left',
                              width: '100%',
                              padding: '0 0.5rem'
                            }}
                            className={`${step.textColor} md:w-full 2xl:text-[23px] xl:text-[16px] lg:text-[15px] md:[13px] text-[12px]`}
                          >
                            {step.title}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  
                       {index < steps.length - 1 && (
                      <div className="hidden xl:block absolute"
                        style={{
                          top: '60px',
                          left: '65%',
                          width: '350px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-[#01000C]/30 origin-left"
                          variants={stepperLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    )}
 {index < steps.length - 1 && (
                      <div className="hidden xl:block absolute"
                        style={{
                          top: '60px',
                          left: '65%',
                          width: '350px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-[#01000C]/30 origin-left"
                          variants={stepperLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    )}
{/* lg */}
{index < steps.length - 1 && (
                      <div className="hidden lg:block absolute"
                        style={{
                          top: '60px',
                          left: '68%',
                          width: '270px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-[#01000C]/30 origin-left"
                          variants={stepperLineVariants}
                          initial="hidden"
                          animate={currentStep > index ? "visible" : "hidden"}
                        />
                      </div>
                    )}
 {index < steps.length - 1 && (
                      <div className="hidden xl:block absolute"
                        style={{
                          top: '60px',
                          left: '65%',
                          width: '350px',
                          height: '1px',
                          zIndex: 1
                        }}
                      >
                        <motion.div
                          key={`desktop-line-${index}-${animationKey}`}
                          className="absolute inset-0 bg-[#01000C]/30 origin-left"
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
                          className="absolute inset-0 bg-[#01000C]/30 origin-top"
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
        </div>
      </div>
          <div className="mx-auto text-center ">
               {/* Heading */}
               <div className="text-center 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] text-black font-extrabold mx-auto px-4"
               style={{ fontFamily: 'Basis Grotesque Pro, sans-serif',}}>
                 <h1>Limited Time Offer</h1>
                 <h2>Only A One time Investment Today!</h2>
               </div>
               <div >
                 {/* CTA Button */}
                 <div className='pt-3 pb-1 md:pt-4 md:pb-2 2xl:pt-10 2xl:pb-4'>
                   <div className="relative inline-block rounded-full overflow-visible">
                     {/* Glow Effect */}
                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C67DFF] via-[#3420C6] to-[#0079FF] blur-sm opacity-50 scale-100"></div>
         
                     {/* Button Background */}
                     <div className="relative rounded-full pt-[4px] pb-[2px]">
                       {/* Actual Button */}
                    <button
  className="relative inline-flex 2xl:w-[818px] 2xl:h-[116px] xl:w-[595px] xl:h-[83px] w-[250px] h-[60px] sm:w-[400px] sm:h-[60px] md:w-[525px] md:h-[75px] lg:w-[600px] lg:h-[80px] leading-7 lg:leading-10 md:leading-8 2xl:leading-15 
  items-center justify-center cursor-pointer rounded-full transition-all duration-300 hover:scale-100"
  style={{
    background: 'linear-gradient(154deg, #4D22A9 0%, #F5BDF5 100%)',
  }}
>
  <p
    className="transition-all duration-300 hover:scale-101 2xl:text-[35px] xl:text-[25px] sm:text-[18px] text-[15px] md:text-[22px] lg:text-[25px] font-extrabold text-white"
  >
    GET STARTED WITH VOICER - INSTANT ACCESS
  </p>
</button>


                     </div>
         
                    
                   </div>
                 </div>
         
                 {/* Payment Card */}
                 <div className="w-full h-full flex justify-center items-center ">
                   <Image
                     src="/assets/images/offer/card1.png"
                     alt="Payment Card"
                     width={450}
                     height={0}
                     className="w-[240px] sm:w-[340px] md:w-[425px] xl:w-[560px] lg:w-[528px] 2xl:w-[786px] h-auto object-contain"
                     priority
                   />
                 </div>
               </div>
             </div>
          <DownArrow />
    </div>
  );
};

export default ThreeStepsComponent;        
