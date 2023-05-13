<template>
    <div class="flex flex-col bg-teal-50 dark:bg-teal-950 dark:text-slate-100 min-h-screen">
        <LayoutCommonHeader />
        <div class="px-10 py-5 flex grow">
            <slot />
        </div>
        <LayoutCommonFooter />
        <CookieControl locale="en" />
    </div>
</template>
