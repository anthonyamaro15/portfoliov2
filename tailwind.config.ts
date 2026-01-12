import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', 'class'],
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
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			xs: '0',
  			md: '0',
  			lg: '0',
  			sm: '0',
  			bento: '0',
  			'bento-inner': '0',
  			'2xl': '0',
  			'3xl': '0'
  		},
  		boxShadow: {
  			card: '0 1px 0 rgba(255,255,255,0.04), 0 8px 20px rgba(0,0,0,0.35)'
  		},
  		maxWidth: {
  			container: '1100px'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-up': {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'scale-in': {
  				'0%': { opacity: '0', transform: 'scale(0.9)' },
  				'100%': { opacity: '1', transform: 'scale(1)' }
  			},
  			'pulse-soft': {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' }
  			},
  			'shimmer': {
  				'0%': { transform: 'translateX(-200%)' },
  				'100%': { transform: 'translateX(200%)' }
  			},
  			'draw-line': {
  				'0%': { transform: 'scaleY(0)' },
  				'100%': { transform: 'scaleY(1)' }
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'glow-pulse': {
  				'0%, 100%': { opacity: '0.5' },
  				'50%': { opacity: '1' }
  			},
  			'gradient-shift': {
  				'0%': { backgroundPosition: '0% 50%' },
  				'50%': { backgroundPosition: '100% 50%' },
  				'100%': { backgroundPosition: '0% 50%' }
  			},
  			'text-reveal': {
  				'0%': { opacity: '0', transform: 'translateY(20px) rotateX(-10deg)' },
  				'100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' }
  			},
  			'slide-up': {
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'slide-down': {
  				'0%': { opacity: '0', transform: 'translateY(-10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.6s ease-out both',
  			'scale-in': 'scale-in 0.4s ease-out both',
  			'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
  			'shimmer': 'shimmer 2s linear infinite',
  			'draw-line': 'draw-line 1s ease-out both',
  			'float': 'float 6s ease-in-out infinite',
  			'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
  			'gradient-shift': 'gradient-shift 8s ease infinite',
  			'text-reveal': 'text-reveal 0.8s ease-out forwards',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'slide-down': 'slide-down 0.5s ease-out'
  		},
  		transitionTimingFunction: {
  			'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  			'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		transitionDuration: {
  			'400': '400ms',
  			'600': '600ms'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
