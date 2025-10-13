'use client';
import React, { useState, useEffect, useRef } from 'react';
import DownArrow from '../../ui/DownArrow';
import Offer from '@/components/ui/Offer';
import ShinyText from '@/components/ui/ShinyText';

interface TimelineStepData {
  step: string;
  imageUrl?: string;
  title: string;
  position: 'left' | 'right';
}

interface TimelineStepProps {
  data: TimelineStepData;
  isActive: boolean;
  index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ data, isActive, index }) => {
  const { step, imageUrl, title, position } = data;
  
  return (
    <div className={`relative transition-all duration-500 ease-out transform ${
      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-98'
    }`}>
      <div className="grid grid-cols-2 gap-0 items-center min-h-[110px] 2xl:min-h-[140px] px-4">
        
        {/* Left Side Content */}
        <div className={`flex ${position === 'left' ? 'justify-end pr-3 lg:pr-8' : 'justify-start pl-3 lg:pl-8'}`}>
          {position === 'left' && (
            <div className="max-w-[340px] md:max-w-[460px] 2xl:max-w-none text-right">
              <div className="flex flex-col items-end sm:gap-4">
                {/* Mobile View - Icon, Step Number, and Title */}
                <div className="sm:hidden w-full">
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col items-end mb-1">
                      <div className="text-white text-[30px] font-bold">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                      </div>
                      {imageUrl && (
                        <img 
                          src={imageUrl} 
                          alt={`Step ${step} icon`}
                          className={`w-6 h-6 mt-4 object-contain transition-all ${
                            isActive ? 'opacity-100' : 'opacity-60'
                          }`}
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                    </div>
                    <div className="text-right w-full">
                      <h3 className={`font-medium  2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] py-1 leading-[1.5] transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* desktop */}
                <div className="hidden sm:flex items-start justify-end gap-1 sm:gap-2 xl:gap-5 w-full">
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="xl:text-[60px] mb-2 2xl:text-[82px] lg:text-[50px] text-white text-[30px] tracking-[-4px] font-bold transition-all">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                    </div>
                    <div style={{letterSpacing: '0.8px'}}>
                    <h3 className={` 2xl:text-[22px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] font-semibold text-[14px] w-32 md:w-50 lg:w-75 xl:w-69 2xl:w-88 py-1 leading-[1.3]  transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-1 mt-6 transition-all">
  {imageUrl && (
    <img 
      src={imageUrl} 
      alt={`Step ${step} icon`}
      className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20 object-contain transition-all ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
      style={{ filter: 'brightness(0) invert(1)' }}
    />
  )}
</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Content */}
        <div className={`flex ${position === 'right' ? 'justify-start pl-3 lg:pl-8' : 'justify-end pl-3 lg:pr-8'}`}>
          {position === 'right' && (
            <div className="max-w-[340px] 2xl:max-w-none text-left">
              <div className="flex flex-col items-start sm:gap-4">
                {/* Mobile View - Icon, Step Number, and Title */}
                <div className="sm:hidden w-full">
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col items-start mb-1">
                    <div className="text-white text-[30px] font-bold">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                      </div>
                      {imageUrl && (
                        <img 
                          src={imageUrl} 
                          alt={`Step ${step} icon`}
                          className={`w-6 h-6 mt-4 object-contain transition-all ${
                            isActive ? 'opacity-100' : 'opacity-60'
                          }`}
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                    </div>
                    <div className="text-left w-full">
                      <h3 className={`sm:text-[14px] text-[14px] font-medium py-1 leading-[1.5] transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* desktop */}
                <div className="hidden sm:flex items-start w-full">
                  <div className="flex-shrink-0 mt-8 w-10 md:w-12 lg:w-14 xl:w-15 2xl:w-18 pr-2 md:pr-3 lg:pr-4">
                    {imageUrl && (
                      <img 
                        src={imageUrl} 
                        alt={`Step ${step} icon`}
                        className={`w-full h-auto  object-contain transition-all ${
                          isActive ? 'opacity-100' : 'opacity-60'
                        }`}
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    )}
                  </div>
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="xl:text-[60px] mb-2 2xl:text-[82px] lg:text-[50px] text-white text-[30px] tracking-[-4px] font-bold transition-all">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                    </div>
                    <div style={{letterSpacing: '0.8px'}}>
                      <h3 className={` 2xl:text-[22px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] font-semibold text-[14px] w-32 md:w-50 lg:w-75 xl:w-62 2xl:w-88 py-1 leading-[1.3]  transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ThermometerLine: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="absolute left-1/2 top-0 h-full transform -translate-x-1/2 z-0">
      {/* Background gray line with sharp edges */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-600 transition-all duration-300 ease-out"
        style={{
          height: '100%',
          borderRadius: '0',
          clipPath: 'none',
        }}
      />
      
      {/* Filled progress line with gradient and sharp edges */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px transition-all duration-300 ease-out"
        style={{
          height: `${Math.min(progress, 100)}%`,
          background: 'linear-gradient(to bottom, #BF84F9, #DEBFFF)',
          boxShadow: '0 0 8px rgba(191, 132, 249, 0.5)',
          borderRadius: '0',
          clipPath: 'none',
        }}
      />
    </div>
  );
};

const TimelineUI: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: TimelineStepData[] = [
    {
      step: '1',
      imageUrl: '/assets/icons/braces.svg',
      title: 'You paste one simple line of code onto your website (takes 60 seconds)',
      position: 'right'
    },
    {
      step: '2',
      imageUrl: '/assets/icons/mic.svg',
      title: 'VoiceAgent AI automatically reads and indexes every page, product, and piece of content on your site (happens instantly)',
      position: 'left'
    },
    {
      step: '3',
      imageUrl: '/assets/icons/search.svg',
      title: 'A small, customizable voice button appears on your website',
      position: 'right'
    },
    {
      step: '4',
      imageUrl: '/assets/icons/hi.svg',
      title: 'When visitors click it, the agent greets them and they can speak naturally to ask questions about your products, services, or business',
      position: 'left'
    },
    {
      step: '5',
      imageUrl: '/assets/icons/thunder.svg',
      title: 'The AI responds immediately with human-like speech AND can navigate them to the exact page, section, or form they need',
      position: 'right'
    },
    {
      step: '6',
      imageUrl: '/assets/icons/dollar.svg',
      title: 'Watch your conversions skyrocket as confused visitors become paying customers',
      position: 'left'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on scroll position
        const startScroll = containerTop - windowHeight * 0.5;
        const endScroll = containerTop + containerHeight - windowHeight * 0.5;
        const currentProgress = ((scrollTop - startScroll) / (endScroll - startScroll)) * 100;
        
        setScrollProgress(Math.max(0, Math.min(100, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen px-4">
      <Offer/>
      <div className=" mx-auto">

        <div
  className="relative text-center w-full z-10 py-12 md:py-30 mx-auto  lg:max-w-[1700px] 2xl:max-w-[1700px] 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2"

>
<div >
              <ShinyText text="Here's How This" speed={5} className="gradient-white-text " />
           {' '}
              <ShinyText text={`"Set It & Forget It"`}  speed={5} className=" gradient-mask-text " />
              {' '}
              <ShinyText text="System Transforms" speed={5} className="gradient-white-text " />
              {' '}
              <ShinyText text="Any Website Into" speed={5} className=" gradient-white-text " />
              {' '}
              <ShinyText text=" a Conversion Machine" speed={5} className=" gradient-white-text" />
             
            </div>
</div>
        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto ">
          <div ref={containerRef} className="relative">
            {/* Timeline Steps */}
            <div className="relative z-10 space-y-9 2xl:space-y-15">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={setStepRef(index)}
                  className="relative"
                >
                  <TimelineStep
                    data={step}
                    isActive={activeStep === index}
                    index={index}
                  />
                </div>
              ))}
            </div>
            
            {/* Thermometer Progress Line */}
            <ThermometerLine progress={scrollProgress} />
          </div>
        </div>

        {/* Down Arrow */}
        <div>
        </div>
      </div>
      <DownArrow/>
    </div>
  );
};

export default TimelineUI;