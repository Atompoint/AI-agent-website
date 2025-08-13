import React from "react";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

export default function Section07() {
  const features = [
    {
      title: "Real Voice Conversations That Replace Frustrating Text Chat",
      description: "Your visitors can actually talk to your website like they're calling your business - no more typing back and forth or waiting for responses.",
    },
    {
      title: "Automatically Learns Your Entire Website Without Training", 
      description: "The moment you install it, your AI instantly memorizes every product, service, and page on your site with zero setup work from you.",
    },
    {
      title: "60-Second Setup With Just One Line of Code",
      description: "Simply copy and paste one line of code and your website instantly becomes interactive - no technical skills or complicated configuration required.",
    },
    {
      title: "Handles Conversations Simultaneously 24/7",
      description: "While human agents can only help one person at a time, your AI talks to hundreds of visitors at once without ever taking a break.",
    },
    {
      title: "Smart Website Navigation That Guides Visitors to Buy",
      description: "Your AI doesn't just answer questions - it actually walks visitors through your pages and escorts them directly to your checkout.",
    },
    {
      title: "Complete Analytics Dashboard To Track Every Conversation",
      description: "See exactly what visitors are asking, which conversations lead to sales, and how much money your AI is making you in real-time.",
    },
    {
      title: "Fully Customizable Voice and Personality",
      description: "Choose your AI's voice, personality, colors, and greetings to perfectly match your brand and make visitors feel at home.",
    },
    {
      title: "Natural Interruption Handling Just Like Real Conversations",
      description: "Visitors can interrupt your AI anytime to ask follow-up questions or change topics, creating fluid conversations that feel completely natural.",
    },
    {
      title: "Works Perfectly On Any Website Platform",
      description: "Whether you use WordPress, Shopify, Webflow, Clickfunnels, GoHighLevel or custom code, your voice AI works flawlessly without breaking anything on your existing site.",
    },
    {
      title: "Real-Time Objection Handling That Closes More Sales",
      description: "Your AI recognizes hesitation and objections, then responds with the perfect counter-arguments to turn skeptics into buyers instantly.",
    },
    {
      title: "Match Your Brand Colors and Style Perfectly",
      description: "Customize the voice button and interface to blend seamlessly with your website design so it looks like it was always part of your site.",
    },
    {
      title: "Set Custom Welcome Messages That Match Your Business",
      description: "Create personalized greetings that introduce your AI exactly how you want, setting the perfect tone for every visitor interaction.",
    }
  ];

  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-center px-4">
      <div className="text-center relative mb-20 w-full max-w-6xl">
        {/* Background blur effect - positioned better */}
        <div className="absolute top-[30rem] right-[3px] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[1000px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-25 blur-[200px] rotate-[-40deg] -z-10" />
        
        <div
          className="relative text-center z-10 mb-4 w-full"
          style={{
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2',
          }}
        >
          <ShinyText
            text="The entire setup takes less than 60 seconds. No technical skills"
            disabled={false}
            speed={6}
            className="Heading3 gradient-white-text"
          />
          
          {/* Second Line - With Gradient Text */}
          <ShinyText
            text="required. No content creation needed. No ongoing maintenance."
            disabled={false}
            speed={6}
            className="Heading3 gradient-white-text"
          />
        </div>

        {/* Gradient line - centered and constrained */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[600px] h-[4.3px] 
            bg-gradient-to-r 
            from-transparent via-purple-300 to-transparent 
            bg-[length:100%_100%] bg-no-repeat">
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6">
        <div
          className="relative text-center z-10 py-16 w-full"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: '43px',
            lineHeight: '0.8',
            letterSpacing: '0%',
            margin: '50px 0 4rem 0',
            padding: '0.2em 0',
            textTransform: 'capitalize',
            color: 'transparent',
            background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          <div>
            <ShinyText text="Turn your silent website into a 24/7" speed={5} className="gradient-white-text" />
          </div>
          <div>
            <ShinyText text="Money-Making" speed={5} className="gradient-mask-text" />
            {' '}
            <ShinyText text="Machine that" speed={5} className="gradient-white-text" />
            {' '}
            <ShinyText text="talks!" speed={5} className="gradient-mask-text" />
          </div>
        </div>

        {/* Features Grid - 3 columns, 4 rows with responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4 w-full">
              {/* Placeholder area for video/image */}
              <div className="bg-[#1D1D1D] rounded-[10px] aspect-video flex items-center justify-center border border-gray-950 w-full">
              </div>
              
              <div className="w-full py-5">
                <div style={{ wordSpacing: '3px' }} className="font-medium text-[22.5px] leading-7 w-full">
                  {feature.title}
                </div>
                
                {/* Description */}
                <p className="py-5 subtext1 leading-4 w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <DownArrow/>
    </div>
  );
}