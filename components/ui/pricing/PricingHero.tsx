import React from 'react';
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image';

const PricingHero: React.FC = () => {
  return (
    <div className="mb-12 sm:mb-16 md:mb-14 lg:mb-20 relative max-w-[1700px] mx-auto  px-2 sm:px-4 lg:px-10 w-full">
      <div className="absolute top-[20rem] sm:top-[25rem] md:top-[28rem] lg:top-[40rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[420px] lg:w-[1200px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/30 via-purple-300/10 to-transparent blur-[60px] sm:blur-[80px] md:blur-[85px] lg:blur-[120px] -z-10" />
      <h1 className="relative text-center z-10 max-w-[283px] sm:max-w-[90%] mx-auto 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 mb-20">
        <div>
          <ShinyText text="Now Is the Time to Turn Your Website Into a" speed={5} className="gradient-white-text inline-block" /> 
        </div>
        <div>
          <ShinyText text="24/7" speed={5} className="gradient-mask-text inline-block" />
          {' '}
          <ShinyText text="Sales Machine" speed={5} className="gradient-white-text inline-block" />
        </div>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full sm:px-12 md:px-25 lg:px-0 2xl:max-w-[1755px] xl:max-w-[1255px] gap-8 xl:gap-20 items-center mx-auto">
        <div className="flex justify-center">
          <Image
            src="/assets/images/section11/sales.png"
            alt="24/7 Sales Machine"
            width={870}
            height={410}
            className="object-contain rounded-[8px] w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px]"
          />
        </div>
        
        <div className="space-y-3 sm:space-y-4 2xl:space-y-5 w-full text-center lg:text-left 2xl:text-[22px] xl:text-[16.27px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] leading-5 2xl:leading-7 font-light">
          <p className="[&_strong]:text-white [&_strong]:font-medium">
            Every minute you <strong>hesitate</strong>, your competitors are <strong>stealing</strong> your customers. While you're thinking about it, qualified buyers are leaving your website to purchase from someone else.
          </p>
          <p className="[&_strong]:text-white [&_strong]:font-medium">
            This is your <strong>moment</strong>. Transform your silent website into an <strong>active sales machine</strong> that never stops working.
          </p>
          <p className="[&_strong]:text-white [&_strong]:font-medium">
            The deal is <strong>insane</strong>:
<br/>
For the <strong>lowest price</strong> ever offered, you get up to <strong>10 Smart AI Voice Agents</strong> working 24/7 across all your websites. Converting visitors while you sleep, vacation, or focus on scaling your business.
          </p>
         
          <p className="[&_strong]:text-white [&_strong]:font-medium">
            This pricing <strong>disappears forever</strong> after launch.
          <br/> Why keep <strong>bleeding money</strong> when you could be capturing every sale instead?
          </p>

          <p className="[&_strong]:text-white [&_strong]:font-medium">
            Your website will either <strong>make you money</strong> or cost you money. There's no middle ground.
         <br/>       Stop letting <strong>competitors win</strong>. Start converting today. </p>
        
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
