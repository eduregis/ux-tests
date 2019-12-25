import Vue from 'vue'
import VueRouter from 'vue-router';

import AboutMe from '@/pages/AboutMe.vue';
import Projects from '@/pages/Projects.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'AboutMe',
        path: '/',
        component: AboutMe
    },
    {
        name: 'Projects',
        path: '/projects',
        component: Projects
    },
]

export const router = new VueRouter({
    routes,
    mode: 'history',    
  });