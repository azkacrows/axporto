<script setup>
import { RouterLink } from 'vue-router';

import PhotoBGIcon from './icons/PhotoBGIcon.vue';
</script>

<template>
    <div class="min-h-full hero bg-base-100 lg:mt-12 font-fira-code">
        <div class="flex-col justify-between hero-content lg:flex-row">
            <!-- left side -->
            <div class="lg:pr-2 lg:w-7/12">
                <p class="mb-6 text-xl font-semibold lg:my-6 text-secondary">Hey! I’m Jamal 👋</p>
                <h1 class="text-2xl font-semibold text-accent">
                    A junior <span class="text-primary">front-end developer</span> who loves
                    <span class="text-primary">Web Development</span>
                </h1>
                <p class="hidden py-6 lg:flex">
                    Welcome to the Canvas of Innovation! It's great to have you here. If you love
                    all things art, design, and code — you're in the right place.
                </p>
                <p class="pt-6 lg:hidden">
                    He crafts responsive websites where technologies meet creativity
                </p>

                <button class="btn betton">
                    <router-link to="/contact">Let's Talk!!</router-link>
                </button>
            </div>
            <div class="relative flex flex-col items-center justify-end lg:flex-row lg:w-5/12">
                <div class="absolute z-10 w-44">
                    <PhotoBGIcon />
                </div>
                <div class="relative z-20 w-70 left-10 lg:left-0">
                    <img src="../assets/img/Mc.png" class="object-scale-down" alt="illustration" />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.betton {
    @apply text-base text-accent bg-inherit font-medium font-fira-code rounded-none border-primary hover:border-primary active:text-accent/60 active:border-primary/50 hidden lg:flex;
}
</style>
