
<template lang="pug">
.bg-white.relative.h-screen.w-screen
  //- .absolute.z-30.right-0.m-2
  //-   .bg-white.px-5.rounded-lg.shadow.max-w-sm.mx-auto.transform.transition.duration-100.ease-linear(class='py-3.5 hover:shadow-xl hover:-translate-y-[0.125rem]')
  //-     .w-full.flex.items-center.justify-between
  //-       //- span.font-medium.text-sm.text-slate-400 New Notification
  //-       button.-mr-1.bg-slate-100.text-slate-400.h-5.w-5.rounded-full.flex.justify-center.items-center(class='hover:bg-slate-200 hover:text-slate-600')
  //-         svg.h-2.w-2.fill-current.items-center(viewBox='0 0 20 20')
  //-           path(d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z')
  //-     .flex.items-center.mt-2.rounded-lg.px-1.py-1.cursor-pointer
  //-       .relative.flex.flex-shrink-0.items-end
  //-         img.h-16.w-16.rounded-full(src='https://i.pravatar.cc/300')
  //-         span.absolute.h-4.w-4.bg-green-400.rounded-full.bottom-0.right-0.border-2.border-white
  //-       .ml-3
  //-         span.font-semibold.tracking-tight.text-xs John Doe
  //-         span.text-xs.leading-none.opacity-50 reacted to your comment:
  //-         p.text-xs.leading-4.pt-2.italic.opacity-70 "This is the comment..."
  //-         span.text-blue-500.font-medium.leading-4.opacity-75(class='text-[10px]') a few seconds ago

  nav.bg-white.fixed.top-0.shadow-lg.w-full.z-20
    .px-4.mx-auto
      .flex.items-center.justify-between.h-14
        .flex.items-center
          .justify-center.rounded-full.p-2.text-center(class='hover:text-blue-500 hover:bg-blue-100')
            svg.w-4.h-4.mx-auto(xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 477.867 477.867')
              path(fill-rule='evenodd' d='M119.467 0h-102.4C7.641 0 0 7.641 0 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C136.533 7.641 128.892 0 119.467 0zM102.4 102.4H34.133V34.133H102.4V102.4zM290.133 0h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C307.2 7.641 299.559 0 290.133 0zm-17.066 102.4H204.8V34.133h68.267V102.4zM460.8 0H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4C477.867 7.641 470.226 0 460.8 0zm-17.067 102.4h-68.267V34.133h68.267V102.4zM119.467 170.667h-102.4C7.641 170.667 0 178.308 0 187.733v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c-.001-9.425-7.642-17.066-17.067-17.066zm-17.067 102.4H34.133V204.8H102.4v68.267zM290.133 170.667h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8V204.8h68.267v68.267zM460.8 170.667H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267V204.8h68.267v68.267zM119.467 341.333h-102.4C7.641 341.333 0 348.974 0 358.4v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c-.001-9.426-7.642-17.067-17.067-17.067zm-17.067 102.4H34.133v-68.267H102.4v68.267zM290.133 341.333h-102.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.066 102.4H204.8v-68.267h68.267v68.267zM460.8 341.333H358.4c-9.426 0-17.067 7.641-17.067 17.067v102.4c0 9.426 7.641 17.067 17.067 17.067h102.4c9.426 0 17.067-7.641 17.067-17.067V358.4c0-9.426-7.641-17.067-17.067-17.067zm-17.067 102.4h-68.267v-68.267h68.267v68.267z')
          .flex.px-2.py-1.self-center.text-sm.font-medium.text-slate-800.antialiased.rounded-md.cursor-pointer(class='focus:outline-none focus:bg-blue-100')
            .justify-center.mt-1.mr-1
              img.h-5.w-5(src='/kanboard-logo.png')
            .justify-center.text-xl.font-bold.text-center.text-text-500
              | Service ITSM
        .hidden(class='lg:block')
          .flex.items-center.ml-4(class='md:ml-6')
            .relative.ml-2
              button#user-menu.p-1.flex.items-center.max-w-xs.text-sm.text-white.rounded-full(class='hover:bg-blue-100 focus:outline-none focus:shadow-solid' aria-label='User menu' aria-haspopup='true')
                img.w-6.h-6.rounded-full(src='https://xsgames.co/randomusers/assets/avatars/pixel/43.jpg' alt='')
        .flex.-mr-2(class='lg:hidden')
          button.inline-flex.items-center.justify-center.p-2.text-slate-400.rounded-md(class='hover:text-white hover:bg-slate-700 focus:outline-none focus:bg-slate-700 focus:text-white')
            svg.block.w-6.h-6(stroke='currentColor' fill='none' viewBox='0 0 24 24')
              path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
  .flex.h-full
    .flex-col.border-r.mt-14.bg-white.hidden.border-slate-200(:class="{'w-16' : isMiniSidebar, 'w-1/5' : !isMiniSidebar }" class="lg:block")
      .flex.px-3.py-3.bg-slate-100(class="hover:bg-slate-200" :class="{'justify-center' : isMiniSidebar}")
        .h-8.w-8.rounded
          img.mt-1.rounded.backdrop-grayscale(src='https://www.datacont.com/web/image/website/1/favicon?unique=c672458')
        .flex-col(v-if="!isMiniSidebar")
          .items-center.cursor-pointer.px-2.text-sm.font-medium.text-slate-700(class='hover:underline')
            | Datacont company
          .px-2.text-xs.leading-none.text-slate-600
            | Classic software company
      .border.border-slate-100
      .overflow-auto(class="h-[calc(100vh-10rem)]")
        .flex-col(:class="{'px-2' : isMiniSidebar, 'px-3' : !isMiniSidebar }")
          .items-center.py-3.text-xs.font-medium.text-slate-300.sticky.top-0.bg-white.pl-2(v-if="!isMiniSidebar")
            | Modulos disponibles
          .overflow-hidden
            router-link.flex.rounded-md.items-center.my-2.cursor-pointer.transition(
              :class="{ 'p-2 border justify-center ' : isMiniSidebar, 'p-3' : !isMiniSidebar }" class='hover:bg-slate-50  hover:border-slate-100'
              v-for="(c, index) in menu"
              :to="c.path"
              :key="index"
              v-slot="{ isActive, isExactActive }"
              :active-class="isMiniSidebar ? '!bg-primary-200 !border-primary-200' : '!bg-primary-600  !text-white'"
            )
              .text-slate-400(:class="isActive && `${isMiniSidebar ? '!text-primary-600' : '!text-white' }`")
                svg-icon.w-5.h-5(type='mdi' :path='c.icon')
              .pl-3(v-if="!isMiniSidebar")
                p.text-sm.font-medium.text-text-400.leading-none(:class="isActive && '!text-white'") {{ c.name }}
                p.text-xs.text-slate-300(:class="isActive && '!text-primary-300'") Agregar/administrar solicitudes de equipos
    .flex-col.mt-14.bg-slate-50.w-0.cursor-pointer.relative.group.hidden(class="lg:block hover:bg-slate-100" @click.stop="isMiniSidebar = !isMiniSidebar")
      a.absolute.cursor-pointer.z-10.self-center.ml-1.text-sm.font-medium.bg-white.text-slate-300.rounded-full.w-8.h-8.top-3.border.items-center.justify-center(class="lg:flex" @click.stop="isMiniSidebar = !isMiniSidebar", class=" hover:shadow-xl hover:bg-slate-500 hover:border-slate-500 -left-5 ")
        svg-icon(type='mdi' :path='isMiniSidebar ? mdiChevronRight : mdiChevronLeft')
    .flex.mt-14.h-auto.w-full
      router-view
</template>
<script>
import { ref, defineComponent } from "vue"
import { mdiViewDashboard, mdiPaletteSwatch, mdiChevronRight, mdiChevronLeft } from '@mdi/js'
export default defineComponent({
  name: "View_Login",
  setup(props, { emit }) {

    const isMiniSidebar = ref(false)
    const menu          = ref([
      {
        id         : 1,
        name       : 'Dashboard',
        description: '',
        path       : '/',
        icon       : mdiViewDashboard,
        childrens  : []
      },
      {
        id         : 2,
        name       : 'Incidencias',
        description: '',
        path       : '/incidencias',
        icon       : mdiPaletteSwatch,
        childrens  : []
      },
    ])

    return {
      isMiniSidebar,
      menu,
      mdiChevronRight,
      mdiChevronLeft
    }
  }
});
</script>
