import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import ArticleView from '@/views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login View',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register View',
    component: RegisterView
  },
  {
    path: '/article/:id',
    name: 'Detail Article',
    component: ArticleDetail
  },
  {
    path: '/article',
    name: 'Article',
    component: ArticleView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
