<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
    <header>
        <nav>
            <NavbarComp />
        </nav>
    </header>
    <main>
        <router-view />
    </main>
</template>

<style scoped></style>
