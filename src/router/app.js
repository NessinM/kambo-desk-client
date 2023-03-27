import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore }                   from '@/stores';
const router = createRouter({
  history        : createWebHistory(),
  linkActiveClass: 'active',
  routes         : [
    {
      path     : '/',
      name     : 'dashboard',
      component: () => import('@/views/View_Welcome.vue'),
      meta     : {
        title: 'Pagina principal'
      }
    },
    {
      path     : '/incidencias',
      name     : 'incidencias',
      component: () => import('@/views/View_Incidencias.vue'),
      meta     : {
        title: 'Incidencias'
      }
    },
    {
      path     : '/:pathMatch(.*)*',
      name     : 'notfound',
      component: () => import('@/views/View_404.vue'),
      meta     : {
        title: 'Pagina no encontrada'
      }
    }
  ]
})

// router.beforeEach((to) => {
//   const { __sdTk } = useAuthStore();
//   if (!__sdTk && to.meta.auth) return { name: 'login' }
//   if (__sdTk && !to.meta.auth) return { name: 'dashboard' }
// });

router.afterEach((to, from) => {
  document.title = `${to.meta.title}` || '';
});

export default router