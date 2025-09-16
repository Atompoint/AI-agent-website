import React from 'react'
import DownArrow from '../../ui/DownArrow';

import ShinyText from '@/components/ui/ShinyText';
import { ShineBorder } from "@/components/magicui/shine-border";  

// Type definitions
interface ComparisonColumnProps {
  title: string;
  items: string[];
  isPositive: boolean;
}

interface ComparisonData {
  title: string;
  items: string[];
  isPositive: boolean;
}

// Single reusable ComparisonColumn component
const ComparisonColumn: React.FC<ComparisonColumnProps> = ({ title, items, isPositive }) => {
  const iconColor = isPositive ? "text-green-500" : "text-red-500";
  
  const renderIcon = (): React.ReactElement => {
    if (isPositive) {
      return (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    
    return (
      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] rounded-lg overflow-hidden mx-auto">
      
      <ShineBorder
        borderWidth={2}
        duration={23}
        shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
        className="absolute inset-0 rounded-2xl pointer-events-none"
      />

      <div className="relative flex flex-col p-4 sm:p-6 md:p-6 lg:p-10 h-full">
        <h3 className="subtext3 mb-3 sm:mb-4 md:mb-4 lg:mb-6 text-center md:text-left">
          {title}
        </h3>

        <div className="space-y-2 sm:space-y-2.5 md:space-y-2 flex-1">
          {items.map((item: string, index: number) => (
            <div key={index} className="flex items-start gap-2 sm:gap-2.5 md:gap-2">
              <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
                {renderIcon()}
              </div>
              <span className="subtext1 text-sm sm:text-base md:text-sm lg:text-base">{item}</span>
            </div>
          ))}
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

  return (
    <div className="px-4 sm:px-4 md:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative text-center"
          style={{
            fontFamily: 'Radio Grotesk',
            fontWeight: 400,
            fontSize: 'clamp(24px, 4vw, 43px)',
            lineHeight: '0.9',
            letterSpacing: '0%',
           
         
            color: 'transparent',
            background: 'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          <div className="mb-1 sm:mb-2 md:mb-2">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center mt-6 sm:mt-8 md:mt-8 lg:mt-15 gap-4 md:gap-6 lg:gap-5 md:px-2 lg:px-10">
          {comparisonData.map((column: ComparisonData, index: number) => (
            <div key={index} className='w-full md:w-full'>
              <ComparisonColumn
                title={column.title}
                items={column.items}
                isPositive={column.isPositive}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <DownArrow/>
      </div>
    </div>
  );
};

export default Section10;