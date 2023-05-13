/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue"
    ],
    theme: {
        extend: {
            colors: {
                color1: "#86efac",
                color2: "#ccfbf1",
                // "color3": "",
                // "color4": "",
                // "color5": "",
                dcolor1: "#134e4a",
                dcolor2: "#042f2e",
                // "dcolor3": "",
                // "dcolor4": "",
                // "dcolor5": "",
            },
        },
    }
  }
