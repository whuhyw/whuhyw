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
  }
];

const router = createRouter({
  history: createWebHistory('/whuhyw/'),
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log('Navigating to:', to.path)
//   console.log('Component:', to.matched[0]?.components?.default)
//   next()
// })

export default router;