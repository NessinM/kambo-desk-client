
<template lang="pug">
.w-full.bg-white.flex.overflow-x-auto.mt-2
  .overflow-auto.border-r.border-slate-200(class="h-[calc(100vh-4rem)] lg:w-2/6 w-full")
    .h-13.mx-4.flex.justify-end.sticky.top-0.bg-white.pb-2
      .flex.items-center
        .flex.items-center
          button.text-slate-700.px-2.py-1.border.border-slate-100.rounded-lg.shadow.transition.duration-100(title='Reload' class='hover:bg-slate-200')
            svg.h-5.w-5(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15')
        span.bg-slate-200.h-6.mx-3(class='w-[.5px]')
        .flex.items-center.space-x-2
          button.text-slate-700.px-2.py-1.border.border-slate-200.rounded-lg.shadow.transition.duration-100(title='Archive' class='hover:bg-slate-50')
            svg.h-5.w-5(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20')
        span.bg-slate-200.h-6.mx-3(class='w-[.5px]')
        .flex.items-center.space-x-2
          button.text-slate-700.px-2.py-1.border.border-slate-200.rounded-lg.shadow.transition.duration-100(title='Mark As Read' class='hover:bg-slate-50')
            svg.h-5.w-5(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76')
          button.text-slate-700.px-2.py-1.border.border-slate-200.rounded-lg.shadow.transition.duration-100(title='Mark As Unread' class='hover:bg-slate-50')
            svg.h-5.w-5(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z')
    template(v-for="(incidencia, i) in incidencias")
      .flex.group.transition.cursor-default
        .flex.items-center.py-2.border-l-4.border-white.transition.flex-1(
          class='px-2.5 hover:bg-slate-50'
          :class="{'!border-primary-600': incidencia.unRead, '!bg-primary-100' : incidencia.id === idIncidenciaSelected}"
          @click="selectedIncidencia(incidencia, i)"
        )
          .flex-1.flex
            .h-8.w-8.items-center.rounded-md.bg-slate-100.text-black.mr-3.flex(class='group-hover:bg-slate-200' :class="{'!bg-primary-200' : incidencia.id === idIncidenciaSelected}")
              span.tag.w-full.text-center.text-xs.font-bold.text-slate-700(class='group-hover:text-slate-600' :class="{'!text-primary-600' : incidencia.id === idIncidenciaSelected}") NA
            .flex.flex-col.items-start.justify-between.font-light.text-slate-600
              span.text-text-500.font-bold.text-xs(:class="{'!text-primary-600' : incidencia.id === idIncidenciaSelected}")  Nesyn Alvarado Bedoya
              span.text-xs.text-slate-500.font-medium(:class="{'!text-primary-600' : incidencia.unRead}") Tengo problemas con mi in Tengo problemas con
              span.text-xs.font-normal.text-slate-400 just start writing with plain text
          .flex
            span.text-xs.text-slate-500.font-medium.ml-3(:class="{'!text-primary-600' : incidencia.unRead}") 10:23
        .w-21.flex
          .flex.justify-center.items-center.font-light.text-blue-600.bg-blue-50.cursor-pointer.hidden.px-2( class='lg:!px-1 group-hover:grid hover:bg-blue-100')
            svg-icon.w-5.h-5(type='mdi' :path='mdiPinOutline')
          .flex.justify-center.items-center.font-light.text-yellow-600.bg-yellow-100.cursor-pointer.hidden.px-2( class='lg:!px-1 group-hover:grid hover:bg-yellow-200')
            svg-icon.w-5.h-5(type='mdi' :path='mdiEyeLockOutline')
          .flex.justify-center.items-center.font-light.text-danger-600.bg-danger-50.cursor-pointer.hidden.px-2( class='lg:!px-1 group-hover:grid hover:bg-danger-100')
            svg-icon.w-5.h-5(type='mdi' :path='mdiTrashCanOutline')
      .border-b.border-slate-100
  .overflow-hidden.hidden.h-full(class="h-[calc(100vh-4rem)] w-2/3 lg:block")
    .bg-white.sticky.top-0.border-b.border-slate-200
      .text-slate-700.text-text-500.font-bold.px-2.max-w-sm(class="lg:max-w-lg md:max-w-md")
        p.text-2xl.truncate
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
      .h-13.flex.justify-between.items-center.w-full.z-10
        .group.flex.items-center.py-2.cursor-pointer.border-primary-600(class='px-2.5')
          .flex.h-8.w-8.items-center.rounded-md.bg-slate-100.text-black(class='group-hover:bg-primary-200')
            span.tag.w-full.text-center.text-xs.font-bold.text-slate-700(class='group-hover:text-primary-600') NA
          .flex.flex-col.items-start.justify-between.font-light.text-slate-600.ml-2
            span.text-text-500.font-medium.text-xs  Nesyn {{ `<nalvarado@hotmail.com>` }}
            span.text-xs.font-normal.text-slate-500 Asignado a Kelly ferrel
        .flex.items-center.space-x-5.mr-4
          span.text-xs.text-slate-500 Jan 30, 2022, 10:23 AM
          // component
      ul.flex.items-center.gap-4
        li.flex-1.cursor-pointer.transition.font-medium(v-for="(t, index) in tabs" :key="index" @click="selectedTab(index)")
          .relative.flex.items-center.justify-center.gap-2.px-1.py-3.text-xs.text-slate-300.transition(
            class='after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full  hover:text-slate-400 hover:after:bg-slate-300'
            :class="{'!text-primary-600 after:!bg-primary-600' : indexTabIncidencia === index}"
          )
            | {{ t.name }}
    component(:is="tabs[indexTabIncidencia].component")
</template>
<script>
import { ref, defineComponent } from "vue"
import {
  mdiTrashCanOutline,
  mdiPinOutline,
  mdiFlagOutline,
  mdiEyeLockOutline,
  mdiMicrophone,
  mdiCloudUploadOutline,
  mdiEmoticonHappyOutline,
  mdiAccountArrowLeftOutline
} from '@mdi/js'
import cChatIncidencia from "@/components/c_incidencia_chat.vue";
import cDetailsIncidencia from "@/components/c_incidencia_details.vue";
import cTasksIncidencia from "@/components/c_incidencia_tasks.vue";
import cHistoryIncidencia from "@/components/c_incidencia_history.vue";
export default defineComponent({
  name: "View_Login",
  setup(props, { emit }) {
    const isMiniSidebar        = ref(false)
    const idIncidenciaSelected = ref(0)
    const indexTabIncidencia   = ref(0)
    const incidencias          = ref([
      {
        id    : 1,
        unRead: 1
      },
      {
        id    : 2,
        unRead: 0
      },
      {
        id    : 3,
        unRead: 0
      },
      {
        id    : 4,
        unRead: 0
      },
      {
        id    : 5,
        unRead: 10
      }
    ])
    const tabs = ref([
      {
        id       : 1,
        name     : 'Conversaciones',
        icon     : '',
        component: cChatIncidencia
      },
      {
        id       : 2,
        name     : 'Detalles',
        icon     : '',
        component: cDetailsIncidencia
      },
      {
        id       : 3,
        name     : 'Tareas',
        icon     : '',
        component: cTasksIncidencia
      },
      // {
      //   id       : 4,
      //   name     : 'Resolución',
      //   icon     : '',
      //   component: ''
      // },
      // {
      //   id       : 5,
      //   name     : 'Aprobaciones',
      //   icon     : '',
      //   component: ''
      // },
      {
        id       : 6,
        name     : 'Historia',
        icon     : '',
        component: cHistoryIncidencia
      }
    ])

    const selectedIncidencia = ({ id }, index) => {
      const { unRead } = incidencias.value[index]
      idIncidenciaSelected.value = id
      if (unRead) incidencias.value[index].unRead = 0
    }
    const selectedTab = (index) => {
      indexTabIncidencia.value = index
    }

    return {
      isMiniSidebar,
      incidencias,
      idIncidenciaSelected,
      selectedIncidencia,
      mdiTrashCanOutline,
      mdiEyeLockOutline,
      mdiPinOutline,
      mdiFlagOutline,
      indexTabIncidencia,
      selectedTab,
      tabs,
      mdiMicrophone,
      mdiCloudUploadOutline,
      mdiEmoticonHappyOutline,
      mdiAccountArrowLeftOutline
    }
  }
});
</script>
<style>
.table {
  border-spacing: 0 4px;
}
</style>