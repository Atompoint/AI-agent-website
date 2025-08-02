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
      iconSrc: '/globe1.svg',
      iconAlt: 'Globe Icon',
      textColor: 'text-white',
    },
    {
      number: '02',
      stepText: 'STEP 2',
      title: 'Copy And Paste The Code On Your Website',
      iconSrc: '/code1.svg',
      iconAlt: 'Code Icon',
      textColor: 'text-white',
    },
    {
      number: '03',
      stepText: 'STEP 3',
      title: "Hit The Call Button & Test It Out. You're Done",
      iconSrc: '/call.svg',
      iconAlt: 'Call Icon',
      textColor: 'text-white',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mb-20 mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="m-auto  max-w-[400px] leading-tight">
               <ShinyText text="All It Takes Is 3 Simple Steps and You're Done " disabled={false} speed={6}  className='Heading'/>
            </h2>
          </div>

          <div className="space-y-0 relative">
            {steps.map((step, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

              return (
                <div key={index} ref={ref} className="flex items-start gap-15 text-left relative">
                  {/* Timeline number with animated line */}
                  <div className="relative flex flex-col items-center">
                    {/* Step Number */}
                    <motion.span
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="z-10 text-6xl md:text-7xl lg:text-6xl  mb-0"
>
  <ShinyText text={`${step.number}`} disabled={false} speed={6} />
</motion.span>


                    {/* Vertical Line below number (except for last step) */}
                    {index !== steps.length - 1 && (
                      <div className="relative py-5">
                        {index === 0 ? (
                          // Step 1 to 2: Half gray, half white
                          <div className="relative h-[120px]">
                            {/* Gray bottom half */}
                            <motion.div
                              initial={{ height: 0 }}
                              animate={inView ? { height: '60px' } : {}}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="w-[0.3px] bg-gray-500 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                            />
                            {/* White top half */}
                            <motion.div
                              initial={{ height: 0 }}
                              animate={inView ? { height: '60px' } : {}}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              className="w-[2px] bg-white absolute top-0 left-1/2 transform rounded-full -translate-x-1/2"
                            />
                          </div>
                        ) : (
                          // Step 2 to 3: Complete gray
                          <motion.div
                            initial={{ height: 0 }}
                            animate={inView ? { height: '120px' } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-[0.3px] bg-gray-500 left-1/2 transform -translate-x-1/2 relative"
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-4 backdrop-blur-sm border border-gray-800 rounded-[13px] px-6 py-4 flex-1"
                    style={{ backgroundColor: '#FFFFFF08' }}
                  >
                    <div className="flex-shrink-0 w-15 h-15 flex items-center justify-center relative">
                      <Image
                        src={step.iconSrc}
                        alt={step.iconAlt}
                        width={24}
                        height={24}
                        className="w-15 h-15"
                      />
                    </div>
                    <div>
<div className="relative inline-block w-fit rounded-full overflow-hidden mb-2">
  {/* Inner content */}
  <div className="rounded-full  px-3 py-1 text-xs text-white relative z-10">
    {step.stepText}
  </div>

  {/* Shine border effect */}
  <ShineBorder
    borderWidth={2}
    duration={6}
    shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
    className="absolute inset-0 rounded-full pointer-events-none"
  />
</div>

                      <div className={`${step.textColor} text-lg font-medium`}>
                        {step.title}
                      </div>
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