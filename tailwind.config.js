/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9333ea',
        secondary: '#3b82f6',
        dark: '#0D0D0D',
      },
      animation: {
        'float': 'float 3s infinite ease-in-out',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '50%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0.5' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      textShadow: {
        'lg': '0 0 10px rgba(147, 51, 234, 0.7)',
      },
    },
  },
  plugins: [],
}

