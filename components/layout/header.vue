<template>
    <div class="flex flex-row justify-between">
        <NuxtLink to="/" class="hover:bg-teal-100 dark:hover:bg-teal-900">
            <div class="px-5 py-1 text-5xl">JOSE JANLOFRE</div>
        </NuxtLink>
        <div class="flex flex-row items-center justify-center">
            <NuxtLink to="/" class="hover:bg-teal-100 dark:hover:bg-teal-900">
                <div class="p-5">Home</div>
            </NuxtLink>
            <NuxtLink to="/about"  class="hover:bg-teal-100 dark:hover:bg-teal-900">
                <div class="p-5">About</div>
            </NuxtLink>
            <NuxtLink to="/projects"  class="hover:bg-teal-100 dark:hover:bg-teal-900">
                <div class="p-5">Projects</div>
            </NuxtLink>
            <NuxtLink to="/contact"  class="hover:bg-teal-100 dark:hover:bg-teal-900">
                <div class="p-5">Contact</div>
            </NuxtLink>
            <NuxtLink to="/donate"  class="hover:bg-teal-100 dark:hover:bg-teal-900">
                <div class="p-5">Donate</div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
