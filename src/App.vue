<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.pageYOffset > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header>
        <nav :class="{ 'navbar-shadow': isScrolled }">
            <NavbarComp />
        </nav>
    </header>
    <main>
        <router-view />
    </main>
    <footer>
        <FooterComp />
    </footer>
</template>

<style scoped>
.navbar-shadow {
    @apply shadow-sm transition duration-300 ease-in-out;
}
</style>
<style>
/* html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
} */

header {
    @apply sticky top-0 z-[9999];
}

nav {
    @apply lg:mx-28 rounded-b-lg;
}

main {
    @apply lg:mx-28;
}

footer {
    @apply flex flex-row items-center justify-center mt-16 mb-4 border-t border-solid border-success/30;
}
</style>
