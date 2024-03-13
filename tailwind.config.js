/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm':'350px',
      // => @media (min-width: 480px){...}
      'md':'640px',
      // => @media (min-width 680px){...}
      'lg':'768px',
      // => @media (min-width 1280px){...}
      'xl':'1536px',
      // => @media(min-width: 1280px){...}
      '2xl':'2356px'
      // => @media(min-width: 1536px){...}
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
