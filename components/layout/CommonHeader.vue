<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useAppState } from "@/stores/appState"

const appState = useAppState()
const { navIsOpen } = storeToRefs(appState)

const toggleNav = () => {
    navIsOpen.value = !navIsOpen.value
}

const closeNav = () => {
    navIsOpen.value = false
}

const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Simulation", href: "#simulation" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]
</script>

<template>
    <header class="sticky top-0 z-50 backdrop-blur-md bg-dark-base/80 border-b border-dark-border/80 transition-colors">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <!-- Brand / Logo -->
            <NuxtLink to="/" class="flex items-center gap-3 group" @click="closeNav">
                <div class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center font-mono font-bold text-accent-teal text-sm group-hover:border-accent-teal transition-colors">
                    JD
                </div>
                <div class="flex flex-col">
                    <span class="font-mono text-sm font-semibold tracking-wider text-slate-100 group-hover:text-accent-teal transition-colors">
                        JOSE JANLOFRE DY
                    </span>
                    <span class="font-mono text-[10px] text-slate-400">
                        APPLICATION ARCHITECT
                    </span>
                </div>
            </NuxtLink>

            <!-- Desktop Nav Links -->
            <nav class="hidden md:flex items-center gap-1">
                <a
                    v-for="link in navLinks"
                    :key="link.name"
                    :href="link.href"
                    class="px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-dark-surface rounded transition-colors"
                >
                    {{ link.name }}
                </a>
            </nav>

            <!-- Right CTA & Status -->
            <div class="hidden lg:flex items-center gap-4">
                <div class="flex items-center gap-2 px-2.5 py-1 rounded-full border border-dark-border bg-dark-surface/50 text-[11px] font-mono text-slate-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available
                </div>
                <a
                    href="mailto:dy@janlofre.com"
                    class="px-3.5 py-1.5 rounded text-xs font-mono font-medium bg-slate-100 text-dark-base hover:bg-white hover:shadow transition-all"
                >
                    Get in touch
                </a>
            </div>

            <!-- Mobile Hamburger Button -->
            <button
                type="button"
                class="md:hidden p-2 rounded text-slate-400 hover:text-white hover:bg-dark-surface focus:outline-none"
                aria-label="Toggle Navigation"
                @click="toggleNav"
            >
                <svg
                    v-if="!navIsOpen"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                    v-else
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Drawer -->
        <div
            v-if="navIsOpen"
            class="md:hidden border-b border-dark-border bg-dark-surface/95 backdrop-blur px-4 pt-2 pb-4 space-y-1"
        >
            <a
                v-for="link in navLinks"
                :key="link.name"
                :href="link.href"
                class="block px-3 py-2 rounded text-sm font-mono text-slate-300 hover:bg-dark-elevated hover:text-white transition-colors"
                @click="closeNav"
            >
                {{ link.name }}
            </a>
            <div class="pt-3 border-t border-dark-border flex items-center justify-between">
                <span class="text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Full Stack / Backend Developer
                </span>
                <a
                    href="mailto:dy@janlofre.com"
                    class="px-3 py-1.5 rounded text-xs font-mono font-medium bg-slate-100 text-dark-base hover:bg-white"
                >
                    Email Me
                </a>
            </div>
        </div>
    </header>
</template>
