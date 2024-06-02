import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

import AboutMeView from '@/views/AboutMeView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/project',
            name: 'projects',
            component: () => import('@/views/ProjectView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: AboutMeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/:pathMatch(.*)*', // Matches any path
            name: 'not-found',
            component: () => import('@/views/NotFoundView.vue'),
        },
    ],
});

export default router;
