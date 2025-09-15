'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Purple from '@/public/assets/images/purple.png'
import MikeImage from '@/public/assets/images/mike.png'
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
    <div className="text-white px-4">
      {/* Signature Section with Purple Background Image */}
      <div className="relative overflow-hidden 
                rounded-[8px] sm:rounded-[10px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[20px] 
                mx-auto 
                max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] 
                h-[240px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] 
                flex items-center justify-center 
                px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
  
  {/* Background Image */}
  <Image 
    src={Purple}
    alt='purple gradient background' 
    fill
    className='absolute inset-0 w-full h-full object-cover opacity-75'
  />

  {/* Content */}
  <div className="relative z-10 w-full 
                  px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 
                  py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8">
    
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 
                    items-center justify-between 
                    gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 
                    w-full max-w-8xl mx-auto">
      
      {/* Left text */}
      <div className="flex-1 flex justify-center md:justify-end 
                      text-center md:text-right 
                      px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4 
                      order-1 md:order-1 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[390px] xl:max-w-[400px]">
        <div className="w-full">
          <ShinyText
            text="Mikey Formby"
            disabled={false}
            speed={6}
            className="Heading1 gradient-white-text leading-[0.8]"
           
          />
        </div>
      </div>

      {/* Center box */}
      <div
  className="relative
             w-48 h-32
             sm:w-56 sm:h-36
             md:w-64 md:h-40
             lg:w-72 lg:h-44
             xl:w-80 xl:h-48
             order-2 md:order-2"
>
  <Image
    src={MikeImage}
    alt="Mike Formby"
    fill
    className="object-contain"
    sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, (max-width: 1280px) 18rem, 20rem"
  />
</div>



      {/* Right text */}
      <div className="flex-1 flex justify-center md:justify-start 
                      text-center md:text-left 
                      px-0 sm:px-1 md:px-2 lg:px-3 xl:px-4
                      order-3 md:order-3">
        <div className="max-w-[140px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px]">
          <h2 className="leading-[0.9]">
            <ShinyText
              text="See You On"
              disabled={false}
              speed={6}
              className="Heading1 gradient-white-text block"
             
            />
            <ShinyText
              text="The Inside!"
              disabled={false}
              speed={6}
              className="Heading1 gradient-white-text"
              
            />
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* FAQ Section */}
      <div className="py-8 sm:py-12 md:py-14 lg:py-20 px-3 sm:px-4 md:px-5 lg:px-6 relative">
        {/* Background Glow Effect */}
        <div className="absolute top-[6rem] left-[6rem] sm:top-[8rem] sm:left-[8rem] md:top-[9rem] md:left-[10rem] lg:top-[10rem] lg:left-[12rem] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[650px] md:h-[500px] lg:w-[800px] lg:h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 via-purple-300/15 to-transparent blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="m-auto mb-6 sm:mb-8 md:mb-9 lg:mb-5 leading-tight text-center ">
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