const path = require("path");

module.exports = {
  content: [
    path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx, html}"),
    path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx, html}"),
  ],
  theme: {
    letterSpacing: {
      tight: "-0.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
    },
  },
  plugins: [],
};
