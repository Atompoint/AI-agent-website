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
    <div className="relative border-t-[0.1px] border-t-white/20">
      {/* Footer section with glow effect */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -top-6 sm:-top-8 md:-top-9 lg:-top-10 left-1/2 -translate-x-1/2 w-[400px] h-[80px] sm:w-[600px] sm:h-[100px] md:w-[800px] md:h-[125px] lg:w-[1000px] lg:h-[150px] rounded-full bg-gradient-to-br from-purple-500/20 via-purple-300/15 to-transparent blur-[40px] sm:blur-[50px] md:blur-[65px] lg:blur-[80px] -z-10" />
        
        {/* Footer Links */}
        <footer className="relative z-10 sm:px-15 px-10">
          <div className="flex flex-wrap justify-center items-center px-8 gap-5 sm:gap-5  md:gap-10 lg:gap-12 xl:gap-18 2xl:gap-25 w-full md:max-w-screen-xl mx-auto py-6 sm:py-8 md:py-9 lg:py-10 xl:py-10 2xl:py-15">
            {footerLinks.map((link, index) => (
              <a
            
                key={index}
                href={link.href}
                className="font-normal 2xl:text-[20px] xl:text-[14.23px] lg:text-[13px] md:text-[12px] sm:text-[10px] text-[10px]"
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