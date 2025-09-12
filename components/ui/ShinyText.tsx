import React, { ReactNode } from "react";

interface ShinyTextProps {
  text?: string;
  children?: ReactNode;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  children,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const content = children || text || '';
  
  if (disabled) {
    return (
      <div className={`text-[#b5b5b5a4] inline-block ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <div className={`relative inline-block pb-2 ${className}`}>
      {/* Base text */}
      <div className="text-[#b5b5b5a4]">
        {content}
      </div>
      
      {/* Animated shine overlay */}
      <div
        className="absolute inset-0 text-white pb-2"
        style={{
          background: "linear-gradient(120deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: `shine ${speed}s linear infinite`,
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default ShinyText;