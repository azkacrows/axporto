<script setup>
import QuotesIcon from '../icons/QuotesIcon.vue';
</script>

<template>
    <div class="flex items-center justify-center w-full mb-64 mt-52 lg:my-40">
        <div class="relative inline-flex mx-[18px] lg:mx-0 font-fira-code">
            <div class="top-quote">
                <QuotesIcon />
            </div>
            <div class="top-container">
                <h3 class="top-text">With great power comes great electricity bill</h3>
            </div>
            <div class="bottom-container">
                <p class="bottom-text">- DR. Who</p>
            </div>
            <div class="bottom-quote">
                <QuotesIcon />
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-quote {
    @apply absolute px-2 py-1 -top-[14px] left-5 bg-base-100;
}
.top-container {
    @apply gap-2 border border-solid p-7 border-secondary bg-base-100;
}
.top-text {
    @apply text-xl italic font-medium text-accent;
}
.bottom-container {
    @apply absolute -bottom-[57px] right-0 flex items-center gap-2 p-4 border border-solid border-secondary bg-base-100;
}
.bottom-text {
    @apply text-base text-accent;
}
.bottom-quote {
    @apply absolute px-2 py-1 -bottom-[14px] right-5 bg-base-100;
}
</style>
