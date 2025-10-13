import React from 'react';
import DownArrow from "@/components/ui/DownArrow";
import ShinyText from '@/components/ui/ShinyText';


const Section02 = () => {
  const sections = [
    {
      title: (
        <>
          <span>67</span>
          <span style={{ fontFamily: 'monospace' }}>%</span>
          <span> Of Your Website Visitors Leave Within 10 Seconds... And Take Their Money With Them</span>
        </>
      ),
      description: [
        <React.Fragment key="desc1">  
          Every <b>single day</b>, qualified prospects land on your website ready to buy. But <b>within seconds</b>, they're <b>confused, frustrated</b>, and clicking the back button. <b>They can't find the information they need.</b>
        </React.Fragment>,
        <React.Fragment key="desc2">
          They don't know where to go next. So they <b>leave</b>... and <b>buy from your competitor</b> instead. While you sleep, eat, and live your life, potential customers are abandoning your website every few minutes. That's <b>money walking out the door</b> 24/7.
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec1.png"
    },
    {
      title: <span>While You Sleep, Your Competitors Are Stealing Your Customers.</span>,
      description: [
        <React.Fragment key="desc3">
          It's 2 AM and someone visits your website <b>ready to buy</b>. They have <b>one simple question</b>. But there's <b>nobody there</b> to answer it. So they <b>leave</b> and find a competitor who CAN help them right now.
        </React.Fragment>,
        <React.Fragment key="desc4">
          You wake up the next morning having <b>no idea</b> you just lost a <b>$500, $1000, or even $5000 sale</b> while you were dreaming. This happens <b>every single night</b>. Your business is <b>bleeding money</b> during the 16 hours a day you're not actively monitoring your website.
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec2.png"
    },
    {
      title: <span>Live Chat Tools Are Bleeding Your Business Dry... And They Don't Even Work</span>,
      description: [
        <React.Fragment key="desc5">
          You're paying <b>$200+ per month</b> for live chat software that forces your visitors into <b>frustrating typing marathons</b>. They ask a question, <b>wait for a response</b>, then type another message trying to clarify.
        </React.Fragment>,
        <React.Fragment key="desc6">
          Back and forth, back and forth. They're <b>going in circles</b>, getting more <b>confused</b> with each exchange. They can't explain what they really need through text. Meanwhile, you're paying <b>premium prices</b> for a 'solution' that creates <b>more friction</b> than it solves. Your visitors <b>give up mid-conversation</b> and leave to find a competitor who actually makes it easy to get help.
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec3.png"
    },
    {
      title: <span>Building A Customer Service Team Costs A Fortune... And You Need Multiple People For Round-The-Clock Coverage</span>,
      description: [
        <React.Fragment key="desc7">
          Want <b>24/7 customer service</b>? You'll need <b>multiple full-time employees</b> to cover all shifts around the clock. That's <b>substantial monthly salaries</b> for each person. Add <b>training costs, management overhead, sick leave</b> coverage and workspace expenses.
        </React.Fragment>,
        <React.Fragment key="desc8">
          The <b>numbers add up fast</b> - and that's just to have someone available to answer <b>basic questions</b>. When employees inevitably <b>leave</b>? You're back to <b>square one</b> Meanwhile, your <b>costs keep climbing</b> while you struggle to maintain consistent coverage.
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec4.png"
    },
    {
      title: <span>Most AI Tools Promise Easy Setup... Then Waste Weeks Of Your Time</span>,
      description: [
        <React.Fragment key="desc9">
          You sign up <b>excited</b>, thinking you'll be <b>up and running in minutes</b>. Instead, you spend <b>hours</b> uploading documents, <b>training the AI</b>, writing FAQs, and configuring settings. <b>Days turn into weeks</b>.
        </React.Fragment>,
        <React.Fragment key="desc10">
          You're <b>pulling your hair out</b> trying to make it work while your website continues <b>bleeding visitors</b>. By the time it's 'ready,' you've <b>wasted 40+ hours</b>!
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec5.png"
    },
    {
      title: <span>Every Unanswered Question Is A Lost Sale... And You're Losing Dozens Daily</span>,
      description: [
        <React.Fragment key="desc11">
          Your visitor is <b>90% ready to buy</b>. They just need to know about <b>shipping times, return policies, or technical specs</b>. It's a <b>simple question</b> that would take 30 seconds to answer. But there's <b>no way</b> for them to get that answer quickly.
        </React.Fragment>,
        <React.Fragment key="desc12">
          So they <b>leave 'to think about it'</b> and <b>never come back</b>. You had them <b>RIGHT at the buying moment</b>... and <b>lost them</b> over something that could have been <b>solved instantly</b>. This isn't happening once a week. It's happening <b>multiple times every single day</b>
        </React.Fragment>
      ],
      imagePath: "/assets/images/section02/sec6.png"
    },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Glow Effects - Same positioning as lg */}
      <div className="absolute top-48 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[80px] md:blur-[100px] -z-10"></div>
      <div className="absolute bottom-96 left-0 w-48 h-48 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-tr from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[80px] md:blur-[100px] -z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl md:max-w-[90%] lg:max-w-[93%] 2xl:max-w-[93%] mx-auto px-4 md:px-8 sm:px-12 lg:px-12 2xl:px-0">
        <div className="w-full space-y-12 md:space-y-12 lg:space-y-6 xl:space-y-0">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-between gap-5 md:gap-8 lg:gap-20 2xl:gap-28`}
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div 
                style={{
                  fontFamily: 'Basis Grotesque Pro, sans-serif',
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[34px] xl:text-[37px] 2xl:text-[52px] font-bold leading-tight sm:leading-8 md:leading-9 lg:leading-10 2xl:leading-14">
                  <ShinyText
                    disabled={false}
                    speed={6}
                 
                  >
                    {section.title}
                  </ShinyText>
                </div>
                <div className="w-full 2xl:max-w-2xl xl:max-w-lg max-w-2xl space-y-4 mt-5 md:space-y-5">
                  {section.description.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-[12px] sm:text-[13px] md:text-[14px] xl:text-[16px] 2xl:text-[23px] leading-5 2xl:leading-8  lg:leading-6 text-white font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-none aspect-square">
                  <img
                    src={section.imagePath}
                    alt={`Illustration for ${section.title}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow */}
      <DownArrow />
    </div>
  );
};

export default Section02;