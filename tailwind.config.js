/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        materialYou: {
          primary: "#4f6630",
          "primary-content": "#ffffff",
          secondary: "#dfe6cf",
          "secondary-content": "#46483F",
          neutral: "#f5f4ec",
          "base-100": "#fefcf7",
        }
      },
      "light"
    ]
  }
}
