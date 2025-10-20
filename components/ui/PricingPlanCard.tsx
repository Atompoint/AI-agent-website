import React from 'react';
import Image from 'next/image';

export interface PricingPlanCardProps {
  title: string;
  features: string[];
  backgroundImage: string;
}

const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ title, features, backgroundImage }) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} Background`}
        fill
        priority
        className="xl:max-w-[500px] 2xl:max-w-[700px]"
      />

      {/* Content Overlay */}
      <div className="relative p-4 sm:p-6 md:p-6 lg:p-8 2xl:p-13">
        <h3 className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 font-semibold text-center md:text-left tracking-[0.5px] mb-5 2xl:mb-10">
          {title}
        </h3>

        <div className="space-y-1.5 sm:space-y-2 md:space-y-4 2xl:space-y-3 ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5">
              <div className="text-green-500 mt-0.5 sm:mt-1 md:mt-0.5 flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 2xl:w-7 2xl:h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 tracking-[0.6px] mt-2 font-light">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
