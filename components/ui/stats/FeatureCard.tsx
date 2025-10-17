import React from 'react';
import Image from 'next/image';
import { Feature } from './types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
  <article className="grid grid-cols-1 gap-4 sm:gap-5 p-6 xl:gap-6 rounded-lg min-h-[200px] md:mt-10 w-full">
    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-[98px] 2xl:h-[98px] mx-auto sm:mx-0 flex items-center justify-center">
      <Image
        src={feature.icon}
        alt=""
        width={128}
        height={128}
        className="w-full h-full object-contain"
        priority={index < 3}
      />
    </div>

    <div className="w-full text-center sm:text-left flex flex-col gap-3">
      <h3 className="font-bold gradient-text 2xl:text-[23px] xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-7 w-full">
        {feature.title}
      </h3>
      <p className="text-[#C4C4C4] md:mt-4 leading-5 2xl:text-[23px] xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] 2xl:leading-7">
        {feature.description}
      </p>
    </div>
  </article>
);

export default FeatureCard;
