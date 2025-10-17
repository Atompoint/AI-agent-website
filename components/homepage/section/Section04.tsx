import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'


const Section04 = () => {
  return (
    <div className='flex flex-col items-center px-3 sm:px-3 md:px-5 lg:px-12 relative'>
      <div
        className="relative text-center z-10 mt-4 sm:mt-6 md:mt-8 2xl:text-[60px] xl:text-[42px] lg:text-[38px] md:text-[30px] sm:text-[25px] text-[23px] leading-7 lg:leading-12 md:leading-8 2xl:leading-17 Heading2"
       
      >
        <div className='inline-block'>
          <ShinyText text="Introducing" speed={5} className="gradient-white-text inline-block" />
          {' '}
          <ShinyText text="VoiceAgent AI" speed={5} className=" gradient-mask-text inline-block" />
        </div>
      </div> 
      
      {/* Subtitle - Responsive spacing and text */}
      <div 
      style={{
        fontSize: 'clamp(13px, 2.73vw - 19px, 23px)',
        fontWeight: 300,
        color: 'white',
        
      }}
      
      
      className='text-center mt-5 text-white 2xl:text-[23px] xl:text-[16.27px] lg:text-[15px] text-[13px]'>
        The Game-Changer That's Making "Silent" Websites Extinct
      </div>
      
      {/* Image Container with Glow Effect - Responsive sizing */}
      <div className="relative w-full max-w-[1300px]">
       

       
        
        {/* Main Image with Shine Border - Responsive border and padding */}
        <div className="relative w-full flex justify-center mt-[-6%]">
          <Image
            src="/assets/images/section04/mainimage1.png"
            width={1200}
            height={900}
            alt="product web image"
            className="object-contain h-auto w-full 2xl:w-[1295px] 2xl:h-[745px] xl:w-[922px] xl:h-[617px] lg:w-[600px] lg:h-[400px] md:w-[500px] md:h-[350px] sm:w-[600px] sm:h-[auto] relative z-10 rounded-2xl"
            priority
          />
        </div>

      </div>
      
      {/* Down Arrow - Responsive spacing */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <DownArrow/>
      </div>
    </div>
  )
}

export default Section04