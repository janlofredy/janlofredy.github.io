<template>
    <div class="min-h-screen bg-dark-base text-slate-200 font-sans selection:bg-accent-teal/20 selection:text-accent-teal antialiased flex flex-col">
        <LayoutCommonHeader />
        <main class="flex-grow">
            <slot />
        </main>
        <LayoutCommonFooter />
    </div>
</template>
