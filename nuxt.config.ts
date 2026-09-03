// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        "@pinia-plugin-persistedstate/nuxt",
    ],
    app: {
        head: {
            title: "Jose Janlofre Dy | Software Developer & Application Architect",
            htmlAttrs: {
                lang: "en",
                class: "dark scroll-smooth",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "description",
                    content: "Jose Janlofre Dy — Software Developer, Application Architect, and Bug Hunter specializing in custom enterprise software, scalable APIs, and real-time WebGL systems.",
                },
                { name: "author", content: "Jose Janlofre Dy" },
                { name: "theme-color", content: "#030712" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Jose Janlofre Dy | Full Stack Software Engineer" },
                {
                    property: "og:description",
                    content: "Software Developer & Application Architect specializing in custom enterprise platforms, scalable APIs, and real-time 3D WebGL.",
                },
                { property: "og:url", content: "https://janlofre.com" },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "canonical", href: "https://janlofre.com" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
                },
            ],
        },
    },
})
