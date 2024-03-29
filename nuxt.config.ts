// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/google-adsense",
            {
                id: "ca-pub-3178142439196865",
                test: process.env.GOOGLE_ADSENSE_TEST_MODE || false,
            }
        ],
        "@dargmuesli/nuxt-cookie-control",
        [
            "@nuxtjs/eslint-module",
            {
                formatter: "stylish",
                lintOnStart: false,
                fix: true
            },
        ],
        [
            "@dargmuesli/nuxt-cookie-control",
            {
                cookies: {
                    necessary: [
                        "ncc-c",
                    ],
                    optional: [],
                },
                isAcceptNecessaryButtonEnabled: true,
            },
        ],
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    plugins: [
        "~/plugins/aos.client.js",
    ],
    app: {
        head: {
            title: "Jose Janlofre Dy",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "Jose Janlofre Dy, web developer. Full-Stack Web Developer." },
                { name: "og:description", content: "Jose Janlofre Dy, web developer. Full-Stack Web Developer." },
            ],
        },
    },
    runtimeConfig: {
        public: {
            "google-adsense": {
                id: process.env.GOOGLE_ADSENSE_ID || "ca-pub-3178142439196865",
                test: process.env.GOOGLE_ADSENSE_TEST_MODE == "true",
            },
        }
    },
    cookieControl: {
        // typed module options
    },
})
