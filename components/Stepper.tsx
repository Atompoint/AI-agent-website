"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ShinyText from "@/components/ui/ShinyText";
import Offer from "@/components/ui/Offer";
import DownArrow from "@/components/ui/DownArrow";

interface Step {
  number: string;
  stepText: string;
  title: string;
  iconSrc: string;         // onlycircle background
  centerIconSrc: string;   // centered icon
  iconAlt: string;
  centerIconAlt: string;
  textColor: string;
}

const steps: Step[] = [
  {
    number: "01",
    stepText: "STEP",
    title: "Enter Your Domain Name And Click Add",
    iconSrc: "/assets/icons/onlycircle.svg",
    centerIconSrc: "/assets/icons/globe1.svg",
    iconAlt: "Circle Background",
    centerIconAlt: "Globe Icon",
    textColor: "text-white",
  },
  {
    number: "02",
    stepText: "STEP",
    title: "Copy And Paste The Code On Your Website",
    iconSrc: "/assets/icons/onlycircle.svg",
    centerIconSrc: "/assets/icons/braces1.svg",
    iconAlt: "Circle Background",
    centerIconAlt: "Code Icon",
    textColor: "text-white",
  },
  {
    number: "03",
    stepText: "STEP",
    title: "Hit The Call Button & Test It Out. You're Done",
    iconSrc: "/assets/icons/onlycircle.svg",
    centerIconSrc: "/assets/icons/call1.svg",
    iconAlt: "Circle Background",
    centerIconAlt: "Call Icon",
    textColor: "text-white",
  },
];

export default function ThreeStepsComponent() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let stepIndex = 0;
          const interval = setInterval(() => {
            setActiveStep((prev) => {
              if (prev < steps.length - 1) return prev + 1;
              clearInterval(interval);
              return prev;
            });
            stepIndex++;
          }, 1000);
        }
      },
      { threshold: 0.4 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-4">
      {/* Heading + Offer + DownArrow */}
      <div className="text-center mb-12">
        <ShinyText text="How It Works" className="text-4xl font-bold text-white" />
        <Offer />
        <DownArrow />
      </div>

      <div className="relative flex justify-between max-w-5xl mx-auto">
        {/* Connector Lines */}
        {steps.slice(0, -1).map((_, i) => (
          <div
            key={i}
            className="absolute top-[38px] flex items-center"
            style={{
              left: `calc(${(i / (steps.length - 1)) * 100}% + 60px)`,
              width: `calc(${(1 / (steps.length - 1)) * 100}% - 120px)`,
            }}
          >
            {/* background gray line */}
            <div className="w-full h-[3px] bg-gray-600 absolute"></div>
            {/* animated purple fill */}
            <motion.div
              className="h-[3px] bg-purple-500 absolute"
              initial={{ width: 0 }}
              animate={{ width: activeStep > i ? "100%" : "0%" }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </div>
        ))}

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-[200px] text-center">
            {/* Number + STEP */}
            <div className="flex flex-col items-center mb-2">
              <span className="text-xs tracking-widest text-gray-300">{step.stepText}</span>
              <span className="relative z-10 text-3xl font-bold text-white bg-black px-2">
                {step.number}
              </span>
            </div>

            {/* Icon with onlycircle background */}
            <div className="relative w-16 h-16 mb-4">
              <Image src={step.iconSrc} alt={step.iconAlt} fill className="object-contain" />
              <Image
                src={step.centerIconSrc}
                alt={step.centerIconAlt}
                width={28}
                height={28}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            {/* Title */}
            <p className="text-sm text-gray-300 leading-snug max-w-[180px]">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
