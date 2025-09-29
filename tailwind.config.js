/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: { min: "426px", max: "767px" }, 
      md: { min: "768px", max: "1365px" }, 
      lg: { min: "1366px", max: "1535px" }, 
      xl: { min: "1536px", max: "1919px" }, 
      "2xl": { min: "1920px" },             
      },
  
    extend: {
      fontFamily: {
        
        manrope: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        logo: ['var(--font-questrial)', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        glow: {
          '0%, 100%': {
            opacity: '0.8',
            filter: 'blur(8px)',
          },
          '50%': {
            opacity: '1',
            filter: 'blur(12px)',
          },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
