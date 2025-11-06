/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-blue': 'hsl(220, 69%, 20%)',
        'liberty-gold': 'hsl(46, 87%, 65%)',
        'patriot-red': 'hsl(2, 74%, 58%)',
        'garden-green': 'hsl(140, 65%, 42%)',
        'parchment': 'hsl(45, 23%, 97%)',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'warm': '0 4px 6px -1px rgba(234, 179, 8, 0.3), 0 2px 4px -1px rgba(234, 179, 8, 0.2)',
        'noble': '0 10px 15px -3px rgba(30, 58, 138, 0.3), 0 4px 6px -2px rgba(30, 58, 138, 0.2)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(2, 74%, 58%) 0%, hsl(220, 69%, 20%) 100%)',
        'gradient-patriot': 'linear-gradient(135deg, hsl(2, 74%, 58%) 0%, hsl(2, 74%, 48%) 100%)',
        'gradient-garden': 'linear-gradient(135deg, hsl(140, 65%, 42%) 0%, hsl(140, 65%, 32%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
