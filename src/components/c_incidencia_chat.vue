<template lang="pug">
.overflow-y-auto.p-2.h-full.bg-slate-100(class="pb-[12rem]")
  .w-full.flex.flex-start.overflow-y-auto
    div(class='w-1/2')
      .flex.items-center
        .text-xs.text-slate-600.font-semibold.tracking-normal.ml-3
          spa.cursor-pointer(class="hover:text-blue-600 hover:underline") Mircel Jones  
        span.text-slate-400.text-xs 3:21 PM
      .mt-3.w-full.bg-slate-200.p-3.rounded-b-xl.rounded-tr-xl
        p.text-xs.text-slate-600
          | Hey all,
          br
          | There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
  .w-full.flex.justify-end.mt-2(v-for="(m, i) in 5")
    div(class='w-1/2')
      .flex.items-center.justify-end
        p.font-semibold.mr-3.text-xs.text-slate-600
          | Me
          span.text-slate-400.text-xs 3:25 PM
      .mt-3.w-full.bg-slate-500.p-3.rounded-b-xl.rounded-tl-xl
        p.text-xs.text-slate-100.font-medium
          | Hey,
          br
          | we are own hidden lake forest which is netural lake are generaly found in mountain.
.bg-white.border-t.border-slate-200.sticky.bottom-0.px-4
  .relative.flex
    span.absolute.inset-y-0.flex.items-center
      button.inline-flex.items-center.justify-center.rounded-full.h-10.w-10.transition.duration-500.ease-in-out.text-gray-500(type='button' class='hover:bg-slate-100 focus:outline-none')
        svg-icon.w-6.h-6(type='mdi' :path='mdiMicrophone')
    input.w-full.text-slate-700.placeholder-slate-300.pl-12.rounded-md.py-5.text-sm.ml-2(type='text' placeholder='Ingresa un mensaje aqui' class='focus:outline-none focus:placeholder-slate-500')
    .absolute.right-0.items-center.inset-y-0.hidden(class='sm:flex')
      button.inline-flex.items-center.justify-center.rounded-full.h-10.w-10.transition.duration-500.ease-in-out.text-slate-500(type='button' class='hover:bg-slate-100 focus:outline-none')
        svg-icon.w-6.h-6(type='mdi' :path='mdiCloudUploadOutline')
      button.inline-flex.items-center.justify-center.rounded-full.h-10.w-10.transition.duration-500.ease-in-out.text-slate-500(type='button' class='hover:bg-slate-100 focus:outline-none')
        svg-icon.w-6.h-6(type='mdi' :path='mdiAccountArrowLeftOutline')
      button.inline-flex.items-center.justify-center.rounded-full.h-10.w-10.transition.duration-500.ease-in-out.text-slate-500(type='button' class='hover:bg-slate-100 focus:outline-none')
        svg-icon.w-6.h-6(type='mdi' :path='mdiEmoticonHappyOutline')
      button.inline-flex.items-center.justify-center.rounded-md.px-5.py-2.transition.duration-500.ease-in-out.text-white.bg-primary-600.mx-2(type='button' class='hover:bg-primary-500 focus:outline-none')
        span.font-semibold.text-xs Enviar
</template>
<script>
import { ref, defineComponent } from "vue"
import {
  mdiMicrophone,
  mdiCloudUploadOutline,
  mdiEmoticonHappyOutline,
  mdiAccountArrowLeftOutline
} from '@mdi/js'
export default defineComponent({
  name: "View_Login",
  setup(props, { emit }) {

    return {
      mdiMicrophone,
      mdiCloudUploadOutline,
      mdiEmoticonHappyOutline,
      mdiAccountArrowLeftOutline
    }
  }
});
</script>