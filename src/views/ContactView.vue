<script setup>
import contactComp from '../components/contactComponent/contactComp.vue';
</script>
<template>
    <!-- Contact header -->
    <div class="mt-12">
        <div class="flex flex-row items-center font-fira-code">
            <div
                class="flex flex-col items-center justify-between w-full gap-4 lg:pl-4 lg:items-start"
            >
                <h2 class="text-4xl font-semibold lg:pl-0 text-accent">
                    <span class="text-primary">/</span>contact
                </h2>
            </div>
        </div>
    </div>
    <!-- Contact Content -->
    <div
        class="flex flex-col items-center justify-between gap-4 px-4 my-10 lg:gap-0 lg:flex-row font-fira-code"
    >
        <!-- left side -->
        <div class="max-w-lg text-center lg:text-start">
            <p class="lg:pr-4">
                I’m interested in freelance opportunities. However, if you have other request or
                question, don’t hesitate to contact me through social media or drop me a message in
                form contact!
            </p>
        </div>
        <!-- right side -->
        <div class="w-full max-w-lg m-2">
            <div class="shadow-2xl card bg-base-100">
                <contactComp />
            </div>
        </div>
    </div>
</template>
