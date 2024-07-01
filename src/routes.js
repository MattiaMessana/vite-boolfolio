import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectsPage from './pages/ProjectsPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            components: AppHome,
        },
        {
            path: '/project',
            name: 'project',
            components: ProjectsPage,
        }
        
    ]

});

export { router };