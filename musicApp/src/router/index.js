import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Manage from "@/views/Manage.vue"
import error from "@/views/error.vue"



const routes = [
  {
    name: 'home',
    path: "/",
    component: Home,
  },
  {
    name: 'about',
    path: "/about",
    component: About,
  },
  {
    name: 'manage',
    // alias:'/manage',
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from,next) => {
      console.log('manage route guard')
      next()

    }
  },
  {
    path: '/manage',
    redirect: {name: 'manage'}
  },
  {
    name: 'error',
    path: '/:catchAll(.*)*',
    component: error,
  }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-orange-500'


})

router.beforeEach((to, from, next) => {
  console.log('Global Guard')

next()
})

export default router
