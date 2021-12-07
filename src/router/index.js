import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
            layout: 'AboutLayout'
        }
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('@/views/Skills.vue'),
        meta: {
            layout: 'SkillsLayout'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
        meta: {
            layout: 'ProjectsLayout'
        }
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/views/Contacts.vue'),
      meta: {
          layout: 'ContactsLayout'
      }
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router