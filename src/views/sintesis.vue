<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") En resumen, la mejora en eventos implica una evaluación y acciones correctivas con metas claras. Se evalúa el desempeño, se identifican áreas de mejora, y se planifican y controlan acciones. Se documenta en un informe final. Un mapa conceptual visualiza este proceso.

    .col-lg-10.col-xl-8.mb-5.mx-auto(data-aos="fade-left")
      figure
        img(src="@/assets/curso/temas/sintesis.svg", alt="Esta síntesis resume los temas y subtemas abordados en el componente formativo y que son necesarios para alcanzar el resultado de aprendizaje; en este caso se profundizó en la evaluación de un eventos y los elementos importantes a evaluar y de otra parte lo que se genera con este tipo de evaluaciones, con el fin de generar actividades de mejora.")
    .row.justify-content-center(data-aos="fade-right")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
