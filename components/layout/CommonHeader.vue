<!-- Guide to use for Responsive NAV Bar -->
<!-- https://github.com/serresebastien/Nuxt-Tailwind-Responsive-Navbar/blob/master/components/NavBar.vue -->
<script setup>
import { storeToRefs } from "pinia"
import { useAppState } from "@/stores/appState"
const appstate = useAppState()
const { navIsOpen } = storeToRefs(appstate)
const drawer = () => {
    navIsOpen.value = !navIsOpen.value
}
</script>
<template>
    <head class="flex flex-row justify-between">
        <NuxtLink id="pageTitleLogo" to="/" class="hover:bg-color1 dark:hover:bg-dcolor1">
            <div class="px-5 py-1 text-xl md:text-5xl">
                JOSE JANLOFRE
            </div>
        </NuxtLink>
        <div id="mobileNavigation" class="block md:hidden">
            <button class="p-2" @click="drawer()">
                <svg
                    class="h-8 w-8 fill-current text-black"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <div id="navigation" class="hidden md:flex flex-row items-center justify-center">
            <NuxtLink to="/" class="hover:bg-color1 dark:hover:bg-dcolor1" active-class="bg-color1 dark:bg-dcolor1">
                <div class="p-5">
                    Home
                </div>
            </NuxtLink>
            <NuxtLink to="/about" class="hover:bg-color1 dark:hover:bg-dcolor1" active-class="bg-color1 dark:bg-dcolor1">
                <div class="p-5">
                    About
                </div>
            </NuxtLink>
            <NuxtLink to="/projects" class="hover:bg-color1 dark:hover:bg-dcolor1" active-class="bg-color1 dark:bg-dcolor1">
                <div class="p-5">
                    Projects
                </div>
            </NuxtLink>
            <NuxtLink to="/contact" class="hover:bg-color1 dark:hover:bg-dcolor1" active-class="bg-color1 dark:bg-dcolor1">
                <div class="p-5">
                    Contact
                </div>
            </NuxtLink>
            <NuxtLink to="/donate" class="hover:bg-color1 dark:hover:bg-dcolor1" active-class="bg-color1 dark:bg-dcolor1">
                <div class="p-5">
                    Donate
                </div>
            </NuxtLink>
        </div>
    </head>
</template>
