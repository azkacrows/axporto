<!-- eslint-disable vue/no-parsing-error -->
<script setup>
// import { ref, onMounted } from 'vue';
import FullProjectComp from '@/components/projectComponent/FullProjectComp.vue';

// const projects = ref([]);

// onMounted(() => {
//     projects.value = projectsLists;
// });
</script>
<template>
    <!-- Project header -->
    <div class="mt-12">
        <div class="flex flex-row items-center font-fira-code">
            <div
                class="flex flex-col items-center justify-between w-full gap-4 lg:px-4 lg:items-start"
            >
                <h2 class="text-4xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">/</span>projects
                </h2>
                <p>List of my projects</p>
            </div>
        </div>
    </div>
    <!-- Project Content -->
    <div>
        <FullProjectComp />
    </div>
</template>
