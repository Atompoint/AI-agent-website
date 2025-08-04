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
    <div className=" text-white border-b border-gray-400">
      {/* Signature Section with Purple Background Image */}
      <div className="relative overflow-hidden rounded-2xl mx-auto  max-w-[1200px] h-[250] flex items-center justify-center">
        {/* Background Image */}
        <Image 
          src={Purple}
          alt='purple gradient background' 
          fill
          className='absolute inset-0 w-full h-full object-cover opacity-75'
        />

        {/* Content */}
        <div className="relative z-10 w-full px-7">
          <div className="flex flex-col md:flex-row items-center justify-center gap-9 text-center md:text-left">
            {/* Left text */}
            <div>
              <h2 className="m-auto mb-10 leading-tight text-center">
                <ShinyText
                  text="Mikey Formby"
                  disabled={false}
                  speed={6}
                  className="font-radio font-medium text-[54px]"
                />
              </h2>
            </div>

            {/* Center box */}
            <div className="bg-gray-300 rounded-2xl p-7 w-90 h-50 flex items-center justify-center">
              {/* Add content here */}
            </div>

            {/* Right text */}
            <div>
              <h2 className="m-auto mb-10 max-w-[300px] leading-tight text-center">
                <ShinyText
                  text=" See You On "
                  disabled={false}
                  speed={6}
                  className="font-radio font-medium text-[54px]"
                />
                <ShinyText
                  text="The Inside"
                  disabled={false}
                  speed={6}
                  className="font-radio font-medium text-[54px]"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="m-auto mb-10 leading-tight text-center">
            <ShinyText
              text="Frequently Asked Questions"
              disabled={false}
              speed={6}
              className="Heading"
            />
          </h2>
          
          <div className="space-y-2 w-150 m-auto mb-20">
            {faqData.map((faq: FAQItem, index: number) => (
              <div key={index} style={{ backgroundColor: 'rgba(33, 34, 38, 0.25)' }} className="border border-gray-900 rounded-[7px] transition-all duration-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-opacity-40 transition-all duration-200"
                >
                  <span className="text-sm font-semibold text-white ">
                    {faq.question}
                  </span>
                  <div className="text-gray-400 flex-shrink-0 transition-transform duration-200">
                    {openFAQ === index ? (
                      // Minus icon when open
                      <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      // Plus icon when closed
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {/* Answer section with smooth animation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-3">
                    
                      <p className="text-white/80 text-sm font-light leading-relaxed">
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
       <div className="max-w-6xl mx-auto">
        {/* Copyright Text */}
        <div >
          <p className="m-auto text-sm text-gray-300 leading-relaxed text-center max-w-4xl">
            © 2025 <span className="font-medium text-white">Voice AI</span> All rights reserved. This website, its content, and all materials contained herein are protected by copyright, trademark, and 
            other intellectual property laws. Unauthorized use, reproduction, or distribution of any content, including text, images, logos, or designs, is 
            strictly prohibited without the express written consent of <span className="font-medium text-white">Voice AI</span>. Any unauthorized use may result in legal action. The trademarks and 
            service name displayed on this website are the property of Voice AI and cannot be used without permission. By using this website, you agree 
            to comply with all applicable laws and our Terms of Use and Privacy Policy. For any inquiries or permissions, please contact us at
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center py-10">
          <p className="text-sm text-white font-semibold">
            Copyright © 2025 Voice AI
          </p>
        </div>
      </div>

    </div>
  )
}

export default Section13