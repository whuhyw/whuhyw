import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import CategoryDetail from '@/components/CategoryDetail.vue';
import AttractionDetail from '@/components/AttractionDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:categoryId',
    name: 'CategoryDetail',
    component: CategoryDetail,
  },
  {
    path: '/attraction/:categoryId/:attractionId',
    name: 'AttractionDetail',
    component: AttractionDetail,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/whuhyw/'),
  routes
});



export default router;