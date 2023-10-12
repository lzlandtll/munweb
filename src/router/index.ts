import { createRouter, createWebHistory } from 'vue-router'

const indexView = () => import('@/views/home/index.vue')

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
            path: '/',
            name: 'app',
            component: indexView,
        }
    ],
})

export default router
