<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación y acciones de mejora del evento
    
    p(data-aos="fade-right") Después de conocer temas asociados al diagnóstico, planeación y ejecución de eventos es importante llegar a la fase de la evaluación. Es preciso recordar que, un evento se debe considerar como un proyecto, el cual según la guía de fundamentos para la dirección de proyectos PMBOK se entiende como un esfuerzo temporal dirigido a generar un producto o servicio o resultado único. En el caso de un evento el resultado sería los productos o servicios dirigidos a los deportistas y espectadores.

    p.mb-5(data-aos="fade-right") Esta es la última fase del evento y determina el cumplimiento de los objetivos planteados dentro del tiempo y conforme a los recursos estipulados, por lo que, la evaluación del evento se realiza para:

    .d-flex.flex-wrap.mb-5
      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #2D54FE" data-aos="fade-right")
        img(src="@/assets/curso/temas/tema1/img-1.svg" class="img-float" alt="imagen decorativa")
        p.mb-0(style="color: white") Identificar fortalezas y debilidades del evento.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema1/img-2.svg" class="img-float" alt="imagen decorativa")
        p.mb-0 Medir el cumplimiento de los objetivos y metas establecidas.
      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #FE502D" data-aos="fade-left")
        img(src="@/assets/curso/temas/tema1/img-3.svg" class="img-float" alt="imagen decorativa")
        p.mb-0 Establecer acciones de mejora para futuros eventos.
    p.mb-5(data-aos="fade-right") Sin embargo, para determinar si el evento fue exitoso o no será conforme al nivel de satisfacción de las partes interesadas. Es en esta fase donde se mide qué tan eficaz y eficiente fue el evento, por lo que requiere de información importante de cada una de las partes interesadas, como lo son:
    
    h1 Planear como realizar este componente... (desktop: "realizar con hover y se muestra...", tablet: "poner imagen con texto arriba _quitar A, B, C, D_ y abajo tarjeta hover, pero hover hacia abajo." movil: "igual que en tablet")

    p.mb-5(data-aos="fade-right") Las distintas partes interesadas deben ser consultadas aplicando diferentes medios para conocer su opinión,-- como cuestionarios y encuestas. La evaluación del proyecto determinará qué tan exitoso fue el evento, pues el éxito se basará en la satisfacción de cada una de las partes interesadas mencionadas anteriormente. Además de esto se evalúan los siguientes factores:
    .container-100.py-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left top; background-size: cover;"
    )
      img.mx-auto.py-3(src="@/assets/curso/temas/tema1/img-5.svg" alt="Factores para la evaluación de evento, Cumplimiento del objetivo, Cumplimiento con el cronograma de actividades conforme al tiempo, calidad y recursos, Efectividad de las estrategias, Los resultados se cumplieron a satisfacción del cliente." style="max-width: 1030px" data-aos="fade-left")

    .d-flex.flex-wrap.mb-5
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p En algunas ocasiones a pesar de no cumplir con el tiempo, la calidad y el presupuesto estimado, puede llegar a ser exitoso si logra el propósito real de satisfacer al cliente. En otras ocasiones, podrá cumplir con el plan de actividades a tiempo y con el presupuesto, pero no será exitoso al no satisfacer al cliente o generar pérdidas, es allí donde radica la importancia de reconocer las necesidades, deseos y expectativas del cliente y establecer un plan que se oriente a su cumplimiento.
        p.fw-bold Pinto y Slevin (1997) mencionan 9 factores que determinan el éxito de un proyecto.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 400px" data-aos="fade-left")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
