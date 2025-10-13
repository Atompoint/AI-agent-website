import React from 'react';
import Image from 'next/image';
import { Feature } from './types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
  <article className="grid grid-cols-1 gap-4 sm:gap-5 p-6 xl:gap-6 rounded-lg min-h-[200px] md:mt-10 w-full">
    <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-[62px] xl:h-[62px] 2xl:w-[87px] 2xl:h-[87px] mx-auto sm:mx-0">
      <Image
        src="/assets/icons/onlycircle.svg"
        alt=""
        width={80}
        height={80}
        className="w-full h-full object-contain rotate-alternate"
        priority={index < 3}
      />
      <div className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 xl:w-[31px] xl:h-[31px] 2xl:w-[42px] 2xl:h-[42px] flex items-center justify-center">
        <Image
          src={feature.icon}
          alt=""
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    <div className="w-full text-center sm:text-left flex flex-col gap-3">
      <h3 className="font-semibold text-white 2xl:text-[23px] xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-7 w-full">
        {feature.title}
      </h3>
      <p className="text-[#C4C4C4] md:mt-4 leading-5 2xl:text-[23px] xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] 2xl:leading-7">
        {feature.description}
      </p>
    </div>
  </article>
);

export default FeatureCard;
