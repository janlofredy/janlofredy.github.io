<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
    { name: "GitHub", href: "https://github.com/janlofredy", icon: "IconsGithubIcon" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/janlofre-dy/", icon: "IconsLinkedinIcon" },
    { name: "Twitter / X", href: "https://twitter.com/janlofredy", icon: "IconsTwitterIcon" },
    { name: "Facebook", href: "https://www.facebook.com/janlofredy", icon: "IconsFbIcon" },
    { name: "Instagram", href: "https://instagram.com/janlofredy", icon: "IconsInstagramIcon" },
]
</script>

<template>
    <footer class="border-t border-dark-border bg-dark-base py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <!-- Left: Identity & Telemetry -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                <span class="font-mono text-sm font-semibold text-slate-200">
                    Jose Janlofre Dy
                </span>
                <span class="text-xs text-slate-400 font-mono">
                    Built with Nuxt 3 &bull; Three.js &bull; Tailwind CSS &bull; Static SSG
                </span>
                <span class="text-[11px] text-slate-400 font-mono mt-1">
                    &copy; {{ currentYear }} Jose Janlofre Dy &bull; All systems operational
                </span>
            </div>

            <!-- Middle: Subtle Support / Coffee Link -->
            <div class="flex items-center gap-2">
                <a
                    href="https://buymeacoffee.com/janlofredyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-dark-border bg-dark-surface/60 hover:border-amber-500/50 hover:bg-dark-surface text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
                >
                    <span class="text-amber-400">&bull;</span>
                    <span>Support / Buy me a coffee</span>
                </a>
            </div>

            <!-- Right: Social Links -->
            <div class="flex items-center gap-3">
                <a
                    href="https://github.com/janlofredy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
                    aria-label="GitHub"
                >
                    <IconsGithubIcon />
                </a>
                <a
                    href="https://www.linkedin.com/in/janlofre-dy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
                    aria-label="LinkedIn"
                >
                    <IconsLinkedinIcon />
                </a>
                <a
                    href="https://twitter.com/janlofredy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
                    aria-label="Twitter"
                >
                    <IconsTwitterIcon />
                </a>
                <a
                    href="https://facebook.com/janlofredy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
                    aria-label="Facebook"
                >
                    <IconsFbIcon />
                </a>
                <a
                    href="https://instagram.com/janlofredy"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-8 h-8 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
                    aria-label="Instagram"
                >
                    <IconsInstagramIcon />
                </a>
            </div>
        </div>
    </footer>
</template>
