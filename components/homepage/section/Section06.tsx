'use client';
import React, { useState, useEffect, useRef } from 'react';


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
                      <div className="text-black text-[30px] font-bold">
                      <div className="block leading-none">
                        {step.padStart(2, '0')}
                      </div>
                      </div>
                      {imageUrl && (
                        <img 
                          src={imageUrl} 
                          alt={`Step ${step} icon`}
                          className={`w-6 h-6 mt-4 object-contain transition-all ${
                            isActive ? 'opacity-100' : 'opacity-60'
                          }`}
                          
                        />
                      )}
                    </div>
                    <div className="text-right w-full">
                      <h3 className={`font-bold  2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] py-1 leading-[1.3]  transition-all ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* desktop */}
                <div className="hidden sm:flex items-start justify-end gap-1 sm:gap-2 xl:gap-5 w-full">
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="xl:text-[60px] mb-2 2xl:text-[82px] lg:text-[50px] text-black text-[30px] tracking-[-4px] font-bold transition-all">
                      <div className="block leading-none">
                        {step.padStart(2, '0')}
                      </div>
                    </div>
                    <div style={{letterSpacing: '0.8px'}}>
                    <h3 className={` 2xl:text-[22px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold text-[14px] w-32 md:w-50 lg:w-75 xl:w-69 2xl:w-88 py-1 leading-[1.4] transition-all ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-1  transition-all">
  {imageUrl && (
    <img 
      src={imageUrl} 
      alt={`Step ${step} icon`}
      className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20 object-contain transition-all ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
    
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
                    <div className="text-black text-[30px] font-bold">
                      <div className="block leading-none">
                        {step.padStart(2, '0')}
                      </div>
                      </div>
                      {imageUrl && (
                        <img 
                          src={imageUrl} 
                          alt={`Step ${step} icon`}
                          className={`w-6 h-6 mt-4 object-contain transition-all ${
                            isActive ? 'opacity-100' : 'opacity-60'
                          }`}
                        
                        />
                      )}
                    </div>
                    <div className="text-left w-full">
                      <h3 className={`sm:text-[14px] text-[14px] font-bold py-1 leading-[1.3] transition-all ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}>
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* desktop */}
                <div className="hidden sm:flex items-start w-full">
                  <div className="flex-shrink-0  w-10 md:w-12 lg:w-14 xl:w-15 2xl:w-18 pr-2 md:pr-3 lg:pr-4">
                    {imageUrl && (
                      <img 
                        src={imageUrl} 
                        alt={`Step ${step} icon`}
                        className={`w-full h-auto mt-2 object-contain transition-all ${
                          isActive ? 'opacity-100' : 'opacity-60'
                        }`}
                       
                      />
                    )}
                  </div>
                  <div className='flex flex-col items-right justify-end content-end'>
                    <div className="xl:text-[60px] mb-2 2xl:text-[82px] lg:text-[50px] text-black text-[30px] tracking-[-4px] font-bold transition-all">
                      <div className="block leading-none">
                        {step.padStart(2, '0')}
                      </div>
                    </div>
                    <div style={{letterSpacing: '0.8px'}}>
                      <h3 className={` 2xl:text-[22px] xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold text-[14px] w-32 md:w-50 lg:w-75 xl:w-62 2xl:w-88 py-1 leading-[1.4] transition-all ${
                        isActive ? 'text-black' : 'text-gray-400'
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
  background: 'linear-gradient(180deg, rgba(222, 191, 255, 0) 40%, #BF84F9 65%)',
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
      imageUrl: '/assets/images/timeline/1.png',
      title: 'You paste one simple line of code onto your website (takes 60 seconds)',
      position: 'right'
    },
    {
      step: '2',
      imageUrl: '/assets/images/timeline/2.png',
      title: 'VoiceAgent AI automatically reads and indexes every page, product, and piece of content on your site (happens instantly)',
      position: 'left'
    },
    {
      step: '3',
      imageUrl: '/assets/images/timeline/3.png',
      title: 'A small, customizable voice button appears on your website',
      position: 'right'
    },
    {
      step: '4',
      imageUrl: '/assets/images/timeline/4.png',
      title: 'When visitors click it, the agent greets them and they can speak naturally to ask questions about your products, services, or business',
      position: 'left'
    },
    {
      step: '5',
      imageUrl: '/assets/images/timeline/5.png',
      title: 'The AI responds immediately with human-like speech AND can navigate them to the exact page, section, or form they need',
      position: 'right'
    },
    {
      step: '6',
      imageUrl: '/assets/images/timeline/6.png',
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
    <div className="min-h-screen bg-white px-4">
   
      <div className=" mx-auto">

      <div
  className="relative text-center w-full z-10 py-12 2xl:py-30 mx-auto lg:max-w-[1700px] 2xl:max-w-[1700px] 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 text-black"
>
  <div>
    <span>Here's How This </span>
    <span className='gradient-mask-text'>"Set It & Forget It"</span>
    <span> System Transforms Any Website Into a Conversion Machine</span>
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
      <div className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
      <div 
        className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] flex justify-center items-center animate-bounce" 
        style={{ animationDuration: '2s' }}
      >
        
        

        {/* Arrow - Responsive sizing */}
        <svg 
          viewBox="0 0 438 438" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M219 270.726L270 219.863V230.137L219 281L168 230.137V219.863L219 270.726ZM270 169L219 219.863L168 169V179.274L219 230.137L270 179.274V169Z" 
            fill="url(#paint0_linear_downarrow)"
          />
          <defs>
            <linearGradient 
              id="paint0_linear_downarrow" 
              x1="281.657" 
              y1="135.189" 
              x2="301.269" 
              y2="277.69" 
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0451029" stopColor="#1F0B46"/>
              <stop offset="0.290022" stopColor="#DEBFFF"/>
              <stop offset="0.580247" stopColor="#5A27B1"/>
              <stop offset="0.924983" stopColor="#BF84F9"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
      <div className="text-center relative mb-0 w-full px-4 sm:px-6 py-5">
        <div className="Heading3 text-black xl:text-[36.6px] 2xl:text-[52px] max-w-[80%] 2xl:max-w-[1585px] mx-auto lg:text-[30px] md:text-[25px] text-[20px] font-medium">
          The entire setup takes less than 60 seconds. No technical skills required. No content creation needed. No ongoing maintenance.
        </div>
        
        {/* Gradient line */}
        <div className="flex justify-center w-full mt-4 mb-4">
         <div
  className="w-full lg:max-w-[600px] xl:max-w-[900px] 2xl:max-w-[1511px] h-[7px] relative 
  bg-[linear-gradient(90deg,_rgba(17,19,20,0)_15%,_#BF84F9_48%,_rgba(17,19,20,0)_80%)]
  [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]
  [mask-size:100%_100%]
  [mask-repeat:no-repeat]"
></div>


        </div>
      </div>
      
    </div>
  );
};

export default TimelineUI;