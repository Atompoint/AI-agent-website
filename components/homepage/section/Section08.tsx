import React from 'react';
import DownArrow from '../../ui/DownArrow';
import FeaturesSection from '../../ui/stats/FeaturesSection';
import StatisticsSection from '../../ui/stats/StatisticsSection';

const Section08: React.FC = () => {
  return (
    <>
      <div className="w-full bg-transparent">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-16 sm:gap-20 lg:gap-24 xl:gap-20">
          <FeaturesSection />
          <StatisticsSection />
        </div>
      </div>
      <DownArrow />
    </>
  );
};

export default Section08;