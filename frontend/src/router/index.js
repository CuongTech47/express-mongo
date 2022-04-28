import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import CategoryHomeView from '../views/CategoryHomeView.vue'
import CategoryItem from '../components/CategoryItem.vue'
import BrandItem from '../components/BrandItem.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/danh-muc-san-pham',
    name: 'categoryItem',
    component: CategoryItem
  },
  
  // {
  //   path: '/danh-muc-san-pham',
  //   name: 'CategoryView',
  //   component: CategoryView
  // },
  {
    path: '/thuong-hieu-san-pham',
    name: 'brandItem',
    component: BrandItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
