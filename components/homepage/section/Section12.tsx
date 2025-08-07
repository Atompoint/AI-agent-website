import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';

const Section12 = () => {
  return (
 
    <div className=" text-white px-6">
      <div className="max-w-5xl mx-auto">
        

      <h2
  className="relative font-radio font-normal text-center text-[24px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[52px] leading-[1.05] mb-4 sm:mb-6"
  style={{
    textTransform: 'capitalize',
    color: 'transparent',
    background:
      'linear-gradient(263.99deg, #0C0C0C -5.95%, #FFFFFF 24.91%, #919191 47.69%, #FFFFFF 71.93%, #0C0C0C 107.2%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }}
>

  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="The Only Thing Standing Between" speed={5} className="Heading" />  
    
  </div>
  <div className="m-0 leading-[1] -mt-2">
    <ShinyText text="You and More Sales Is This" speed={5} className="Heading" />  
    {' '}
    <ShinyText text="One Click" speed={5} className="Heading gradient-mask-text" />  
    
  </div>
</h2>

          <div className="grid md:grid-cols-2 gap-1 py-10 ">
           
            
            <div className="space-y-3 w-100 text-[13px] text-gray-300">
         <p>
          If you're on the fence, ask yourself: How much money have you already lost from visitors who left empty-handed?
          </p> 

          <p>Every day you wait, your competitors are stealing your customers.
The math is simple:</p>

<p className='font-medium text-white'>
  Keep doing nothing = Keep losing 67% of visitors
Add VoiceAgent AI = Start converting them into customers
</p>


<p>
You're one click away from a 24/7 sales machine. This isn't just another tool—it's the difference between a website that costs you money and one that makes you money.
</p>

<p>This deal disappears after launch.</p>

<p>
 
Stay stuck with a silent website that bleeds sales, or start dominating your competition. Don't let another visitor walk away
</p>
<p>
  Click below and start converting today.
</p>



            </div>
             <div className="bg-[#797979] h-95 w-[480px] rounded-[10px]"></div>
          </div>
      </div>
      <DownArrow/>
    </div>
  )
}



export default Section12