import DownArrow from "@/components/ui/DownArrow";
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
      {/* Glow Effects */}
      <div className="absolute top-200 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[100px] -z-10"></div>
      <div className="absolute bottom-400 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#5A27B1] to-[#9F7AEA] opacity-30 blur-[100px] -z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto ">
        <div >
          
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative flex gap-12 text-white justify-center items-center py-8 rounded-xl flex-row ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="w-[430px] h-[400px] flex flex-col items-center justify-center text-left">
                <div style={{ lineHeight: "38px"}} className="Heading3 mb-5">
                  <ShinyText 
                    text={`${section.title}`} 
                    disabled={false} 
                    speed={6} 
            
                  />
                </div>
                <div className="space-y-3">
                  {section.description.map((paragraph, paragraphIndex) => (
                    <p 
                      key={paragraphIndex} 
                      className="subtext1"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="w-[460px] h-[350px] rounded-[7px] bg-[#797979]  flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/50 transition-colors duration-300">
               
              </div>
            </div>
          ))}
          
          {/* Down Arrow */}
          <div>
          </div>
        </div>
      </div>
            <DownArrow />
    </div>
  );
};

export default Section02;