import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import AppAbout from './pages/AppAbout.vue';



const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
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
            path: "/:pathMatch(.*)*",
            name: 'not-found',
            component: NotFound,
        }
        
    ]

});

export { router };