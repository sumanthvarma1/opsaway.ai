import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      "colors": {
        "purple": "#700877",
        "white": "#fff",
        "indigo":"#9C1F5B",
        "bluee":"#197BA0",
        "grey":"#303030",
        "lightblue":"#01B0C1;",
        "lightgray":"#9ca3af",
        "darkgray":"#373737"
        },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bgimagebackground': "url('/mask-group.png')" ,
      },
      fontSize: {
        '15xl': '2rem', 
        '16xl': '1.5rem',
        '17xl': '1.25rem', //20px
        '18xl':'1rem',
        '14cxl':'0.875rem',
        '19xl':'0.9375rem' //15px
      },
      borderRadius: {
        'custom': '15px', 
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "fantasy" ],
    // "winter"
  },
  fontFamily: {
    'poppings': ['Poppins'],
  },
}
export default config
