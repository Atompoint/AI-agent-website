import React from 'react';
import Image from 'next/image';
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Statistic {
  description: string | React.ReactNode;
  imagePath: string;
}

const STATISTICS: Statistic[] = [
  {
    description: "71% of people use voice assistants to research products before buying (Harvard Business Review)",
    imagePath: "/assets/images/section08/1.png"
  },
  {
    description: "Voice AI market growing at 29.6% annually projected to hit $21.7 billion by 2030",
    imagePath: "/assets/images/section08/2.png"
  },
  {
    description: "Businesses using AI-driven voice technology report 47% faster purchase completion",
    imagePath: "/assets/images/section08/3.png"
  },
  {
    description: "80% of businesses plan to implement voice AI by 2026",
    imagePath: "/assets/images/section08/4.png"
  },
  {
    description: (
      <span>
        Live chat alone increases conversions by 12-20% <strong>imagine what VOICE can do</strong>
      </span>
    ),
    imagePath: "/assets/images/section08/5.png"
  }
];

const FEATURES: Feature[] = [
  {
    title: "Answer Last-Minute Questions That Prevent Sales",
    description: "Visitors can quickly ask about shipping, returns, compatibility, instead of leaving to find answers elsewhere.",
    icon: "/assets/icons/qmark2.svg"
  },
  {
    title: "Qualify Leads Who Are Ready to Engage",
    description: "Your AI gathers visitor information through voice then directs them to your booking page or contact form.",
    icon: "/assets/icons/voice.svg"
  },
  {
    title: "Turn Product Pages Into Personal Shopping Experiences",
    description: "Visitors can ask: \"Which size should I get?\" or \"How does this compare?\" just like talking to a sales associate.",
    icon: "/assets/icons/bag.svg"
  },
  {
    title: "Handle Peak Traffic Without Hiring Extra Staff",
    description: "Unlimited visitors get instant voice answers while your competitors' chat boxes crash or have long wait times.",
    icon: "/assets/icons/gb.svg"
  },
  {
    title: "Help Serious Buyers Get the Information They Need",
    description: "Visitors get detailed explanations to their specific questions that push them over the buying line.",
    icon: "/assets/icons/shake.svg"
  },
  {
    title: "Capture Information From Motivated Prospects",
    description: "Your AI guides engaged visitors to contact forms or lead capture pages after answering their questions.",
    icon: "/assets/icons/cycle.svg"
  },
  {
    title: "Make Complex Products Easy to Understand",
    description: "Visitors can simply ask: \"How does this work?\" or \"Is this right for my situation?\" and get clear answers.",
    icon: "/assets/icons/verified.svg"
  },
  {
    title: "Make Mobile Shopping Easier Than Ever Before",
    description: "Mobile visitors click once and speak their questions instead of typing on small keyboards or forms.",
    icon: "/assets/icons/phone.svg"
  },
  {
    title: "Help Visitors Choose the Right Pricing Plan",
    description: "Visitors describe their needs so your AI can recommend the perfect option and guide them to sign up.",
    icon: "/assets/icons/dollar1.svg"
  }
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <article className="rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 min-h-[200px] w-full flex flex-col gap-4 sm:gap-5">
    <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto sm:mx-0">
      <Image
        src="/assets/icons/onlycircle.svg"
        alt=""
        width={80}
        height={80}
        className="w-full h-full object-contain rotate-alternate"
        priority={index < 3}
      />
      <div className="absolute inset-0 m-auto w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
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
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white leading-snug drop-shadow-lg">
        {feature.title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {feature.description}
      </p>
    </div>
  </article>
);

const StatisticCard: React.FC<{
  statistic: Statistic;
  index: number;
  className?: string;
}> = ({ statistic, index, className = '' }) => (
  <article className={`relative overflow-hidden rounded-xl min-h-[180px] sm:min-h-[200px] md:min-h-[250px] lg:min-h-[300px] flex flex-col ${index === 3 ? 'justify-start' : 'justify-end'} ${className}`}>
    <Image
      src={statistic.imagePath}
      alt=""
      fill
      className={index < 3 ? 'object-contain' : 'object-cover'}
      priority={index < 2}
    />
    <div className="relative z-10 p-5 sm:p-6 md:p-7 lg:p-8">
      <p className="2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[14px] text-white  text-center lg:text-left order-2 text-white font-medium leading-relaxed max-w-md">
        {statistic.description}
      </p>
    </div>
  </article>
);

const Section08: React.FC = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 sm:gap-20 lg:gap-24 xl:gap-28 py-12 sm:py-16 lg:py-20">
        
        {/* Features Section */}
        <section className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-10">
          <header className="text-center">
            <h2 className="Heading2">
              <ShinyText 
                text="Just a Few of the Ways VoiceAgent" 
                speed={5} 
                className="gradient-white-text" 
              />
              <div>
                <ShinyText 
                  text="AI Turns Visitors Into" 
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
            
            <div className="max-w-7xl 2xl:max-w-[1700px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-0">
                {FEATURES.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <header className="text-center">
            <h2 className="Heading2">
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
    
          <div className="max-w-[1700px] mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
              {STATISTICS.slice(0, 3).map((stat, index) => (
                <StatisticCard
                  key={index}
                  statistic={stat}
                  index={index}
                  className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
                />
              ))}

              <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
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
        </section>
      </div>
      
      <DownArrow />
    </div>
  );
};

export default Section08;