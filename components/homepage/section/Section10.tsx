import React from 'react'
import DownArrow from '../../ui/DownArrow';
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";  

// Type definitions
interface ComparisonColumnProps {
  title: string;
  items: string[];
  isPositive: boolean;
}

interface BonusSectionProps {
  title: string;
  description: string[];
}

interface ComparisonData {
  title: string;
  items: string[];
  isPositive: boolean;
}

interface BonusData {
  title: string;
  description: string[];
}

// Single reusable ComparisonColumn component
const ComparisonColumn: React.FC<ComparisonColumnProps> = ({ title, items, isPositive }) => {
  const iconColor = isPositive ? "text-green-500" : "text-red-500";
  
  const renderIcon = (): React.ReactElement => {
    if (isPositive) {
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <div className="relative max-w-[600px] rounded-lg overflow-hidden">
      <Image
        src="/rect3.png"
        alt={`${title} Background`}
        fill
        priority
      />
      <ShineBorder
        borderWidth={2}
        duration={23}
        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        className="absolute inset-0 rounded-2xl pointer-events-none"
      />

      <div className="relative flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 lg:pr-25">
        <h3 className="subtext3 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
          {title}
        </h3>

        <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
          {items.map((item: string, index: number) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
              <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
                {renderIcon()}
              </div>
              <span className="subtext1 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable BonusSection component - always shows image on right
const BonusSection: React.FC<BonusSectionProps> = ({ title, description }) => {
  const content = (
    <div className="space-y-3 sm:space-y-4 flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 items-center w-full lg:w-130">
      {description.map((paragraph: string, index: number) => (
        <p key={index} className="subtext1 text-sm sm:text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const image = <div className="bg-[#797979] h-48 w-full sm:h-56 sm:w-80 md:h-64 md:w-96 lg:h-84 lg:w-110 rounded-[7px]"></div>;

  return (
    <div className="w-full">
      <div className=" text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 leading-[1.1]">
        <ShinyText
          text={title}
          disabled={false}
          speed={6}
          className="Heading2"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
        <div className="w-full lg:w-1/2">
          {content}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          {image}
        </div>
      </div>
    </div>
  );
};

const Section10: React.FC = () => {
  const withoutVoiceAI: string[] = [
    "Constantly losing visitors who can't find answers",
    "Paying expensive monthly fees for live chat software",
    "Hiring and training customer service staff",
    "Missing sales during nights and weekends",
    "Visitors abandoning carts with unanswered questions",
    "Spending weeks setting up complex chatbot systems",
    "Dealing with frustrated customers who hate typing",
    "Watching competitors steal your confused visitors",
    "Manually answering the same questions over and over",
    "Losing international customers in different time zones",
    "High bounce rates from visitors who leave immediately",
    "No way to qualify leads before they contact you"
  ];

  const withVoiceAI: string[] = [
    "24/7 availability to answer every visitor question",
    "Directing visitors around your website",
    "One-time payment with no monthly subscription fees",
    "Capturing sales around the clock automatically",
    "Answering support questions instantly",
    "60-second setup with one line of code",
    "Natural voice conversations visitors actually enjoy",
    "Converting confused visitors into paying customers",
    "AI handles repetitive questions while you focus on growth",
    "Serving global customers in any time zone",
    "Zero hiring or training - AI handles everything",
    "Detailed analytics for every visitors conversation"
  ];

  const comparisonData: ComparisonData[] = [
    {
      title: "Without Voice AI (Hard Way)",
      items: withoutVoiceAI,
      isPositive: false
    },
    {
      title: "With Voice AI (Easy Way)",
      items: withVoiceAI,
      isPositive: true
    }
  ];

  const bonusData: BonusData[] = [
    {
      title: "Exclusive Bonus 1: Name Here",
      description: [
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus.",
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus.",
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus."
      ]
    },
    {
      title: "Exclusive Bonus 2: Name Here",
      description: [
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus.",
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus.",
        "Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus. Text About this bonus."
      ]
    }
  ];

  return (
    <div className="px-3 sm:px-4 md:px-5 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative text-center"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: 'clamp(24px, 4vw, 43px)',
            lineHeight: '0.9',
            letterSpacing: '0%',
            margin: '0 0 0 0',
            padding: '0',
         
            color: 'transparent',
            background: 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          <div className="mb-1 sm:mb-2">
            <ShinyText text="Two Paths Forward: " speed={5} className="gradient-white-text" />
            {' '}
            <ShinyText text="Stay Silent & Lose" speed={5} className="gradient-white-text" />
          </div>
          <div>
            <ShinyText text="Sales... Or Let Your" speed={5} className="gradient-white-text" /> 
            {' '}
            <ShinyText text="Website Talk & Profit" speed={5} className="gradient-white-text" /> 
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-7 lg:gap-8 justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-15 px-1 sm:px-2 md:px-3 lg:px-4">
          {comparisonData.map((column: ComparisonData, index: number) => (
            <div key={index} className="w-full max-w-full lg:max-w-[600px] mx-auto">
              <ComparisonColumn
                title={column.title}
                items={column.items}
                isPositive={column.isPositive}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 sm:py-10 md:py-14 lg:py-20 px-2 sm:px-4 md:px-5 lg:px-6">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {bonusData.map((bonus: BonusData, index: number) => (
            <div key={index} className="w-full">
              <BonusSection
                title={bonus.title}
                description={bonus.description}
              />
            </div>
          ))}
        </div>
      </div>

      <DownArrow/>
    </div>
  );
};

export default Section10;