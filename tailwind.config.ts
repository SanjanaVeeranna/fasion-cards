import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#592EBF",
        darkBlue: "#1A3365",
        purple: "#54298b",
        lightGreen: "#07ab7a",
        brown: "#8e6b6b",
        unselected: "#8C8C8C" ,
},
fontFamily:{
  groteskBook: ["var(--font-groteskBook)"],
  groteskLight: ["var(--font-groteskLight)"],
  groteskMedium:["var(--font-groteskMedium)"]

},
    },
  },
  plugins: [nextui()],
};
export default config;
