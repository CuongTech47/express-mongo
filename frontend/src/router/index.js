import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  // {
  //   path: '/danh-muc-san-pham',
  //   name: 'CategoryView',
  //   component: CategoryView
  // },
  // {
  //   path: '/thuong-hieu-san-pham',
  //   name: 'BrandView',
  //   component: BrandView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
