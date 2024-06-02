<script setup>
import ArrowIcon from '../components/icons/ArrowIcon.vue';
</script>

<template>
    <div class="container mx-auto">
        <div
            class="flex flex-col p-5 mx-4 mt-2 border-2 border-solid lg:flex-row lg:mx-16 border-success/40 rounded-3xl lg:rounded-tl-none lg:rounded-br-none"
        >
            <div
                class="flex flex-col bg-white shadow-2xl rounded-3xl lg:flex-row lg:rounded-tl-none lg:rounded-br-none"
            >
                <div
                    class="flex flex-col items-center justify-center w-full h-1/2 lg:h-auto lg:w-1/2"
                >
                    <div class="flex flex-col gap-4 m-6 ml-8 lg:gap-8 lg:m-28">
                        <h1 class="text-5xl font-bold text-black">404</h1>
                        <p class="text-xl text-success">
                            Sorry, We can't find the requested page. <br /><span
                                class="text-xl font-bold text-black"
                                >You are lost!</span
                            >
                        </p>
                        <button class="btn back">
                            <router-link to="/">Go to home</router-link>
                            <span
                                class="flex items-center justify-center w-full h-full bg-white rounded-full max-w-9 max-h-9"
                                ><arrow-icon class="w-4 h-4"></arrow-icon
                            ></span>
                        </button>
                    </div>
                </div>
                <div
                    class="flex w-full pb-1 h-1/2 lg:h-auto lg:w-1/2 bg-success rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl lg:rounded-br-none"
                >
                    <img
                        src="../assets/img/NotFoundChar.png"
                        alt="404"
                        class="object-scale-down w-full"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back {
    @apply inline-flex w-full lg:max-w-52 justify-between pl-5 pr-1 text-center text-base text-white bg-success font-medium font-fira-code rounded-full border-success hover:border-success active:text-white/60 active:border-success/50;
}
</style>
