import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        warning: {
          "50": "var(--warning-50)",
          "100": "var(--warning-100)",
          "200": "var(--warning-200)",
          "300": "var(--warning-300)",
          "400": "var(--warning-400)",
          "500": "var(--warning-500)",
          "600": "var(--warning-600)",
          "700": "var(--warning-700)",
          "800": "var(--warning-800)",
          "900": "var(--warning-900)",
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        Gray: {
          "50": "var(--gray-50)",
          "100": "var(--gray-100)",
          "200": "var(--gray-200)",
          "300": "var(--gray-300)",
          "400": "var(--gray-400)",
          "500": "var(--gray-500)",
          "600": "var(--gray-600)",
          "700": "var(--gray-700)",
          "800": "var(--gray-800)",
          "900": "var(--gray-900)",
          DEFAULT: "hsl(var(--gray))",
          foreground: "hsl(var(--gray-foreground))",
        },
        success: {
          "50": "var(--success-50)",
          "100": "var(--success-100)",
          "200": "var(--success-200)",
          "300": "var(--success-300)",
          "400": "var(--success-400)",
          "500": "var(--success-500)",
          "600": "var(--success-600)",
          "700": "var(--success-700)",
          "800": "var(--success-800)",
          "900": "var(--success-900)",
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        error: {
          "50": "var(--error-50)",
          "100": "var(--error-100)",
          "200": "var(--error-200)",
          "300": "var(--error-300)",
          "400": "var(--error-400)",
          "500": "var(--error-500)",
          "600": "var(--error-600)",
          "700": "var(--error-700)",
          "800": "var(--error-800)",
          "900": "var(--error-900)",
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        info: {
          "50": "var(--info-50)",
          "100": "var(--info-100)",
          "200": "var(--info-200)",
          "300": "var(--info-300)",
          "400": "var(--info-400)",
          "500": "var(--info-500)",
          "600": "var(--info-600)",
          "700": "var(--info-700)",
          "800": "var(--info-800)",
          "900": "var(--info-900)",
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        secondary: {
          "50": "var(--secondary-50)",
          "100": "var(--secondary-100)",
          "200": "var(--secondary-200)",
          "300": "var(--secondary-300)",
          "400": "var(--secondary-400)",
          "500": "var(--secondary-500)",
          "600": "var(--secondary-600)",
          "700": "var(--secondary-700)",
          "800": "var(--secondary-800)",
          "900": "var(--secondary-900)",
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
        wave: "83%",
      },
      backgroundImage: {
        "minimal-gradient":
          "linear-gradient(to right top, #ffffff, #ede9fd, #ddd2fa, #cebcf5, #c1a5f0, #b69aec, #aa8fe8, #9e85e4, #9084e1, #8283de, #7382da, #6480d6);",
        "minimal-gradient-dark":
          "linear-gradient(101deg, rgba(5,38,43,1) 29%, rgba(117,96,212,1) 84%, rgba(170,86,253,1) 97%)",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        rotate: "rotate 30s infinite linear",
        "rotate-fast": "rotate 20s infinite linear",
      },
      opacity: {
        "5": "0.05",
        "10": "0.10",
      },
      width: {
        wave: "1500px",
      },
      height: {
        wave: "1300px",
      },
      margin: {
        "wave-left": "-150px",
        "wave-top": "-250px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
