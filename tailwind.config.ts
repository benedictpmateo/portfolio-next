import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-accent': 'rgb(var(--blue-accent))',
        'blue-major': 'rgb(var(--blue-major))', 
        'background': 'rgb(var(--background))',
        'dark': 'rgb(var(--dark))',
        'gray': 'rgb(var(--gray))', 
        'light': 'rgb(var(--light))',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
export default config
