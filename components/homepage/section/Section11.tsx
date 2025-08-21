import React from 'react'
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'

// Type definitions
interface PricingPlan {
  title: string;
  features: string[];
  backgroundImage: string;
}

interface HeroContent {
 
  description: string[];
}

interface PricingPlanProps extends PricingPlan {}

interface HeroSectionProps extends HeroContent {}

// Reusable PricingPlan component
const PricingPlanCard: React.FC<PricingPlanProps> = ({ title, features, backgroundImage }) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} Background`}
        fill
        priority
      />

      {/* Content Overlay */}
      <div className="relative p-4 sm:p-6 md:p-6 lg:p-8">
        <h3 className="subtext3 mb-4 sm:mb-5 md:mb-5 lg:mb-6">
          {title}
        </h3>

        <div className="space-y-1.5 sm:space-y-2 md:space-y-2 mb-6 sm:mb-7 md:mb-6 lg:mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5">
              <div className="text-green-500 mt-0.5 sm:mt-1 md:mt-0.5 flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4"
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
              <span className="subtext1 text-sm sm:text-base md:text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing Area Placeholder */}
        <div className="bg-[#46464657] h-32 sm:h-36 md:h-32 lg:h-40 rounded-[10px]"></div>
      </div>
    </div>
  );
};

// Reusable Hero Section component
const HeroSection: React.FC<HeroSectionProps> = ({description }) => {
  return (
    <div className="mb-12 sm:mb-16 md:mb-14 lg:mb-20 relative px-2 sm:px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-[20rem] sm:top-[25rem] md:top-[28rem] lg:top-[40rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[420px] lg:w-[800px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/30 via-purple-300/10 to-transparent blur-[60px] sm:blur-[80px] md:blur-[85px] lg:blur-[120px] -z-10" />
      
      {/* Main Title */}
      <div
        className="relative text-center z-10"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(18px, 4vw, 43px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
          margin: '0 0 -0.25rem 0',
          padding: '0.2em 0',
         
          color: 'transparent',
          background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div>
          <ShinyText text="Now Is the Time to" speed={5} className="gradient-white-text" /> 
          {' '}
          <ShinyText text="Turn Your" speed={5} className="gradient-white-text" />   
        </div>
        <div>
          <ShinyText text="Website Into a" speed={5} className="gradient-white-text" />  
          {' '}
          <ShinyText text="24/7" speed={5} className="gradient-mask-text" />
          {' '}
          <ShinyText text="Sales Machine" speed={5} className="gradient-white-text" />
        </div>
      </div>
    
      {/* Hero Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-12 justify-center items-center pt-12 sm:pt-16 md:pt-14 lg:pt-20 relative z-10">
        {/* Hero Image */}
        <div 
          className=" 
            bg-[#797979] rounded-[8px] mx-auto md:mx-0 
            sm:max-w-[350px] md:max-w-[320px] md:max-h-[540px] lg:max-w-[870px] lg:h-[410px]
            aspect-[4/3] w-full
          "
        >
          <div className="rounded-[8px] overflow-hidden">
            {/* Placeholder for actual image */}
            <div className="bg-[#797979] flex items-center justify-center h-full">
              <span ></span>
            </div>
          </div>
        </div>

        
        {/* Description */}
        <div className="space-y-3 w-full md:w-full subtext1 ">
          {description.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Section11 component
const Section11: React.FC = () => {
  // Hero content data
  const heroContent: HeroContent = {
    
    description: [
      "Every minute you hesitate, your competitors are stealing your customers. While you're thinking about it, qualified buyers are leaving your website to purchase from someone else.",
      "This is your moment. Transform your silent website into an active sales machine that never stops working.",
      "The deal is insane:",
      "For the lowest price ever offered, you get up to 10 Smart AI Voice Agents working 24/7 across all your websites. Converting visitors while you sleep, vacation, or focus on scaling your business.",
      "This pricing disappears forever after launch.",
      "Why keep bleeding money when you could be capturing every sale instead?",
      "Your website will either make you money or cost you money. There's no middle ground.",
      "Stop letting competitors win. Start converting today."
    ]
  };

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      title: "AIVoicer - Startup",
      backgroundImage: "/rect4.png",
      features: [
        "Create Up To 3 Smart Voice Agents",
        "500 Minutes of Voice Conversations",
        "Unlimited Simultaneous Conversations",
        "24/7 Automatic Website Learning",
        "60 Second Setup",
        "Complete Brand Customization",
        "Smart Website Navigation",
        "Real-Time Analytics Dashboard",
        "Advanced Sentiment Analysis",
        "Private & Secured Conversation History",
        "Voice to Any Website Platform",
        "Natural Interruption Handling",
        "Custom Welcome Messages",
        "Instant Objection Handling",
        "Updates & Support"
      ]
    },
    {
      title: "AI Voicer Professional",
      backgroundImage: "/rect4.png",
      features: [
        "Create Up To 10 Smart Voice Agents",
        "1,000 Minutes of Voice Conversations",
        "Unlimited Simultaneous Conversations",
        "24/7 Automatic Website Learning",
        "60 Second Setup",
        "Complete Brand Customization",
        "Smart Website Navigation",
        "Real-Time Analytics Dashboard",
        "Advanced Sentiment Analysis",
        "Private & Secured Conversation History",
        "White-Label Website Platform",
        "Natural Interruption Handling",
        "Custom Welcome Messages",
        "Instant Objection Handling",
        "Updates & Support"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-4 lg:px-6">
      {/* Hero Section */}
      <HeroSection 
       
        description={heroContent.description}
      />
      
      {/* Second Title */}
      <div
        className="relative text-center z-10"
        style={{
          fontFamily: 'Radio Grotesk',
          fontWeight: 400,
          fontSize: 'clamp(18px, 4vw, 43px)',
          lineHeight: '0.8',
          letterSpacing: '0%',
          margin: '0 0 2rem 0',
          padding: '0.2em 0',
        
          color: 'transparent',
          background: 'linear-gradient(93.89deg, #1F0B46 0.91%, #DEBFFF 11.47%, #5A27B1 55.16%, #BF84F9 71.42%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <div >
          <ShinyText text="Here's What You Get" speed={5} className="gradient-white-text" />  
          {' '}
          <ShinyText text="Access to" speed={5} className="gradient-white-text" />  
        </div>
        <div>
          <ShinyText text="Immediately" speed={5} className="gradient-mask-text" />  
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-4">
          {pricingPlans.map((plan, index) => (
            <PricingPlanCard
              key={index}
              title={plan.title}
              features={plan.features}
              backgroundImage={plan.backgroundImage}
            />
          ))}
        </div>
      </div>

      <DownArrow />
    </div>
  );
};

export default Section11;