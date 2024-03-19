import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "normal": "#4b5963",
        "title": "#111827",
        "borderColor": "#e5e7eb", //(229, 231, 235)
        "purple": "#4f46ff", //(79, 70, 229), 
        "grey": "#f9fafb" ,  //(249,250,251)
        "subtitle": "#6b7280", //(107, 114, 128),
        "biggrey": "#374151", // (55, 65, 81),
        "lowgrey": "#9ca3af", //(156, 163, 175),
        "greybg": "#f3f4f6" // 243, 244, 246)
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
