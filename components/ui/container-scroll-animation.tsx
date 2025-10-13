"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
     offset: ["start end", "start 50px"]
 // Better scroll detection
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(1366);

  React.useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setScreenWidth(width);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    if (isMobile) return [0.7, 0.9];
    
    // Responsive scale based on screen width
    if (screenWidth <= 1024) return [0.9, 1];
    if (screenWidth <= 1366) return [1.05, 1];
    if (screenWidth <= 1920) return [1, 1.3];
    return [1.15, 1]; // For very large screens
  };

  // More responsive rotation values
  const getRotationRange = () => {
    if (isMobile) return [15, 0];
    if (screenWidth <= 1024) return [18, 0];
    if (screenWidth <= 1366) return [20, 0];
    if (screenWidth <= 1920) return [22, 0];
    return [25, 0]; // For very large screens
  };

  // Responsive translation values
  const getTranslationRange = () => {
    if (isMobile) return [0, -50];
    if (screenWidth <= 1024) return [0, -70];
    if (screenWidth <= 1366) return [0, -100];
    if (screenWidth <= 1920) return [0, -120];
    return [0, -140]; // For very large screens
  };

  const rotate = useTransform(scrollYProgress, [0, 1], getRotationRange());
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], getTranslationRange());

  return (
    <div
      className="relative p-2 md:p-5 lg:p-10 xl:p-15 2xl:p-20"
      ref={containerRef}
     
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        y: translate, // Use y instead of translateY for better performance
        transformOrigin: "center center",
        backfaceVisibility: "hidden", // Improve performance
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl mx-auto w-full 
                 border-4 border-[#6C6C6C] rounded-[18px] sm:rounded-[30px] shadow-2xl overflow-hidden
                 will-change-transform" // Optimize for transforms
    >
      {children}
    </motion.div>
  );
};