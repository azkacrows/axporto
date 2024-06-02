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
        <div class="navbar-start lg:w-1/4">
            <!-- social chandelier -->
            <div class="chan">
                <hr class="chan-hr" />
                <div class="chan-icon">
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://github.com/azkacrows"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <GithubIcon />
                        </a>
                    </div>
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://discord.com/users/461921367609049090"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <DiscordIcon />
                        </a>
                    </div>
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://www.linkedin.com/in/azkacrows/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </div>
            <routerLink to="/" class="hidden text-xl btn text-accent betton lg:flex lg:p-1"
                >Jamal<span class="text-primary">Luthfi</span></routerLink
            >
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
            <routerLink to="/" class="text-xl btn text-accent betton lg:hidden"
                >Jamal<span class="text-primary">Luthfi</span></routerLink
            >
        </div>
        <!-- end navbar center  -->
        <!-- navbar end  -->
        <div class="navbar-end lg:w-3/4">
            <!-- burger -->
            <div class="dropdown dropdown-end lg:hidden">
                <div tabindex="0" role="button" class="btn btn-ghost">
                    <BurgerIcon />
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content burger-ul">
                    <li :class="{ active: isActive('/') }">
                        <router-link to="/"><span class="text-primary">#</span>Home</router-link>
                    </li>
                    <li>
                        <details>
                            <summary
                                :class="{
                                    active:
                                        isActive('/project') ||
                                        isActive('/exp') ||
                                        isActive('/cert'),
                                }"
                            >
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
                                <li :class="{ active: isActive('/cert') }">
                                    <router-link to="/cert"
                                        ><span class="text-primary">#</span
                                        >Certifications</router-link
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
                    <hr class="my-2" />
                    <div class="burger-social">
                        <div class="btn btn-ghost btn-square btn-sm">
                            <a
                                href="https://github.com/azkacrows"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-full h-full max-w-8 max-h-8"
                            >
                                <GithubIcon />
                            </a>
                        </div>
                        <div class="btn btn-ghost btn-square btn-sm">
                            <a
                                href="https://discord.com/users/461921367609049090"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-full h-full max-w-8 max-h-8"
                            >
                                <DiscordIcon />
                            </a>
                        </div>
                        <div class="btn btn-ghost btn-square btn-sm">
                            <a
                                href="https://www.linkedin.com/in/azkacrows/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="w-full h-full max-w-8 max-h-8"
                            >
                                <LinkedinIcon />
                            </a>
                        </div>
                    </div>
                </ul>
            </div>
            <!-- burger end -->
            <!-- navbar lg -->
            <ul class="z-50 hidden px-1 menu menu-horizontal lg:flex">
                <li :class="{ active: isActive('/') }">
                    <router-link to="/"><span class="text-primary">#</span>Home</router-link>
                </li>
                <li>
                    <details>
                        <summary
                            :class="{
                                active:
                                    isActive('/project') || isActive('/exp') || isActive('/cert'),
                            }"
                        >
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
                            <li :class="{ active: isActive('/cert') }">
                                <router-link to="/cert"
                                    ><span class="text-primary">#</span>Certifications</router-link
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
                <MoonIcon />
                <input type="checkbox" value="id" class="toggle toggle-sm theme-controller" />
                <SunIcon />
            </div>
            <!-- end navbar lg -->
        </div>
        <!-- end navbar end  -->
    </div>
</template>

<style scoped>
.chan {
    @apply absolute top-0 flex-col items-center gap-2 left-3 hidden lg:inline-flex;
}
.chan .chan-hr {
    @apply w-px h-[7.5rem] border-0 bg-[#cfd0d2];
}
.chan .chan-icon {
    @apply flex flex-col items-center;
}
.betton {
    @apply bg-inherit outline-none border-transparent shadow-none gap-0;
}
.tema-desktop {
    @apply items-center hidden lg:flex cursor-pointer gap-2 mr-2;
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
    @apply text-secondary;
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
