import React from "react";
import DownArrow from "./DownArrow";
export default function Section07() {
   const features = [
    {
      title: "Real Voice Conversations That Replace Frustrating Text Chat",
      description: "Your visitors can actually talk to your website like they're calling your business - no more typing back and forth or waiting for responses.",
      placeholder: "Voice Demo"
    },
    {
      title: "Automatically Learns Your Entire Website Without Training", 
      description: "The moment you install it, your AI instantly memorizes every product, service, and page on your site with zero setup work from you.",
      placeholder: "AI Learning"
    },
    {
      title: "60-Second Setup With Just One Line of Code",
      description: "Simply copy and paste one line of code and your website instantly becomes interactive - no technical skills or complicated configuration required.",
      placeholder: "Setup Guide"
    },
    {
      title: "24/7 Sales Agent That Never Sleeps",
      description: "Your AI sales agent works around the clock, qualifying leads and converting visitors even when you're sleeping or on vacation.",
      placeholder: "Sales Analytics"
    },
    {
      title: "Instant Customer Support Without Hiring Staff",
      description: "Provide immediate answers to customer questions, resolve issues, and handle support tickets without expanding your team.",
      placeholder: "Support Demo"
    },
    {
      title: "Lead Qualification on Autopilot",
      description: "Automatically identify high-value prospects, collect contact information, and schedule appointments without lifting a finger.",
      placeholder: "Lead Dashboard"
    },
    {
      title: "Multi-Language Support for Global Reach",
      description: "Speak with customers in over 50 languages, breaking down barriers and expanding your market reach internationally.",
      placeholder: "Language Demo"
    },
    {
      title: "Smart Appointment Booking System",
      description: "Let visitors schedule meetings directly through voice conversation, with automatic calendar integration and reminder emails.",
      placeholder: "Calendar Preview"
    },
    {
      title: "Real-Time Analytics & Insights",
      description: "Track conversation quality, conversion rates, and customer satisfaction with detailed reports and actionable insights.",
      placeholder: "Analytics Chart"
    },
    {
      title: "Custom Voice & Personality Training",
      description: "Train your AI to match your brand's tone, personality, and communication style for authentic customer interactions.",
      placeholder: "Voice Training"
    },
    {
      title: "CRM Integration & Data Sync",
      description: "Seamlessly connect with your existing CRM, email marketing tools, and sales platforms for unified customer management.",
      placeholder: "Integration Map"
    },
    {
      title: "Advanced Security & Privacy Protection",
      description: "Enterprise-grade encryption, GDPR compliance, and secure data handling to protect your business and customer information.",
      placeholder: "Security Shield"
    }
  ];

  return (
   <div className=" bg-black flex flex-col items-center mb-10 justify-center px-4">
  <div className="text-center relative">
    <p className="text-2xl text-white/90 font-light max-w-3xl leading-relaxed">
      The entire <strong className="font-medium">setup takes less than 60 seconds.</strong> No technical skills
      required. <strong className="font-medium">No content creation needed.</strong> No ongoing maintenance.
    </p>

    {/* Glowing Border Underline */}
    <div className="absolute left-1/2 bottom-[-14px] w-[250px] h-[3px] rounded-full bg-gradient-to-r from-purple-500/20 via-purple-300 to-purple-500/20 -translate-x-1/2"></div>
  </div>

   <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl gradient-white-text mb-4 max-w-6xl mx-auto leading-tight">
            Turn Your Silent Website Into a 24/7{" "}
            <span className="gradient-mask-text">
              Money-Making Machine
            </span>{" "}
            That{" "}
            <span className="gradient-mask-text">
              Talks!
            </span>
          </h1>
        </div>

        {/* Features Grid - 3 columns, 4 rows */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Placeholder area for video/image */}
              <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center border border-gray-700">
                <span className="text-gray-500 text-sm">{feature.placeholder}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-white text-lg leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
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