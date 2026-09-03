/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./data/**/*.{js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
            },
            colors: {
                dark: {
                    base: "#030712",      // Deepest background
                    surface: "#0b0f19",   // Cards, panels
                    elevated: "#111827",  // Elevated elements, inputs
                    border: "#1f2937",    // Border dividers
                    borderMuted: "#374151"
                },
                accent: {
                    teal: "#14b8a6",
                    cyan: "#06b6d4",
                    emerald: "#10b981",
                },
            },
        },
    },
    plugins: [],
}
