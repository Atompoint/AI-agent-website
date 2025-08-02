import React from 'react'
import DownArrow from '../../ui/DownArrow';
import Image from 'next/image'
const Section11 = () => {

     const startupFeatures = [
    "Create Up To 3 Smart Voice Agents",
    "500 Minutes of Voice Conversations",
    "Unlimited Simultaneous Conversations",
    "24/7 Automatic Website Learning",
    "60 Second Setup",
    "Complete Brand Customization",
    "Smart Website Navigation",
    "Real-Time Analytics Dashboard",
    "Advanced Sentiment Analysis",
    "Private & Secured Conversation History",
    "Voice to Any Website Platform",
    "Natural Interruption Handling",
    "Custom Welcome Messages",
    "Instant Objection Handling",
    "Updates & Support"
  ]

  const professionalFeatures = [
    "Create Up To 10 Smart Voice Agents",
    "1,000 Minutes of Voice Conversations",
    "Unlimited Simultaneous Conversations",
    "24/7 Automatic Website Learning",
    "60 Second Setup",
    "Complete Brand Customization",
    "Smart Website Navigation",
    "Real-Time Analytics Dashboard",
    "Advanced Sentiment Analysis",
    "Private & Secured Conversation History",
    "White-Label Website Platform",
    "Natural Interruption Handling",
    "Custom Welcome Messages",
    "Instant Objection Handling",
    "Updates & Support"
  ]

  return (
      <div className="max-w-5xl mx-auto">
     <div className="mb-20">
          <h2 className="gradient-white-text text-4xl w-150 m-auto md:text-4xl font-medium text-center mb-12 leading-tight">
           Now Is the Time to Turn Your Website Into a 24/7 Sales Machine

          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#797979] h-110 w-[480px] rounded-[10px]"></div>
            
            <div className="space-y-3 w-100 text-sm text-gray-300">
         <p>
           Every minute you hesitate, your competitors are stealing your customers. While you're thinking about it, qualified buyers are leaving your website to purchase from someone else.
          
          </p> 

          <p>This is your moment. Transform your silent website into an active sales machine that never stops working.</p>

<p>
  The deal is insane:
</p>


<p>
For the lowest price ever offered, you get up to 10 Smart AI Voice Agents working 24/7 across all your websites. Converting visitors while you sleep, vacation, or focus on scaling your business.

</p>

<p>This pricing disappears forever after launch.</p>

<p>
  Why keep bleeding money when you could be capturing every sale instead?
</p>
<p>
  Your website will either make you money or cost you money. There's no middle ground.
</p>

<p>
  
Stop letting competitors win. Start converting today.
</p>


            </div>
          </div>
        </div>
         <h2 className="gradient-white-text text-4xl w-150 m-auto md:text-4xl font-medium text-center mb-12 leading-tight">
           Now Is the Time to Turn Your Website Into a 24/7 Sales Machine

          </h2>
<div className="max-w-6xl mx-auto">
    

<div className="grid md:grid-cols-2 gap-8">
  {/* AIVoicer - Startup Plan */}
  <div className="relative rounded-lg overflow-hidden ">
    {/* Background Image */}
    <Image
      src="/rect4.png"
      alt="AIVoicer Startup Background"
      fill
     
      priority
    />

    {/* Content Overlay */}
    <div className="relative p-8">
      <h3 className="text-2xl font-bold mb-8 text-center text-white">
        AIVoicer - Startup
      </h3>

      <div className="space-y-3 mb-8">
        {startupFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-green-500 mt-1 flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-300 leading-relaxed text-sm">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Area Placeholder */}
      <div className="bg-[#46464657] h-40 rounded-[10px]"></div>
    </div>
  </div>

  {/* AI Voicer Professional Plan */}
  <div className="relative rounded-lg overflow-hidden ">
    {/* Background Image */}
    <Image
      src="/rect4.png"
      alt="AIVoicer Professional Background"
      fill
     
    />

    {/* Content Overlay */}
    <div className="relative p-8">
      <h3 className="text-2xl font-bold mb-8 text-center text-white">
        AI Voicer Professional
      </h3>

      <div className="space-y-3 mb-8">
        {professionalFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-green-500 mt-1 flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-300 leading-relaxed text-sm">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Area Placeholder */}
   <div className="bg-[#46464657] h-40 rounded-[10px]"></div>
    </div>
  </div>
</div>

      </div>

<DownArrow/>
        </div>
  )
}

export default Section11