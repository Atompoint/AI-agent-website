import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MessageCircle, Bot, Mic } from 'lucide-react';
import Image from "next/image";
import DownArrow from "./DownArrow";
import Gradient from "@/public/grad2.png"

const Section03 = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6">
    
        {/* Spotlight Images */}
      

 
        
      <div className="relative w-full max-w-6xl mx-auto bg-transparent rounded-3xl p-8 md:p-12 overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        {/* Main headline */}
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">
            Why <span className="text-purple-400">Business Owners</span> Are Ditching<br />
            Expensive Alternatives for <span className="text-purple-400">VoiceAgent</span> AI
          </h1>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Traditional Live Chat */}
          <div className="text-center p-6 rounded-2xl relative overflow-hidden">
            {/* Background gradient */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-10"
              style={{
                background: 'linear-gradient(135deg, #704DEF 0%, #704DEF00 100%)'
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-400 mb-6">
                <MessageCircle className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-white text-lg mb-6">Traditional Live Chat</h3>
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Limited hours during business hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Costly investments in human resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Slow response times when busy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Requires hiring and training staff</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Can easily be overwhelmed during peak times</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Chatbots */}
          <div className="text-center p-6 rounded-2xl relative overflow-hidden">
            {/* Background gradient */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-10"
              style={{
                background: 'linear-gradient(135deg, #704DEF 0%, #704DEF00 100%)'
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-400 mb-6">
                <Bot className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-white text-lg mb-6">Third-Party Chatbots</h3>
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Often misunderstand complex questions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Generic canned responses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Monthly subscriptions keep adding up</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Lack contextual understanding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">High maintenance and setup costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* VoiceAgent AI */}
          <div className="text-center p-6 rounded-2xl relative overflow-hidden">
            {/* Background gradient */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-10"
              style={{
                background: 'linear-gradient(135deg, #704DEF 0%, #704DEF00 100%)'
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-purple-400 mb-6">
                <Mic className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white text-lg mb-6">VoiceAgent AI</h3>
              <div className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Works 24/7 without bathroom breaks</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Human-like AI empathy and intelligence</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Instant responses, every single time</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Scales infinitely with your business</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">One-off setup with unlimited advantages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div 
      className="m-auto flex flex-col  justify-center mt-2 rounded-2xl relative overflow-hidden"
      style={{
        height: '400px',
        width: '400px',
        background: 'linear-gradient(131.11deg, #1F0B46 -22.43%, #DEBFFF 5.05%, #D6BEFF 37.61%, #BF84F9 76.29%)'
      }}
    >
      {/* Logo at the top */}
      <div className="absolute top-8 left-14 w-24 h-24">
        <Image 
          src="/nonlog.png" 
          alt="Logo" 
          width={56} 
          height={56} 
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center px-8 z-10 mt-20">
        {/* Header */}
        <h2 className="text-3xl  text-black text-left  font-bold mb-6">
          <span>Do Nothing </span>
          <span >(Current Situation)</span>
        </h2>

        {/* List Items */}
        <ul className="space-y-4 text-left">
          <li className="flex  items-start">
            <div className="flex-shrink-0 h-2 items-center w-2 rounded-full bg-black bg-opacity-20 border border-black mr-3 mt-1"></div>
            <p >67% of visitors leave without buying</p>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 h-2 items-center w-2 rounded-full bg-black bg-opacity-20 border border-black mr-3 mt-1"></div>
            <p >No way to overcome objections</p>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 h-2 items-center w-2 rounded-full bg-black bg-opacity-20 border border-black mr-3 mt-1"></div>
            <p >Missing sales 24/7</p>
          </li>
          
          <li className="flex items-start">
            <div className="flex-shrink-0 h-2 items-center w-2 rounded-full bg-black bg-opacity-20 border border-black mr-3 mt-1"></div>
            <p >Competitors who adapt will crush you</p>
          </li>
        </ul>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full filter blur-[60px]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 rounded-full filter blur-[60px]"></div>
      </div>
    </div>
        
      </div>
    </div>
     <div 
      className="relative w-full max-w-6xl mx-auto rounded-3xl p-8 md:p-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Gradient.src})`
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Main headline */}
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6">
          But what if I told you there's now a<br />
          way to have a tireless smart voice<br />
          agent on your website 24/7! 👀
        </h1>
        
        {/* Supporting text */}
        <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-4xl mx-auto">
          Ready to answer every question, handle every objection, and guide every visitor straight to your checkout page
        </p>
      </div>

    </div>
    <DownArrow/>
    </div>
  );
};

export default Section03;