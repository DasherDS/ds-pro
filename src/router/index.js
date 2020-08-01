import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    meta:{
      index:0
    },
    component: Home,
  },
  {
    path:'/dasher/index',
    name:'DasherIndex',
    meta:{
      index:3
    },
    component:()=>import("../views/DasherIndex/index.vue")
  },
  {
    path: '/login',
    name: 'Login',
    meta:{
      index:1
    },
    component: () => import("../views/login/index.vue")
  },
  {
    path: '/register',
    name: 'Register',
    meta:{
      index:2
    },
    component: () => import("../views/register/index.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
