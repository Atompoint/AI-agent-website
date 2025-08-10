import React from 'react'
import DownArrow from '../../ui/DownArrow';
import Image from 'next/image'
import ShinyText from '@/components/ui/ShinyText';

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
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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

      <div className="relative flex flex-col p-10 pr-25">
        <h3 className="subtext3 mb-6">
          {title}
        </h3>

        <div className="space-y-3">
          {items.map((item: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`${iconColor}  flex-shrink-0`}>
                {renderIcon()}
              </div>
              <span className="subtext1  ">{item}</span>
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
    <div className="space-y-4 flex flex-col justify-center p-10 items-center w-130">
      {description.map((paragraph: string, index: number) => (
        <p key={index} className="subtext1 ">
          {paragraph}
        </p>
      ))}
    </div>
  );

  const image = <div className="bg-[#797979] h-84 w-110  rounded-[7px]"></div>;

  return (
    <div>
      <h2 className="text-white  text-3xl md:text-4xl font-medium text-center mb-12">
        <ShinyText
          text={title}
          disabled={false}
          speed={6}
          className="Heading2"
        />
      </h2>
      
      <div className="grid grid-cols-2 gap-35 items-center ">
        {content}
        {image}
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
    <div className="text-white/90 px-6">
      <div className="max-w-6xl mx-auto">
       

        <div
  className="relative  text-center  mb-4 "
  style={{
    textTransform: 'capitalize',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>
  <div>
    <ShinyText text="Two Paths Forward: Stay Silent & Lose" speed={5} className="Heading2 gradient-text-white" />
  </div>
  <div >
    <ShinyText text="Sales... Or Let Your Website Talk & Profit" speed={5} className="Heading2 gradient-text-white" />  
    
  </div>
</div>

        <div className="flex gap-4 justify-center mt-15">
          {comparisonData.map((column: ComparisonData, index: number) => (
            <ComparisonColumn
              key={index}
              title={column.title}
              items={column.items}
              isPositive={column.isPositive}
            />
          ))}
        </div>
      </div>

      <div className="  py-16 ">
        <div className="max-w-4xl mx-auto space-y-16">
          {bonusData.map((bonus: BonusData, index: number) => (
            <BonusSection
              key={index}
              title={bonus.title}
              description={bonus.description}
            />
          ))}
        </div>
      </div>

      <DownArrow/>
    </div>
  );
};

export default Section10;