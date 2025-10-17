import React from 'react';
import Image from 'next/image';
import { Statistic } from './types';

interface StatisticCardProps {
  statistic: Statistic;
  index: number;
  className?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ 
  statistic, 
  index, 
  className = '' 
}) => (
  <article className={`relative rounded-xl overflow-visible ${className}`}>
    <div className="relative w-full">
      <div className="relative w-full">
        <Image
          src={statistic.imagePath}
          alt=""
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          sizes="(max-width: 1279px) 100vw, 100%"
          priority
        />
      </div>
      <div className="absolute inset-0 p-5 sm:p-6 md:p-7 lg:p-8 ">
        <div className={`relative z-10 h-full ${typeof statistic.description === 'string' ? 'flex items-end' : 'block'}`}>
          {typeof statistic.description === 'string' ? (
            <p className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-4  lg:leading-5 xl:leading-6 font-normal text-white max-w-md">
              {statistic.description}
            </p>
          ) : (
            <div className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-4  lg:leading-5 xl:leading-6 font-normal text-white">
              {statistic.description}
            </div>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default StatisticCard;
