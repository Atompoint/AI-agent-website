import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import StatisticCard from './StatisticCard';
import { STATISTICS } from './types';

const StatisticsSection: React.FC = () => (
  <section className="w-full flex flex-col gap-5">
    <header className="text-center">
      <h2 className="2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2">
        <ShinyText 
          text="The Numbers Don't Lie" 
          speed={5} 
          className="gradient-white-text" 
        />
        <div>
          <ShinyText 
            text="Voice AI Is " 
            speed={5} 
            className="gradient-white-text inline-block" 
          />
          {' '}
          <ShinyText 
            text="Dominating" 
            speed={5} 
            className="gradient-mask-text inline-block" 
          />
        </div>
      </h2>
    </header>
<div className='w-full py-20 bg-white/2'>
    <div className="max-w-[1750px] px-4 md:px-10 xl:px-15 lg:px-10 2xl:px-0 mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-4 2xl:gap-6">
        {STATISTICS.slice(0, 3).map((stat, index) => (
          <StatisticCard
            key={index}
            statistic={stat}
            index={index}
            className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
          />
        ))}

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-4 2xl:gap-6">
          <StatisticCard
            statistic={STATISTICS[3]}
            index={3}
          />
          <StatisticCard
            statistic={STATISTICS[4]}
            index={4}
          />
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default StatisticsSection;
