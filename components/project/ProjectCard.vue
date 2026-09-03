<script setup lang="ts">
import type { Project } from "@/data/portfolioData"

defineProps<{
    project: Project
}>()
</script>

<template>
    <div
        :id="'project-' + project.id"
        class="group rounded-lg border border-dark-border bg-dark-surface/60 hover:border-dark-borderMuted transition-all duration-200 overflow-hidden flex flex-col"
    >
        <!-- Project Visual / Media Header -->
        <div class="relative w-full h-52 sm:h-64 bg-dark-elevated border-b border-dark-border overflow-hidden flex items-center justify-center">
            <!-- OpenPose Animation for ASLT -->
            <div v-if="project.isOpenPose" class="w-full h-full relative flex items-center justify-center bg-black">
                <img
                    :src="project.previewImage"
                    alt="OpenPose hand and body keypoint detection"
                    class="w-full h-full object-contain filter contrast-125"
                    loading="lazy"
                />
                <div class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-dark-border font-mono text-[10px] text-accent-teal">
                    CMU OpenPose Skeleton Model
                </div>
            </div>

            <!-- Three.js Simulation Banner -->
            <div v-else-if="project.isSimulation" class="w-full h-full relative flex flex-col items-center justify-center bg-gradient-to-br from-dark-surface via-slate-900 to-dark-base p-6 text-center">
                <div class="w-14 h-14 rounded-xl border border-accent-teal/40 bg-accent-teal/10 flex items-center justify-center mb-3 text-accent-teal">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
                <div class="font-mono text-sm font-semibold text-slate-100">
                    Interactive 3D WebGL Arena
                </div>
                <div class="font-mono text-xs text-slate-400 mt-1 max-w-sm">
                    First-Person PointerLock, WASD movement & flight mechanics
                </div>
                <a
                    href="#simulation"
                    class="mt-3 px-3 py-1 rounded bg-dark-surface border border-accent-teal/50 hover:bg-accent-teal hover:text-dark-base font-mono text-xs text-accent-teal transition-all flex items-center gap-1"
                >
                    <span>Scroll to Live Sandbox</span>
                    <span>&darr;</span>
                </a>
            </div>

            <!-- Standard Project Screenshot with Architectural Fallback -->
            <div v-else class="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-300">
                <!-- Fallback Schematic Pattern -->
                <div class="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

                <img
                    v-if="project.previewImage && !project.previewImage.startsWith('/images/')"
                    :src="project.previewImage"
                    :alt="project.title"
                    class="max-h-24 max-w-[80%] object-contain relative z-10 drop-shadow-md"
                    loading="lazy"
                />

                <!-- Modern Architectural Card Fallback when local screenshot not yet stored -->
                <div v-else class="relative z-10 flex flex-col items-center justify-center text-center p-6">
                    <div class="w-12 h-12 rounded border border-dark-border bg-dark-surface flex items-center justify-center text-accent-teal font-mono text-xs font-bold mb-2 shadow-inner">
                        <svg v-if="project.id === 'homelab-devops'" class="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        <svg v-else-if="project.id === 'cad-3d-printing'" class="w-6 h-6 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span v-else>&lt;/&gt;</span>
                    </div>
                    <span class="font-mono text-xs font-medium text-slate-200 tracking-wider">
                        {{ project.domain }}
                    </span>
                    <span class="font-mono text-[11px] text-slate-400 mt-0.5">
                        {{ project.id === 'homelab-devops' ? 'Personal Self-Consumption Lab' : (project.id === 'cad-3d-printing' ? 'Personal Hobby / Simple Models' : 'Production Architecture') }}
                    </span>
                </div>

                <!-- Live URL pill overlay -->
                <a
                    v-if="project.liveUrl && !project.isSimulation"
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="absolute top-3 right-3 z-20 px-2.5 py-1 rounded bg-dark-surface/90 backdrop-blur border border-dark-border text-[11px] font-mono text-slate-300 hover:text-accent-teal hover:border-accent-teal transition-colors flex items-center gap-1 shadow-sm"
                >
                    <span>Visit Live</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            <!-- Domain & Role Badges -->
            <div class="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-1.5">
                <span class="px-2 py-0.5 rounded bg-dark-base/90 backdrop-blur border border-dark-border font-mono text-[10px] uppercase tracking-wider text-slate-300">
                    {{ project.badge || project.domain }}
                </span>
                <span
                    class="px-2 py-0.5 rounded font-mono text-[10px] tracking-wider font-semibold border"
                    :class="project.role === 'Collaborator' ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : (project.role.includes('Hobby') ? 'bg-purple-500/10 border-purple-500/40 text-purple-300' : 'bg-accent-teal/10 border-accent-teal/40 text-accent-teal')"
                >
                    Role: {{ project.role }}
                </span>
            </div>
        </div>

        <!-- Project Details Body -->
        <div class="p-6 flex-grow flex flex-col justify-between">
            <div>
                <div class="flex items-baseline justify-between gap-2">
                    <h3 class="font-mono text-lg font-bold text-slate-100 group-hover:text-accent-teal transition-colors">
                        {{ project.title }}
                    </h3>
                </div>
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                    <span class="font-mono text-xs text-accent-teal/90">
                        {{ project.subtitle }}
                    </span>
                </div>

                <p class="text-sm text-slate-400 mt-3 leading-relaxed">
                    {{ project.description }}
                </p>

                <!-- Architecture & Systems Highlights -->
                <div class="mt-4 pt-4 border-t border-dark-border/80">
                    <span class="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Engineering Highlights:
                    </span>
                    <ul class="space-y-2">
                        <li
                            v-for="(highlight, idx) in project.architectureHighlights"
                            :key="idx"
                            class="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed"
                        >
                            <span class="font-mono text-accent-teal text-[11px] mt-0.5 select-none font-bold">
                                {{ String(idx + 1).padStart(2, '0') }}.
                            </span>
                            <span>{{ highlight }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Tech Stack Tags & Actions -->
            <div class="mt-6 pt-4 border-t border-dark-border/80 flex flex-col gap-4">
                <div class="flex flex-wrap gap-1.5">
                    <span
                        v-for="tech in project.techStack"
                        :key="tech"
                        class="px-2 py-0.5 rounded bg-dark-elevated border border-dark-border font-mono text-[11px] text-slate-300"
                    >
                        {{ tech }}
                    </span>
                </div>

                <div class="flex items-center justify-between pt-1">
                    <a
                        v-if="project.liveUrl && !project.isSimulation"
                        :href="project.liveUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-xs font-mono font-medium text-slate-200 hover:text-accent-teal flex items-center gap-1.5 transition-colors"
                    >
                        <span>Open Platform</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    <a
                        v-else-if="project.isSimulation"
                        href="#simulation"
                        class="text-xs font-mono font-medium text-accent-teal hover:underline flex items-center gap-1.5"
                    >
                        <span>Jump to Simulation</span>
                        <span>&darr;</span>
                    </a>
                    <span v-else class="text-xs font-mono text-slate-400">
                        Academic Research Project
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
