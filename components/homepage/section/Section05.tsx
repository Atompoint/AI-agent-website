'use client'
import React, { useState } from "react";
import Image from "next/image";
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";
 
const Section05: React.FC = () => {
  const [isVideo1Playing, setIsVideo1Playing] = useState(false);
  const [isVideo2Playing, setIsVideo2Playing] = useState(false);

  // Demo section
  const demoSection = {
    mainImage: "/assets/images/main1.png",
    playIcon: "/assets/images/play.png",
    playIcon1: "/assets/icons/play1.svg"
    
  };

  const handleVideo1Play = () => {
    setIsVideo1Playing(true);
  };

  const handleVideo2Play = () => {
    setIsVideo2Playing(true);
  };

  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[80px] sm:blur-[100px] -z-10" />
       
      <div className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 relative z-10">
        {/* Header */}
        <h1
          className="relative text-center max-w-[358px] sm:max-w-[600px] md:max-w-5xl lg:max-w-[880px] 2xl:max-w-7xl mx-auto items-center z-10 mt-8 Heading2 "
         
        >
          <div className="flex flex-col 2xl:text-[60px]   xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 gap-1 sm:leading-8">
            <div>
              <ShinyText text="Forget everything you know about website chat boxes, pop-ups, and static FAQ pages" speed={5} className="gradient-white-text" />
            
            
              <ShinyText text="This is different. This is" speed={5} className="gradient-white-text inline-block" />
             {' '}
              <ShinyText text="REVOLUTIONARY" speed={5} className="gradient-mask-text inline-block" />
            </div>
           </div>
        </h1> 

        <div className="flex justify-center w-full pt-12 sm:pt-16 lg:pt-20 2xl:pt-24">
          <div className="w-full xl:max-w-[1250px] 2xl:max-w-[1755px] ">
            {/* First Row - Text left, Video right */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 2xl:gap-10 w-full xl:max-w-[1250px] 2xl:max-w-[1755px] items-center">
              {/* Text Left */}
              <div 
            
              
              className="leading-5 w-full 2xl:text-[22px] xl:text-[16.27px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] sm:max-w-[500px] lg:max-w-[405px] xl:max-w-[540px] 2xl:max-w-[740px] text-sm sm:text-base lg:text-lg 2xl:text-xl 2xl:leading-7  text-center lg:text-left order-2 lg:order-1">
                <p className="text-white font-semibold">
                  VoiceAgent AI is the world's first conversational website assistant
                  that your visitors can actually TALK to just like they're calling your
                  business directly.
                </p>

                <p className="py-5 font-normal 2xl:leading-16">
                  But here's where it gets incredible...
                </p>
                <p className='font-normal'>
                  Not only does it respond with human-like speech in real-time, it can
                  actually <span className='font-medium'>NAVIGATE </span>your website while talking to your visitors, showing
                  them exactly what they need to see, when they need to see it.
                </p>
              </div>

              {/* Video Right */}
              <div className="bg-black rounded-[10px] w-full max-w-[460px] sm:max-w-[550px] lg:max-w-[600px] xl:max-w-[650px] 2xl:w-[716px] h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-80 flex items-center justify-center relative overflow-hidden order-1 lg:order-2">
                <video
                  className="w-full h-full object-cover rounded-[10px]"
                  src="/assets/videos/web1.mp4"
                  controls={isVideo1Playing}
                  muted
                  playsInline
                  onPlay={handleVideo1Play}
                />
                {!isVideo1Playing && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                       onClick={() => {
                         const video = document.querySelector('video[src="/assets/videos/web1.mp4"]') as HTMLVideoElement;
                         if (video) {
                           video.play();
                           setIsVideo1Playing(true);
                         }
                       }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/30 rounded-full blur-sm transform scale-110"></div>
                      <Image
                        src={demoSection.playIcon1}
                        width={60}
                        height={60}
                        alt="play button"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200 relative z-10 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Second Row - Video left, Text right */}
            <div className="flex flex-col lg:grid justify-items-end lg:grid-cols-2 items-center mt-12 sm:mt-14 lg:mt-16 gap-6  2xl:gap-10">
              {/* Video Left */}
              <div className="bg-black rounded-[10px] w-full max-w-[460px] sm:max-w-[550px] lg:max-w-[600px] xl:max-w-[650px] 2xl:w-[716px] h-48 sm:h-56 lg:h-64 xl:h-72 2xl:h-80 flex items-center justify-center relative overflow-hidden order-1">
                <video
                  className="w-full h-full object-cover rounded-[10px]"
                  src="/assets/videos/web2.mp4"
                  controls={isVideo2Playing}
                  muted
                  playsInline
                  onPlay={handleVideo2Play}
                />
                {!isVideo2Playing && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                       onClick={() => {
                         const video = document.querySelector('video[src="/assets/videos/web2.mp4"]') as HTMLVideoElement;
                         if (video) {
                           video.play();
                           setIsVideo2Playing(true);
                         }
                       }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-black/30 rounded-full blur-sm transform scale-110"></div>
                      <Image
                        src={demoSection.playIcon1}
                        width={60}
                        height={60}
                        alt="play button"
                        className="cursor-pointer hover:scale-110 transition-transform duration-200 relative z-10 drop-shadow-2xl"
                      />
                    </div>
                  </div>
                )}
              </div>
             
              {/* Text Right */}
              <div className="leading-5 w-full sm:max-w-[500px] lg:max-w-[405px] xl:max-w-[500px] 2xl:max-w-[740px]  2xl:text-[22px] xl:text-[16px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] 2xl:leading-7  text-center lg:text-left order-2 lg:order-2">
                <p>
                  Imagine having your best person available 24/7, who knows every page
                  of your website by heart, never takes a day off, never gets tired, and
                  can handle unlimited customers simultaneously.
                </p>
                <p className="text-white font-semibold leading-5 py-5">
                  That's exactly what you get with VoiceAgent AI.
                </p>
              </div>
            </div>

          </div>
        </div> 

      </div>

      {/* Demo Section Header */}
      <div
        className="relative text-center z-10 pt-8 pb-5 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 sm:pt-16 lg:pt-20 2xl:pt-24 Heading2"
       
      >
        <div>
          <ShinyText text="Watch The" speed={5} className="gradient-white-text inline-block" />
          {' '}
          <ShinyText text="Demo" speed={5} className="gradient-mask-text inline-block" />
        </div >
      </div>  

      {/* Image Container with Glow Effect */}
      <div className="relative max-w-[900px] 2xl:max-w-[1100px] m-auto mt-8 2xl:mt-12 px-4">
        {/* Glow Image - positioned behind main image */}
        <div className="absolute top-[0%] lg:top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-20 blur-[80px] sm:blur-[100px] -z-10" />
        
        {/* Main Image with Shine Border */}
        <div className="relative rounded-2xl overflow-hidden z-10 p-0.5 w-full">
          <ShineBorder
            borderWidth={2}
            duration={23}
            shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
            className="absolute inset-0 rounded-2xl pointer-events-none"
          />
          <Image
            src="/assets/images/main1.png"
            width={1400}
            height={1050}
            alt="product web image"
            className="object-contain w-full h-auto relative z-10 rounded-2xl"
            priority
          />
        </div>
         
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative">
            {/* Play button background circle for better visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-full blur-sm transform scale-110"></div>
            <Image
              src={demoSection.playIcon}
              width={150}
              height={150}
              alt="play button"
              className="cursor-pointer hover:scale-110 transition-transform duration-200 relative z-10 drop-shadow-2xl w-[80px] sm:w-[120px] lg:w-[150px] h-auto"
            />
          </div>
        </div>
      </div>
      
      <DownArrow />
    </div>
  ); 
}; 

export default Section05;