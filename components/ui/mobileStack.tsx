'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import ShinyText from '@/components/ui/ShinyText';
import { motion, useScroll, useTransform } from 'motion/react';

interface Card {
  id: number;
  title: string;
  icon: string;
  iconAlt: string;
  borderClass: string;
  bgClass: string;
  shadowStyle: React.CSSProperties;
  features: string[];
}

interface DoNothingCard {
  id: number;
  title: string;
  features: string[];
}

interface MobileComparisonCarouselProps {
  comparisonData: Card[];
  doNothingData: DoNothingCard;
}

const MobileComparisonCarousel: React.FC<MobileComparisonCarouselProps> = ({
  comparisonData,
  doNothingData,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="block lg:hidden bg-black text-white">
      <section
        className="relative w-full"
        style={{ height: `${comparisonData.length * 120}vh` }}
      >
        {comparisonData.map((card, i) => {
          const targetScale = 1 - (comparisonData.length - i) * 0.05;
          const scale = useTransform(scrollYProgress, [i * 0.2, 1], [1, targetScale]);

          return (
            <motion.div
              key={card.id}
              style={{ scale, zIndex: comparisonData.length - i }}
              className="sticky top-0 flex justify-center items-center h-screen"
            >
              <div
                className={`w-full max-w-md mx-auto border ${card.bgClass} ${card.borderClass} rounded-xl p-6`}
                style={card.shadowStyle}
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-3">
                    <Image
                      src={card.icon}
                      alt={card.iconAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <ShinyText
                    text={card.title}
                    speed={5}
                    className="text-lg font-bold"
                  />
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm leading-relaxed"
                    >
                      <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* “Do Nothing” Card */}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-6">
            <ShinyText
              text={doNothingData.title}
              speed={5}
              className="gradient-white-text"
            />
          </h1>
          <div className="grid grid-cols-1 gap-y-2 max-w-md mx-auto text-left">
            {doNothingData.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileComparisonCarousel;
