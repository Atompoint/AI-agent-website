'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Offer from './Offer'

interface FAQItem {
  question: string
  answer: string
}

const Section14: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData: FAQItem[] = [
    {
      question: "What compliance standards does Cloudways support?",
      answer: "Cloudways provides real-time alerts and actionable insights whenever your infrastructure deviates from best practices or compliance. So you can address issues before they become critical."
    },
    {
      question: "How does Cloudways help prepare for audits?",
      answer: "Cloudways helps prepare for audits by providing comprehensive documentation, automated compliance reporting, and real-time monitoring of your infrastructure to ensure you meet all regulatory requirements."
    },
    {
      question: "Will Cloudways alert me if we fall out of compliance?",
      answer: "Yes, Cloudways provides real-time alerts and actionable insights whenever your infrastructure deviates from best practices or compliance. So you can address issues before they become critical."
    },
    {
      question: "What compliance standards does Cloudways support?",
      answer: "Cloudways supports major compliance standards including SOC 2, GDPR, HIPAA, PCI DSS, and other industry-specific regulations to ensure your infrastructure meets the highest security and compliance requirements."
    },
    {
      question: "What compliance standards does Cloudways support?",
      answer: "Cloudways supports a wide range of compliance standards and provides tools and resources to help you maintain compliance across your entire infrastructure and application stack."
    }
  ]

  const toggleFAQ = (index: number): void => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className=" text-white">
      {/* Signature Section with Purple Background Image */}
    <div className="relative overflow-hidden rounded-2xl mx-auto my-8 max-w-[1200px] h-[250] flex items-center justify-center">
  {/* Background Image */}
  <Image 
    src='/purple.jpg' 
    alt='purple gradient background' 
    fill
    className='absolute inset-0 w-full h-full object-cover opacity-75'
  />

  {/* Content */}
  <div className="relative z-10 w-full px-7">
    <div className="flex flex-col md:flex-row items-center justify-center gap-9 text-center md:text-left">
      {/* Left text */}
      <div>
        <h2 className="gradient-white-text text-4xl md:text-5xl font-medium mb-2">
          Mikey Formby
        </h2>
      </div>

      {/* Center box */}
      <div className="bg-gray-300 rounded-2xl p-7 w-90 h-50 flex items-center justify-center">
        {/* Add content here */}
      </div>

      {/* Right text */}
      <div>
        <h2 className="gradient-white-text text-4xl md:text-5xl font-medium leading-tight">
          See You On<br />
          The Inside!
        </h2>
      </div>
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="gradient-white-text text-4xl md:text-5xl font-medium text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 w-180 m-auto mb-20">
            {faqData.map((faq: FAQItem, index: number) => (
              <div key={index} className="bg-white/10 border border-gray-700 rounded-[10px]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-800 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <div className="text-gray-400 flex-shrink-0">
                    {openFAQ === index ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
          <Offer/>
      </div>

    </div>
  )
}

export default Section14