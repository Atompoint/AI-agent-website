'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DownArrow from '../../ui/DownArrow';
import Offer from '@/components/ui/Offer';
import { ShineBorder } from "@/components/magicui/shine-border";
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image';

export default function App() {
  const steps = [
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

  // Create refs for each step - REMOVED triggerOnce: true
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mb-20 mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="m-auto max-w-[400px] leading-tight">
               <ShinyText text="All It Takes Is 3 Simple Steps and You're Done " disabled={false} speed={6} className='Heading'/>
            </h2>
          </div>

          <div className="space-y-0 relative">
            {steps.map((step, index) => {
              const ref = refs[index];
              const inView = inViews[index];

              return (
                <div key={index} ref={ref} className="flex items-start gap-6 text-left relative mb-8">
                  {/* Timeline number with animated line */}
                  <div className="relative flex flex-col items-center min-w-[80px]">
                    {/* Step Number */}
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.5 }}
                      animate={inView ? { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1 
                      } : { 
                        opacity: 0, 
                        y: 50, 
                        scale: 0.5 
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeOut",
                        delay: 0.1
                      }}
                      className="z-10 text-6xl md:text-7xl lg:text-6xl mb-4"
                    >
                      <ShinyText text={`${step.number}`} disabled={false} speed={6} />
                    </motion.div>

                    {/* Vertical Line below number (except for last step) */}
                    {index !== steps.length - 1 && (
                      <div className="relative py-2 w-full flex justify-center">
                        <div className="relative h-[100px] w-[1px]">
                          {/* Background gray line - full height */}
                          <div className="bg-gray-500 absolute inset-0 w-full" />
                          
                          {/* White fill that animates from top to bottom based on next step's visibility */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={inViews[index + 1] ? { height: '100px' } : { height: 0 }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.3,
                              ease: "easeInOut"
                            }}
                            className="bg-white absolute top-0 left-0 w-[2px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={inView ? { 
                      opacity: 1, 
                      x: 0, 
                      scale: 1 
                    } : { 
                      opacity: 0, 
                      x: 100, 
                      scale: 0.9 
                    }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.3,
                      ease: "easeOut"
                    }}
                    className="flex items-center gap-4 backdrop-blur-sm border border-gray-800 rounded-[13px] px-6 py-4 flex-1 hover:border-gray-600 transition-colors duration-300"
                    style={{ backgroundColor: '#FFFFFF08' }}
                  >
                    {/* Icon */}
                    <motion.div 
                      initial={{ scale: 0, rotate: -90 }}
                      animate={inView ? { 
                        scale: 1, 
                        rotate: 0 
                      } : { 
                        scale: 0, 
                        rotate: -90 
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6,
                        ease: "easeOut"
                      }}
                      className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                    >
                      <Image
                        src={step.iconSrc}
                        alt={step.iconAlt}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </motion.div>

                    <div className="flex-1">
                      {/* Step badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { 
                          opacity: 1, 
                          y: 0 
                        } : { 
                          opacity: 0, 
                          y: 20 
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8,
                          ease: "easeOut"
                        }}
                        className="relative inline-block w-fit rounded-full overflow-hidden mb-2"
                      >
                        <div className="rounded-full px-3 py-1 text-xs text-white relative z-10 bg-gray-900/50">
                          {step.stepText}
                        </div>
                        <ShineBorder
                          borderWidth={2}
                          duration={6}
                          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
                          className="absolute inset-0 rounded-full pointer-events-none"
                        />
                      </motion.div>

                      {/* Step title */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={inView ? { 
                          opacity: 1, 
                          y: 0 
                        } : { 
                          opacity: 0, 
                          y: 15 
                        }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.0,
                          ease: "easeOut"
                        }}
                        className={`${step.textColor} text-lg font-medium leading-relaxed`}
                      >
                        {step.title}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
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