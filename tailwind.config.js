/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "#0d0d0d",
        accent: "#a3e635", // Lime-400 adaptado
        muted: "#9ca3af", // Gray-400
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(0,0,0,0.1)',
        'inner-sm': 'inset 0 1px 2px rgba(255,255,255,0.05)',
      },
      spacing: {
        'section': '6rem',
      },
      backgroundImage: {
  'hero-dark': 'linear-gradient(to bottom right, #0d0d0d, #1a1a1a)',
},

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
