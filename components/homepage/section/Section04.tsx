import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';
import Image from 'next/image'
import { ShineBorder } from "@/components/magicui/shine-border";

const Section04 = () => {
  return (
    <div className='flex flex-col items-center'>
    
    <h2 className="flex justify-center text-4xl md:text-5xl lg:text-6xl leading-tight">
         <ShinyText text="Introducing VoiceAgent AI" disabled={false} speed={6} className='Heading'/>
      </h2>
        <div className='sub-text py-6'>The Game-Changer That's Making "Silent" Websites Extinct
</div>
    
    <div className="relative rounded-2xl overflow-hidden z-10 p-1">
     <Image
       src="/assets/images/main1.png"
       width={900}
       height={600}
       alt="product web image"
       className="object-contain max-w-full h-auto relative z-10 rounded-2xl"
     />
     <ShineBorder
       borderWidth={1}
       duration={23}
       shineColor={["#C67DFF", "#3420C6", "#0079FF00"]}
       className="absolute inset-0 rounded-2xl pointer-events-none"
     />
   </div>
      <DownArrow/>
      </div>
  )
}

export default Section04