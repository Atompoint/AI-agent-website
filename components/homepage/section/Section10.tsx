import React from 'react';
import DownArrow from '../../ui/DownArrow';
import ShinyText from '@/components/ui/ShinyText';
import ComparisonColumn from '../../ui/comparison/ComparisonColumn';

interface ComparisonData {
  title: string;
  items: string[];
  isPositive: boolean;
}

const WITHOUT_VOICE_AI: string[] = [
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

const WITH_VOICE_AI: string[] = [
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

const Section10: React.FC = () => {
  const comparisonData: ComparisonData[] = [
    {
      title: "Without Voice AI (Hard Way)",
      items: WITHOUT_VOICE_AI,
      isPositive: false
    },
    {
      title: "With Voice AI (Easy Way)",
      items: WITH_VOICE_AI,
      isPositive: true
    }
  ];

  return (
    <div className="px-4 sm:px-4 md:px-4 lg:px-6">
      <div className="max-w-[1700px]  mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-15">
        <header className="relative max-w-[90%] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[963px] 2xl:max-w-[1400px] mx-auto text-center 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2">
          <div>
            <ShinyText text="Two Paths Forward: Stay Silent & Lose Sales... Or Let Your Website Talk & Profit" speed={5} className="gradient-white-text inline-block" />

          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:px-2 lg:px-5 2xl:px-20 xl:px-30 2xl:gap-8">
          {comparisonData.map((column: ComparisonData) => (
            <ComparisonColumn
              key={column.title}
              title={column.title}
              items={column.items}
              isPositive={column.isPositive}
            />
          ))}
        </div>

        <DownArrow />
      </div>

    </div>
  );
};

export default Section10;