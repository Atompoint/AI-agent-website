import React from 'react'
import DownArrow from '../../ui/DownArrow';
import Image from 'next/image'

const Section10 = () => {
  const withoutVoiceAI = [
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
  ]

  const withVoiceAI = [
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
  ]

  return (
    <div className=" text-white/90 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="gradient-white-text text-3xl md:text-4xl font-medium text-center mb-12 leading-tight">
          Two Paths Forward: Stay Silent & Lose<br />
          Sales... Or Let Your Website Talk & Profit
        </h2>
        
       

<div className="grid md:grid-cols-2 gap-4">
  {/* Without Voice AI Column */}
  <div className="relative rounded-lg overflow-hidden">
    {/* Background Image */}
    <Image
      src="/rect3.png"
      alt="Without Voice AI Background"
      fill
      
      priority
    />

    {/* Overlay content */}
    <div className="relative p-8">
      <h3 className="text-2xl font-medium mb-6 ">
        Without Voice AI (Hard Way)
      </h3>

      <div className="space-y-4">
        {withoutVoiceAI.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-red-500 mt-1 flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-300 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* With Voice AI Column */}
  <div className="relative rounded-lg overflow-hidden ">
    {/* Background Image */}
    <Image
      src="/rect3.png"
      alt="With Voice AI Background"
      fill
    
    />

    {/* Overlay content */}
    <div className="relative p-8">
      <h3 className="text-2xl font-medium mb-6 ">
        With Voice AI (Easy Way)
      </h3>

      <div className="space-y-4">
        {withVoiceAI.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-green-500 mt-1 flex-shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-300 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
      </div>
       <div className=" text-white py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Exclusive Bonus 1 */}
        <div>
          <h2 className="gradient-white-text text-3xl md:text-4xl font-medium text-center mb-12">
            Exclusive Bonus 1: Name Here
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5 items-center py-7">
            <div className="space-y-4 flex flex-col justify-center items-center text-gray-300 w-110">
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
              
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
              
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
            </div>
            
            <div className="bg-[#797979] h-64 w-100 md:h-80 rounded-[10px]"></div>
          </div>
        </div>

       
          
          <h2 className="gradient-white-text text-3xl md:text-4xl font-medium text-center mb-12">
            Exclusive Bonus 2: Name Here
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5 items-center py-7">
            <div className="bg-[#797979] h-64 w-100 md:h-80 rounded-[10px]"></div>
            <div className="space-y-4 flex flex-col justify-center items-center text-gray-300 w-110">
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
              
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
              
              <p className="text-sm leading-relaxed">
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus. Text About this bonus. Text About this bonus. 
                Text About this bonus.
              </p>
            </div>
            
            
          
        </div>

      </div>
    </div>
    <DownArrow/>
    </div>
  )
}

export default Section10