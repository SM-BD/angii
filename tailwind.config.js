const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        puple: "#15050e",
        fondo: "#f0eaff",
        SM: "#a00050",
        Nena: "#a000a0",
        texti: "#c933ff",
        rosita: "#fc2ca5",
        moradito: "#570ba2",
        rojito: "#db160f",
        txtroji: "#ffadad",
        darkBlue: "#0a043c",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ defaultTheme: "dark" })],
};
