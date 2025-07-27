import React from 'react'

const DownArrow = () => {
  return (
   <div className="space-y-4">
        
        <div className="relative flex justify-center items-center h-40 bg-black rounded-lg">
          <div className="absolute w-24 h-24 rounded-full blur-3xl bg-[#BF84F9] opacity-40 animate-pulse" />
          <div className="relative z-10">
            <div className="relative animate-bounce">
              {/* First chevron */}
              <div 
                className="w-8 h-8 border-r-4 border-b-4 border-transparent rotate-45 mb-2"
                style={{
                  borderImage: 'linear-gradient(93.89deg, #5A27B1 29.91%, #DEBFFF 41.47%, #5A27B1 55.16%, #BF84F9 71.42%) 1',
                  borderRightColor: '#BF84F9',
                  borderBottomColor: '#BF84F9',
                  filter: 'drop-shadow(0 0 8px #BF84F9)'
                }}
              />
              {/* Second chevron */}
              <div 
                className="w-8 h-8 border-r-4 border-b-4 border-transparent rotate-45 -mt-4"
                style={{
                  borderImage: 'linear-gradient(93.89deg, #5A27B1 29.91%, #DEBFFF 41.47%, #5A27B1 55.16%, #BF84F9 71.42%) 1',
                  borderRightColor: '#BF84F9',
                  borderBottomColor: '#BF84F9',
                  filter: 'drop-shadow(0 0 8px #BF84F9)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default DownArrow