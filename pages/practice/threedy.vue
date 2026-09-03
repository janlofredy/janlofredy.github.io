<script setup lang="ts">
useHead({
    title: "Playable 3D WebGL Simulation | Jose Janlofre Dy",
    meta: [
        { name: "description", content: "Interactive in-browser 3D movement test built with Three.js, PointerLockControls, and Vue 3." }
    ]
})
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
        <div class="flex items-center justify-between">
            <div>
                <NuxtLink to="/" class="font-mono text-xs text-accent-teal hover:underline flex items-center gap-1.5 mb-2">
                    <span>&larr;</span>
                    <span>Back to Portfolio Overview</span>
                </NuxtLink>
                <h1 class="font-mono text-2xl sm:text-3xl font-bold text-slate-100">
                    Standalone WebGL Movement Sandbox
                </h1>
                <p class="text-sm font-mono text-slate-400 mt-1">
                    First-person PointerLock controls, 6-axis keyboard state tracking, and procedural lighting.
                </p>
            </div>
            <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded border border-dark-border bg-dark-surface font-mono text-xs text-slate-400">
                <span class="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
                <span>Three.js Engine</span>
            </div>
        </div>

        <TheWindow />
    </div>
</template>
