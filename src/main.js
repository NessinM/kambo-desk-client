import './tailwind.css'

import { createApp }  from 'vue'
import appTemplate    from './App.vue'
import authTemplate   from './App_Auth.vue'
import pinia          from '@/plugins/pinia'
import routesAuth     from '@/router/auth'
import routesApp      from '@/router/app'
import SvgIcon        from '@jamescoyle/vue-icon'

const __sdTk = localStorage.getItem('__sdTk')
console.log('__sdTk', __sdTk)
createApp(__sdTk ? appTemplate : authTemplate )
  .component('svg-icon', SvgIcon)
  .use(pinia)
  .use(__sdTk ? routesApp : routesAuth)
  .mount('#app')
