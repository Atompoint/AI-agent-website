import { ReactNode } from 'react';
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  description: string | ReactNode;
  imagePath: string;
  numericValue?: number; // Optional numeric value for calculations
}

export const STATISTICS: Statistic[] = [
  {
    description: "71% of people use voice assistants to research products before buying (Harvard Business Review)",
    imagePath: "/assets/images/section08/1.png",
    numericValue: 71
  },
  {
    description: "Voice AI market growing at 29.6% annually projected to hit $21.7 billion by 2030",
    imagePath: "/assets/images/section08/2.png",
    numericValue: 29.6
  },
  {
    description: "Businesses using AI-driven voice technology report 47% faster purchase completion",
    imagePath: "/assets/images/section08/3.png",
    numericValue: 47
  },
  {
    description: (
      <div className="text-left">80% of businesses plan to implement voice AI by 2026</div>
    ),
    imagePath: "/assets/images/section08/4.png",
    numericValue: 80
  },
  {
    description: (
      <div className="absolute bottom-0 left-0 right-0">
        <span className='block w-full max-w-lg'>
          Live chat alone increases conversions by 12-20% <strong>imagine what VOICE can do</strong>
        </span>
      </div>
    ),
    imagePath: "/assets/images/section08/5.png",
    numericValue: 16 // Average of 12-20%
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Answer Last-Minute Questions That Prevent Sales",
    description: "Visitors can quickly ask about shipping, returns, compatibility, instead of leaving to find answers elsewhere.",
    icon: "/assets/icons/section08/1.svg"
  },
  {
    title: "Qualify Leads Who Are Ready to Engage",
    description: "Your AI gathers visitor information through voice then directs them to your booking page or contact form.",
    icon: "/assets/icons/section08/2.svg"
  },
  {
    title: "Turn Product Pages Into Personal Shopping Experiences",
    description: "Visitors can ask: \"Which size should I get?\" or \"How does this compare?\" just like talking to a sales associate.",
    icon: "/assets/icons/section08/3.svg"
  },
  {
    title: "Handle Peak Traffic Without Hiring Extra Staff",
    description: "Unlimited visitors get instant voice answers while your competitors' chat boxes crash or have long wait times.",
    icon: "/assets/icons/section08/4.svg"
  },
  {
    title: "Help Serious Buyers Get the Information They Need",
    description: "Visitors get detailed explanations to their specific questions that push them over the buying line.",
    icon: "/assets/icons/section08/5.svg"
  },
  {
    title: "Capture Information From Motivated Prospects",
    description: "Your AI guides engaged visitors to contact forms or lead capture pages after answering their questions.",
    icon: "/assets/icons/section08/6.svg"
  },
  {
    title: "Make Complex Products Easy to Understand",
    description: "Visitors can simply ask: \"How does this work?\" or \"Is this right for my situation?\" and get clear answers.",
    icon: "/assets/icons/section08/7.svg"
  },
  {
    title: "Make Mobile Shopping Easier Than Ever Before",
    description: "Mobile visitors click once and speak their questions instead of typing on small keyboards or forms.",
    icon: "/assets/icons/section08/8.svg"
  },
  {
    title: "Help Visitors Choose the Right Pricing Plan",
    description: "Visitors describe their needs so your AI can recommend the perfect option and guide them to sign up.",
    icon: "/assets/icons/section08/9.svg"
  }
];
