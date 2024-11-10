import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/DashboardComponent.vue';
import About from '../components/About.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    { 
        path: '/about', 
        component: About, 
        name: 'about' 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
