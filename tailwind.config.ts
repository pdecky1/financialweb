import type { Config } from 'tailwindcss'

const config: Config = {
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
          'hero-pattern': "url('/image.png')",
          'heroBank-pattern': "url('/image-1.png')",
          'heroCrypto-pattern': "url('/image-2.png')",
          'heroFinance-pattern': "url('/image-3.png')",
          'heroWork-pattern': "url('/image-4.png')",
      },
      boxShadow: {
        'shadow-inner-2': 'inset 0 2px 4px 4px rgb(0 0 0 / 0.10)',
      }
    },
  },
  plugins: [],
}
export default config
