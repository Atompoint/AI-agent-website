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
  title: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
      <div className="relative p-8">
        <h3 className="text-md font-semibold text-white mb-6">
          {title}
        </h3>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-green-500 mt-1 flex-shrink-0">
                <svg
                  className="w-5 h-5"
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
              <span className="text-gray-300 text-[13px] leading-relaxed ">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing Area Placeholder */}
        <div className="bg-[#46464657] h-40 rounded-[10px]"></div>
      </div>
    </div>
  );
};

// Reusable Hero Section component
const HeroSection: React.FC<HeroSectionProps> = ({ title, image, description }) => {
  return (
    <div className="mb-20">
      <h2 className="m-auto max-w-[600px] leading-tight text-center">
        {title.map((text, index) => (
          <ShinyText
            key={index}
            text={text}
            disabled={false}
            speed={6}
            className="Heading"
          />
        ))}
      </h2>
      
      <div className="grid md:grid-cols-2 gap-2 items-center pt-20">
        <div 
          className={`bg-[#797979] rounded-[8px]`}
          style={{ 
            height: `${image.height}px`, 
            width: `${image.width}px` 
          }}
        ></div>
        
        <div className="space-y-2 w-100 text-sm text-gray-300">
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
    title: [
      "Now Is the Time to Turn Your ",
      "Website Into a 24/7 Sales Machine"
    ],
    image: {
      src: "/hero-image.png", // placeholder
      alt: "Sales Machine Hero",
      width: 470,
      height: 440 // 110 * 4 = 440px (assuming h-110 means 110*4px)
    },
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
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <HeroSection 
        title={heroContent.title}
        image={heroContent.image}
        description={heroContent.description}
      />

      {/* Pricing Section */}
      <h2 className="m-auto mb-10 leading-tight text-center">
        <ShinyText
          text="Here's What You Get Access to Immediately"
          disabled={false}
          speed={6}
          className="Heading"
        />
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
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