<script setup>
import { ref, onMounted } from 'vue';
import FullSkillComp from '@/components/aboutMeComponent/FullSkillComp.vue';
import WakaTimeComp from '@/components/aboutMeComponent/WakaTimeComp.vue';
import skillList from '@/stores/skillList.json';

const skills = ref([]);

onMounted(() => {
    skills.value = skillList.SkillList;
});
</script>

<template>
    <!-- About header -->
    <div class="mt-12">
        <div class="flex flex-row items-center font-fira-code">
            <div
                class="flex flex-col items-center justify-between w-full gap-4 lg:pl-4 lg:items-start"
            >
                <h2 class="text-4xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">/</span>about-me
                </h2>
                <p>Who am i?</p>
            </div>
        </div>
    </div>
    <!-- About Content -->
    <div
        class="flex flex-col items-center justify-between gap-4 px-4 my-10 lg:gap-0 lg:flex-row font-fira-code"
    >
        <!-- left side -->
        <div class="flex flex-col max-w-lg gap-6 text-start">
            <p>Hello, i’m Jamal!</p>
            <p>
                I’m a self-taught front-end developer based in East java, Indonesia. I can develop
                responsive websites from scratch and raise them into modern user-friendly web
                experiences.
            </p>
            <p>
                For over a year, I've been transforming my creativity and expertise into websites.
                I've been assisting many clients in establishing their web presence. I am always
                looking for new technologies and frameworks to learn about.
            </p>
        </div>
        <!-- right side -->
        <div class="w-full max-w-lg m-2">
            <div class="card">
                <div class="self-end w-full max-w-md">
                    <div class="relative">
                        <img
                            src="../assets/img/Me.png"
                            class="object-scale-down contrast-125 saturate-200"
                            alt=""
                        />
                        <hr class="flex w-full h-px border-0 bg-primary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Skill header -->
    <div class="flex flex-row items-center gap-4 px-4 mt-28 font-fira-code">
        <div class="flex flex-row items-center justify-center w-full gap-4 lg:justify-between">
            <h2 class="pl-4 text-2xl font-semibold lg:pl-0 text-accent">
                <span class="text-primary">#</span>skills
            </h2>
        </div>
    </div>
    <!-- Skill Content -->
    <div
        class="grid items-stretch justify-center grid-cols-2 gap-4 px-4 my-10 lg:flex lg:items-start lg:flex-row font-fira-code"
    >
        <FullSkillComp
            class="mx-auto lg:mx-0"
            v-for="skill in skills"
            :key="skill.title"
            :title="skill.title"
            :skills="skill.skills"
        />
    </div>
    <!-- Fun header -->
    <div class="flex flex-row items-center gap-4 px-4 mt-28 font-fira-code">
        <div class="flex flex-row items-center justify-center w-full gap-4 lg:justify-between">
            <h2 class="pl-4 text-2xl font-semibold lg:pl-0 text-accent">
                <span class="text-primary">#</span>my-fun-facts
            </h2>
        </div>
    </div>
    <!-- Fun Content -->
    <div class="flex flex-col-reverse items-center justify-between gap-4 px-4 my-10 lg:flex-row">
        <div class="flex flex-wrap gap-2 lg:w-5/12">
            <p class="order-1 hob lg:order-none">
                I like <span class="font-semibold">winter</span> more than
                <span class="font-semibold">summer</span>
            </p>
            <p class="order-3 hob lg:order-none">I like singing</p>
            <p class="order-4 hob lg:order-none">I like to play video games</p>
            <p class="order-2 hob lg:order-none">I like to play guitar</p>
            <p class="order-6 hob lg:order-none">
                I spend most my time <span class="font-semibold">reading</span> than
                <span class="font-bold">writting</span>
            </p>
            <p class="order-5 hob lg:order-none">
                My favorite anime is
                <span class="font-bold">Ousama Ranking </span>
            </p>
        </div>
        <div class="w-full lg:w-5/12">
            <WakaTimeComp />
        </div>
    </div>
</template>

<style scoped>
.hob {
    @apply border border-solid border-success p-1 flex-auto lg:flex-none;
}
</style>
