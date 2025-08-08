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
   
  <div className="absolute top-[20rem] right-[3px] -translate-x-1/2 -translate-y-1/2 w-[430px] h-[1200px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-25 blur-[200px] rotate-[-40deg] -z-10" />
      

 <h2 className="m-auto py-2 leading-tight text-center ">
             
             <ShinyText
               text="The entire setup takes less than 60 seconds. No technical skills
    "
               disabled={false}
               speed={6}
               className="font-radio text-[35px] font-normal"
             />
           
             {/* Second Line - With Gradient Text */}
             <ShinyText
               text="required. No content creation needed. No ongoing maintenance."
               disabled={false}
               speed={6}
               className="font-radio text-[35px] font-normal"
             />
             
           </h2>



           <div className="absolute left-1/2 bottom-[-15px] w-[600px] h-[4.3px] 
  bg-gradient-to-r 
  from-transparent via-purple-300 to-transparent 
  bg-[length:100%_100%] bg-no-repeat 
  -translate-x-1/2">
</div>


  </div>

   <div className="container mx-auto px-6  ">
        <div className="text-center py-20">
        


        <h2
  className="relative font-radio mt-20 leading-[1.05] "
  style={{
    textTransform: 'capitalize',
    color: 'transparent',
    background:
      'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>
  <div >
    <ShinyText text="Turn your silent website into a 24/7" speed={5} className="Heading" />
  </div>
  <div >
    <ShinyText text="Money-Making" speed={5} className="Heading gradient-mask-text" />
    {' '}
    <ShinyText text="Machine" speed={5} className="Heading" />
    {' '}
    <ShinyText text="That Talks!" speed={5} className="Heading gradient-mask-text" />
  </div>
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