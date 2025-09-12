'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HorizontalStepper from '@/components/Stepper';
import ShinyText from '@/components/ui/ShinyText';
import Offer from '@/components/ui/Offer';
import DownArrow from '../../ui/DownArrow';

export default function App(): React.JSX.Element {
  const [stepsCompleted, setStepsCompleted] = useState(false);

  const steps = [
    {
      label: 'Step 1',
      description: 'Enter Your Domain Name And Click Add',
      icon: '/assets/icons/globe1.svg',
    },
    {
      label: 'Step 2',
      description: 'Copy And Paste The Code On Your Website',
      icon: '/assets/icons/braces1.svg',
    },
    {
      label: 'Step 3',
      description: "Hit The Call Button & Test It Out. You're Done",
      icon: '/assets/icons/call1.svg',
    },
  ];

  const handleStepperComplete = () => {
    console.log('All steps completed!');
    setStepsCompleted(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-[#5A27B1]/20 to-[#9F7AEA]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#C67DFF]/15 to-[#3420C6]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          className="relative text-center pt-16 pb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative"
            style={{
              fontFamily: 'Radio Grotesk',
              fontWeight: 400,
              fontSize: 'clamp(24px, 6vw, 43px)',
              lineHeight: '0.9',
              letterSpacing: '0%',
              color: 'transparent',
              background:
                'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {/* Glow effect for heading */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[300px] h-[150px] rounded-full bg-gradient-to-r from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[80px] -z-10"></div>
            
            <div className="mb-2">
              <ShinyText
                text="All It Takes Is 3 Simple"
                speed={5}
                className="gradient-white-text"
              />
            </div>
            <div>
              <ShinyText
                text="Steps and "
                speed={5}
                className="gradient-white-text"
              />{' '}
              <ShinyText
                text="You're Done"
                speed={5}
                className="gradient-mask-text"
              />
            </div>
          </div>
        </motion.div>

        {/* Horizontal Stepper Container */}
        <motion.div
          className="relative container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Stepper wrapper with enhanced styling */}
          <div className="relative">
            {/* Additional glow effects around stepper */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] max-w-5xl rounded-full bg-gradient-to-r from-[#5A27B1]/10 via-[#9F7AEA]/5 to-[#C67DFF]/10 blur-[120px] -z-10"></div>
            
            <HorizontalStepper 
              steps={steps}
              onComplete={handleStepperComplete}
              stepDuration={3000} // 3 seconds between steps for better viewing
            />
          </div>
        </motion.div>

        {/* Completion celebration */}
        {stepsCompleted && (
          <motion.div
            className="text-center mt-8 mb-12"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              type: "spring",
              stiffness: 100,
              damping: 15 
            }}
          >
           
          </motion.div>
        )}

        {/* CTA & Arrow - with enhanced spacing */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="mt-20 mb-16">
            <Offer />
          </div>
          <DownArrow />
        </motion.div>
      </div>
    </div>
  );
}