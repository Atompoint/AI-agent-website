'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView, IntersectionOptions } from 'react-intersection-observer';
import DownArrow from '../../ui/DownArrow';
import Offer from '@/components/ui/Offer';
import { ShineBorder } from "@/components/magicui/shine-border";
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image';

interface Step {
  number: string;
  stepText: string;
  title: string;
  iconSrc: string;
  iconAlt: string;
  textColor: string;
}

interface AnimationVariants {
  hidden: any;
  visible: any;
}

export default function App(): React.JSX.Element {
  const steps: Step[] = [
    {
      number: '01',
      stepText: 'STEP 1',
      title: 'Enter Your Domain Name And Click Add',
      iconSrc: '/assets/icons/globe.svg',
      iconAlt: 'Globe Icon',
      textColor: 'text-white',
    },
    {
      number: '02',
      stepText: 'STEP 2',
      title: 'Copy And Paste The Code On Your Website',
      iconSrc: '/assets/icons/code.svg',
      iconAlt: 'Code Icon',
      textColor: 'text-white',
    },
    {
      number: '03',
      stepText: 'STEP 3',
      title: "Hit The Call Button & Test It Out. You're Done",
      iconSrc: '/assets/icons/call.svg',
      iconAlt: 'Call Icon',
      textColor: 'text-white',
    },
  ];

  // Enhanced intersection observer for smooth bidirectional animations
  const observerOptions: IntersectionOptions = {
    threshold: [0.1, 0.3, 0.5], // Multiple thresholds for smoother transitions
    rootMargin: '100px 0px -50px 0px', // Larger margin for earlier/later triggers
  };

  const [ref1, inView1] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

  const refs: ((node?: Element | null) => void)[] = [ref1, ref2, ref3];
  const inViews: boolean[] = [inView1, inView2, inView3];

  // Smooth bidirectional animation variants
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50, // Start from 50px below
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse stagger when hiding
      }
    },
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };

  const numberVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.7,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        damping: 12,
      }
    }
  };

  const iconVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -90,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
        type: "spring",
        stiffness: 120,
        damping: 10,
      }
    }
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: {
      height: '100%',
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative ">
      <div
  className="relative text-center z-10 "
  style={{
    fontFamily: 'Radio Grotesk',
    fontWeight: 400,
    fontSize: '43px',
    lineHeight: '0.8',
    letterSpacing: '0%',
    margin: '0 0 -0.5rem 0',
    padding: '0.2em 0',
    textTransform: 'capitalize',
    color: 'transparent',
    background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }}
>
  <div >
            <ShinyText text="All It Takes Is 3 Simple" speed={5} className='gradient-white-text'/>
          </div>
          <div >
            <ShinyText text="steps and " speed={5} className='gradient-white-text'/>
            {' '}
            <ShinyText text="you're done" speed={5} className='gradient-mask-text'/>
          </div>
</div>

      
      <div className="relative z-10 container mx-auto mb-20 mt-25 px-3">
        {/* Glow effect for heading */}
        <div className="absolute top-5 left-[55%] -translate-x-1/2 w-[300px] h-[600px] rounded-full bg-gradient-to-tr from-[#5A27B1] to-[#9F7AEA] opacity-25 blur-[150px] -z-10"></div>
        
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-3 relative">
            {steps.map((step: Step, index: number) => {
              const ref = refs[index];
              const inView = inViews[index];

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className="flex items-start gap-7 text-left relative "
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {/* Timeline number with animated line */}
                  <div className="relative flex flex-col items-center min-w-[80px]">
                    {/* Step Number */}
                    <motion.div
                      variants={numberVariants}
                      className="z-10 num1 "
                    >
                      <ShinyText text={step.number} disabled={false} speed={6} />
                    </motion.div>

                    {/* Vertical Line */}
                    {index !== steps.length - 1 && (
                      <div className="relative w-full justify-center flex">
                        <div className="relative h-[125px] w-[1px]">
                          {/* Background gray line */}
                          <div className="bg-gray-500 absolute inset-0 w-full" />

                          {/* Animated white fill */}
                          <motion.div
                            variants={lineVariants}
                            animate={inViews[index + 1] ? "visible" : "hidden"}
                            className="bg-white absolute top-0 left-0 w-[2px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step Card */}
                  <motion.div
                    variants={cardVariants}
                    className="flex items-center gap-4 backdrop-blur-sm border border-[#FFFFFF12] rounded-[13px] px-6 py-4 flex-1 w-full  transition-colors duration-200"
                    style={{ backgroundColor: '#FFFFFF08' }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      className="flex-shrink-0 w-13 h-13 flex items-center justify-center"
                    >
                      <Image
                        src={step.iconSrc}
                        alt={step.iconAlt}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                        priority={index === 0}
                      />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      {/* Step badge */}
                      <motion.div
                        variants={textVariants}
                        className="relative inline-block w-fit rounded-full overflow-hidden mb-2"
                      >
                        <div className="rounded-full px-4 py-1 subtextpt2  relative z-10">
                          {step.stepText}
                        </div>
                        <ShineBorder
                          borderWidth={1}
                          duration={6}
                          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                          className="absolute inset-0 rounded-full pointer-events-none"
                        />
                      </motion.div>

                      {/* Step title */}
                      <motion.div
                        variants={textVariants}
                        className={`${step.textColor} subtext2 leading-relaxed`}
                      >
                        {step.title}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Offer />
      <DownArrow />
    </div>
  );
}