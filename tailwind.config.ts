import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					50: 'hsl(var(--primary-50))',
					100: 'hsl(var(--primary-100))',
					200: 'hsl(var(--primary-200))',
					300: 'hsl(var(--primary-300))',
					400: 'hsl(var(--primary-400))',
					500: 'hsl(var(--primary-500))',
					600: 'hsl(var(--primary-600))',
					700: 'hsl(var(--primary-700))',
					800: 'hsl(var(--primary-800))',
					900: 'hsl(var(--primary-900))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					blue: 'hsl(var(--accent-blue))',
					slate: 'hsl(var(--accent-slate))',
					gray: 'hsl(var(--accent-gray))',
					light: 'hsl(var(--accent-light))',
					success: 'hsl(var(--accent-success))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(1deg)' },
					'66%': { transform: 'translateY(-10px) rotate(-1deg)' }
				},
				'pulseGlow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'slideInBottom': {
					from: { opacity: '0', transform: 'translateY(100%)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slideInLeft': {
					from: { opacity: '0', transform: 'translateX(-100%)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'slideInRight': {
					from: { opacity: '0', transform: 'translateX(100%)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'zoomIn': {
					from: { opacity: '0', transform: 'scale(0.5)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'fadeInUp': {
					from: { opacity: '0', transform: 'translateY(60px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'gradientX': {
					'0%, 100%': { 
						backgroundSize: '200% 200%', 
						backgroundPosition: 'left center' 
					},
					'50%': { 
						backgroundSize: '200% 200%', 
						backgroundPosition: 'right center' 
					}
				},
				'gradientXY': {
					'0%, 100%': { 
						backgroundSize: '400% 400%', 
						backgroundPosition: 'left center' 
					},
					'25%': { 
						backgroundSize: '400% 400%', 
						backgroundPosition: 'right center' 
					},
					'50%': { 
						backgroundSize: '400% 400%', 
						backgroundPosition: 'right bottom' 
					},
					'75%': { 
						backgroundSize: '400% 400%', 
						backgroundPosition: 'left bottom' 
					}
				},
				'bounceIn': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.3) rotate(-10deg)' 
					},
					'50%': { 
						opacity: '1', 
						transform: 'scale(1.1) rotate(5deg)' 
					},
					'70%': { 
						transform: 'scale(0.9) rotate(-2deg)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) rotate(0deg)' 
					}
				},
				'scaleIn': {
					from: { 
						opacity: '0', 
						transform: 'scale(0.8) translateY(20px)' 
					},
					to: { 
						opacity: '1', 
						transform: 'scale(1) translateY(0)' 
					}
				},
				'wiggle': {
					'0%, 7%, 14%, 21%, 28%, 35%, 42%, 49%, 56%, 63%, 70%, 77%, 84%, 91%, 98%, 100%': {
						transform: 'rotate(0deg)'
					},
					'3.5%, 10.5%, 17.5%, 24.5%, 31.5%, 38.5%, 45.5%, 52.5%, 59.5%, 66.5%, 73.5%, 80.5%, 87.5%, 94.5%': {
						transform: 'rotate(2deg)'
					}
				},
				'drop': {
					'0%': { 
						transform: 'translateY(-100px) scale(0.8)', 
						opacity: '0' 
					},
					'10%': { 
						opacity: '1', 
						transform: 'translateY(-80px) scale(0.9)' 
					},
					'20%': { 
						transform: 'translateY(-60px) scale(1)' 
					},
					'80%': { 
						transform: 'translateY(60px) scale(1)', 
						opacity: '1' 
					},
					'90%': { 
						transform: 'translateY(80px) scale(0.9)', 
						opacity: '0.8' 
					},
					'100%': { 
						transform: 'translateY(100px) scale(0.8)', 
						opacity: '0' 
					}
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
				'slide-in-bottom': 'slideInBottom 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
				'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
				'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
				'zoom-in': 'zoomIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
				'gradient-x': 'gradientX 3s ease infinite',
				'gradient-xy': 'gradientXY 4s ease infinite',
				'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'scale-in': 'scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'drop': 'drop 3s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
