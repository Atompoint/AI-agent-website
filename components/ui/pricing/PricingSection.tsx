import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import PricingPlanCard from '@/components/ui/PricingPlanCard';

interface PricingPlan {
  title: string;
  features: string[];
  backgroundImage: string;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingSectionProps> = ({ title, subtitle, plans }) => {
  return (
    <div className="w-full max-w-6xl 2xl:max-w-[1700px] xl:max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-16">
      <div className="relative text-center z-10 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 mb-12">
        <div>
          <ShinyText text={title} speed={5} className="gradient-white-text" />  
        </div>
        <div>
          <ShinyText text={subtitle} speed={5} className="gradient-mask-text" />  
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:max-w-[1000px] 2xl:max-w-[1410px] sm:max-w-[400px] md:max-w-[800px] mx-auto gap-8 xl:gap-4">
        {plans.map((plan, index) => (
          <PricingPlanCard
            key={index}
            title={plan.title}
            features={plan.features}
            backgroundImage={plan.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
