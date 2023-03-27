import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history        : createWebHistory(),
  linkActiveClass: 'active',
  routes         : [
    {
      path     : '/',
      name     : 'login',
      component: () => import('@/views/View_Login.vue'),
      meta     : {
        title: 'Iniciar sesión'
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = `${to.meta.title}` || '';
});

export default router