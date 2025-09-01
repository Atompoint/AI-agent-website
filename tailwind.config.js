/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
        photon: {
          "0%, 100%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.2" 
          },
          "25%": { 
            transform: "translate(var(--tx, 0), var(--ty, 0)) scale(1.1)",
            opacity: "0.8" 
          },
          "50%": { 
            transform: "translate(0, 0) scale(0.9)",
            opacity: "0.4" 
          },
          "75%": { 
            transform: "translate(calc(-1 * var(--tx, 0)), calc(-1 * var(--ty, 0))) scale(1.05)",
            opacity: "0.7" 
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
        photon: "photon 1s linear infinite",
        beam: "beam 15s ease-in-out infinite alternate",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [],
}
