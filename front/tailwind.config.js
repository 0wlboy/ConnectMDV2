/** @type {import('tailwindcss').Config} */
import tailwindcss from 'tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";

export default {
  content: [ "./index.html"
    ,"./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
    flowbiteReact()
  ]
}

