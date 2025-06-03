import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Trupeer-inspired color system
        trupeer: {
          // Primary brand colors (purple/blue gradient system)
          purple: {
            50: "#faf7ff",   // Very light purple
            100: "#f3f0ff",  // Light purple
            200: "#e9e2ff",  // Soft purple
            300: "#d6c7ff",  // Medium purple
            400: "#b89dff",  // Light brand purple
            500: "#8b5cf6",  // Primary purple (Trupeer main)
            600: "#7c3aed",  // Deep purple
            700: "#6d28d9",  // Darker purple  
            800: "#5b21b6",  // Very deep purple
            900: "#4c1d95",  // Darkest purple
          },
          blue: {
            50: "#eff6ff",   // Very light blue
            100: "#dbeafe",  // Light blue
            200: "#bfdbfe",  // Soft blue
            300: "#93c5fd",  // Medium blue
            400: "#60a5fa",  // Light brand blue
            500: "#3b82f6",  // Primary blue
            600: "#2563eb",  // Deep blue
            700: "#1d4ed8",  // Darker blue
            800: "#1e40af",  // Very deep blue
            900: "#1e3a8a",  // Darkest blue
          },
          // Success & accent colors
          green: {
            50: "#f0fdf4",   // Very light green
            100: "#dcfce7",  // Light green  
            200: "#bbf7d0",  // Soft green
            300: "#86efac",  // Medium green
            400: "#4ade80",  // Light brand green
            500: "#22c55e",  // Primary green (success)
            600: "#16a34a",  // Deep green
            700: "#15803d",  // Darker green
            800: "#166534",  // Very deep green
            900: "#14532d",  // Darkest green
          },
          // Neutral system (clean grays)
          gray: {
            50: "#f9fafb",   // Almost white
            100: "#f3f4f6",  // Very light gray
            200: "#e5e7eb",  // Light gray
            300: "#d1d5db",  // Soft gray
            400: "#9ca3af",  // Medium gray
            500: "#6b7280",  // Gray
            600: "#4b5563",  // Dark gray
            700: "#374151",  // Darker gray
            800: "#1f2937",  // Very dark gray
            900: "#111827",  // Almost black
          },
        },
        // Legacy support for existing components
        forumscout: {
          purple: "#8b5cf6",      // Maps to trupeer-purple-500
          "purple-dark": "#7c3aed", // Maps to trupeer-purple-600
          "purple-light": "#b89dff", // Maps to trupeer-purple-400
          "accent-blue": "#3b82f6",   // Maps to trupeer-blue-500
          "accent-green": "#22c55e",  // Maps to trupeer-green-500
          "accent-orange": "#f97316", // Kept for existing components
          "navy": "#1e3a8a",          // Maps to trupeer-blue-900
          "navy-light": "#1d4ed8",    // Maps to trupeer-blue-700
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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px)'
          }
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        'breathe': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.8'
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '1'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          }
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-out': 'fade-out 0.4s ease-out forwards',
        'slide-in': 'slide-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'breathe': 'breathe 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite'
			},
      backgroundSize: {
        '300%': '300%',
      }
		}
	},
	plugins: [tailwindcssAnimate]
} satisfies Config;
