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
      {/* Footer section with glow effect */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[150px] rounded-full bg-gradient-to-br from-purple-500/20 via-purple-300/15 to-transparent blur-[80px] -z-10" />
        
        {/* Footer Links */}
        <footer className="=relative z-10">
          <div className="flex flex-wrap justify-center items-center  w-full max-w-screen-xl mx-auto py-10 ">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="subtext1 hover:text-purple-300 transition-colors duration-200 px-8 py-1"
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