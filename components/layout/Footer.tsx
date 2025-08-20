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
    <div className="relative px-3 sm:px-4 md:px-5 lg:px-6">
      {/* Footer section with glow effect */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -top-6 sm:-top-8 md:-top-9 lg:-top-10 left-1/2 -translate-x-1/2 w-[400px] h-[80px] sm:w-[600px] sm:h-[100px] md:w-[800px] md:h-[125px] lg:w-[1000px] lg:h-[150px] rounded-full bg-gradient-to-br from-purple-500/20 via-purple-300/15 to-transparent blur-[40px] sm:blur-[50px] md:blur-[65px] lg:blur-[80px] -z-10" />
        
        {/* Footer Links */}
        <footer className="relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-0 w-full max-w-screen-xl mx-auto py-6 sm:py-8 md:py-9 lg:py-10">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="subtext1 hover:text-purple-300 transition-colors duration-200 px-3 py-1 sm:px-4 sm:py-1 md:px-6 md:py-1 lg:px-8 lg:py-1 text-sm sm:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer