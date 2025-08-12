import React from "react";

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
  if (disabled) {
    return (
      <div className={`text-[#b5b5b5a4] inline-block ${className}`}>
        {text}
      </div>
    );
  }

  return (
    <div className={`relative inline-block py-4 ${className}`}>
      {/* Base text */}
      <div className="text-[#b5b5b5a4]">
        {text}
      </div>
      
      {/* Animated shine overlay */}
      <div
        className="absolute inset-0 text-white py-4"
        style={{
          background: "linear-gradient(120deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          animation: `shine ${speed}s linear infinite`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ShinyText;