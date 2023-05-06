import AOS from "aos"
import "aos/dist/aos.css"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.AOS = AOS.init({
        once: false,
        offset: 0,
        mirror: true,
    })
})
