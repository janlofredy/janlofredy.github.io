<template>
    <div class="bg-teal-50 dark:bg-teal-950 dark:text-slate-100">
        <LayoutNormalHeader />
        <div class="px-10 py-5">
            <div class="max-w-[90%] max-h-60 md:max-h-32 min-w-fit min-h-fit">
                <adsbygoogle />
            </div>
            <slot />
        </div>
        <CookieControl locale="en" />
    </div>
</template>
