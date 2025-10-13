'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import ShinyText from '@/components/ui/ShinyText';
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const CARD_HEIGHT = 500; // Approximate height of each card in pixels
  const CARD_OFFSET = 450; // Reduced space between cards when stacked
  const TOTAL_CARDS = comparisonData.length; // Total number of cards

  return (
    <div className="block lg:hidden bg-black text-white py-10">
      <div className="relative px-4" style={{ minHeight: '20px'}}>
        {comparisonData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                type: 'spring',
                stiffness: 70,
                damping: 22,
                mass: 1.3,
                delay: index * 1.2
              }
            }}
            viewport={{ margin: '-100px 0px -200px 0px', once: false }}
            className={`w-full max-w-md mx-auto border-2 border-white/10 rounded-2xl p-6 overflow-y-auto transition-all duration-300 hover:border-[#BF84F9] hover:bg-gradient-to-br hover:from-[#1F0B46]/10 hover:via-[#DEBFFF]/10 hover:to-[#5A27B1]/10 ${card.bgClass} ${card.borderClass}`}
            style={{
              ...card.shadowStyle,
              height: '350px',
              position: 'sticky',
              top: `${CARD_OFFSET * index}px`,
              zIndex: index + 1,
              marginTop: index > 0 ? `-${CARD_OFFSET * 0.6}px` : '0',
              transform: 'translateY(0px)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(191, 132, 249, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = card.shadowStyle?.boxShadow?.toString() || '0 4px 20px rgba(0, 0, 0, 0.15)';
            }}
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
          </motion.div>
        ))}
      </div>

      {/* "Do Nothing" Card */}
      <motion.div 
        className="w-full px-4 relative"
        style={{ marginTop: `${CARD_HEIGHT * 0.15}px` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-semibold mb-6">
            <ShinyText
              text={doNothingData.title}
              speed={5}
              className="gradient-white-text"
            />
          </h1>
          <div className="grid grid-cols-1 gap-y-2 text-left">
            {doNothingData.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FaArrowRightLong className="text-white text-xs mt-1.5 mr-2 flex-shrink-0" />
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileComparisonCarousel;
