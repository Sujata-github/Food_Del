/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: '#ff6347'
      },
      fontSize: {
        dynamic: 'max(4.5vw, 22px)'
      },
      animation: {
        spin360: 'spin360 1s linear infinite'
      },
      keyframes: {
        spin360: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      }
    }
  },
  plugins: []
}
