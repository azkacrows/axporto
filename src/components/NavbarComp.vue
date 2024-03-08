<script setup>
import BurgerIcon from './icons/BurgerIcon.vue';
import SunIcon from './icons/SunIcon.vue';
import MoonIcon from './icons/MoonIcon.vue';
import MobileSunIcon from './icons/MobileSunIcon.vue';
import MobileMoonIcon from './icons/MobileMoonIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (routeName) => {
    return route.path === routeName;
};
</script>

<template>
    <div class="navbar bg-base-100 font-fira-code">
        <!-- navbar start  -->
        <div class="navbar-start">
            <a class="hidden text-xl btn betton lg:flex">daisyUI</a>
            <div class="tema-mobile">
                <label class="swap swap-rotate">
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller" value="id" />
                    <!-- sun icon -->
                    <MobileSunIcon />
                    <!-- moon icon -->
                    <MobileMoonIcon />
                </label>
            </div>
        </div>
        <!-- end navbar start  -->
        <!-- navbar center  -->
        <div class="navbar-center">
            <a class="text-xl btn betton lg:hidden">daisyUI</a>
        </div>
        <!-- end navbar center  -->
        <!-- navbar end  -->
        <div class="navbar-end">
            <!-- burger -->
            <div class="dropdown dropdown-end lg:hidden">
                <div tabindex="0" role="button" class="btn btn-ghost">
                    <BurgerIcon />
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content burger-ul">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
                    <hr class="my-2" />
                    <div class="burger-social">
                        <div class="btn btn-ghost btn-square btn-sm">
                            <GithubIcon>
                                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                            </GithubIcon>
                        </div>
                        <div class="btn btn-ghost btn-square btn-sm">
                            <DiscordIcon>
                                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                            </DiscordIcon>
                        </div>
                        <div class="btn btn-ghost btn-square btn-sm">
                            <LinkedinIcon>
                                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                            </LinkedinIcon>
                        </div>
                    </div>
                </ul>
            </div>
            <!-- burger end -->
            <!-- navbar lg -->
            <ul class="menu menu-horizontal px-1 hidden lg:flex">
                <li :class="{ active: isActive('/home') }">
                    <router-link to="/home"><span class="text-primary">#</span>Home</router-link>
                </li>
                <li>
                    <details>
                        <summary :class="{ active: isActive('/project') || isActive('/exp') }">
                            <span class="text-primary">#</span>Works
                        </summary>
                        <ul class="p-2">
                            <li :class="{ active: isActive('/project') }">
                                <router-link to="/project"
                                    ><span class="text-primary">#</span>Projects</router-link
                                >
                            </li>
                            <li :class="{ active: isActive('/exp') }">
                                <router-link to="/exp"
                                    ><span class="text-primary">#</span>Experiences</router-link
                                >
                            </li>
                        </ul>
                    </details>
                </li>
                <li :class="{ active: isActive('/about') }">
                    <router-link to="/about"
                        ><span class="text-primary">#</span>About-Me</router-link
                    >
                </li>
                <li :class="{ active: isActive('/contact') }">
                    <router-link to="/contact"
                        ><span class="text-primary">#</span>Contacts</router-link
                    >
                </li>
            </ul>
            <div class="tema-desktop">
                <SunIcon />
                <input type="checkbox" value="id" class="toggle toggle-sm theme-controller" />
                <MoonIcon />
            </div>
            <!-- end navbar lg -->
        </div>
        <!-- end navbar end  -->
    </div>
</template>

<style scoped>
.betton {
    @apply bg-inherit outline-none border-transparent shadow-none;
}
.tema-desktop {
    @apply items-center hidden lg:flex cursor-pointer gap-2;
}
.tema-mobile {
    @apply flex items-center btn btn-ghost lg:hidden;
}
.burger-ul {
    @apply mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52;
}
.burger-social {
    @apply my-2 mx-auto inline-flex items-center gap-x-1;
}

/* style sebelumnya */
.active {
    @apply text-white;
}

.menu :where(li:not(.menu-title) > *:not(ul, details, .menu-title, .btn)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
    @apply gap-0 text-base;
}
.menu :where(li > details > summary):after,
.menu :where(li > .menu-dropdown-toggle):after {
    @apply ml-[0.125rem];
}
</style>
