<template lang="pug">
// component
.bg-white.h-full.flex.justify-center(class='dark:bg-gray-900')
  .flex.items-center.w-full.max-w-md.px-6.mx-auto(class='lg:w-2/6')
    .flex-1
      .text-center.justify-center
        h2.text-4xl.font-bold.text-center.text-text-500(class='dark:text-white') Gestión de servicios de TI (ITSM)
        p.mt-3.text-gray-400.font-normal.text-sm(class='dark:text-gray-300') Ingresa tus credenciales correctamente para poder acceder al aplicativo.
      .mt-8
        div
          label.block.mb-2.text-sm.text-gray-600.font-bold(for='email' class='dark:text-gray-200') Email
          input.bg-white.block.w-full.px-4.py-3.mt-2.text-gray-700.placeholder-gray-200.bg-white.border-2.text-sm.rounded-md.border-gray-100.text-text-300.font-medium(
            type='text'
            name='email'
            v-model="email"
            placeholder='example@example.com'
            class='dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  dark:focus:border-primary-400  focus:ring-gray-400 focus:outline-none focus:bg-white  focus:border-gray-200'
          )
        .mt-6
          .flex.justify-between.mb-2
            label.text-sm.text-gray-600.font-bold(for='password' class='dark:text-gray-200') Password
            a.text-xs.text-gray-300.font-medium(href='#' class='focus:text-primary-500 hover:text-primary-500 hover:underline') ¿Has olvidado tu contraseña?
          input.bg-white.block.w-full.px-4.py-3.mt-2.text-gray-700.placeholder-gray-200.bg-white.border-2.text-sm.rounded-md.border-gray-100.text-text-300.font-medium(
            type='password'
            name='password'
            v-model="password"
            placeholder='Ingresa tu contraseña'
            class='dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  dark:focus:border-primary-400  focus:ring-gray-400 focus:outline-none  focus:border-gray-200'
          )
        .mt-6
          button.w-full.px-4.py-2.tracking-wide.text-white.transition-colors.duration-200.transform.bg-primary-600.rounded-md(
            @click="fetchLogin()"
            class='hover:bg-primary-500 focus:outline-non'
          )
            span.text-sm.font-medium Ingresar
      p.mt-6.text-xs.text-center.text-gray-300.font-medium
        | ¿Aún no tienes una cuenta?
        a.text-primary-500.font-bold.ml-2(href='#' class='focus:outline-none focus:underline hover:underline') Registrarse
        | .
  .absolute.top-0.left-0.p-4.bg-white.rounded-b-full
    img.h-10.rounded-full(alt='Kanboard' src='/kanboard-logo.png')
</template>
<script>
import { ref, defineComponent } from "vue"
import { useAuthStore } from "@/stores"

export default defineComponent({
  name: "View_Login",
  setup(props, { emit }) {

    const { login }      = useAuthStore()
    const email          = ref("jzevallos@datacont.com")
    const password       = ref("tukutin39")
    const isLoadingLogin = ref(false)

    const fetchLogin = async () => {
      try {
        isLoadingLogin.value = true
        await login(email.value, password.value)
        window.location.reload()
      } catch (error) {
        alert(error)
      } finally {
        isLoadingLogin.value = false
      }
    };

    return {
      isLoadingLogin,
      email,
      password,
      fetchLogin
    }
  }
});
</script>