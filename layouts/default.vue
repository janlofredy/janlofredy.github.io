<template>
    <div class="flex flex-col bg-color2 dark:bg-dcolor2 dark:text-slate-100 min-h-screen">
        <LayoutCommonHeader />
        <div class="px-10 py-5 flex grow">
            <div class="max-w-[90%] max-h-60 md:max-h-32 min-w-fit min-h-fit">
                <adsbygoogle />
            </div>
            <slot />
            <div class="max-w-[90%] max-h-60 md:max-h-32 min-w-fit min-h-fit">
                <adsbygoogle />
            </div>
        </div>
        <LayoutCommonFooter />
        <CookieControl locale="en" />
    </div>
</template>
