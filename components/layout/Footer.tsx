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
    <div className="relative">
      {/* Elliptical purple glow effect - positioned outside/above footer */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 w-296 h-34 opacity-20 blur-2xl rounded-full pointer-events-none"
        style={{
          background: '#5A27B1',
        }}
      />
      
      {/* Secondary elliptical glow for more intensity */}
      <div 
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-280 h-46 opacity-4 blur-xl rounded-full pointer-events-none"
        style={{
          background: '#5A27B1',
        }}
      />

      {/* Footer section */}
      <footer className="text-white px-6 relative z-10">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-15 w-full max-w-screen-xl mx-auto py-10 px-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-light text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Footer