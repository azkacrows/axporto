<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    skills: Array,
});
</script>

<template>
    <div class="skill-wrapper">
        <h5 class="skill-title">{{ props.title }}</h5>
        <div class="skill-content">
            <p v-for="skill in props.skills" :key="skill">{{ skill }}</p>
        </div>
    </div>
</template>

<style scoped>
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
