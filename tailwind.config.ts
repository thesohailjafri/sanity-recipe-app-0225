import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--body-font)', 'sans-serif'],
        serif: ['var(--head-font)', 'serif']
      },
      colors: {
        'stone-100': 'hsl(30, 54%, 90%)',
        'stone-150': 'hsl(30, 18%, 87%)',
        'stone-600': 'hsl(30, 10%, 34%)',
        'stone-900': 'hsl(24, 5%, 18%)',
        'brown-800': 'hsl(14, 45%, 36%)',
        'rose-800': 'hsl(332, 51%, 32%)'
      }
    }
  }
  //   plugins: [require("tailwindcss-animate")],
}
export default config
