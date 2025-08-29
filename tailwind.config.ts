import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0B0D',
        surface: '#0C0F14',
        surfaceStrong: '#090B10',
        borderD: '#1A2028',
        text: '#E7E9EE',
        muted: '#9AA3AF',
        accent: '#3ECF8E',
      },
      borderRadius: {
        xs: '6px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.04), 0 8px 20px rgba(0,0,0,0.35)',
      },
      maxWidth: {
        container: '1100px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
