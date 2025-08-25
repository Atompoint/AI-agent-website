'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Purple from '@/public/assets/images/purple.png'
import ShinyText from '@/components/ui/ShinyText';
import Offer from '@/components/ui/Offer';


interface FAQItem {
  question: string
  answer: string
}

const Section13: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData: FAQItem[] = [
    {
      question: "What compliance standards does Cloudnosys support?",
      answer: "Cloudnosys provides real-time alerts and actionable insights whenever your infrastructure deviates from best practices or compliance. So you can address issues before they become critical."
    },
    {
      question: "How does Cloudnosys help prepare for audits?",
      answer: "Cloudnosys helps prepare for audits by providing comprehensive documentation, automated compliance reporting, and real-time monitoring of your infrastructure to ensure you meet all regulatory requirements."
    },
    {
      question: "Will Cloudnosys alert me if we fall out of compliance?",
      answer: "Yes, Cloudnosys provides real-time alerts and actionable insights whenever your infrastructure deviates from best practices or compliance. So you can address issues before they become critical."
    },
    {
      question: "What compliance standards does Cloudnosys support?",
      answer: "Cloudnosys supports major compliance standards including SOC 2, GDPR, HIPAA, PCI DSS, and other industry-specific regulations to ensure your infrastructure meets the highest security and compliance requirements."
    },
    {
      question: "What compliance standards does Cloudnosys support?",
      answer: "Cloudnosys supports a wide range of compliance standards and provides tools and resources to help you maintain compliance across your entire infrastructure and application stack."
    }
  ]

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="text-white">
      {/* Signature Section with Purple Background Image */}
      <div className="relative overflow-hidden rounded-[10px] mx-auto max-w-[300px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1200px] h-[280px] sm:h-[300px] md:h-[260px] lg:h-[250px] flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8">
  {/* Background Image */}
  <Image 
    src={Purple}
    alt='purple gradient background' 
    fill
    className='absolute inset-0 w-full h-full object-cover opacity-75'
  />

  {/* Content */}
  <div className="relative z-10 w-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 md:py-4 lg:py-8">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3 md:gap-6 lg:gap-9 w-full max-w-8xl mx-auto">
      {/* Left text */}
      <div className="flex-1 flex justify-center lg:justify-end text-center lg:text-right px-0">
        <div>
          <ShinyText
            text="Mikey Formby"
            disabled={false}
            speed={6}
            className="Heading1 gradient-white-text leading-[0.8]"
          />
        </div>
      </div>

      {/* Center box */}
      <div className="w-38 h-30 md:w-48 md:h-28 lg:w-90 lg:h-50 bg-gray-300 rounded-[8px] sm:rounded-[10px] md:rounded-xl lg:rounded-2xl p-2 sm:p-3 md:p-5 lg:p-8 flex-shrink-0 flex items-center justify-center">
        {/* Add content here */}
      </div>

      {/* Right text */}
      <div className="flex-1 flex justify-center lg:justify-start text-center lg:text-left px-0 sm:px-1 md:px-2 lg:px-4">
        <h2 className="max-w-[160px] sm:max-w-[180px] md:max-w-[240px] lg:max-w-[300px] leading-[0.9] ">
          <ShinyText
            text="See You On"
            disabled={false}
            speed={6}
            className="Heading1 gradient-white-text block"
          />
          <ShinyText
            text="The Inside"
            disabled={false}
            speed={6}
            className="Heading1 gradient-white-text"
          />
        </h2>
      </div>
    </div>
  </div>
</div>

      {/* FAQ Section */}
      <div className="py-8 sm:py-12 md:py-14 lg:py-16 px-3 sm:px-4 md:px-5 lg:px-6 relative">
        {/* Background Glow Effect */}
        <div className="absolute top-[6rem] left-[6rem] sm:top-[8rem] sm:left-[8rem] md:top-[9rem] md:left-[10rem] lg:top-[10rem] lg:left-[12rem] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[650px] md:h-[500px] lg:w-[800px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 via-purple-300/15 to-transparent blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="m-auto mb-6 sm:mb-8 md:mb-9 lg:mb-10 leading-tight text-center ">
            <ShinyText
              text="Frequently Asked Questions"
              disabled={false}
              speed={6}
              className="Heading2 gradient-white-text"
            />
          </h2>
          
          <div className="space-y-2 w-full sm:w-full md:w-130 lg:w-150 m-auto mb-12 sm:mb-16 md:mb-18 lg:mb-20">
            {faqData.map((faq: FAQItem, index: number) => (
              <div key={index} style={{ backgroundColor: 'rgba(33, 34, 38, 0.25)' }} className="border border-gray-900 rounded-[7px] transition-all duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-2 sm:p-2.5 md:p-3 text-left hover:bg-opacity-40 transition-all duration-200"
                >
                  <span className="subtextpt2 text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div className="text-gray-400 flex-shrink-0 transition-transform duration-200">
                    {openFAQ === index ? (
                      // Minus icon when open
                      <svg className="w-4 h-3 sm:w-5 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      // Plus icon when closed
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {/* Answer section with smooth animation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-2 sm:p-2.5 md:p-3">
                    <p className="subtext1 ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Offer/>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6">
        {/* Copyright Text */}
        <div>
          <p className="m-auto subtext1 leading-relaxed text-center max-w-4xl ">
            © 2025 <span className="font-medium text-white">Voice AI</span> All rights reserved. This website, its content, and all materials contained herein are protected by copyright, trademark, and 
            other intellectual property laws. Unauthorized use, reproduction, or distribution of any content, including text, images, logos, or designs, is 
            strictly prohibited without the express written consent of <span className="font-medium text-white">Voice AI</span>. Any unauthorized use may result in legal action. The trademarks and 
            service name displayed on this website are the property of Voice AI and cannot be used without permission. By using this website, you agree 
            to comply with all applicable laws and our Terms of Use and Privacy Policy. For any inquiries or permissions, please contact us at
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center py-6 sm:py-8 md:py-9 lg:py-10">
          <p className="subtextpt2">
            Copyright © 2025 Voice AI
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section13