import Vue from 'vue'
import VueRouter from 'vue-router';

import Projects from '@/pages/Projects.vue';
import Project from '@/pages/Project.vue';
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
    {
        name: 'projetos',
        path: '/projetos/:id', 
        component: Project
    }
]

export const router = new VueRouter({
    routes,
    mode: 'history',    
  });