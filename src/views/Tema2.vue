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
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 400px" data-aos="fade-left")
      .col-lg-7.col-xl-8.pe-lg-4(data-aos="fade-right")
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
    p.mb-5 Cada problema u acción de mejora trae consigo múltiples causas, las cuales deberán ser identificadas y analizadas para su correcta gestión; un error frecuente es centrarse en los efectos del problema y no en sus causas. Por lo tanto, las acciones de mejora deberán identificar de donde provienen estos problemas para atacar de raíz y evitar que siga presentándose. A continuación, se presenta un ejemplo de posibles causas asociadas a acciones de mejora en eventos deportivos.

    

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

<style lang="sass"></style>
