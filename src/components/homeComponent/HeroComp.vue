<script setup>
import { RouterLink } from 'vue-router';

import PhotoBGIcon from '../icons/PhotoBGIcon.vue';
import DotGenIcon from '../icons/DotGenIcon.vue';
</script>

<template>
    <div class="min-h-full hero bg-base-100 lg:mt-8 font-fira-code">
        <div class="flex-col justify-between hero-content lg:flex-row">
            <!-- left side -->
            <div class="lg:pr-2 lg:w-7/12">
                <p class="greeting">Hey! I’m Jamal 👋</p>
                <h1 class="text-2xl font-semibold lg:text-4xl text-accent">
                    A junior <span class="text-primary">front-end developer</span> who loves
                    <span class="text-primary">Web Development</span>
                </h1>
                <p class="hidden py-6 lg:flex">
                    Welcome to the Canvas of Innovation! It's great to have you here. If you love
                    all things art, design, and code — you're in the right place.
                </p>
                <button class="btn talk">
                    <router-link to="/contact" class="w-full px-4 py-[11px]"
                        >Let's Talk!!</router-link
                    >
                </button>
            </div>
            <div class="relative flex flex-col items-center justify-end lg:flex-row lg:w-5/12">
                <div class="lg:flex-col">
                    <div class="absolute z-10 photobg">
                        <PhotoBGIcon />
                    </div>
                    <div class="relative z-20 divimg">
                        <img
                            src="../../assets/img/Mc.png"
                            class="object-scale-down"
                            alt="illustration"
                        />
                    </div>
                    <div class="absolute z-30 dotfg">
                        <DotGenIcon />
                    </div>
                    <div class="relative z-40">
                        <div class="workbox">
                            <div class="workbox-innerbox"></div>
                            <p>
                                Currently working on
                                <span class="font-bold tracking-wide text-accent">Portfolio</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.greeting {
    @apply mb-6 text-xl font-semibold lg:my-6 text-secondary;
}
.talk {
    @apply my-6 lg:my-0 p-0 text-base text-accent bg-inherit font-medium font-fira-code rounded-none border-primary hover:border-primary active:text-accent/60 active:border-primary/50;
}

.photobg {
    @apply max-w-44 w-full top-6 left-14 lg:left-24 lg:top-12;
}

.divimg {
    @apply w-[15.5rem] left-[5.5rem] lg:w-80 lg:left-8;
}

.dotfg {
    @apply right-[.1rem] bottom-14 lg:bottom-16 h-full w-full max-h-20 max-w-20;
}

.workbox {
    @apply flex flex-row items-center w-auto h-auto gap-2 p-2 border border-solid border-success-content/45 bg-base-100;
}
.workbox-innerbox {
    @apply w-4 h-4 border border-solid bg-primary border-primary;
}
</style>
