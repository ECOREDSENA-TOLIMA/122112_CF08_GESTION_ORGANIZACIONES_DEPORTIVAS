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
    
    ImagenInfografica.color-secundario.imagen-decorativa-desktop.mb-5.d-none.d-md-flex
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-4.png', alt='evaluación y acciones de mejora del evento')

      .tarjeta.color-secundario.px-4.py-1(x="39.8%" y="7.8%" numero="")
        p.mb-0 Satisfacción del cliente en el cumplimiento de sus objetivos y expectativas por medio y a través del evento. Generalmente esperan del evento fines recreativos, deportivos, competitivos, esparcimiento y entretenimiento.
      .tarjeta.color-secundario.px-4.py-1(x="46.6%" y="28.8%" numero="")
        p.mb-0 Persona(s), organización, propietaria del evento. Generalmente, se esperan del evento fines económicos, sociales, políticos, reconocimiento en el sector, con o sin ánimo de lucro.
      .tarjeta.color-secundario.px-4.py-1(x="53.4%" y="50.8%" numero="")
        p.mb-0 Personas que trabajan en el evento en cualquiera de los roles y fases. <b>Se esperan del evento:</b> pago de honorarios, salario; reconocimiento social, laboral y profesional; conocimiento y experiencia.
      .tarjeta.color-secundario.px-4.py-1(x="46.6%" y="72.8%" numero="")
        p.mb-0 Persona(s) u organizaciones que promueven el evento. Se esperan del evento fines: fomento e impulso de marca, reconocimiento en el mercado, incremento de ventas y posicionamiento.
      .tarjeta.color-secundario.px-4.py-1(x="39.8%" y="92%" numero="")
        p.mb-0 Persona(s) u organizaciones que proveen y prestan servicios, productos para el desarrollo del evento. Generalmente esperan del evento, el incremento en ventas.

    .container-hover-cards.d-block.d-md-none
      .card-hover
        .header-card
          .img-card
            img(src='@/assets/curso/temas/tema1/img-4_2.svg', alt='Imagen decorativa' style="max-width: 42px")
          p.mb-0.text-white <b>Consumidores:</b> deportistas y espectadores del evento
        .body-card
          p.mb-0 Satisfacción del cliente en el cumplimiento de sus objetivos y expectativas por medio y a través del evento. Generalmente esperan del evento fines recreativos, deportivos, competitivos, esparcimiento y entretenimiento.
      
      .card-hover
        .header-card(style="background-color: #FFCA00")
          .img-card
            img(src='@/assets/curso/temas/tema1/img-4_3.svg', alt='Imagen decorativa' style="max-width: 42px")
          p.mb-0 <b>Propietarios del evento</b>
        .body-card
          p.mb-0 Persona(s), organización, propietaria del evento. Generalmente, se esperan del evento fines económicos, sociales, políticos, reconocimiento en el sector, con o sin ánimo de lucro.
      
      .card-hover
        .header-card(style="background-color: #FE502D")
          .img-card
            img(src='@/assets/curso/temas/tema1/img-4_4.svg', alt='Imagen decorativa' style="max-width: 42px")
          p.mb-0 <b>Operadores del evento</b>
        .body-card
          p.mb-0 Personas que trabajan en el evento en cualquiera de los roles y fases. <b>Se esperan del evento</b>: pago de honorarios, salario; reconocimiento social, laboral y profesional; conocimiento y experiencia.
      
      .card-hover
        .header-card(style="background-color: #FFCA00")
          .img-card
            img(src='@/assets/curso/temas/tema1/img-4_5.svg', alt='Imagen decorativa' style="max-width: 42px")
          p.mb-0 <b>Patrocinadores</b>
        .body-card
          p.mb-0 Persona(s) u organizaciones que promueven el evento. Se esperan del evento fines: fomento e impulso de marca, reconocimiento en el mercado, incremento de ventas y posicionamiento.
      
      .card-hover
        .header-card
          .img-card
            img(src='@/assets/curso/temas/tema1/img-4_6.svg', alt='Imagen decorativa' style="max-width: 42px")
          p.mb-0.text-white <b>Proveedores</b>
        .body-card
          p.mb-0 Persona(s) u organizaciones que proveen y prestan servicios, productos para el desarrollo del evento. Generalmente esperan del evento, el incremento en ventas.


    p.mb-5(data-aos="fade-right") Las distintas partes interesadas deben ser consultadas aplicando diferentes medios para conocer su opinión,-- como cuestionarios y encuestas. La evaluación del proyecto determinará qué tan exitoso fue el evento, pues el éxito se basará en la satisfacción de cada una de las partes interesadas mencionadas anteriormente. Además de esto se evalúan los siguientes factores:
    .container-100.py-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left top; background-size: cover;"
    )
      img.mx-auto.py-3(src="@/assets/curso/temas/tema1/img-5.svg" alt="Factores para la evaluación de evento, Cumplimiento del objetivo, Cumplimiento con el cronograma de actividades conforme al tiempo, calidad y recursos, Efectividad de las estrategias, Los resultados se cumplieron a satisfacción del cliente." style="max-width: 1030px" data-aos="fade-left")

    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p En algunas ocasiones a pesar de no cumplir con el tiempo, la calidad y el presupuesto estimado, puede llegar a ser exitoso si logra el propósito real de satisfacer al cliente. En otras ocasiones, podrá cumplir con el plan de actividades a tiempo y con el presupuesto, pero no será exitoso al no satisfacer al cliente o generar pérdidas, es allí donde radica la importancia de reconocer las necesidades, deseos y expectativas del cliente y establecer un plan que se oriente a su cumplimiento.
        p.fw-bold Pinto y Slevin (1997) mencionan 9 factores que determinan el éxito de un proyecto.
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Objetivos claramente definidos.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Líder del proyecto competente.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Apoyo de la alta gerencia (administración).
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Competencia del equipo ejecutor del proyecto.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Asignación de recursos suficientes.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Canales de comunicación adecuados.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Mecanismos de control.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Capacidades de retroalimentación.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Buena respuesta del cliente (p.89).
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 400px" data-aos="fade-left")
    
    separador
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Metas y objetivos propuestos
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-7.png" style="max-width: 400px" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4
        p Al evaluar el cumplimiento de metas y objetivos se deberá tener en cuenta que estos se plantearon en la fase de planeación conforme al tipo de evento. Por ello, es preciso recordar que los objetivos son planteados a partir de la identificación de las necesidades y requerimientos de los usuarios del evento, así estos objetivos se definen orientados a satisfacer dichas necesidades. Este es el primer paso de la fase de la planeación y describe el resultado y producto – servicio final esperado.

        p.mb-0 Es importante que el evento cuente con un objetivo general estratégico que abarque y alinee todos los integrantes del equipo, de allí se desprenden objetivos tácticos definidos por cada proceso u área y por último, objetivos operativos enfocados a cumplir el objetivo general del evento.
    
    .bloque-texto-g.color-acento-botones.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.d-block
        p El punto más alto de la pirámide representa los objetivos planteados por el líder general del evento deportivo quien conociendo las necesidades y deseos de los clientes a los cuales va dirigido el evento, plantea un objetivo general enfocado a satisfacer dichas necesidades. Este objetivo se plantea enfocado en el éxito del evento. Posterior a esto, conforme a los procesos, áreas o líneas funcionales que integran la organización del evento se establecen objetivos tácticos orientados a cumplir el objetivo estratégico. Finalmente, se desglosan en objetivos operativos, enfocados a cumplir los objetivos tácticos.
        img.mt-3(src="@/assets/curso/temas/tema1/img-9.svg" style="max-width: 609px" alt="Objetivos estratégicos, tácticos y operativos")
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-10.png", alt="alt")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Estratégico
            p.mb-0.text-white Realizar la primera versión de la maratón de ciudad de Medellín 2022, posicionándola como una de las carreras más representativas de Suramérica

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-11.png", alt="alt")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Táctico (mercadeo)
            p.mb-0 Establecer un plan de mercado que capte la masiva inscripción de corredores locales, nacionales e internacionales.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-12.png", alt="alt")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center Operativo
            p.mb-0 Desarrollar un estudio de mercado de carreras de calle y corredores de maratón.
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La fase de evaluación del evento, el cumplimiento de los objetivos planteados será uno de los elementos que determinen el éxito o no del evento. Por lo que, los eventos deportivos podrán ser:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Lucrativos con fines económicos.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") De promoción y fomento deportivo.
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") De posicionamiento y/o reconocimiento organizacional. 
          li.d-flex.mb-2.pb-2
            img(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Con fines sociales sin ánimo de lucro.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 400px" data-aos="fade-left")
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2 Balance del evento
    
    p.mb-5 Al realizar el balance del evento se evalúan aspectos generales que den una respuesta de la eficacia y efectividad. Para tal fin se pueden emplear indicadores de gestión, para medir y evaluar el cumplimiento de los objetivos planteados. En la tabla que se presenta a continuación, se encuentran algunos ejemplos de indicadores:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1
      span Balance del evento
    .tabla-a.color-acento-contenido 
      table
        caption(style="font-weight: normal") <b>Nota.</b> Tomado de SENA (2021).
        thead
          tr(style="background-color: white")
            th Indicador
            th Meta esperada
            th Indicador 
            th Meta alcanzada
            th % de cumplimiento
        tbody
          tr
            td Espectadores esperados en el evento.
            td.text-center 100 personas
            td Espectadores que asistieron al evento.
            td.text-center 100 personas
            td.text-center 100%
          tr
            td Costos presupuestados del evento
            td.text-center 10 millones de pesos
            td Costos efectuados en el evento
            td.text-center 10 millones de pesos
            td.text-center 100%
          tr
            td Ingresos esperados en el evento
            td.text-center 15 millones de pesos
            td Ingresos percibidos en el evento
            td.text-center 15 millones de pesos
            td.text-center 100%
          tr
            td % esperado de usuarios satisfechos con el evento
            td.text-center 95%
            td % de usuarios satisfechos con el evento
            td.text-center 97%
            td.text-center Superó un 2%
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3 Desempeño de los equipos de trabajo 
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p La fase de evaluación del evento, el cumplimiento de los objetivos planteados será uno de los elementos que determinen el éxito o no del evento. Por lo que, los eventos deportivos podrán ser:
        .cajon.color-primario.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 Los equipos son conformados según el tipo de evento, sus características, tamaño y objetivos, es decir, no es lo mismo el número de equipos, número de integrantes y nivel de especificidad en un mega evento como unos juegos olímpicos, a un evento más simple como el desarrollo de un torneo deportivo de un barrio.
        P El desempeño del equipo dependerá del desempeño unificado y sincronizado de cada una de las personas que lo conforman. Para tal fin, se debe entender las múltiples diferencias que tienen las personas que integran un grupo, diferentes formas de pensar, habilidades, competencias, expectativas y forma de ver las cosas. Comprender y liderar el talento humano es un gran reto para todas las organizaciones, por ello, es preciso tener en cuenta las competencias personales, sociales, habilidades sociales y, las competencias organizacionales y comerciales, como se muestra en las siguientes tablas.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 400px" data-aos="fade-left")




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
