import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/images/bg-desktop-light.jpg')",
        "mobile-dark": "url('/images/bg-mobile-dark.jpg')",
        "mobile-light": "url('/images/bg-mobile-light.jpg')",
      },
      colors: {
        light: {
          gray: {
            lightest: "#fafafa", // hsl(0, 0%, 98%)
            lighter: "#ebecf4", // hsl(236, 33%, 92%)
            light: "#d2d3db", // hsl(233, 11%, 84%)
            dark: "#9699a3", // hsl(236, 9%, 61%)
            darkest: "#484B6A", // hsl(235, 19%, 35%)
          },
        },
        dark: {
          blue: {
            darkest: "#1a1c25", // hsl(235, 21%, 11%)
            darker: "#252a41", // hsl(235, 24%, 19%)
            light: "#e4e5f1", // hsl(234, 39%, 85%)
            hover: "#ebecf4", // hsl(236, 33%, 92%)
            dark: "#888b91", // hsl(234, 11%, 52%)
            medium: "#5d606d", // hsl(233, 14%, 35%)
            darkest2: "#444953", // hsl(237, 14%, 26%)
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
