// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-adsense',
    ],
     'google-adsense': {
        id: 'ca-pub-#########'
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
            script: [
                {
                    async: true,
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3178142439196865",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
    publicRuntimeConfig: {
        'google-adsense': {
            id: process.env.GOOGLE_ADSENSE_ID,
            test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
        },
    },

})
