<script setup>
import BoxIcon from '../icons/BoxIcon.vue';
import DotGenIcon from '../icons/DotGenIcon.vue';
import PhotoBGIcon from '../icons/PhotoBGIcon.vue';
</script>

<template>
    <!-- Skill header -->
    <div class="w-11/12 mt-4 lg:w-2/5">
        <div class="flex flex-row items-center gap-4 mt-48 lg:mt-24 font-fira-code">
            <div class="flex flex-row items-center justify-between w-full gap-4">
                <h2 class="pl-4 text-2xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">#</span>skills
                </h2>
                <hr class="w-full h-px border-0 bg-primary/30" />
            </div>
        </div>
    </div>
    <!-- Skill Content -->
    <div class="flex flex-row my-10 font-fira-code lg:max-h-80 mx-5 lg:mx-2.5">
        <!-- left decoration side -->
        <div class="relative items-center justify-start hidden w-5/12 lg:flex">
            <div class="absolute top-0 w-16 h-16 left-10">
                <DotGenIcon />
            </div>
            <div class="absolute w-32 h-32 stroke-1 stroke-primary/50 top-44 left-12">
                <PhotoBGIcon />
            </div>
            <div class="absolute w-16 h-16 top-36 left-60">
                <DotGenIcon />
            </div>
            <div class="absolute w-[6.5rem] h-[6.5rem] -top-4 left-72">
                <BoxIcon />
            </div>
            <div class="absolute w-14 h-14 top-48 left-[23.5rem]">
                <BoxIcon />
            </div>
        </div>
        <!-- right side -->
        <div
            class="flex w-full max-h-[32rem] justify-center lg:justify-start lg:max-h-full lg:flex-row-reverse lg:w-7/12 lg:pl-9"
        >
            <div class="skill-field">
                <!-- Languages -->
                <div class="order-1 skill-wrapper">
                    <h5 class="skill-title">Languages</h5>
                    <div class="skill-content">
                        <p>JavaScript</p>
                        <p>PHP</p>
                        <p>TypeScript</p>
                        <p>GO</p>
                    </div>
                </div>
                <!-- Framework -->
                <div class="order-last skill-wrapper">
                    <h5 class="skill-title">Frameworks</h5>
                    <div class="skill-content">
                        <p>Vue</p>
                        <p>Nuxt</p>
                        <p>React</p>
                        <p>Express</p>
                        <p>Bootstrap</p>
                        <p>Tailwind</p>
                        <p>Hapi</p>
                        <p>Next</p>
                    </div>
                </div>
                <!-- Databases -->
                <div class="order-3 skill-wrapper">
                    <h5 class="skill-title">Databases</h5>
                    <div class="skill-content">
                        <p>MySQL</p>
                        <p>PostgreSQL</p>
                        <p>SQLite</p>
                        <p>Mongo</p>
                    </div>
                </div>
                <!-- tools -->
                <div class="order-4 skill-wrapper">
                    <h5 class="skill-title">Tools</h5>
                    <div class="skill-content">
                        <p>VSCode</p>
                        <p>Linux</p>
                        <p>NPM</p>
                        <p>Figma</p>
                        <p>Git</p>
                        <p>Postman</p>
                    </div>
                </div>
                <!-- Other -->
                <div class="order-2 skill-wrapper">
                    <h5 class="skill-title">Other</h5>
                    <div class="skill-content">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JSON</p>
                        <p>SCSS</p>
                        <p>REST</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill-field {
    @apply lg:flex lg:flex-col lg:flex-wrap-reverse gap-4 grid grid-cols-2;
}

.skill-wrapper {
    @apply flex flex-col items-start border border-solid border-success max-w-[9.5rem] lg:max-w-48 flex-initial lg:order-none;
}

.skill-title {
    @apply w-full p-2 text-base font-semibold border-b border-solid text-accent font-fira-code border-success;
}

.skill-content {
    @apply flex flex-row flex-wrap items-start w-full gap-2 px-2 py-2 font-fira-code;
}
</style>
