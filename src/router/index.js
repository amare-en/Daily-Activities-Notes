import { createRouter, createWebHistory } from 'vue-router'//define our ROUTING RULES
import HomeView from '../views/HomeView.vue'
import Calculater from '@/views/Calculater.vue'
import Addnotes from '@/views/Addnotes.vue'
import Quizes from '@/views/Quizes.vue'
import Course from '@/components/Course.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
      {
      path: '/calculate',
      name: 'calculater',
      component:Calculater
    },
    {
      path: '/quizes',
      name: 'quizes',
      component:Quizes
    },

        {
      path: '/course/:id',
      name: 'course',
      component:Course
    },


 {
      path: '/addnotes',
      name: 'Addnotes',
      component:Addnotes
    }
  ]
})

export default router
