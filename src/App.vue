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
    <router-view />
</template>

<style scoped></style>
