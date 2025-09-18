/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "lato-thin": ["Lato-Thin"],
        "lato-thin-italic": ["Lato-ThinItalic"],
        "lato-light": ["Lato-Light"],
        "lato-light-italic": ["Lato-LightItalic"],
        lato: ["Lato-Regular"],
        "lato-italic": ["Lato-Italic"],
        "lato-bold": ["Lato-Bold"],
        "lato-bold-italic": ["Lato-BoldItalic"],
        "lato-black": ["Lato-Black"],
        "lato-black-italic": ["Lato-BlackItalic"],
      },
    },
  },
  plugins: [],
};
