import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';



const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectsPage,
        },
        {
            path: '/project/:slug',
            name: 'singleproject',
            component: SingleProject,
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound,
        }
        
    ]

});

export { router };