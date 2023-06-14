/** @type {import('tailwindcss').Config} */ 
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  "theme": {
    "extend": {
      "colors": {
        "ffffff": "#fff",
        "style-1-f9b343": "#f9b343",
        "purple-bg": "#e6e9f5",
        "style-1-343f9e": "#343f9e",
        "style-2-ccd4e5": "#ccd4e5",
        "color": "#222",
        "black": "#000",
        "ababab": "#ababab",
        "style-1-eef0f6": "#eef0f6",
        "darkslateblue": "#2d4ca9",
        "EFEAE1" : "#EFEAE1",
        "EEF0F6" : "#EEF0F6",
        "977EBB" : "#977EBB",
        "6482C2" : "#6482C2"
      },
      "fontFamily": {
        "style-1-body-text": "Prompt"
      },
      "borderRadius": {
        "980xl": "999px"
      }
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.88rem",
      "lg": "1rem",
      "xl": "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem"
    }
  },
  "corePlugins": {
    "preflight": false
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("tailwind-scrollbar")
  ],
  darkMode: "class"
}