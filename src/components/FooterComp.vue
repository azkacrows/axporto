<script setup>
import GithubIcon from './icons/GithubIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import InstaIcon from './icons/InstaIcon.vue';
import MailIcon from './icons/MailIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import WhatsappIcon from './icons/WhatsappIcon.vue';
import TelegramIcon from './icons/TelegramIcon.vue';
</script>

<template>
    <div class="mx-5 lg:mx-28">
        <div class="container">
            <div class="flex flex-col items-center justify-between gap-4 mt-8 lg:gap-8">
                <div
                    class="flex flex-row flex-wrap items-center justify-center w-full gap-3 max-w-48 lg:max-w-full"
                >
                    <!-- Mail -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="mailto:azkacrows@gmail"
                            target=""
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <MailIcon />
                        </a>
                    </div>
                    <!-- Twitter -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://twitter.com/azkacrows"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <TwitterIcon />
                        </a>
                    </div>
                    <!-- Linkedin -->
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
                    <!-- Insta -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://www.instagram.com/azkacrows/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <InstaIcon />
                        </a>
                    </div>
                    <!-- Discord -->
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
                    <!-- Telegram -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://t.me/astronautess"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <TelegramIcon />
                        </a>
                    </div>
                    <!-- Whatsapp -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://wa.me/6283112238106"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <WhatsappIcon />
                        </a>
                    </div>
                    <!-- Github -->
                    <div class="btn btn-ghost btn-square btn-sm">
                        <a
                            href="https://github.com/azkacrows/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-full h-full max-w-8 max-h-8"
                        >
                            <GithubIcon />
                        </a>
                    </div>
                </div>
                <p
                    class="w-full text-base font-normal text-center max-w-52 lg:max-w-full font-fira-code text-secondary"
                >
                    <span class="copyleft">&copy;</span>Copyleft {{ new Date().getFullYear() }},
                    Made with ☕ and 😴 by Jamal Luthfi.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.copyleft {
    @apply inline-block rotate-180 text-lg font-sans;
}
</style>
