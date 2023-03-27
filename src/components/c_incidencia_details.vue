<template lang="pug">
.bg-white.h-full
  //- .relative.flex.flex-col.items-center.mx-auto.p-4.bg-white.bg-clip-border.shadow-xl.rounded-xl
  //-   .relative.flex.h-32.w-full.justify-center.rounded-xl.bg-cover
  //-     img.absolute.flex.h-32.w-full.justify-center.rounded-xl.bg-cover(src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png')
  //-     .absolute.-bottom-12.flex.items-center.justify-center.rounded-full.border-white.bg-pink-400(class='h-[87px] w-[87px] border-[4px] dark:!border-navy-700')
  //-       img.h-full.w-full.rounded-full(src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt='')
  //-   .mt-16.flex.flex-col.items-center
  //-     h4.text-lg.font-bold.text-slate-600
  //-       | Adela Parkson
  //-     p.text-xs.font-normal.text-gray-600 Product Manager
  .grid.gap-2.grid-cols-2.h-full
    .flex.flex-col(v-for="(c, index) in 1")
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Tipo de solicitud
        p.text-xs.text-slate-600
          | ------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Estado
        p.text-xs.text-slate-600
          | -----
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Modo
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Nivel
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Impacto
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Detalles de impacto
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Urgencia
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Prioridad
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Categoria
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Subcategoria
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Item
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Fecha de respuesta
        p.text-xs.text-slate-600
          | -------
      .space-y-1.p-2.border-b.border-slate-200(class='md:grid md:grid-cols-2 hover:bg-slate-50 md:space-y-0')
        p.text-xs.text-slate-600.font-medium
          | Tiempo completado
        p.text-xs.text-slate-600
          | -------
    .bg-slate-50.border-l.border-slate-200.p-3
      .relative.flex.flex-col.items-center.mx-auto.p-4.bg-white.bg-clip-border.shadow-xl.rounded-xl
        .relative.flex.h-32.w-full.justify-center.rounded-xl.bg-cover
          img.absolute.flex.h-32.w-full.justify-center.rounded-xl.bg-cover(src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png')
          .absolute.-bottom-12.flex.items-center.justify-center.rounded-full.border-white.bg-pink-400(class='h-[87px] w-[87px] border-[4px] dark:!border-navy-700')
            img.h-full.w-full.rounded-full(src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt='')
        .mt-16.flex.flex-col.items-center
          h4.text-lg.font-bold.text-slate-600
            | Adela Parkson
          p.text-xs.font-normal.text-gray-600 Product Manager

</template>