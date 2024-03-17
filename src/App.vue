<script setup>
import { RouterView } from 'vue-router';
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
<style>
html {
    overflow: scroll;
    overflow-x: hidden;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>
