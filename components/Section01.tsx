import DownArrow from './DownArrow';
import { Globe, Code, Phone} from 'lucide-react';
import Offer from '@/components/Offer'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background stars/dots */}
     

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
    
        {/* 3 Steps Section */}
        <div className="max-w-4xl mx-auto">
          {/* Steps Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="gradient-white-text">All It Takes Is 3 Simple Steps and </span>
             <span className="gradient-mask-text">You're Done</span>

            </h2>
          </div>

          {/* Steps List */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start gap-8 text-left">
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl lg:text-8xl text-gray-600/40">01</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 flex-1 mt-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">STEP 1</div>
                  <div className="text-white text-lg font-medium">Enter Your Domain Name And Click Add</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8 text-left">
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl lg:text-8xl text-gray-600/40">02</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 flex-1 mt-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">STEP 2</div>
                  <div className="text-white text-lg font-medium">Copy And Paste The Code On Your Website</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8 text-left">
              <div className="flex-shrink-0">
                <span className="text-6xl md:text-7xl lg:text-8xl text-gray-600/40">03</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-4 flex-1 mt-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">STEP 3</div>
                  <div className="text-white text-lg font-medium">Hit The Call Button & Test It Out. You're Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Offer/>
      
        <DownArrow/>
    </div>
  );
}