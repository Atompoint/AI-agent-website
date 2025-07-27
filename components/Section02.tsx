import React from "react";
import DownArrow from "./DownArrow";

const Section02 = () => {
  const sections = [
    {
      title: "67% Of Your Website Visitors Leave Within 10 Seconds...",
      description:
        "Every single day, qualified prospects land on your website ready to buy. But within seconds, they're confused, frustrated, and clicking the back button. They can't find the information they need fast enough.",
    },
    {
      title: "They Don't Understand Your Value Proposition",
      description:
        "Visitors scan your page in seconds. If you don't immediately communicate why you're better than competitors, they'll leave. Most businesses bury their unique value in paragraphs of text no one reads.",
    },
    {
      title: "Mobile Users Struggle With Poor Experience",
      description:
        "Over 60% of web traffic comes from mobile devices. If your site isn't perfectly optimized for thumb navigation and small screens, you're losing customers at every touchpoint.",
    },
    {
      title: "Slow Load Times Kill Conversions",
      description:
        "A 1-second delay in page response can result in a 7% reduction in conversions. Many sites lose customers before the page even finishes loading due to bloated code and unoptimized media.",
    },
    {
      title: "Confusing Navigation Leads To Abandonment",
      description:
        "Visitors shouldn't need to think about where to click next. Complex menus, hidden CTAs, and unclear information architecture cause frustration and immediate bounce rates.",
    },
    {
      title: "Your Site Doesn't Build Trust Instantly",
      description:
        "If your website lacks social proof, testimonials, or looks outdated, users hesitate. People don’t buy from sites they don’t trust, especially within the first few seconds.",
    },
  ];

  return (
    <div className="space-y-12 py-12">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex gap-12 text-white justify-center items-center p-8 rounded-xl ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="w-[500px] flex flex-col items-center text-center md:text-left">
            <div className="text-4xl font-bold">{section.title}</div>
            <div className="text-lg w-[500px] mt-7">{section.description}</div>
          </div>

          {/* Image Section */}
          <div className="h-[400px] w-[400px] rounded-2xl bg-gray-500 bg-opacity-30 flex items-center justify-center">
            <span className="text-xl">Visual {index + 1}</span>
          </div>
        </div>
      ))}
      <DownArrow />
    </div>
  );
};

export default Section02;
