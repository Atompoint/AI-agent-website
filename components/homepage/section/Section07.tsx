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
   <div className=" flex flex-col items-center justify-center px-4">
  <div className="text-center relative">
   


 <h2 className="m-auto  leading-tight text-center ">
             {/* First Line - Normal Text */}
             <ShinyText
               text="The entire setup takes less than 60 seconds. No technical skills
    "
               disabled={false}
               speed={6}
               className="font-radio text-[34px] font-normal"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="required. No content creation needed. No ongoing maintenance."
               disabled={false}
               speed={6}
               className="font-radio text-[34px] font-normal"
             />
             
           </h2>


    {/* Glowing Border Underline */}
    <div className="absolute left-1/2 bottom-[-20px] w-[550px] h-[4px] rounded-full bg-gradient-to-r from-purple-500/20 via-purple-300 to-purple-500/20 -translate-x-1/2"></div>
  </div>

   <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
        


           <h2 className="m-auto max-w-[700px] leading-tight text-center mx-auto mt-10 mb-8">
             {/* First Line - Normal Text */}
             <ShinyText
               text="Turn Your Silent Website Into a 24/7"
               disabled={false}
               speed={6}
               className="Heading"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="Money-Making Machine That Talks!"
               disabled={false}
               speed={6}
               className="Heading"
             />
            
           </h2>


        </div>

        {/* Features Grid - 3 columns, 4 rows */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {/* Placeholder area for video/image */}
              <div className="bg-[#1D1D1D] rounded-[10px] aspect-video flex items-center justify-center border border-gray-950">
              
              </div>
              
              <div className="w-[340px] py-5 font-medium">
                <h3 className="text-white text-[22px] w-80 leading-7">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/90 py-5 text-[12px] leading-relaxed">
                 {feature.description}
              </p></div>
              
            </div>
          ))}
        </div>


      </div>
      <DownArrow/>
</div>

  );
}