'use client';

import React, { useState, useEffect, useRef } from 'react';
import DownArrow from '../../ui/DownArrow';
import Offer from '@/components/ui/Offer';
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
    <div className={`relative transition-all duration-700 ease-out transform ${
      isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-30 scale-95 translate-y-4'
    }`}>
      <div className={`grid grid-cols-2 gap-0 items-center min-h-[120px]`}>
        {/* Left Side Content */}
        <div className={`flex ${position === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
          {position === 'left' && (
            <div className="max-w-sm text-right">
              <div className="flex items-center justify-end gap-3 mb-3">
                <div className={`text-3xl font-bold transition-all ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.padStart(2, '0')}
                </div>
                <div className="p-2 transition-all">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={`Step ${step} icon`}
                      className={`w-5 h-5 object-contain transition-all ${
                        isActive ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                  ) : Icon ? (
                    <Icon className={`w-5 h-5 transition-all ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`} />
                  ) : null}
                </div>
              </div>
              <h3 className={`text-base font-medium leading-tight mb-2 transition-all ${
                isActive ? 'text-white' : 'text-gray-400'
              }`}>
                {title}
              </h3>
              {subtitle && (
                <p className={`text-sm italic transition-all ${
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
            <div className="max-w-sm text-left">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 transition-all">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={`Step ${step} icon`}
                      className={`w-5 h-5 object-contain transition-all ${
                        isActive ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                  ) : Icon ? (
                    <Icon className={`w-5 h-5 transition-all ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`} />
                  ) : null}
                </div>
                <div className={`text-3xl font-bold transition-all ${
                  isActive ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.padStart(2, '0')}
                </div>
              </div>
              <h3 className={`text-base font-medium leading-tight mb-2 transition-all ${
                isActive ? 'text-white' : 'text-gray-400'
              }`}>
                {title}
              </h3>
              {subtitle && (
                <p className={`text-sm italic transition-all ${
                  isActive ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Center Line Dot */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
            isActive 
              ? 'border-white bg-white shadow-lg shadow-white/50' 
              : 'border-gray-600 bg-gray-800'
          }`}></div>
        </div>
      </div>
    </div>
  );
};

const AnimatedCenterLine: React.FC<{ height: number }> = ({ height }) => {
  return (
    <div className="absolute left-1/2 top-0 h-full w-px bg-gray-600 transform -translate-x-1/2 z-0">
      {/* Animated glow effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/80 to-transparent animate-pulse opacity-60"></div>
      
      {/* Moving dot */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full animate-bounce" 
           style={{ 
             animation: 'moveDown 4s linear infinite',
           }}>
      </div>
      
      <style jsx>{`
        @keyframes moveDown {
          0% { top: 0%; opacity: 1; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const TimelineUI: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: TimelineStepData[] = [
    {
      step: '1',
      imageUrl: '/braces.svg',
      title: 'You paste one simple line of code onto your website (takes 60 seconds)',
      position: 'right'
    },
    {
      step: '2',
      imageUrl: '/mic.svg',
      title: 'VoiceAgent AI automatically reads and indexes every page, product, and piece of content on your site (happens instantly)',
      position: 'left'
    },
    {
      step: '3',
      imageUrl: '/search.svg',
      title: 'A small, customizable voice button appears on your website',
      position: 'right'
    },
    {
      step: '4',
      imageUrl: '/hi.svg',
      title: 'When visitors click it, the agent greets them and they can speak naturally to ask questions about your products, services, or business',
      position: 'left'
    },
    {
      step: '5',
      imageUrl: '/thunder.svg',
      title: 'The AI responds immediately with human-like speech AND can navigate them to the exact page, section, or form they need',
      position: 'right'
    },
    {
      step: '6',
      imageUrl: '/dollar.svg',
      title: 'Watch your conversions skyrocket as confused visitors become paying customers',
      position: 'left'
    }
  ];

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
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
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Offer/>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-3xl gradient-white-text text-center max-w-[800px] mx-auto mt-20 mb-8">
            Here's How This <span className="gradient-mask-text">"Set It & Forget It"</span> System Transforms Any Website Into a Conversion Machine
          </div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          <div ref={containerRef} className="relative py-8">
            {/* Timeline Steps */}
            <div className="relative z-10 space-y-8">
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
            
            {/* Center Line - Now properly contained */}
            <AnimatedCenterLine height={containerHeight} />
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-32"></div>
        <DownArrow/>
      </div>
    </div>
  );
};

export default TimelineUI;