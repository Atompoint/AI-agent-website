"use client"
import React, { useEffect, useRef, useState } from "react";
import DownArrow from "@/components/ui/DownArrow";
import Threads from '@/components/ui/Threads';
import ShinyText from '@/components/ui/ShinyText';

const Section02 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    {
      title: "67% Of Your Website Visitors Leave Within 10 Seconds... And Take Their Money With Them",
      description: [
        "Every single day, qualified prospects land on your website ready to buy. But within seconds, they're confused, frustrated, and clicking the back button. They can't find the information they need. ",
        "They don't know where to go next. So they leave... and buy from your competitor instead. While you sleep, eat, and live your life, potential customers are abandoning your website every few minutes. That's money walking out the door 24/7."
      ]
    },
    {
      title: "While You Sleep, Your Competitors Are Stealing Your Customers.",
      description: [
        "It's 2 AM and someone visits your website ready to make a purchase. They have one simple question. But there's nobody there to answer it. So they leave and find a competitor who CAN help them right now. ",
        "You wake up the next morning having no idea you just lost a $500, $1000, or even $5000 sale while you were dreaming. This happens every single night. Your business is bleeding money during the 16 hours a day you're not actively monitoring your website."
      ]
    },
    {
      title: "Live Chat Tools Are Bleeding Your Business Dry... And They Don't Even Work",
      description: [
        "You're paying $200+ per month for live chat software that forces your visitors into frustrating typing marathons. They ask a question, wait for a response, then type another message trying to clarify. ",
        "Back and forth, back and forth. They're going in circles, getting more confused with each exchange. They can't explain what they really need through text. Meanwhile, you're paying premium prices for a 'solution' that creates more friction than it solves. Your visitors give up mid-conversation and leave to find a competitor who actually makes it easy to get help."
      ]
    },
    {
      title: "Building A Customer Service Team Costs A Fortune... And You Need Multiple People For Round-The-Clock Coverage",
      description: [
        "Want 24/7 customer service? You'll need multiple full-time employees to cover all shifts around the clock. That's substantial monthly salaries for each person. Add training costs, management overhead, sick leave coverage and workspace expenses. ",
        "The numbers add up fast - and that's just to have someone available to answer basic questions. When employees inevitably leave? You're back to square one Meanwhile, your costs keep climbing while you struggle to maintain consistent coverage."
      ]
    },
    {
      title: "Most AI Tools Promise Easy Setup... Then Waste Weeks Of Your Time",
      description: [
        "You sign up excited, thinking you'll be up and running in minutes. Instead, you spend hours uploading documents, training the AI, writing FAQs, configuring settings. Days turn into weeks",
        "You're pulling your hair out trying to make it work while your website continues bleeding visitors. By the time it's 'ready,' you've wasted 40+ hours!"
      ]
    },
    {
      title: "Every Unanswered Question Is A Lost Sale... And You're Losing Dozens Daily",
      description: [
        "Your visitor is 90% ready to buy. They just need to know about shipping times, return policies, or technical specs. It's a simple question that would take 30 seconds to answer. But there's no way for them to get that answer quickly. ",
        "So they leave 'to think about it' and never come back. You had them RIGHT at the buying moment... and lost them over something that could have been solved instantly. This isn't happening once a week. It's happening multiple times every single day"
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Show threads when 10% of section is visible
        rootMargin: '-10% 0px -10% 0px' // Add some margin for better UX
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Fixed Threads Background - with smooth fade transition */}
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-0 pointer-events-none transition-opacity duration-10 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Threads
          amplitude={1}
          distance={0.2}
          enableMouseInteraction={false}
        />
      </div>
      
      <div ref={sectionRef} className="space-y-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative z-10 flex gap-15 text-white justify-center items-center p-4 rounded-xl ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="w-[400px] h-[400px] flex flex-col items-center justify-center text-center md:text-left">
              <div className="text-2xl text-white font-bold mb-8">
                <ShinyText text={`${section.title}`} disabled={false} speed={6} />
              </div>
              <div className="text-sm space-y-3">
                {section.description.map((paragraph, paragraphIndex) => (
                  <div key={paragraphIndex} className="text-sm leading-relaxed">
                    {paragraph}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="h-[400px] w-[450px] rounded-2xl bg-gray-500 bg-opacity-30 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <span className="text-xl"></span>
            </div>
          </div>
        ))}
        <div className="relative z-10">
          <DownArrow />
        </div>
      </div>
    </>
  );
};

export default Section02;