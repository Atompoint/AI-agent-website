import React from 'react'
import {  Smartphone, Monitor, Shield } from 'lucide-react';
const Offer = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
          {/* Limited Time Offer Header */}
          <div className="mb-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl gradient-white-text">
              Limited Time Offer
            </h3>
          </div>

          {/* Purple Gradient Subheading */}
          <div className="mb-12">
            <h4 className="text-2xl md:text-3xl lg:text-4xl">
              <span className="gradient-mask-text">
                Only A One time Investment Today!
              </span>
            </h4>
          </div>

          {/* CTA Button with Glow Effect */}
          <div className="mb-12">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl font-medium text-white bg-black rounded-full border-2 border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3),0_0_40px_rgba(147,51,234,0.2)] hover:shadow-[0_0_30px_rgba(147,51,234,0.4),0_0_60px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105">
              GET STARTED WITH VOICER - INSTANT ACCESS
            </button>
          </div>

          {/* Payment Methods & Platform Icons */}
          <div className="flex flex-col items-center gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              {/* MasterCard */}
              <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                <div className="flex">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full -ml-1"></div>
                </div>
              </div>
              
              {/* American Express */}
              <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AE</span>
              </div>
              
              {/* Visa */}
              <div className="w-12 h-8 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">VISA</span>
              </div>
              
              {/* PayPal */}
              <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">PP</span>
              </div>
            </div>

            {/* Platform Compatibility & Cloud */}
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                <span>Windows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <span>Mac</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile</span>
              </div>
              <div className="text-gray-500">
                <span>Cloud Based - Mac, Windows</span>
                <br />
                <span>& Tablet Compatible</span>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="flex items-center gap-3 mt-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="text-left">
                <div className="text-white text-lg font-medium">14</div>
                <div className="text-gray-300 text-sm">DAYS</div>
              </div>
              <div className="text-left">
                <div className="text-white text-lg font-medium">MONEY BACK</div>
                <div className="text-white text-lg font-medium">GUARANTEE</div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Offer