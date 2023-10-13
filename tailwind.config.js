/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    prefix: "daisy-"
  }
}
