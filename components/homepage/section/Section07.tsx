import React from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

export default function Section07() {
  const features = [
    {
      title: "Real Voice Conversations That Replace Frustrating Text Chat",
      description: "Your visitors can actually talk to your website like they're calling your business - no more typing back and forth or waiting for responses.",
      image: "/assets/images/section07/1.png"
    },
    {
      title: "Automatically Learns Your Entire Website Without Training", 
      description: "The moment you install it, your AI instantly memorizes every product, service, and page on your site with zero setup work from you.",
      image: "/assets/images/section07/2.png"
    },
    {
      title: "60-Second Setup With Just One Line of Code",
      description: "Simply copy and paste one line of code and your website instantly becomes interactive - no technical skills or complicated configuration required.",
      image: "/assets/images/section07/3.png"
    },
    {
      title: "Handles Conversations Simultaneously 24/7",
      description: "While human agents can only help one person at a time, your AI talks to hundreds of visitors at once without ever taking a break.",
      image: "/assets/images/section07/4.png"
    },
    {
      title: "Smart Website Navigation That Guides Visitors to Buy",
      description: "Your AI doesn't just answer questions - it actually walks visitors through your pages and escorts them directly to your checkout.",
      image: "/assets/images/section07/5.png"
    },
    {
      title: "Complete Analytics Dashboard To Track Every Conversation",
      description: "See exactly what visitors are asking, which conversations lead to sales, and how much money your AI is making you in real-time.",
      image: "/assets/images/section07/6.png"
    },
    {
      title: "Fully Customizable Voice and Personality",
      description: "Choose your AI's voice, personality, colors, and greetings to perfectly match your brand and make visitors feel at home.",
      image: "/assets/images/section07/7.png"
    },
    {
      title: "Natural Interruption Handling Just Like Real Conversations",
      description: "Visitors can interrupt your AI anytime to ask follow-up questions or change topics, creating fluid conversations that feel completely natural.",
      image: "/assets/images/section07/8.png"
    },
    {
      title: "Works Perfectly On Any Website Platform",
      description: "Whether you use WordPress, Shopify, Webflow, Clickfunnels, GoHighLevel or custom code, your voice AI works flawlessly without breaking anything on your existing site.",
      image: "/assets/images/section07/9.png"
    },
    {
      title: "Real-Time Objection Handling That Closes More Sales",
      description: "Your AI recognizes hesitation and objections, then responds with the perfect counter-arguments to turn skeptics into buyers instantly.",
      image: "/assets/images/section07/10.png"
    },
    {
      title: "Match Your Brand Colors and Style Perfectly",
      description: "Customize the voice button and interface to blend seamlessly with your website design so it looks like it was always part of your site.",
      image: "/assets/images/section07/11.png"
    },
    {
      title: "Set Custom Welcome Messages That Match Your Business",
      description: "Create personalized greetings that introduce your AI exactly how you want, setting the perfect tone for every visitor interaction.",
      image: "/assets/images/section07/12.png"
    }
  ];

  return (
    <div className="w-full relative overflow-visible px-4 sm:px-6 py-16">
      {/* Background glow effect */}
      <div className="absolute top-[10rem] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1000px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-25 blur-[200px] rotate-[-40deg] -z-10" />
      
      <div className="max-w-[1756px] mx-auto">
        {/* Section Header */}
        <div className="text-center relative mb-0 w-full px-4 sm:px-6">
        <div 
       
          className="Heading3 xl:text-[36.6px] 2xl:text-[52px] max-w-[80%] 2xl:max-w-[1585px] mx-auto lg:text-[30px] md:text-[25px] text-[20px]
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

      <div className="w-full mx-auto px-2 sm:px-4">
      <div
          className="relative text-center z-10 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 max-w-[325px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[900px] 2xl:max-w-[1200px] w-full py-8 lg:py-15 mx-auto 2xl:py-20 Heading2"
         
        >
          <div>
            <ShinyText text="Turn your Silent Website Into a" speed={5} className="gradient-white-text inline-block" />
          
        {' '}
            <ShinyText text="24/7 Money-Making Machine" speed={5} className="gradient-mask-text inline-block" />
            {' '}
            <ShinyText text="That Talks!" speed={5} className="gradient-white-text inline-block" />
           
          </div>
        </div> </div>
        {/* Features Grid - 2 columns on xl screens */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col space-y-4 p-6   "
            >
              <h3 className="gradient-text text-xl md:text-2xl lg:text-[22px] 2xl:text-[27.4px] font-bold leading-tight">
                {feature.title}
              </h3>
              
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
              </div>
              
              <p className="text-white font-normal text-base lg:text-[18px] 2xl:leading-8 2xl:text-[23px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <DownArrow/>
    </div>
  );
}