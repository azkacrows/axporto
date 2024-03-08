<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
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
