<script setup>
import { RouterLink } from 'vue-router';

import PhotoBGIcon from './icons/PhotoBGIcon.vue';
</script>

<template>
    <div class="min-h-full hero bg-base-100 lg:mt-12 font-fira-code">
        <div class="flex-col justify-between hero-content lg:flex-row">
            <!-- left side -->
            <div class="lg:w-7/12">
                <p class="mb-6 text-xl font-semibold lg:my-6 text-secondary">Hey! I’m Jamal 👋</p>
                <h1 class="text-2xl font-semibold text-accent">
                    A junior <span class="text-primary">front-end developer</span> who loves
                    <span class="text-primary">Web Development</span>.
                </h1>
                <p class="hidden py-6 lg:flex">
                    Welcome to the Canvas of Innovation! It's great to have you here. If you love
                    all things art, design, and code — you're in the right place.
                </p>
                <p class="py-6 lg:hidden">
                    He crafts responsive websites where technologies meet creativity
                </p>

                <router-link to="/contact">
                    <button class="btn betton">Let's Talk!!</button>
                </router-link>
            </div>
            <div class="lg:w-5/12">
                <div>
                    <img
                        src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                        class="items-end max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.betton {
    @apply text-base text-accent bg-inherit font-medium font-fira-code rounded-none border-primary hover:border-primary active:text-accent/60 active:border-primary/50 hidden lg:flex;
}
</style>
