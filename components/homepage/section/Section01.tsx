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
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse stagger when hiding
      }
    },
    visible: {
      opacity: 1,
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
    <div className="min-h-screen  relative overflow-hidden">
      <div className="relative z-10 container mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-20 mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-16">
        {/* Glow effect for heading */}
        <div className="absolute top-30 left-1/2 -translate-x-1/2 w-[300px] h-[600px] rounded-full bg-gradient-to-tr from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[100px] -z-10"></div>
        
        {/* Responsive container with comprehensive padding */}
        <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mx-auto">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-16 2xl:mb-20">
          <h2
  className="relative font-radio font-normal text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
  style={{
    textTransform: 'capitalize',
    color: 'transparent',
    background:
      'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>
  <div className="m-0 leading-[1]">
    <ShinyText text="It's all takes three" speed={5} className="Heading" />
  </div>
  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="steps and " speed={5} className="Heading" />
    {' '}
    <ShinyText text="you're done" speed={5} className="Heading gradient-mask-text" />
  </div>
</h2>
       
          </div>

          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-0 2xl:space-y-0 relative">
            {steps.map((step: Step, index: number) => {
              const ref = refs[index];
              const inView = inViews[index];

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-start gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-6 2xl:gap-8 text-left relative mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-8 2xl:mb-10"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {/* Timeline number with animated line - Fully Responsive */}
                  <div className="relative flex sm:flex-col md:flex-col lg:flex-col xl:flex-col flex-row sm:items-center md:items-center lg:items-center xl:items-center items-start sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px] xl:min-w-[80px] 2xl:min-w-[90px] min-w-[50px] xs:min-w-[55px] sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 mb-3 xs:mb-4">
                    {/* Step Number - Comprehensive responsive sizing */}
                    <motion.div
                      variants={numberVariants}
                      className="z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-5 mr-3 xs:mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0"
                    >
                      <ShinyText text={step.number} disabled={false} speed={6} />
                    </motion.div>

                    {/* Vertical Line - Hidden on mobile, visible on SM+ with responsive heights */}
                    {index !== steps.length - 1 && (
                      <div className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex relative py-1 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-3 w-full justify-center">
                        <div className="relative h-[60px] xs:h-[65px] sm:h-[70px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[120px] w-[1px]">
                          {/* Background gray line */}
                          <div className="bg-gray-500 absolute inset-0 w-full" />

                          {/* Animated white fill with responsive width */}
                          <motion.div
                            variants={lineVariants}
                            animate={inViews[index + 1] ? "visible" : "hidden"}
                            className="bg-white absolute top-0 left-0 w-[1px] sm:w-[2px] md:w-[2px] lg:w-[2px] xl:w-[2px] 2xl:w-[3px]"
                          />
                        </div>
                      </div>
                    )}

                    {/* Mobile horizontal divider - Responsive width */}
                    {index !== steps.length - 1 && (
                      <div className="sm:hidden md:hidden lg:hidden xl:hidden flex items-center ml-auto">
                        <motion.div
                          variants={lineVariants}
                          animate={inViews[index + 1] ? "visible" : "hidden"}
                          className="h-[1px] w-6 xs:w-7 sm:w-8 bg-white"
                        />
                      </div>
                    )}
                  </div>

                  {/* Step Card - Fully responsive with comprehensive breakpoints */}
                  <motion.div
                    variants={cardVariants}
                    className="flex items-center gap-2 xs:gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-5 backdrop-blur-sm border border-gray-800 rounded-[10px] xs:rounded-[11px] sm:rounded-[12px] md:rounded-[13px] lg:rounded-[13px] xl:rounded-[13px] 2xl:rounded-[15px] px-3 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-6 2xl:px-8 py-2 xs:py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-5 flex-1 w-full hover:border-gray-600 transition-colors duration-200"
                    style={{ backgroundColor: '#FFFFFF08' }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }} // Mobile tap feedback
                  >
                    {/* Icon - Comprehensive responsive sizing */}
                    <motion.div
                      variants={iconVariants}
                      className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 flex items-center justify-center"
                    >
                      <Image
                        src={step.iconSrc}
                        alt={step.iconAlt}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                        priority={index === 0} // Optimize first image loading
                      />
                    </motion.div>

                    <div className="flex-1 min-w-0"> {/* min-w-0 for text truncation */}
                      {/* Step badge - Comprehensive responsive sizing */}
                      <motion.div
                        variants={textVariants}
                        className="relative inline-block w-fit rounded-full overflow-hidden mb-0.5 xs:mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-2"
                      >
                        <div className="rounded-full px-1.5 xs:px-2 sm:px-2 md:px-2.5 lg:px-3 xl:px-3 2xl:px-4 py-0.5 xs:py-0.5 sm:py-1 md:py-1 lg:py-1 xl:py-1 2xl:py-1.5 text-[9px] xs:text-[10px] sm:text-[10px] md:text-xs lg:text-xs xl:text-xs 2xl:text-sm text-white relative z-10 bg-gray-900/50">
                          {step.stepText}
                        </div>
                        <ShineBorder
                          borderWidth={2}
                          duration={6}
                          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                          className="absolute inset-0 rounded-full pointer-events-none"
                        />
                      </motion.div>

                      {/* Step title - Comprehensive responsive typography */}
                      <motion.div
                        variants={textVariants}
                        className={`${step.textColor} text-xs xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-medium leading-relaxed`}
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