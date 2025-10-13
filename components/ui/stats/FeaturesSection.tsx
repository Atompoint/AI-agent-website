import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import FeatureCard from './FeatureCard';
import { FEATURES } from './types';

const FeaturesSection: React.FC = () => (
  <section>
    <header className="text-center">
      <h2 className="2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] max-w-[341px] sm:max-w-[1200px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[900px] w-full leading-7 lg:leading-12 md:leading-8 mx-auto 2xl:leading-17 Heading2">
       
        <ShinyText 
          text="Just a Few of the Ways VoiceAgent" 
          speed={5} 
          className="gradient-white-text" 
        />
        <div>
          <ShinyText 
            text="Turns Visitors Into" 
            speed={5} 
            className="gradient-white-text inline-block" 
          />
          {' '}
          <ShinyText 
            text="Customers" 
            speed={5} 
            className="gradient-mask-text inline-block" 
          />
        </div>
      </h2>
    </header>
    
    <div className="relative">
      <div 
        className="absolute top-20 md:top-32 lg:top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-square rounded-full bg-gradient-to-br from-purple-500/10 via-purple-300/10 to-transparent blur-3xl md:blur-[100px] -z-10"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl 2xl:max-w-[1800px] mt-5 md:mt-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-44 2xl:gap-x-50">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
