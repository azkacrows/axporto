import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
// import ProjectView from '@/views/ProjectView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: HomeView,
        },
        // {
        //     path: '/project',
        //     name: 'project',
        //     component: ProjectView,
        // },
        // {
        //     path: '/cert',
        //     name: 'cert',
        //     component: () => import('@/views/CertView.vue'),
        // }
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutMeView.vue'),
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
