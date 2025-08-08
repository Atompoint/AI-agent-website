'use client';

import React, { useState, useEffect, useRef } from 'react';
import DownArrow from '../../ui/DownArrow';
import Offer from '@/components/ui/Offer';
import ShinyText from '@/components/ui/ShinyText';

interface TimelineStepData {
  step: string;
  imageUrl?: string;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  position: 'left' | 'right';
}

interface TimelineStepProps {
  data: TimelineStepData;
  isActive: boolean;
  index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ data, isActive, index }) => {
  const { step, imageUrl, icon: Icon, title, subtitle, position } = data;
  
  return (
    <div className={`relative transition-all duration-500 ease-out transform ${
      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-98'
    }`}>
      <div className="grid grid-cols-2 gap-0 items-center min-h-[120px]">
        
        {/* Left Side Content */}
        <div className={`flex ${position === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
          {position === 'left' && (
            <div className="max-w-[340px] text-right">
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-start justify-end gap-3">
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="text-6xl font-bold transition-all">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                    </div>
                    <div>
                      <h3 className={`text-[14px] w-50 py-2 font-medium leading-[1.3] transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-1 transition-all">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={`Step ${step} icon`}
                        className={`w-11 h-11 object-contain transition-all ${
                          isActive ? 'opacity-100' : 'opacity-60'
                        }`}
                      />
                    ) : Icon ? (
                      <Icon className={`w-13 h-13 transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    ) : null}
                  </div>
                </div>
              </div>
              {subtitle && (
                <p className={`text-base italic transition-all ${
                  isActive ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Side Content */}
        <div className={`flex ${position === 'right' ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
          {position === 'right' && (
            <div className="max-w-[340px] text-left">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-start justify-start gap-3">
                  <div className="p-1 transition-all">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={`Step ${step} icon`}
                        className={`w-11 h-11 object-contain transition-all ${
                          isActive ? 'opacity-100' : 'opacity-60'
                        }`}
                      />
                    ) : Icon ? (
                      <Icon className={`w-13 h-13 transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    ) : null}
                  </div>
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="text-6xl font-bold transition-all">
                      <ShinyText
                        text={step.padStart(2, '0')}
                        disabled={!isActive}
                        speed={6}
                        className="block leading-none"
                      />
                    </div>
                    <div>
                      <h3 className={`text-[14px] w-50 py-2 font-medium leading-[1.3] transition-all ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {subtitle && (
                <p className={`text-base italic transition-all ${
                  isActive ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ThermometerLine: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="absolute left-1/2 top-0 h-full w-px bg-gray-600 transform -translate-x-1/2 z-0">
      {/* Filled progress line with gradient */}
      <div 
        className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
        style={{
          height: `${Math.min(progress, 100)}%`,
          background: 'linear-gradient(to bottom, #BF84F9, #DEBFFF)',
          boxShadow: '0 0 8px rgba(191, 132, 249, 0.5)'
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
    <div className="min-h-screen px-12">
      <Offer/>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="relative font-radio font-normal text-[60px] py-10 leading-[1.05] mb-6"
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
              <ShinyText text="Here's How This" speed={5} className="Heading" />
              {" "}
              <ShinyText text={`"Set It and Forget It"`}  speed={5} className="Heading gradient-mask-text" />
              {" "}
              <ShinyText text="System" speed={5} className="Heading" />
            </div>
            <div className="m-0 leading-[1] -mt-2">
              <ShinyText text="Transforms Any Website Into a Conversion Machine" speed={5} className="Heading" />
            </div>
          </h1>
        </div>

        {/* Timeline Container */}
        <div className="max-w-xl mx-auto py-10">
          <div ref={containerRef} className="relative ">
            {/* Timeline Steps */}
            <div className="relative z-10 space-y-12">
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