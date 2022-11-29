import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: () => import('../views/CalendarView.vue')
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('../views/AuthView.vue')
        }
    ]
});

export default router;
