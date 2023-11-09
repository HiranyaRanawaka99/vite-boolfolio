import { createWebHistory, createRouter } from "vue-router";

import Homepage from '../pages/HomePage.vue';
import BlogPage from '../pages/PortfolioPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

const router = createRouter({
    //Aggiugno history
    history: createWebHistory(),

    //Aggiungo Rotte
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: Homepage,
        },
        {
            name: 'portfoliopage',
            path: '/portfolio',
            component: BlogPage,
        },
        {
            name: 'projectdetailpage',
            path: '/detail/:id',
            component: ProjectDetailPage,
        }
    ],

});


export { router };