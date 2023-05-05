// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    target: "static",
    generate:{
        nojekyll: true, //not working on this version
        fallback: '404.html',
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'Jose Janlofre Dy',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
        },
    },
})
