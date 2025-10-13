import React from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

export default function Section07() {
  const features = [
    {
      title: "Real Voice Conversations That Replace Frustrating Text Chat",
      description: "Your visitors can actually talk to your website like they're calling your business - no more typing back and forth or waiting for responses.",
      icon: "/assets/icons/mic1.svg"
    },
    {
      title: "Automatically Learns Your Entire Website Without Training", 
      description: "The moment you install it, your AI instantly memorizes every product, service, and page on your site with zero setup work from you.",
      icon: "/assets/icons/brain.svg"
    },
    {
      title: "60-Second Setup With Just One Line of Code",
      description: "Simply copy and paste one line of code and your website instantly becomes interactive - no technical skills or complicated configuration required.",
      icon: "/assets/icons/code.svg"
    },
    {
      title: "Handles Conversations Simultaneously 24/7",
      description: "While human agents can only help one person at a time, your AI talks to hundreds of visitors at once without ever taking a break.",
      icon: "/assets/icons/time.svg"
    },
    {
      title: "Smart Website Navigation That Guides Visitors to Buy",
      description: "Your AI doesn't just answer questions - it actually walks visitors through your pages and escorts them directly to your checkout.",
      icon: "/assets/icons/hamburger.svg"
    },
    {
      title: "Complete Analytics Dashboard To Track Every Conversation",
      description: "See exactly what visitors are asking, which conversations lead to sales, and how much money your AI is making you in real-time.",
      icon: "/assets/icons/stats.svg"
    },
    {
      title: "Fully Customizable Voice and Personality",
      description: "Choose your AI's voice, personality, colors, and greetings to perfectly match your brand and make visitors feel at home.",
      icon: "/assets/icons/setting.svg"
    },
    {
      title: "Natural Interruption Handling Just Like Real Conversations",
      description: "Visitors can interrupt your AI anytime to ask follow-up questions or change topics, creating fluid conversations that feel completely natural.",
      icon: "/assets/icons/qmark1.svg"
    },
    {
      title: "Works Perfectly On Any Website Platform",
      description: "Whether you use WordPress, Shopify, Webflow, Clickfunnels, GoHighLevel or custom code, your voice AI works flawlessly without breaking anything on your existing site.",
      icon: "/assets/icons/tick.svg"
    },
    {
      title: "Real-Time Objection Handling That Closes More Sales",
      description: "Your AI recognizes hesitation and objections, then responds with the perfect counter-arguments to turn skeptics into buyers instantly.",
      icon: "/assets/icons/search.svg"
    },
    {
      title: "Match Your Brand Colors and Style Perfectly",
      description: "Customize the voice button and interface to blend seamlessly with your website design so it looks like it was always part of your site.",
      icon: "/assets/icons/colorp.svg"
    },
    {
      title: "Set Custom Welcome Messages That Match Your Business",
      description: "Create personalized greetings that introduce your AI exactly how you want, setting the perfect tone for every visitor interaction.",
      icon: "/assets/icons/hand.svg"
    }
  ];

  return (
    <div className="w-full relative overflow-visible px-4 sm:px-6">
      {/* Background glow effect - moved outside and positioned absolutely */}
      <div className="absolute top-[10rem] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1000px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-25 blur-[200px] rotate-[-40deg] -z-10" />
      
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-center relative mb-0 w-full max-w-[1600px] px-4 sm:px-6">
          <div 
         
            className="Heading3 xl:text-[36.6px] 2xl:text-[52px] max-w-[80%] mx-auto lg:text-[30px] md:text-[25px] text-[20px]
            "
          >
            <ShinyText
              text="The entire setup takes less than 60 seconds. No technical skills required. No content creation needed. No ongoing maintenance."
              disabled={false}
              speed={6}
              className="gradient-white-text "
            />

           
          </div>

          {/* Gradient line - centered and constrained */}
          <div className="flex justify-center w-full m-4">
            <div className="w-full max-w-[900px] h-[7px] 
              bg-gradient-to-r 
              from-transparent via-purple-300 to-transparent 
              bg-[length:100%_100%] bg-no
              -repeat">
            </div>
          </div>
        </div>

        <div className="w-full  mx-auto px-2 sm:px-4">
        <div
            className="relative text-center z-10 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 max-w-[325px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[900px] w-full py-10 lg:py-25 mx-auto 2xl:py-30 Heading2"
           
          >
            <div>
              <ShinyText text="Turn your Silent Website Into a 24/7" speed={5} className="gradient-white-text" />
            
          {' '}
              <ShinyText text="Money-Making" speed={5} className="gradient-mask-text inline-block" />
              {' '}
              <ShinyText text="Machine That" speed={5} className="gradient-white-text inline-block" />
              {' '}
              <ShinyText text="Talks!" speed={5} className="gradient-mask-text inline-block" />
            </div>
          </div>


          {/* Features Grid - 3 columns, 4 rows with responsive design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 sm:gap-x-15 xl:gap-x-35 xl:gap-y-2  2xl:gap-x-30 w-full  ">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col space-y-3 sm:space-y-4 pb-5 w-full items-center sm:items-start text-center sm:text-left">
                {/* Icon container */}
                <div className="flex w-full justify-center sm:justify-start">
                  <div className="w-10 h-10 sm:w-9 sm:h-9 xl:w-[34px] xl:h-[34px] 2xl:w-[53px] 2xl:h-[53px] flex items-center justify-center">
                    <Image 
                      src={feature.icon} 
                      alt="" 
                      width={96} 
                      height={96}
                      className="w-full h-full object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                
                <div className="w-full py-2  sm:py-3">
                  <h3 
                  className="font-medium text-[15px] md:text-[16px] lg:text-[20px] leading-6 md:leading-8 2xl:leading-10 xl:text-[22.4px] 2xl:text-[34px] w-full">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-2 sm:mt-3 2xl:text-[22px] 2xl:pr-15 xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-8 text-gray-300 w-full">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <DownArrow/>
      </div>
    </div>
  );
}