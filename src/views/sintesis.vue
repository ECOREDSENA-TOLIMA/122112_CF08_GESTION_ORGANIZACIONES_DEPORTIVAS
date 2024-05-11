<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") En resumen, la mejora en eventos implica una evaluación y acciones correctivas con metas claras. Se evalúa el desempeño, se identifican áreas de mejora y se planifican y controlan acciones. Todo este proceso se documenta en un informe final. A continuación, se presenta un mapa conceptual que describe este proceso.

    .col-lg-10.col-xl-8.mb-5.mx-auto(data-aos="fade-left")
      figure
        img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se abordan los temas más relevantes del componente formativo, incluyendo la evaluación del evento y las posibles acciones de mejora a implementar.")
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
