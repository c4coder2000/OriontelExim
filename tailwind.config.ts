import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // ORIONTEL EXIM Brand Colors
        "bg-primary": "var(--bg-primary)",
        "surface": "var(--surface)",
        "surface-border": "var(--surface-border)",
        "primary-start": "var(--primary-start)",
        "primary-end": "var(--primary-end)",
        "accent": "var(--accent)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        
        // Shadcn base colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        "accent-color": {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        space: ["var(--font-space)"],
        sans: ["var(--font-inter)"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { 
            transform: "translate3d(0, 0px, 0) rotate(0deg)" 
          },
          "50%": { 
            transform: "translate3d(0, -20px, 0) rotate(180deg)" 
          },
        },
        glow: {
          from: { opacity: "0.5" },
          to: { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        fadeUp: {
          from: { 
            opacity: "0", 
            transform: "translateY(30px)" 
          },
          to: { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        scaleIn: {
          from: { 
            opacity: "0", 
            transform: "scale(0.9)" 
          },
          to: { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px var(--primary-start), 0 0 40px var(--primary-start)",
          },
          "50%": {
            boxShadow: "0 0 30px var(--primary-end), 0 0 60px var(--primary-end)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
