'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Purple from '@/public/assets/images/purple.png'
import MikeImage from '@/public/assets/images/mike1.png'
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
      <div
        className="overflow-hidden 
                   rounded-[10px] sm:rounded-[11px] md:rounded-[12px] lg:rounded-[15px] xl:rounded-[20px] 2xl:rounded-[34px]
                   mx-auto 
                   max-w-[387px] sm:max-w-full md:max-w-full lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1730px]
                   flex items-center justify-center 
                   px-0 sm:px-2 md:px-5 lg:px-6 xl:px-8 
                   sm:h-[200px] md:h-[260px] lg:h-[300px] xl:h-[320px] 2xl:h-[374px] h-auto
                   bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900"
        style={{
          backgroundImage: `url(${Purple.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Content */}
        <div className="w-full px-0 sm:px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 w-full  mx-auto">
            {/* Right text - Top on mobile, right on desktop */}
            <div className="order-1 sm:order-3 flex-1 w-full sm:w-auto text-center sm:text-left">
             <h1
                   className="relative z-10 text-center md:text-left mx-auto xl:text-[48px] sm:leading-9 xl:leading-14 2xl:leading-19 md:leading-10 lg:leading-12 font-semibold 2xl:text-[73px]  lg:text-[45px] md:text-[40px] text-[30px]"
                   
                 >
                   <div>
                     <ShinyText text="See You On The Inside!" speed={5} className="gradient-white-text pb-0" />
                   </div>
                  
                 </h1>
            </div>

            {/* Center box (Image) */}
            <div className="order-2 sm:order-2 w-full h-full sm:w-[220px] sm:h-auto 
              md:w-[260px] md:h-auto lg:w-[300px] lg:h-auto xl:w-[380px] xl:h-auto
              2xl:w-[516px] 2xl:h-auto mx-auto overflow-hidden flex-shrink-0">
              <Image
                src={MikeImage}
                alt="Mike Formby"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                priority
      
              />
            </div>

            {/* Left text - Bottom on mobile, left on desktop */}
            <div className="order-3 sm:order-1 flex-1 w-full sm:w-auto text-center sm:text-right">
            <h1
        className="relative z-10 text-center mx-auto sm:leading-9 md:leading-12 lg:leading-14 xl:text-[48px] 2xl:leading-25 font-semibold 2xl:text-[73px]  lg:text-[45px] md:text-[40px] text-[30px]"
        
      >
        <div>
          <ShinyText text="Mikey Formby" speed={5} className="gradient-white-text pb-0" />
        </div>
       
      </h1>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div >
        <div className='py-10 md:py-20 lg:py-25 2xl:py-30'>
          {/* FAQ Title */}
          <h1
            className="text-center mx-auto  2xl:mb-[50px] 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[24px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2 mb-[20px]"
          
          >
            <div>
              <ShinyText text="Frequently Asked Questions" speed={5} className="gradient-white-text pb-0" />
            </div>
          </h1>

          {/* FAQ Items */}
          <div className="space-y-3 2xl:space-y-4 max-w-[450px] sm:max-w-[500px] md:max-w-[500px] xl:max-w-[800px] lg:max-w-[700px] 2xl:max-w-[1071px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[23px] m-auto ">
            {faqData.map((faq: FAQItem, index: number) => (
              <div 
                key={index} 
                style={{ backgroundColor: 'rgba(33, 34, 38, 0.25)' }} 
                className="border border-white/17 rounded-[8.5px] transition-all p-2 sm:p-2.5 md:p-3 lg:p-4 xl:p-4 2xl:px-5 2xl:py-4 duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between  text-left hover:bg-opacity-40 transition-all duration-200"
                >
                  <span className="font-semibold  pr-4">
                    {faq.question}
                  </span>
                  <div className="text-white flex-shrink-0 transition-transform duration-200">
                    {openFAQ === index ? (
                      // Minus icon when open
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      // Plus icon when closed
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                </button>
                
                {/* Answer section with smooth animation */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] 2xl:w-[810px] py-3">
                    <p className=" font-light leading-tight">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      <div className='2xl:pb-30 pb-10'> {/* Offer Section */}
        <Offer/></div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-5xl px-4 m:px-6 md:px-10 lg:px-15 2xl:px-0 2xl:mt-10 mt-5 mx-auto">
        {/* Copyright Text */}
        <div>
          <p 
            className="m-auto font-medium text-center 2xl:text-[20px] xl:text-[14.27px] lg:text-[13px] md:text-[13px] sm:text-[13px] text-[12px] leading-5 md:leading-5 lg:leading-6 text-white/80"
          >
            © 2025 <span className="font-semibold text-white">Voice AI</span> All rights reserved. This website, its content, and all materials contained herein are protected by copyright, trademark, and 
            other intellectual property laws. Unauthorized use, reproduction, or distribution of any content, including text, images, logos, or designs, is 
            strictly prohibited without the express written consent of <span className="font-semibold text-white">Voice AI</span>. Any unauthorized use may result in legal action. The trademarks and 
            service name displayed on this website are the property of Voice AI and cannot be used without permission. By using this website, you agree 
            to comply with all applicable laws and our Terms of Use and Privacy Policy. For any inquiries or permissions, please contact us at
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center py-6 sm:py-8 md:py-9 xl:py-10 lg:py-10 2xl:py-15">
          <p  className='font-semibold 2xl:text-[15px] xl:text-[13px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[9px]'>
            Copyright © 2025 Voice AI
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section13