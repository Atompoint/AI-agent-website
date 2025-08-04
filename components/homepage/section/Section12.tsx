import React from 'react'
import DownArrow from '../../ui/DownArrow'
import ShinyText from '@/components/ui/ShinyText';

const Section12 = () => {
  return (
 
    <div className=" text-white px-6">
      <div className="max-w-5xl mx-auto">
        

<h2 className="m-auto mb-10 leading-tight text-center">
        <ShinyText
          text="The Only Thing Standing Between"
          disabled={false}
          speed={6}
          className="Heading"
        />
         <ShinyText
          text="You and More Sales Is This One Click"
          disabled={false}
          speed={6}
          className="Heading"
        />
      </h2>

          <div className="grid md:grid-cols-2 gap-2 items-center py-10 ">
           
            
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