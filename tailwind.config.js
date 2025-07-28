/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // include this if using `pages/`
  ],
  theme: {
    extend: {
      fontFamily: {
        radio: ['"Radio Grotesk"', 'sans-serif'],
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
      },
      keyframes: {
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
    },
  },
  plugins: [],
}
