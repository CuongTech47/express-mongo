import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from '../views/HomeView'
import category from "@/components/pages/Category/CategoryPage"
import brand from "@/components/pages/Brand/BrandPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeView
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/brand',
    name: 'brand',
    component: brand
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
