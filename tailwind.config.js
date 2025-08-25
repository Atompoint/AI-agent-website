/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "640px",   // Small devices
      md: "768px",   // Tablets
      lg: "1024px",  // Laptops
      xl: "1280px",  // Desktops
     
      
    },
    extend: {
      fontFamily: {
        radio: ['"Radio Grotesk"', 'sans-serif'],
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
  plugins: [],
}