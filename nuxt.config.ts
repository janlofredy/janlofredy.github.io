const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://janlofre.com/#person",
            "name": "Jose Janlofre Dy",
            "alternateName": ["Janlofre Dy", "Janlofre", "janlofredy"],
            "url": "https://janlofre.com",
            "image": "https://janlofre.com/og-image.png",
            "jobTitle": "Full Stack Software Engineer & Application Architect",
            "email": "dy@janlofre.com",
            "worksFor": {
                "@type": "Organization",
                "name": "City Government of Butuan",
            },
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "ACLC College of Butuan",
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Butuan City",
                "addressRegion": "Caraga",
                "addressCountry": "Philippines",
            },
            "sameAs": [
                "https://github.com/janlofredy",
                "https://www.linkedin.com/in/janlofre-dy/",
                "https://twitter.com/janlofredy",
                "https://buymeacoffee.com/janlofredyx",
                "https://facebook.com/janlofredy",
                "https://instagram.com/janlofredy",
            ],
            "knowsAbout": [
                "Full Stack Web Development",
                "Backend Architecture",
                "PHP",
                "Laravel",
                "CodeIgniter",
                "Nuxt 3",
                "Vue.js",
                "TypeScript",
                "Three.js",
                "WebGL",
                "Docker",
                "Relational Database Design",
                "MySQL",
                "PostgreSQL",
                "RESTful APIs",
                "On-Premise Client Deployments",
                "Computer Vision",
                "OpenPose",
            ],
            "award": [
                "1st Place Regional Programming Champion, 2018 Caraga Regional ICT Congress (Inter-College Event)",
                "Codersguild Competition Champion (Inter-College Programming Event)",
            ],
        },
        {
            "@type": "WebSite",
            "@id": "https://janlofre.com/#website",
            "url": "https://janlofre.com",
            "name": "Jose Janlofre Dy | Software Developer & Application Architect",
            "description": "Engineering portfolio and technical showcase of Jose Janlofre Dy.",
            "publisher": {
                "@id": "https://janlofre.com/#person",
            },
            "inLanguage": "en-US",
        },
        {
            "@type": "ProfilePage",
            "@id": "https://janlofre.com/#webpage",
            "url": "https://janlofre.com",
            "name": "Jose Janlofre Dy | Software Developer & Application Architect",
            "isPartOf": {
                "@id": "https://janlofre.com/#website",
            },
            "about": {
                "@id": "https://janlofre.com/#person",
            },
            "mainEntity": {
                "@id": "https://janlofre.com/#person",
            },
        },
    ],
}

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
            title: "Jose Janlofre Dy | Full Stack & Backend Developer | Application Architect",
            htmlAttrs: {
                lang: "en",
                class: "dark scroll-smooth",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    name: "description",
                    content: "Jose Janlofre Dy — Full Stack & Backend Developer, Application Architect, and Bug Hunter. Specializing in custom enterprise software, Laravel, CodeIgniter, Nuxt 3, scalable REST APIs, relational databases, and real-time 3D WebGL.",
                },
                {
                    name: "keywords",
                    content: "Jose Janlofre Dy, Janlofre Dy, Janlofre, Full Stack Developer, Backend Developer, Application Architect, Bug Hunter, Laravel, CodeIgniter, Nuxt 3, Vue.js, Three.js, WebGL, Docker, Software Engineer Philippines, Butuan Developer, Custom Enterprise Software, REST APIs, Database Architecture, Homelab",
                },
                { name: "author", content: "Jose Janlofre Dy" },
                { name: "creator", content: "Jose Janlofre Dy" },
                { name: "publisher", content: "Jose Janlofre Dy" },
                { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
                { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
                { name: "theme-color", content: "#030712" },
                { name: "color-scheme", content: "dark" },
                { name: "application-name", content: "Jose Janlofre Dy Portfolio" },
                { name: "apple-mobile-web-app-title", content: "Janlofre Dy" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },

                // Open Graph / Facebook / LinkedIn / WhatsApp / iMessage / Discord
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "Jose Janlofre Dy Portfolio" },
                { property: "og:title", content: "Jose Janlofre Dy | Full Stack & Backend Developer" },
                {
                    property: "og:description",
                    content: "Software Developer & Application Architect specializing in custom enterprise platforms, Laravel, CodeIgniter, Nuxt 3, scalable REST APIs, and real-time 3D WebGL.",
                },
                { property: "og:url", content: "https://janlofre.com" },
                { property: "og:image", content: "https://janlofre.com/og-image.png" },
                { property: "og:image:secure_url", content: "https://janlofre.com/og-image.png" },
                { property: "og:image:type", content: "image/png" },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },
                { property: "og:image:alt", content: "Jose Janlofre Dy — Software Developer & Application Architect Portfolio Preview" },
                { property: "og:locale", content: "en_US" },
                { property: "profile:first_name", content: "Jose Janlofre" },
                { property: "profile:last_name", content: "Dy" },
                { property: "profile:username", content: "janlofredy" },

                // Twitter / X Cards
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:domain", content: "janlofre.com" },
                { name: "twitter:url", content: "https://janlofre.com" },
                { name: "twitter:site", content: "@janlofredy" },
                { name: "twitter:creator", content: "@janlofredy" },
                { name: "twitter:title", content: "Jose Janlofre Dy | Full Stack & Backend Developer" },
                {
                    name: "twitter:description",
                    content: "Software Developer & Application Architect specializing in custom enterprise platforms, Laravel, CodeIgniter, Nuxt 3, scalable REST APIs, and 3D WebGL.",
                },
                { name: "twitter:image", content: "https://janlofre.com/og-image.png" },
                { name: "twitter:image:alt", content: "Jose Janlofre Dy — Software Developer & Application Architect Portfolio Preview" },
            ],
            link: [
                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "canonical", href: "https://janlofre.com" },
                { rel: "author", href: "https://janlofre.com/llms.txt" },
                { rel: "sitemap", type: "application/xml", href: "https://janlofre.com/sitemap.xml" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
                },
            ],
            script: [
                {
                    type: "application/ld+json",
                    children: JSON.stringify(jsonLdSchema),
                },
            ],
        },
    },
})
