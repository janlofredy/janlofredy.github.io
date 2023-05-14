<template>
    <div class="flex flex-col bg-color2 dark:bg-dcolor2 dark:text-slate-100 min-h-screen">
        <LayoutCommonHeader />
        <div id="body" class="grow px-10 py-5 flex flex-col">
            <div class="grow flex flex-wrap">
                <div class="min-w-fit max-w-full max-h-60 md:max-h-32 w-full">
                    <adsbygoogle ad-slot="test" ad-style="" />
                </div>
                <div class="flex flex-col grow">
                    <slot />
                </div>
                <div class="min-w-fit max-w-full min-h-fit max-h-60 md:max-h-32 w-full">
                    <adsbygoogle ad-style="" />
                </div>
            </div>
        </div>
        <LayoutCommonFooter />
        <CookieControl locale="en" />
    </div>
</template>
<style scoped>
</style>
