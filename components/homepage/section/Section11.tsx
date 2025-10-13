import React from 'react';
import DownArrow from '../../ui/DownArrow';
import PricingHero from '../../ui/pricing/PricingHero';
import PricingSection from '../../ui/pricing/PricingSection';

// Type definitions
interface PricingPlan {
  title: string;
  features: string[];
  backgroundImage: string;
}

const Section11: React.FC = () => {
  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      title: "AIVoicer - Startup",
      backgroundImage: "/assets/images/rec4.png",
      features: [
        "Create Up To 3 Smart Voice Agents",
        "200 Minutes of Voice Conversations",
        "Unlimited Simultaneous Conversations",
        "24/7 Automatic Website Learning",
        "60-Second Setup",
        "Complete Brand Customization",
        "Smart Website Navigation",
        "Real-Time Analytics Dashboard",
        "Advanced Sentiment Analysis",
        "Private & Secured Conversation History",
        "Works on Any Website Platform",
        "Natural Interruption Handling",
        "Custom Welcome Messages",
        "Instant Objection Handling",
        "Updates & Support"
      ]
    },
    {
      title: "AI Voicer Professional",
      backgroundImage: "/assets/images/rec4.png",
      features: [
        "Create Up To 10 Smart Voice Agents",
        "1,000 Minutes of Voice Conversations",
        "Unlimited Simultaneous Conversations",
        "24/7 Automatic Website Learning",
        "60-second Setup",
        "Complete Brand Customization",
        "Smart Website Navigation",
        "Real-Time Analytics Dashboard",
        "Advanced Sentiment Analysis",
        "Private & Secured Conversation History",
        "Works on any Website Platform",
        "Natural Interruption Handling",
        "Custom Welcome Messages",
        "Instant Objection Handling",
        "Updates & Support"
      ]
    }
  ];

  return (
    <div className="w-full">
      <PricingHero />
      <PricingSection 
        title="Here's What You Get Access to"
        subtitle="Immediately"
        plans={pricingPlans}
      />
      <DownArrow />
    </div>
  );
};
export default Section11;