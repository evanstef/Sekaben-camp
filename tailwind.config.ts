import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'hijau-kalem' : '#264039',
        'cream-susu' : '#e8e5d3',
        'cream-susu-mentah' : '#bdb89d',
        'cream-susu-panas' : '#e79f3b',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes : {
        left : {
          '0%, 100%' : {transform : 'translateX(30%)'},
          '50%' : {transform : 'translateX(0)'},
        }
      },
      animation : {
        'left' : 'left 1s ease-in-out infinite'
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui : {
    themes : ["garden"]
  }
};
export default config;
