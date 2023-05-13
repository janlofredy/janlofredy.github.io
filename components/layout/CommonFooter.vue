<script setup>
</script>
<template>
    <foot class="flex flex-col bg-teal-100 dark:bg-teal-900 pt-10">
        <div id="foot-head">
            <LayoutIconLinks />
        </div>
        <div id="foot-body" class="flex flex-row justify-around ">
            <div id="quick-inks" class="md:flex flex-col items-center text-left">
                <p class="font-bold text-lg">
                    Quick Links
                </p>
                <NuxtLink to="/privacypolicy">
                    <div class="p-2">
                        Privacy Policy
                    </div>
                </NuxtLink>
            </div>
            <div id="quick-links2" class="md:flex flex-col items-center text-left">
                <p class="font-bold text-lg">
                    Quick Links 2
                </p>
                <NuxtLink to="/privacypolicy">
                    <div class="p-2">
                        Privacy Policy
                    </div>
                </NuxtLink>
            </div>
            <div id="quick-links3" class="md:flex flex-col items-center text-left">
                <p class="font-bold text-lg">
                    Quick Links 3
                </p>
                <NuxtLink to="/privacypolicy">
                    <div class="p-2">
                        Privacy Policy
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div id="copyright">
            <div class="p-4 text-neutral-700 dark:text-neutral-200">
                © 2023 Copyright: Jose Janlofre M. Dy
                <!-- <a
                    class="text-neutral-800 dark:text-neutral-400"
                    href="https://tailwind-elements.com/"
                >Tailwind Elements</a> -->
            </div>
        </div>
    </foot>
</template>
