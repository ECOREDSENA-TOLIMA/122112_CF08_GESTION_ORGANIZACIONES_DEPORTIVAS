<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Acciones de mejora del evento
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Los eventos considerados como un proyecto son temporales, tienen un inicio y un final, su éxito se basa en la satisfacción de sus clientes - usuarios, deberá identificar continuamente los aspectos a mejorar y establecer acciones para lograrlo en un próximo evento a desarrollar. En el sector del deporte cada vez se realizan más eventos, que generalmente involucran una gran cantidad de personas, esta amplia oferta de eventos deportivos hace que los usuarios - clientes demanden mayores niveles de calidad en los servicios ofertados. Además de esto, los eventos deportivos al ser masivos, deben cumplir con múltiples requerimientos normativos y legales. 
        p Es por lo anterior que los eventos deberán ser ejecutados con altos parámetros de calidad y ser susceptibles a la mejora continua para poder dar respuesta a las necesidades de los clientes y satisfacer sus necesidades, que cada vez son más especializadas.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 400px" data-aos="fade-left")
    
    separador
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1 Identificar las necesidades de mejora
    
    p.mb-5 Posterior a la evaluación del evento se identifican cuáles fueron los aspectos a mejorar. Para esta identificación se deberán tener en cuenta los siguientes casos:

    .d-flex.flex-wrap
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 400px" data-aos="fade-left")
      .col-lg-7.col-xl-8.ps-lg-4(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Objetivos no alcanzados.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Objetivos alcanzados, pero no en el tiempo y con los recursos presupuestados.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Superar los límites del alcance del proyecto.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Aspectos donde no se satisface las necesidades e intereses de los clientes u otra parte interesada.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Desempeño por mejorar en procesos, áreas, equipos de trabajo.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Servicios o productos que no cumplieron los parámetros de seguridad planteados.
        p.mb-0 Para tal fin, es importante contar con la participación activa de todos los actores que participaron en el proceso, además de las distintas partes interesadas en el proyecto.  

    separador
    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2 Detectar las principales causas del problema 
    p.mb-5(data-aos="fade-right") Cada problema u acción de mejora trae consigo múltiples causas, las cuales deberán ser identificadas y analizadas para su correcta gestión; un error frecuente es centrarse en los efectos del problema y no en sus causas. Por lo tanto, las acciones de mejora deberán identificar de donde provienen estos problemas para atacar de raíz y evitar que siga presentándose. A continuación, se presenta un ejemplo de posibles causas asociadas a acciones de mejora en eventos deportivos.
    h3.mb-5 Deficiencias en el servicio al cliente
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-3.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Inexistente inducción sobre políticas de servicio al cliente, funciones y rol en el evento.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-4.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Inexistente capacitación en servicio al cliente y desempeño eficiente de su servicio.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-5.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Proceso de selección sin políticas de servicio al cliente.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-6.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Ausencia de perfil de cargo y manual de funciones del evento.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-7.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Fatiga por jornada extensa laboral durante el evento.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-8.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Tarea de alta presión y concentración. 
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-9.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Supervisión estricta.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-10.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Desmotivación y falta de interés. 
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-11.png' alt='Imagen decorativa' style="max-width: 177px")
        p.text-center.fw-bold(style="color: black") Falta de experiencia laboral en tareas similares.
    
    p(data-aos="fade-right") Como se evidenció en el recurso anterior, son múltiples las causas generadoras de un problema u acción susceptible a mejorar. En este caso se refleja cómo factores de índole personal, laboral, organizacional pueden incidir en un deficiente servicio al cliente, según esto, la organización responsable del evento deberá tomar acciones para que este caso no se vuelva a presentar y deberá establecer políticas, manuales, procedimientos, capacitaciones y entre otras acciones que contribuyan a mejorar en este caso el servicio al cliente. 

    separador
    #t_2_3.titulo-segundo.color-acento-botones
      h2 2.3 Definir objetivos de mejora
    p(data-aos="fade-right") Después de tener claridad sobre las acciones de mejora y sus respectivas causas se procede a definir los objetivos. Estos deberán conducir a mejorar la situación y controlar o reducir al máximo las deficiencias identificadas, continuando con el ejemplo sobre las deficiencias en el servicio al cliente, se presenta un ejemplo de formulación de objetivos para mejorar la situación. 

    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Inexistente inducción sobre políticas de servicio al cliente, funciones y rol en el evento.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Inexistente capacitación en servicio al cliente y desempeño eficiente de su servicio.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Proceso de selección sin políticas de servicio al cliente.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Ausencia de perfil de cargo y manual de funciones del evento.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Fatiga por jornada extensa laboral durante el evento.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Tarea de alta presión y concentración. 
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Supervisión estricta.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Desmotivación y falta de interés.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Falta de experiencia laboral en tareas similares.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-12.png" style="max-width: 400px" data-aos="fade-left")
    
    separador
    #t_2_4.titulo-segundo.color-acento-botones
      h2 2.4 Seleccionar las acciones de mejora
    
    p.mb-5(data-aos="fade-right") Se identifican las posibles alternativas que brinden soluciones de mejora al problema identificado. Se deberá contemplar el costo beneficio para la organización, la decisión y compromiso de las diferentes partes interesadas. En este punto se listan todas las acciones que contribuyan a controlar las causas generadoras del problema como se muestra a continuación en el siguiente ejemplo:

    ImagenInfografica.color-secundario.imagen-decorativa-2.mb-5.d-none.d-md-flex.col-xl-10.mx-auto(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-13.svg', alt='Acciones que contribuyan a controlar las causas generadoras del problema')

      .tarjeta.color-primario.text-white.p-4(x="6%" y="49.9%" numero="")
        p.fw-bold Problema
        p.mb-0 Deficiente servicio al cliente de los operadores del servicio.
      .tarjeta.color-acento-contenido.p-3(x="17.8%" y="3.8%" numero="")
        p.fw-bold(style="color: black") Causa 1
        p.mb-0(style="color: black") Inexistente inducción sobre políticas de servicio al cliente, funciones y rol en el evento.
      .tarjeta.color-acento-botones.p-3(x="56.8%" y="3.8%" numero="")
        p.fw-bold Acciones de mejora 1
        ul.mb-0
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 1
            p.ps-2.mb-0 Definir plan de inducción.
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 2
            p.ps-2.mb-0 Implementar plan de inducción. 
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 3
            p.ps-2.mb-0 Controlar el plan de inducción.
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 4
            p.ps-2.mb-0 Evaluar el plan de inducción.
      .tarjeta.color-acento-contenido.p-3(x="17.8%" y="96.8%" numero="")
        p.fw-bold(style="color: black") Causa 2
        p.mb-0(style="color: black") Inexistente capacitación en servicio al cliente y desempeño eficiente de su servicio.
      .tarjeta.color-acento-botones.p-3(x="56.8%" y="96.8%" numero="")
        p.fw-bold Acciones de mejora 2
        ul.mb-0
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 1
            p.ps-2.mb-0 Definir plan de capacitación en servicio al cliente.
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 2
            p.ps-2.mb-0 Implementar plan de capacitación.
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 3
            p.ps-2.mb-0 Controlar el plan de capacitación.
          li.d-flex.mb-0.pb-0.align-items-start
            span.fw-bold(style="color: #FFCA00") 4
            p.ps-2.mb-0 Evaluar el plan de capacitación.

    p.mb-5(data-aos="fade-right") Al seleccionar las acciones de mejora se deberá contar con el equipo de trabajo, tanto el líder del proyecto como los operadores. Se deberá optar por las acciones que sean efectivas para el control de las causas y reducción de los efectos de los problemas detectados, pero a su vez eficientes en materia de costo beneficio para el proyecto.
    separador
    #t_2_5.titulo-segundo.color-acento-botones
      h2 2.5 Planificación y control de las acciones de mejora
    p.mb-2 Para realizar la planificación se debe documentar el plan de acción, listando cada una de las acciones de mejora seleccionadas y asignando los tiempos, responsables, responsabilidades y recursos destinados para el cumplimiento de los objetivos de mejora. A continuación, su secuencia: 

    .container-100.py-4(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left bottom; background-size: cover;"
    )
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Plan de acción</i>
        figure
          img.mx-auto.py-3(src="@/assets/curso/temas/tema2/img-14.png" alt="En la Figura 2, se presentan las acciones que deben documentarse para implementar un plan de acción, incluyendo objetivos, acciones de mejora, orden lógico, responsabilidades y control de cumplimiento." style="max-width: 1030px" data-aos="fade-left")
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.imagen-decorativa-2
  .img-infografica__content
    .img-infografica__item
      border-radius: 30px
      height: 25px
      &:nth-child(1)
        width: 12.2%
      &:nth-child(2)
        width: 12%
      &:nth-child(3)
        width: 21%
      &:nth-child(4)
        width: 12%
      &:nth-child(5)
        width: 21%
      .img-infografica__item__dot
        background-color: transparent
        &::before,&::after
          display: none
      .img-infografica__item__dot
        display: none
</style>
