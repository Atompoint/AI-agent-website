import React from 'react';
import { ShineBorder } from "@/components/magicui/shine-border";
import ComparisonIcon from './ComparisonIcon';

interface ComparisonColumnProps {
  title: string;
  items: string[];
  isPositive: boolean;
}

const ComparisonColumn: React.FC<ComparisonColumnProps> = ({ title, items, isPositive }) => {
  const iconColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className="relative w-full h-full max-w-[390px] sm:max-w-[400px] xl:max-w-[525px] 2xl:max-w-[735px] 2xl:max-h-[683px] rounded-lg overflow-hidden mx-auto">
      <ShineBorder
        borderWidth={2}
        duration={23}
        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        className="absolute inset-0 rounded-2xl pointer-events-none"
      />

      <div className="relative flex flex-col p-4 sm:p-6 md:p-6 lg:p-8 h-full gap-3 sm:gap-4 lg:gap-6">
        <h3 className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 font-semibold text-center md:text-left">
          {title}
        </h3>

        <div className="flex flex-col gap-2 sm:gap-2.5 flex-1">
          {items.map((item: string, index: number) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5">
              <div className={`${iconColor} flex-shrink-0`}>
                <ComparisonIcon isPositive={isPositive} />
              </div>
              <span className="2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-7 font-light">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonColumn;
