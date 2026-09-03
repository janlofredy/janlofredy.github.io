<script setup lang="ts">
import { portfolioData } from "@/data/portfolioData"

const { personal, socials, skillCategories, projects, experience, education } = portfolioData
</script>

<template>
    <div class="flex flex-col gap-24 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <!-- ================= HERO SECTION ================= -->
        <section id="hero" class="pt-8 sm:pt-16 pb-6 flex flex-col gap-8">
            <!-- Status Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-surface/80 w-fit font-mono text-xs text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>SYSTEM STATUS: FULL STACK / BACKEND DEVELOPER &bull; AVAILABLE</span>
            </div>

            <!-- Main Heading & Title -->
            <div class="flex flex-col gap-3">
                <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100 font-sans">
                    {{ personal.name }}
                </h1>
                <p class="font-mono text-base sm:text-xl text-accent-teal font-medium tracking-wide">
                    {{ personal.headline }}
                </p>
                <p class="text-base sm:text-lg text-slate-400 max-w-3xl leading-relaxed mt-2">
                    {{ personal.bio }}
                </p>
            </div>

            <!-- Quick Action Links -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
                <a
                    href="#projects"
                    class="px-5 py-2.5 rounded-md font-mono text-xs font-semibold bg-accent-teal text-dark-base hover:bg-teal-300 transition-colors shadow-sm flex items-center gap-2"
                >
                    <span>Inspect Featured Projects</span>
                    <span>&darr;</span>
                </a>
                <a
                    href="#simulation"
                    class="px-5 py-2.5 rounded-md font-mono text-xs font-semibold border border-dark-border bg-dark-surface hover:bg-dark-elevated text-slate-200 transition-colors flex items-center gap-2"
                >
                    <span>Launch 3D WebGL Engine</span>
                    <span>&rarr;</span>
                </a>
                <a
                    href="mailto:dy@janlofre.com"
                    class="px-5 py-2.5 rounded-md font-mono text-xs font-medium border border-dark-border bg-dark-base hover:bg-dark-surface text-slate-300 transition-colors"
                >
                    dy@janlofre.com
                </a>
            </div>

            <!-- Telemetry / Stats Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                <div
                    v-for="stat in personal.stats"
                    :key="stat.label"
                    class="p-4 rounded-lg border border-dark-border bg-dark-surface/40 flex flex-col"
                >
                    <span class="font-mono text-2xl sm:text-3xl font-bold text-slate-100">
                        {{ stat.value }}
                    </span>
                    <span class="font-mono text-xs text-slate-400 mt-1">
                        {{ stat.label }}
                    </span>
                </div>
            </div>
        </section>

        <!-- ================= TECHNICAL ARSENAL / STACK MATRIX ================= -->
        <section id="stack" class="flex flex-col gap-8 scroll-mt-20">
            <div class="flex flex-col gap-1 border-b border-dark-border pb-4">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold">
                    <span>//</span>
                    <span>TECHNICAL ARSENAL</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-100">
                    Full-Stack Systems & Architecture Matrix
                </h2>
                <p class="text-sm text-slate-400 max-w-2xl">
                    Core languages, relational databases, distributed protocols, and WebGL frameworks used across enterprise production systems.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    v-for="cat in skillCategories"
                    :key="cat.category"
                    class="p-6 rounded-lg border border-dark-border bg-dark-surface/50 flex flex-col justify-between"
                >
                    <div>
                        <h3 class="font-mono text-base font-bold text-slate-100 flex items-center gap-2">
                            <span class="w-2 h-2 rounded bg-accent-teal"></span>
                            {{ cat.category }}
                        </h3>
                        <p class="font-mono text-xs text-slate-400 mt-1 mb-4">
                            {{ cat.description }}
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in cat.skills"
                            :key="skill"
                            class="px-2.5 py-1 rounded border border-dark-border bg-dark-elevated font-mono text-xs text-slate-300 hover:border-accent-teal/50 hover:text-slate-100 transition-colors"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= FEATURED ENGINEERING SHOWCASE ================= -->
        <section id="projects" class="flex flex-col gap-8 scroll-mt-20">
            <div class="flex flex-col gap-1 border-b border-dark-border pb-4">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold">
                    <span>//</span>
                    <span>PRODUCTION CASE STUDIES</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-100">
                    Featured Custom Software & Systems
                </h2>
                <p class="text-sm text-slate-400 max-w-2xl">
                    Deep dives into custom enterprise platforms, municipal infrastructures, fintech payment workflows, and computer vision systems.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                    v-for="proj in projects"
                    :key="proj.id"
                    :project="proj"
                />
            </div>
        </section>

        <!-- ================= PLAYABLE THREE.JS WEBGL SIMULATION ================= -->
        <section id="simulation" class="flex flex-col gap-8 scroll-mt-20">
            <div class="flex flex-col gap-1 border-b border-dark-border pb-4">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold">
                    <span>//</span>
                    <span>REAL-TIME GRAPHICS ENGINE</span>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-100">
                        Playable Three.js WebGL Sandbox
                    </h2>
                    <NuxtLink
                        to="/practice/threedy"
                        class="font-mono text-xs text-accent-teal hover:underline flex items-center gap-1"
                    >
                        <span>Open Fullscreen Canvas</span>
                        <span>&rarr;</span>
                    </NuxtLink>
                </div>
                <p class="text-sm text-slate-400 max-w-2xl">
                    In-browser 3D movement test showcasing WebGL rendering, event-driven keyboard state polling, and camera physics.
                </p>
            </div>

            <!-- Embedded Three.js Simulator -->
            <TheWindow />

            <!-- Technical Specifications Callout -->
            <div class="p-4 rounded-lg border border-dark-border bg-dark-surface/40 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center text-xs font-mono text-slate-400">
                <div class="flex flex-col gap-1">
                    <span class="text-slate-200 font-bold">Physics & Control Specifications:</span>
                    <span>60 FPS RequestAnimationFrame Loop &bull; PointerLockControls &bull; 6-Axis Movement (WASD + Space + Shift)</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="px-2 py-1 rounded bg-dark-elevated border border-dark-border text-slate-300">Fog: 0.1 - 85 units</span>
                    <span class="px-2 py-1 rounded bg-dark-elevated border border-dark-border text-slate-300">Double-Space: Flight</span>
                </div>
            </div>
        </section>

        <!-- ================= CAREER PROGRESSION & EXPERIENCE ================= -->
        <section id="experience" class="flex flex-col gap-8 scroll-mt-20">
            <div class="flex flex-col gap-1 border-b border-dark-border pb-4">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold">
                    <span>//</span>
                    <span>TRACK RECORD & LEADERSHIP</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-100">
                    Engineering Leadership & Career Timeline
                </h2>
                <p class="text-sm text-slate-400 max-w-2xl">
                    6+ years of progression from Full-Stack Developer to Web Application Architect and Software Development Manager.
                </p>
            </div>

            <div class="space-y-6">
                <div
                    v-for="(exp, index) in experience"
                    :key="index"
                    class="p-6 rounded-lg border border-dark-border bg-dark-surface/40 hover:border-dark-borderMuted transition-colors flex flex-col gap-4"
                >
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                            <h3 class="font-mono text-base sm:text-lg font-bold text-slate-100">
                                {{ exp.role }}
                            </h3>
                            <div class="flex items-center gap-2 text-sm font-mono text-accent-teal">
                                <span>{{ exp.company }}</span>
                                <span class="text-slate-400">&bull;</span>
                                <span class="text-slate-400 text-xs">{{ exp.location }}</span>
                            </div>
                        </div>
                        <div class="font-mono text-xs text-slate-400 flex items-center gap-2">
                            <span>{{ exp.period }}</span>
                            <span v-if="exp.duration" class="px-2 py-0.5 rounded bg-dark-elevated border border-dark-border text-slate-400">
                                {{ exp.duration }}
                            </span>
                        </div>
                    </div>

                    <ul class="space-y-1.5 text-sm text-slate-300">
                        <li
                            v-for="(highlight, hIndex) in exp.highlights"
                            :key="hIndex"
                            class="flex items-start gap-2.5 text-xs leading-relaxed"
                        >
                            <span class="font-mono text-accent-teal mt-0.5 select-none">&bull;</span>
                            <span>{{ highlight }}</span>
                        </li>
                    </ul>

                    <div class="flex flex-wrap gap-1.5 pt-2 border-t border-dark-border/60">
                        <span
                            v-for="tech in exp.technologies"
                            :key="tech"
                            class="px-2 py-0.5 rounded bg-dark-elevated font-mono text-[10px] text-slate-400"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>

                <!-- Academic & Honors Card -->
                <div class="p-6 rounded-lg border border-dark-border bg-dark-surface/40 flex flex-col gap-3">
                    <div class="flex items-center justify-between">
                        <h3 class="font-mono text-base font-bold text-slate-100">
                            {{ education.degree }}
                        </h3>
                        <span class="font-mono text-xs text-slate-400">
                            {{ education.period }}
                        </span>
                    </div>
                    <p class="font-mono text-sm text-accent-teal">
                        {{ education.institution }}
                    </p>
                    <ul class="space-y-1 text-xs text-slate-300 mt-1">
                        <li
                            v-for="(ach, aIdx) in education.achievements"
                            :key="aIdx"
                            class="flex items-start gap-2"
                        >
                            <span class="text-accent-teal font-mono">&bull;</span>
                            <span>{{ ach }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ================= DIRECT CONTACT & INQUIRIES ================= -->
        <section id="contact" class="flex flex-col gap-8 scroll-mt-20">
            <div class="flex flex-col gap-1 border-b border-dark-border pb-4">
                <div class="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-teal font-semibold">
                    <span>//</span>
                    <span>DIRECT INQUIRIES</span>
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-slate-100">
                    Get in Touch
                </h2>
                <p class="text-sm text-slate-400 max-w-2xl">
                    Available for Full Stack & Backend Engineering roles, enterprise custom web systems, and high-performance API engineering.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Email Contact Card -->
                <a
                    href="mailto:dy@janlofre.com"
                    class="p-6 rounded-lg border border-dark-border bg-dark-surface/50 hover:border-accent-teal/60 transition-colors flex flex-col gap-2 group"
                >
                    <span class="font-mono text-xs text-slate-400">Direct Email</span>
                    <span class="font-mono text-base font-bold text-slate-100 group-hover:text-accent-teal transition-colors">
                        dy@janlofre.com
                    </span>
                    <span class="text-xs text-slate-400 mt-1">
                        Fast response for project inquiries and architecture design.
                    </span>
                </a>

                <!-- Phone / Mobile -->
                <div class="p-6 rounded-lg border border-dark-border bg-dark-surface/50 flex flex-col gap-2">
                    <span class="font-mono text-xs text-slate-400">Mobile / Telegram</span>
                    <span class="font-mono text-base font-bold text-slate-100">
                        {{ personal.phone }}
                    </span>
                    <span class="text-xs text-slate-400 mt-1">
                        Located in Caraga, Philippines (UTC+8). Open to remote globally.
                    </span>
                </div>

                <!-- Professional Network -->
                <a
                    href="https://www.linkedin.com/in/janlofre-dy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-6 rounded-lg border border-dark-border bg-dark-surface/50 hover:border-accent-teal/60 transition-colors flex flex-col gap-2 group"
                >
                    <span class="font-mono text-xs text-slate-400">LinkedIn Profile</span>
                    <span class="font-mono text-base font-bold text-slate-100 group-hover:text-accent-teal transition-colors flex items-center gap-1.5">
                        <span>linkedin.com/in/janlofre-dy</span>
                        <span>&rarr;</span>
                    </span>
                    <span class="text-xs text-slate-400 mt-1">
                        Connect for professional engineering network & references.
                    </span>
                </a>
            </div>
        </section>
    </div>
</template>
