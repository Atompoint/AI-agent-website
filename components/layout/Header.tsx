'use client';
import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const keyframes = `
    @keyframes shine {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <span
        className={className}
        style={{
          background: "linear-gradient(120deg, #b5b5b5a4 30%, rgba(255, 255, 255, 0.9) 50%, #b5b5b5a4 70%)",
          backgroundSize: "200% 100%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: disabled ? "none" : `shine ${speed}s linear infinite`,
          display: "inline-block",
        }}
      >
        {text}
      </span>
    </>
  );
};

const Header = () => {
  
  return (
    <header className="w-full h-auto flex justify-between items-center px-16 py-6 relative z-10 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="text-[25px] leading-tight font-medium font-logo capitalize ">
        <ShinyText text="Voice Ai" disabled={false} speed={6}  />
      </div>
      {/* Shimmer Button */}
      <div className="relative w-[105px] h-[30px] rounded-full overflow-hidden">
        {/* Actual Button */}
        <button className="w-full h-full  text-[13px] font-semibold z-10 relative rounded-full">
          <ShinyText text="Join Now" disabled={false} speed={3} className='custom-class' />
        </button>

        {/* Shimmer Border */}
        <ShineBorder
          borderWidth={2}
          duration={6}
          shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        />
      </div>
    </header>
  );
};

export default Header;