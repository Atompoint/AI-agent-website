"use client";
import { useEffect, useRef } from "react";
import React from 'react'
import { Button } from "@/components/ui/moving-border";
const Header = () => {
  return (
    
     <div className="absolute inset-0  z-10">
          <div className="absolute inset-x-0 top-0 z-20 flex justify-between items-start px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Logo */}
        <div
          className="text-[32px] sm:text-[48px] lg:text-[40px] leading-tight font-normal capitalize text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(95.14deg, #50525F 4.45%, #FFFFFF 29.02%, #FFFFFF 60.85%, #9698A6 95.61%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Questrial, sans-serif",
          }}
        >
          Voice Ai
        </div>

        {/* Button with Gradient Border */}
        <div className="relative cursor-pointer">
            <Button
        borderRadius="1.75rem"
        className=" dark:bg-slate-900 text-black  dark:text-white text-white dark:border-slate-800"
      >
      Join Now
      </Button>
        </div>
      </div>
     </div>
  )
}

export default Header