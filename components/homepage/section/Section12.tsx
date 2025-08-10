import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';

const Section12 = () => {
  return (
 
    <div className="px-6">
      <div className="max-w-5xl mx-auto">
      <div
  className="relative text-center z-10 mb-10"
  style={{
     textTransform: 'capitalize',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  
  }}
>
<div >
    <ShinyText text="The Only Thing Standing Between" speed={5} className="Heading2 gradient-white-text" />  
    
  </div>
  <div className="flex items-center justify-center space-x-3">
    <ShinyText text="You and More Sales Is This" speed={5} className="Heading2 gradient-white-text" />  
   
    <ShinyText text="One Click" speed={5} className="Heading2 gradient-mask-text" />  
    
  </div>
</div>  

      

          <div className="grid grid-cols-2 gap-1 py-10 ">
           
            
            <div className="space-y-4 w-100 subtext1">
         <p>
          If you're on the fence, ask yourself: How much money have you already lost from visitors who left empty-handed?
          </p> 

          <p>Every day you wait, your competitors are stealing your customers.
The math is simple:</p>
<p><span className='font-semibold '>
  Keep doing nothing = Keep losing 67% of visitors
Add VoiceAgent AI = Start converting them into customers
</span></p>



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