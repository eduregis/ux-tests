import Vue from 'vue'
import VueRouter from 'vue-router';

import Projects from '@/pages/Projects.vue';
import Resume from '@/pages/Resume.vue';
import AboutMe from '@/pages/AboutMe.vue';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Projects',
        path: '/',
        component: Projects
    },
    {
        name: 'Resume',
        path: '/resume',
        component: Resume
    },
    {
        name: 'AboutMe',
        path: '/aboutme',
        component: AboutMe
    },
]

export const router = new VueRouter({
    routes,
    mode: 'history',    
  });