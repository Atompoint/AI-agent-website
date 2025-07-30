import React from 'react'

const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Login', href: '#' },
    { name: 'Reset', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Terms Of Service', href: '#' }
  ]

  return (
    <footer className="text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Copyright Text */}
        <div className="mb-8">
          <p className="m-auto text-sm text-gray-300 leading-relaxed text-center max-w-2xl">
            © 2025 <span className="font-medium text-white">Voice AI</span> All rights reserved. This website, its content, and all materials contained herein are protected by copyright, trademark, and 
            other intellectual property laws. Unauthorized use, reproduction, or distribution of any content, including text, images, logos, or designs, is 
            strictly prohibited without the express written consent of <span className="font-medium text-white">Voice AI</span>. Any unauthorized use may result in legal action. The trademarks and 
            service name displayed on this website are the property of Voice AI and cannot be used without permission. By using this website, you agree 
            to comply with all applicable laws and our Terms of Use and Privacy Policy. For any inquiries or permissions, please contact us at
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Voice AI
          </p>
        </div>
      </div>

      {/* Full width horizontal line */}
      <hr className="border-t border-gray-600 my-6 w-full" />

      {/* Footer Links - full width container with padding */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 w-full max-w-screen-xl mx-auto px-6">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
