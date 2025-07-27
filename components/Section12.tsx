import React from 'react'
import DownArrow from './DownArrow'

const Section12 = () => {
  return (
 
    <div className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
          The Only Thing Standing Between<br />
          You and More Sales Is This One <span className="text-gray-400">Click</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              If you're on the fence, ask yourself: "How much money have you 
              already lost from visitors who left empty-handed?"
            </p>
            
            <p className="text-lg leading-relaxed">
              Every day you wait, your competitors are stealing your customers. 
              The math is simple:
            </p>
            
            <p className="text-lg leading-relaxed">
              Keep doing nothing = Keep losing 97% of visitors<br />
              Add VoiceAgent AI = Start converting them into customers
            </p>
            
            <p className="text-lg leading-relaxed">
              You're one click away from a 24/7 sales machine. This isn't just 
              another tool - it's the difference between a website that costs you 
              money and one that makes you money.
            </p>
            
            <p className="text-lg leading-relaxed font-medium text-white">
              This deal disappears after launch.
            </p>
            
            <p className="text-lg leading-relaxed">
              Stay stuck with a silent website that bleeds sales, or start 
              dominating your competition. Don't let another visitor walk away.
            </p>
            
            <p className="text-lg leading-relaxed font-medium text-white">
              Click below and start converting today.
            </p>
          </div>
          
          <div className="bg-gray-700 h-80 rounded-lg"></div>
        </div>
      </div>
      <DownArrow/>
    </div>
  )
}



export default Section12