import DownArrow from "@/components/ui/DownArrow";
import Threads from '@/components/ui/Threads';
import ShinyText from '@/components/ui/ShinyText';

const Section02 = () => {
  const sections = [
    {
      title: "67% Of Your Website Visitors Leave Within 10 Seconds... And Take Their Money With Them",
      description: [
        "Every single day, qualified prospects land on your website ready to buy. But within seconds, they're confused, frustrated, and clicking the back button. They can't find the information they need. ",
        "They don't know where to go next. So they leave... and buy from your competitor instead. While you sleep, eat, and live your life, potential customers are abandoning your website every few minutes. That's money walking out the door 24/7."
      ]
    },
    {
      title: "While You Sleep, Your Competitors Are Stealing Your Customers.",
      description: [
        "It's 2 AM and someone visits your website ready to make a purchase. They have one simple question. But there's nobody there to answer it. So they leave and find a competitor who CAN help them right now. ",
        "You wake up the next morning having no idea you just lost a $500, $1000, or even $5000 sale while you were dreaming. This happens every single night. Your business is bleeding money during the 16 hours a day you're not actively monitoring your website."
      ]
    },
    {
      title: "Live Chat Tools Are Bleeding Your Business Dry... And They Don't Even Work",
      description: [
        "You're paying $200+ per month for live chat software that forces your visitors into frustrating typing marathons. They ask a question, wait for a response, then type another message trying to clarify. ",
        "Back and forth, back and forth. They're going in circles, getting more confused with each exchange. They can't explain what they really need through text. Meanwhile, you're paying premium prices for a 'solution' that creates more friction than it solves. Your visitors give up mid-conversation and leave to find a competitor who actually makes it easy to get help."
      ]
    },
    {
      title: "Building A Customer Service Team Costs A Fortune... And You Need Multiple People For Round-The-Clock Coverage",
      description: [
        "Want 24/7 customer service? You'll need multiple full-time employees to cover all shifts around the clock. That's substantial monthly salaries for each person. Add training costs, management overhead, sick leave coverage and workspace expenses. ",
        "The numbers add up fast - and that's just to have someone available to answer basic questions. When employees inevitably leave? You're back to square one Meanwhile, your costs keep climbing while you struggle to maintain consistent coverage."
      ]
    },
    {
      title: "Most AI Tools Promise Easy Setup... Then Waste Weeks Of Your Time",
      description: [
        "You sign up excited, thinking you'll be up and running in minutes. Instead, you spend hours uploading documents, training the AI, writing FAQs, configuring settings. Days turn into weeks",
        "You're pulling your hair out trying to make it work while your website continues bleeding visitors. By the time it's 'ready,' you've wasted 40+ hours!"
      ]
    },
    {
      title: "Every Unanswered Question Is A Lost Sale... And You're Losing Dozens Daily",
      description: [
        "Your visitor is 90% ready to buy. They just need to know about shipping times, return policies, or technical specs. It's a simple question that would take 30 seconds to answer. But there's no way for them to get that answer quickly. ",
        "So they leave 'to think about it' and never come back. You had them RIGHT at the buying moment... and lost them over something that could have been solved instantly. This isn't happening once a week. It's happening multiple times every single day"
      ]
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Threads - Positioned within section, moves with content */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-0 pointer-events-none"
        
      >
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Content Container - Fully Responsive */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-8 2xl:px-16 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-16 2xl:py-24">
        <div className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-12 2xl:space-y-16">
          
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-15 2xl:gap-20 text-white justify-center items-center p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-4 2xl:p-8 rounded-xl lg:flex-row xl:flex-row 2xl:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section - Comprehensive responsive sizing */}
              <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px] flex flex-col items-center justify-center text-center lg:text-left xl:text-left 2xl:text-left">
                <div className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-white font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-8 2xl:mb-10 leading-tight">
                  <ShinyText 
                    text={`${section.title}`} 
                    disabled={false} 
                    speed={6} 
                    className="leading-tight"
                  />
                </div>
                <div className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-sm xl:text-sm 2xl:text-base space-y-2 xs:space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4">
                  {section.description.map((paragraph, paragraphIndex) => (
                    <div 
                      key={paragraphIndex} 
                      className="leading-relaxed lg:leading-relaxed xl:leading-relaxed 2xl:leading-loose text-gray-100"
                    >
                      {paragraph}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section - Responsive sizing optimized for your screen */}
              <div className="w-full max-w-[300px] h-[250px] xs:max-w-[320px] xs:h-[270px] sm:max-w-[350px] sm:h-[300px] md:max-w-[400px] md:h-[350px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[400px] 2xl:w-[550px] 2xl:h-[450px] rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl bg-gray-500 bg-opacity-20 xs:bg-opacity-25 sm:bg-opacity-30 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-colors duration-300">
                <span className="text-base xs:text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-gray-400">
                  {/* Placeholder for future content */}
                </span>
              </div>
            </div>
          ))}
          
          {/* Down Arrow - Positioned with responsive spacing */}
          <div className="relative z-10 mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-12 2xl:mt-16">
            <DownArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;