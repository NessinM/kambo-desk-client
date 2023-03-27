
<template lang="pug">
.p-4.w-full.h-full
  .grid.grid-cols-3.gap-12
    .flex.justify-center.items-center
      .card.grid.grid-cols-8.max-w-5xl.rounded-xl.bg-primary-600
        .col-span-6
          h2.font-bold.text-3xl.text-white.ml-10.mt-8
            | Una nube para todo tu viaje
          p.font-light.text-white.text-sm.ml-10.mt-5
            | Cree aplicaciones robustas utilizando una cartera completa de productos de cómputo, almacenamiento, bases de datos y redes.
          button.text-white.font-semibold.ml-10.mt-5.mb-8.group
            | Ver los documentos
            svg.inline-block.h-6.w-6.transition.delay-100.transition-200(xmlns='http://www.w3.org/2000/svg' class='group-hover:translate-x-2' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8l4 4m0 0l-4 4m4-4H3')
        .col-span-2.relative
          img.absolute.bottom-0.right-0(src='https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg')
    div 09

</template>
<script>
import { ref, defineComponent } from "vue"

export default defineComponent({
  name: "View_Login",
  setup(props, { emit }) {

    const isMiniSidebar = ref(false)

    return {
      isMiniSidebar
    }
  }
});
</script>
