import { createWebHistory, createRouter } from "vue-router";

import Homepage from '../pages/HomePage.vue';
import BlogPage from '../pages/BlogPage.vue';

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
            name: 'blogpage',
            path: '/blog',
            component: BlogPage,
        }
    ],

});


export { router };