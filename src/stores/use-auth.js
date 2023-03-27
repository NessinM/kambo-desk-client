// import { useRouter }    from 'vue-router'
import { defineStore } 	from 'pinia'
import { useStorage }   from '@vueuse/core'
import { apiPost }      from '../utils/axios'

// const router = useRouter()

export const useAuthStore = defineStore('auth-store', {
  state: () => ({
    __sdTk   : useStorage('__sdTk', ''),
    __sdUs   : useStorage('__sdUs', ''),
    __sdRo   : useStorage('__sdRo', ''),
    __sdNa   : useStorage('__sdNa', ''),
    returnUrl: null
  }),
	getters: {
	},
	actions: {
    async login(email, password) {
      try {
				const { __sdTk ,__sdUs ,__sdRo ,__sdNa } = await apiPost('/auth/login', { email, password })
        this.__sdTk = __sdTk
        this.__sdUs = __sdUs
        this.__sdRo = __sdRo
        this.__sdNa = __sdNa
        this.returnUrl  =  '/'
        // localStorage.setItem('user', JSON.stringify(user))
        // router.push(this.returnUrl || '/');
			} catch (error) {
				throw error
			}
    },
    logout() {
      this.user = null;
      localStorage.clear();
      // router.push('/login');
    }
	}
})