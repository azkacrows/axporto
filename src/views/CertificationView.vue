<script setup>
import CertificationComp from '../components/certificationComponent/CertificationComp.vue';
</script>

<template>
    <!-- About header -->
    <div class="mt-12">
        <div class="flex flex-row items-center font-fira-code">
            <div
                class="flex flex-col items-center justify-between w-full gap-4 lg:pl-4 lg:items-start"
            >
                <h2 class="text-4xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">/</span>certification
                </h2>
                <p>certifications i've acquired thus far</p>
            </div>
        </div>
    </div>
    <!-- About Content -->
    <div
        class="flex flex-col items-center justify-between gap-4 px-4 my-10 lg:gap-0 lg:flex-row font-fira-code"
    >
        <CertificationComp />
    </div>
</template>

<style scoped></style>
