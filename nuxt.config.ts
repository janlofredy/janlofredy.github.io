// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-adsense',
    ],
    'google-adsense': {
        id: 'ca-pub-3178142439196865',
    },
    plugins: [
        '~/plugins/aos.client.js',
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
    publicRuntimeConfig: {
        'google-adsense': {
            id: process.env.GOOGLE_ADSENSE_ID || 'ca-pub-3178142439196865',
            test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
        },
    },

})
