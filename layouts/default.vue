<template>
    <div class="bg-teal-50 dark:bg-teal-950 dark:text-slate-100">
        <LayoutCommonHeader />
        <div class="px-10 py-5">
            <slot />
        </div>
        <LayoutCommonFooter />
        <CookieControl locale="en" />
    </div>
</template>
