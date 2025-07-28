import React from 'react'
import DownArrow from './DownArrow'
import Image from 'next/image'

const Section04 = () => {
  return (
    <div className='flex flex-col items-center'>
    
    <h1 className="flex justify-center text-4xl md:text-5xl lg:text-6xl leading-tight">
        <span className="gradient-white-text">Introducing </span>
        <span className="gradient-mask-text px-5">
          VoiceAgent AI
        </span>
      </h1>
        <div className='gradient-white-text mt-0.5'>The Game-Changer That's Making "Silent" Websites Extinct
</div>
    
    <div>
       <Image
                    src="/main.png"
                    width={900}
                    height={600}
                    alt="product web image"
                    className="object-contain max-w-full h-auto relative z-10"
                  />
      
      
      </div>
      <DownArrow/>
      </div>
  )
}

export default Section04