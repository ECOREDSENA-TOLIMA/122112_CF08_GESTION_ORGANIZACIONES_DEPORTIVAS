<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Evaluación y acciones de mejora del evento
    
    p(data-aos="fade-right") Después de conocer temas asociados al diagnóstico, planeación y ejecución de eventos es importante llegar a la fase de la evaluación. Es preciso recordar que, un evento se debe considerar como un proyecto, el cual según la guía de fundamentos para la dirección de proyectos PMBOK se entiende como un esfuerzo temporal dirigido a generar un producto o servicio, o resultado único. En el caso de un evento, el resultado sería los productos o servicios dirigidos a los deportistas y espectadores.

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
    
    ImagenInfografica.color-secundario.imagen-decorativa-desktop.mb-5.d-none.d-md-flex(data-aos="fade-right")
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

    .container-hover-cards.d-block.d-md-none(data-aos="fade-right")
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


    p.mb-5(data-aos="fade-right") Las distintas partes interesadas deben ser consultadas aplicando diferentes medios para conocer su opinión, como cuestionarios y encuestas. La evaluación del proyecto determinará qué tan exitoso fue el evento, pues el éxito se basará en la satisfacción de cada una de las partes interesadas mencionadas anteriormente. Además de esto se evalúan los siguientes factores:
    .container-100.py-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left top; background-size: 100% auto;"
    )
      .col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Factores a evaluar en un evento</i>
        figure
          img.mx-auto.py-3(src="@/assets/curso/temas/tema1/img-5.svg" alt="En la Figura 1 se presentan los factores más relevantes a tener en cuenta al evaluar un evento, como el cumplimiento del objetivo, el cumplimiento del cronograma, la efectividad de las estrategias y el cumplimiento de los resultados." style="max-width: 1030px" data-aos="fade-left")

    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p En algunas ocasiones a pesar de no cumplir con el tiempo, la calidad y el presupuesto estimado, puede llegar a ser exitoso si logra el propósito real de satisfacer al cliente. En otras ocasiones, podrá cumplir con el plan de actividades a tiempo y con el presupuesto, pero no será exitoso al no satisfacer al cliente o generar pérdidas, es allí donde radica la importancia de reconocer las necesidades, deseos y expectativas del cliente y establecer un plan que se oriente a su cumplimiento.
        p.fw-bold Pinto y Slevin (1997) mencionan 9 factores que determinan el éxito de un proyecto.
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Objetivos claramente definidos.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Líder del proyecto competente.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Apoyo de la alta gerencia (administración).
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Competencia del equipo ejecutor del proyecto.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Asignación de recursos suficientes.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Canales de comunicación adecuados.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Mecanismos de control.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Capacidades de retroalimentación.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Buena respuesta del cliente (p.89).
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 400px" data-aos="fade-left")
    
    separador
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Metas y objetivos propuestos
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-7.png" style="max-width: 400px" alt="Imagen decorativa" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        p Al evaluar el cumplimiento de metas y objetivos se deberá tener en cuenta que estos se plantearon en la fase de planeación conforme al tipo de evento. Por ello, es preciso recordar que los objetivos son planteados a partir de la identificación de las necesidades y requerimientos de los usuarios del evento, así estos objetivos se definen orientados a satisfacer dichas necesidades. Este es el primer paso de la fase de la planeación y describe el resultado y producto - servicio final esperado.

        p.mb-0 Es importante que el evento cuente con un objetivo general estratégico que abarque y alinee todos los integrantes del equipo, de allí se desprenden objetivos tácticos definidos por cada proceso u área y por último, objetivos operativos enfocados a cumplir el objetivo general del evento.
    
    .bloque-texto-g.color-acento-botones.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.d-block(data-aos="fade-right")
        p El punto más alto de la pirámide representa los objetivos planteados por el líder general del evento deportivo quien conociendo las necesidades y deseos de los clientes a los cuales va dirigido el evento, plantea un objetivo general enfocado a satisfacer dichas necesidades. Este objetivo se plantea enfocado en el éxito del evento. Posterior a esto, conforme a los procesos, áreas o líneas funcionales que integran la organización del evento se establecen objetivos tácticos orientados a cumplir el objetivo estratégico. Finalmente, se desglosan en objetivos operativos, enfocados a cumplir los objetivos tácticos.
        img.mt-3(src="@/assets/curso/temas/tema1/img-9.svg" style="max-width: 609px" alt="Objetivos estratégicos, tácticos y operativos")
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-10.png", alt="Imagen decorativa text-center Estratégico")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-white.text-center Estratégico
            p.mb-0.text-white Realizar la primera versión de la maratón de ciudad de Medellín 2022, posicionándola como una de las carreras más representativas de Suramérica

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(data-aos="flip-up")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-11.png", alt="Imagen decorativa Táctico (mercadeo)")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Táctico (mercadeo)
            p.mb-0 Establecer un plan de mercado que capte la masiva inscripción de corredores locales, nacionales e internacionales.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0(data-aos="fade-right")
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-12.png", alt="Imagen decorativa Operativo")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center Operativo
            p.mb-0 Desarrollar un estudio de mercado de carreras de calle y corredores de maratón.
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p(data-aos="fade-right") La fase de evaluación del evento, el cumplimiento de los objetivos planteados será uno de los elementos que determinen el éxito o no del evento. Por lo que, los eventos deportivos podrán ser:
        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Lucrativos con fines económicos.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") De promoción y fomento deportivo.
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") De posicionamiento y/o reconocimiento organizacional. 
          li.d-flex.mb-2.pb-2.align-items-start
            img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
            p.ps-2.mb-0(data-aos="fade-left") Con fines sociales sin ánimo de lucro.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-13.png" style="max-width: 400px" data-aos="fade-left")
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2 Balance del evento
    
    p.mb-5(data-aos="fade-right") Al realizar el balance del evento se evalúan aspectos generales que den una respuesta de la eficacia y efectividad. Para tal fin se pueden emplear indicadores de gestión, para medir y evaluar el cumplimiento de los objetivos planteados. En la tabla que se presenta a continuación, se encuentran algunos ejemplos de indicadores:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Balance del evento</i>
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
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
            td.text-center 100 %
          tr
            td Costos presupuestados del evento
            td.text-center 10 millones de pesos
            td Costos efectuados en el evento
            td.text-center 10 millones de pesos
            td.text-center 100 %
          tr
            td Ingresos esperados en el evento
            td.text-center 15 millones de pesos
            td Ingresos percibidos en el evento
            td.text-center 15 millones de pesos
            td.text-center 100 %
          tr
            td % esperado de usuarios satisfechos con el evento
            td.text-center 95 %
            td % de usuarios satisfechos con el evento
            td.text-center 97 %
            td.text-center Superó un 2 %
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3 Desempeño de los equipos de trabajo 
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Otro aspecto de gran importancia a evaluar, es el desempeño de cada integrante del talento humano que participó en la organización del evento deportivo. Cada persona tiene un rol, funciones, responsabilidades y hace parte de un equipo de trabajo, ya que para que un evento pueda funcionar de manera coordinada y sincronizada requiere que los equipos tengan una adecuada comunicación.
        .cajon.color-primario.p-4.mb-4(style="background-color: #E0F4FE")
          p.mb-0 Los equipos son conformados según el tipo de evento, sus características, tamaño y objetivos, es decir, no es lo mismo el número de equipos, número de integrantes y nivel de especificidad en un mega evento como unos juegos olímpicos, a un evento más simple como el desarrollo de un torneo deportivo de un barrio.
        P El resultado del equipo dependerá del desempeño unificado y sincronizado de cada una de las personas que lo conforman. Para tal fin, se debe entender las múltiples diferencias que tienen las personas que integran un grupo, diferentes formas de pensar, habilidades, competencias, expectativas y forma de ver las cosas. Comprender y liderar el talento humano es un gran reto para todas las organizaciones, por ello, es preciso tener en cuenta las competencias personales, sociales, habilidades sociales y, las competencias organizacionales y comerciales, como se muestra en las siguientes tablas.
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 400px" data-aos="fade-left")

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Competencias personales</i>
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
      table
        caption(style="font-weight: normal") <b>Nota.</b> Adaptadas de la Guía PMBOK.
        thead
          tr(style="background-color: white")
            th Factor
            th Competencia
            th(colspan="3") Manifestación
        tbody
          tr
            td.text-center(rowspan="3") Consciencia de sí mismo
            td.text-center Consciencia emocional
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Reconocer nuestras emociones y sus efectos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Comprender la vinculación entre pensamientos, sentimientos y conducta.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Conocer la forma cómo los sentimientos influyen sobre los comportamientos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser conscientes de nuestros valores y objetivos.
          tr
            td.text-center Autovaloración
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Reconocer las propias fortalezas y debilidades.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Aprender de la experiencia.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser sensibles a nuevos puntos de vista, a la formación continua y al autodesarrollo.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Tomar perspectiva acerca de sí mismo.
          tr
            td.text-center Autoconfianza
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Poseer una percepción clara de nuestros valores y capacidades.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Expresar confianza en sí mismo.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Defender lo que se entiende como correcto.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser emprendedores.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Tomar decisiones importantes a pesar de la incertidumbre y la presión.

          tr
            td.text-center(rowspan="5") Autorregulación
            td.text-center Autocontrol
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mantener bajo control las emociones e impulsos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mantener equilibrados, positivos, imperturbables incluso en momentos críticos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Pensar con claridad y permanecer centrados a pesar de las presiones.

          tr
            td.text-center Responsabilidad
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Actuar de forma ética e irreprochable.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser honrado y sincero en las relaciones.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Admitir los propios errores y señalar acciones poco éticas de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Adoptar posturas firmes y fundamentadas.
          
          tr
            td.text-center Integridad
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Cumplir compromisos y promesas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Responsabilizarse de sus objetivos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser organizados y cuidadosos en el trabajo.
          
          tr
            td.text-center Innovación
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Permanecer abierto a nuevas ideas y enfoques de las cosas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar ideas en nuevas y distintas fuentes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Aportar soluciones originales a los problemas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Adoptar nuevas perspectivas de las cosas.
          
          tr
            td.text-center Adaptación
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser flexible.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Manejar adecuadamente una multiplicidad de demandas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Establecer y reorganizar prioridades.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Adaptarse a circunstancias cambiantes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Poseer una visión flexible de las cosas.

          tr
            td.text-center(rowspan="4") Motivación
            td.text-center Motivación de logro
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Esforzarse por mejorar u obtener determinado criterio de excelencia.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Orientarse en los resultados.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Plantearse objetivos desafiantes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Asumir riesgos calculados.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Descubrir formas más eficaces y eficientes de hacer las cosas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mejorar el propio desempeño.
          tr
            td.text-center Compromiso
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Secundar los objetivos de un grupo u organización.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Encontrar sentido en la misión organizacional.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Recurrir a los valores esenciales del grupo para lograr actuaciones eficaces.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar activamente oportunidades para cumplir con la misión del grupo.
          tr
            td.text-center Iniciativa
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Aprovechar oportunidades.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Perseguir objetivos superiores a los demandados.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Saltarse rutinas habituales para llevar a cabo un trabajo eficaz.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Motivar a otros a emprender esfuerzos superiores.
          tr
            td.text-center Optimismo
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Insistir en la consecución de objetivos a pesar de los contratiempos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Operar más desde la expectativa del éxito que desde el miedo al fracaso.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Competencias sociales</i>
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-left")
      table
        caption(style="font-weight: normal") <b>Nota.</b> Adaptadas de la Guía PMBOK.
        thead
          tr(style="background-color: white")
            th Factor
            th Competencia
            th(colspan="3") Manifestación
        tbody
          tr
            td.text-center(rowspan="4") Empatía
            td.text-center Comprender a los demás
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Atender a las señales emocionales que emanan de las personas de su entorno.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Percibir los sentimientos y puntos de vista de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Interesarse activamente por sus preocupaciones.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Escuchar bien.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ayudar a los demás basándose en la comprensión de sus necesidades.
          tr
            td.text-center Atender y/o desarrollar a los demás
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Darse cuenta de las necesidades de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ayudar al desarrollo de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Reconocer los logros y desarrollos de otros.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Proporcionar retroalimentaciones útiles.
          tr
            td.text-center Orientación al servicio
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Comprender las necesidades de los clientes y tratar de satisfacerlas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar el modo de aumentar la satisfacción y fidelidad de los clientes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Brindar ayuda de forma desinteresada.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Actuar como asesor.
          tr
            td.text-center Aprovechamiento de la diversidad
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Respetar y relacionarse correctamente con personas de diferentes sustratos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Comprender diferentes visiones del mundo y ser sensibles a las diferencias intergrupales.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Considerar la diversidad como una oportunidad.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Afrontar los prejuicios y la intolerancia.
    
    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Habilidades sociales</i>
    .tabla-a.color-acento-contenido.mb-5.col-xl-10.mx-auto(data-aos="fade-left")
      table
        caption(style="font-weight: normal") <b>Nota.</b> Adaptadas de la Guía PMBOK.
        thead
          tr(style="background-color: white")
            th Habilidades 
            th(colspan="3") Manifestación
        tbody
          tr
            td.text-center Influencia
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Poseer herramientas eficaces de persuasión.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Captar fácilmente la atención.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Recabar consenso y apoyo de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Utilizar adecuadamente los hechos para exponer eficazmente sus opiniones.
          tr
            td.text-center Comunicación 
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Escuchar activamente y abiertamente.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Abordar cuestiones complejas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Compartir la información que se dispone.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar la comprensión mutua.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Alentar la comunicación franca.
          tr
            td.text-center Manejo de los conflictos
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Manejar con tacto situaciones y personas difíciles.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Reconocer las situaciones de conflicto y buscar el modo de llegar a conclusiones y consensos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Utilizar principios de negociación.
          tr
            td.text-center Liderazgo 
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Inspirar y guiar a personas y grupos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Estimular el entusiasmo para la consecución de objetivos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Liderar con el ejemplo.
          tr
            td.text-center Dinamizar cambios
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Reconocer las necesidades de cambio.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Desafiar el #[em statu quo].
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Promover el cambio. 
          tr
            td.text-center Establecer vínculos
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Cultivar y mantener amplias redes de relación.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Crear relaciones provechosas.
          tr
            td.text-center Cooperación
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Trabajar con los demás en la consecución de objetivos compartidos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Alentar la cooperación.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Despertar el entusiasmo y la participación.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Cuidar del grupo y compartir méritos.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Competencias comerciales</i>
    .tabla-a.color-acento-contenido.mb-5.col-xl-10.mx-auto(data-aos="fade-left")
      table
        caption(style="font-weight: normal") <b>Nota.</b> Adaptadas de la Guía PMBOK.
        thead
          tr(style="background-color: white")
            th Habilidades 
            th(colspan="3") Manifestación
        tbody
          tr
            td.text-center Confianza en sí mismo
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Sentirse seguro de uno mismo.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Asumir situaciones nuevas o inesperadas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser emprendedores.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Tomar decisiones importantes y enfrentarse a riesgos.
          tr
            td.text-center Autocontrol
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mantener bajo control las emociones e impulsos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mantener equilibrados, positivos, imperturbables incluso en momentos críticos.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Tolerar las situaciones de frustración propias de la actividad comercial.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser perseverante.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Administrar el propio potencial intelectual, psicológico o físico.
          tr
            td.text-center Responsabilidad
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Actuar de forma ética.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser honrado y ético en las relaciones.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Cumplir compromisos y promesas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser organizado y cuidadoso en el trabajo.
          tr
            td.text-center Adaptación
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Ser flexible.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Adaptarse a circunstancias cambiantes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Adaptarse a personas diferentes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Desempeñar un cierto mimetismo.
          tr
            td.text-center Motivación de logro
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Orientarse hacia los resultados.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Plantearse objetivos desafiantes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Asumir riesgos calculados.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Descubrir formas más eficaces y eficientes de hacer las cosas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Mejorar el propio desempeño.
          tr
            td.text-center Comprender a los demás
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Percibir los sentimientos y puntos de vista de los demás.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Desarrollar un punto de intuición.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Empatizar.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Interesarse por las necesidades de otros.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Escuchar bien.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Desear ayudar a los demás basándose en la comprensión de sus necesidades.
          tr
            td.text-center Orientación al servicio
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Comprender las necesidades de los clientes y tratar de satisfacerlas.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar el modo de aumentar la satisfacción y la fidelidad de los clientes.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Brindar ayuda de forma desinteresada.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Actuar como asesor.
          tr
            td.text-center Influencia
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Desear dominar las situaciones.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Persuadir, convencer.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Captar fácilmente la atención.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Utilizar adecuadamente los hechos para exponer eficazmente sus opiniones.
          tr
            td.text-center Comunicación
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Argumentar con facilidad.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Escuchar activa y abiertamente.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Buscar la comprensión mutua.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Alentar la comunicación franca.
          tr
            td.text-center Establecer vínculos
            td(colspan="3")
              ul
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Manifestar un punto de extroversión.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Establecer con facilidad contactos interpersonales.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Cultivar y mantener amplias redes de relación.
                li.d-flex.mb-2.pb-2.align-items-start
                  img.mt-1(src="@/assets/curso/temas/decorador-ul.svg" style="max-width: 8px" data-aos="fade-right")
                  p.ps-2.mb-0(data-aos="fade-left") Consolidar la amistad personal con el entorno laboral.
    
    .d-flex.flex-wrap
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p El desempeño del equipo se deberá medir conforme al cumplimiento de metas establecidas que en conjunto sumarán para la consecución del objetivo y metas principales del evento. Una de las formas más empleadas por su simplicidad al momento de evaluar el desempeño del equipo de trabajo será una lista de chequeo.
        p.mb-0 La lista de chequeo es una técnica de seguimiento, control y evaluación para identificar el cumplimiento de ciertas variables. En este caso, conforme a la función, objetivo y meta de cada equipo, se asignan unas variables a evaluar, así mismo, se podrán incluir aspectos de cumplimiento de calidad. A continuación, se presenta un ejemplo de lista de verificación, en la cual es esencial incorporar un objetivo y una meta que deban cumplirse para cada evidencia y elemento:
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-15.png" style="max-width: 400px" data-aos="fade-left")
    
    .container-100.py-4(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left top; background-size: cover;"
    )
      ImagenInfografica.color-secundario.mb-5.col-lg-10.col-xl-6.mx-auto(data-aos="fade-right")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-16.svg', alt='Imagen decorat')

        .tarjeta.color-secundario.p-4(x="13.8%" y="74.8%" numero="+" style="background-color: #F6F6F6")
          p.fw-bold Plan de juzgamiento: 
          p.mb-0 El equipo define el plan de juzgamiento deportivo del evento.
        .tarjeta.color-secundario.p-4(x="48.5%" y="74.8%" numero="+" style="background-color: #F6F6F6")
          p.fw-bold Acta de divulgación:
          p.mb-0 El plan de juzgamiento es comunicado y divulgado al comité organizador del evento.
        .tarjeta.color-secundario.p-4(x="82.8%" y="74.8%" numero="+" style="background-color: #F6F6F6")
          p.fw-bold Correo electrónico: 
          p.mb-0 Se envía el plan de juzgamiento vía correo electrónico a deportistas, entrenadores y partes interesadas.

    separador
    #t_1_4.titulo-segundo.color-acento-botones
      h2 1.4 Informe final del evento
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-17.png" style="max-width: 400px" alt="Imagen decorativa" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        p Consiste en un trabajo estructurado y organizado que permite entender de forma concreta y concisa el proceso y resultado del proyecto, en este caso del evento deportivo. El informe deberá explicar cada una de las partes que conformaron el evento, desde su inicio como objetivos y alcances planteados hasta sus resultados y oportunidades de mejora resultantes.

        p.mb-0 Es importante tener en cuenta que el contenido del informe varía conforme a la parte interesada a la que se le va a presentar, es decir, el interés de la información relacionada con el evento por parte de los patrocinadores no es la misma que la que desea conocer los clientes y usuarios del evento. A continuación, se presenta la información que desea cada una de las partes interesadas:


    .container-100.py-4.mb-5(style="background-color: #E9EDFF" data-aos="fade-left")
      SlyderB.col-xl-10.mx-auto(:datos="datosSlyder")

    .d-flex.flex-wrap.mb-5
      .col-lg-7.col-xl-8.pe-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p Según la parte interesada, la forma de divulgación de la información también cambiará. El nivel de detalle y comunicación formal de un informe escrito presentado a los propietarios del evento es diferente a la información puntual que desean conocer los clientes, usuarios del evento donde en algunos casos prefieren emplear redes sociales y correo electrónico; sin embargo, esto dependerá del tipo de evento, de la cantidad de participantes, del deporte y si este es de tipo recreativo o de alta competencia, entre otros factores que el líder y equipo de trabajo ejecutor del evento deberán identificar.

        p.mb-0 Conforme a lo anterior, existen distintos tipos de informes, unos más generales, otros con mayor nivel de detalle y esto dependerá como se mencionaba anteriormente de la parte interesada y de la información requerida. Por lo tanto, se deberá planificar el informe teniendo en cuenta los siguientes aspectos:
      img.mx-auto.col-lg-5.col-xl-4.mb-4.my-lg-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema1/img-15.png" style="max-width: 400px" data-aos="fade-left")

    .d-flex.flex-wrap
      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #2D54FE" data-aos="fade-right")
        img(src="@/assets/curso/temas/tema1/img-23.svg" class="img-float" alt="imagen decorativa")
        p.mb-0(style="color: white") Qué se desea presentar del evento, con qué finalidad y a quién va dirigido.
      .card-img-float.mx-auto(style="background-color: #FFCA00" data-aos="flip-up")
        img(src="@/assets/curso/temas/tema1/img-24.svg" class="img-float" alt="imagen decorativa")
        p.mb-0 Cómo estructurar y organizar la información eficientemente.
      .card-img-float.mx-auto.mx-xxl-0(style="background-color: #FE502D" data-aos="fade-left")
        img(src="@/assets/curso/temas/tema1/img-25.svg" class="img-float" alt="imagen decorativa")
        p.mb-0 Proceso de escritura y redacción .

</template>

<script>
import SlyderB from '@/components/SlyderB.vue'
export default {
  name: 'Tema1',
  components: { SlyderB },
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: '',
        texto: `
          <b>Rol en el evento</b><br>
          Consumidores: deportistas y espectadores del evento.
          <br>
          <br>
          <b>Interés de información</b>
          <br>
          Datos relacionados con el desarrollo y resultados del evento, como personas inscritas, número de mujeres y hombres que corrieron la maratón, tabla de posiciones, entre otra información que describa cómo se desarrolló el evento.
        `,
        imagen: require('@/assets/curso/temas/tema1/img-18.png'),
      },
      {
        titulo: '',
        texto: `
          <b>Rol en el evento</b><br>
          Propietarios del evento.
          <br>
          <br>
          <b>Interés de información</b>
          <br>
          Generalmente desean conocer cada uno de los detalles del evento. En especial, desean conocer el cumplimiento de los objetivos y metas planteadas conforme al tiempo y recursos estimados. Por lo tanto, los resultados de la evaluación del proyecto son de gran interés para los propietarios del evento. Asimismo, desean conocer la percepción y nivel de satisfacción de las partes interesadas del evento.
        `,
        imagen: require('@/assets/curso/temas/tema1/img-19.png'),
      },
      {
        titulo: '',
        texto: `
          <b>Rol en el evento</b><br>
          Operadores del evento.
          <br>
          <br>
          <b>Interés de información</b>
          <br>
          Los operadores que desempeñaron un papel fundamental en el evento buscan conocer el balance general y los resultados de su equipo o rol específico en el evento.
        `,
        imagen: require('@/assets/curso/temas/tema1/img-20.png'),
      },
      {
        titulo: '',
        texto: `
          <b>Rol en el evento</b><br>
          Patrocinadores.
          <br>
          <br>
          <b>Interés de información</b>
          <br>
          Conforme al tipo de patrocinio, lo primero que desean conocer es el éxito e impacto del evento de acuerdo con el tipo de patrocinio e interés con el evento. Puede ser lucro económico, promocionar una marca o fomento deportivo sin ánimo de lucro, la promoción y divulgación de la marca, el interés será especialmente en el manejo de los recursos brindados y el efecto obtenido en el resultado del evento.
        `,
        imagen: require('@/assets/curso/temas/tema1/img-21.png'),
      },
      {
        titulo: '',
        texto: `
          <b>Rol en el evento</b><br>
          Proveedores.
          <br>
          <br>
          <b>Interés de información</b>
          <br>
          Conforme al producto o servicio prestado, desean conocer cómo el evento beneficia sus intereses, cómo lo podrá ser: exhibición de sus productos y servicios, nuevas oportunidades de negocio, incremento en ventas y en general como el desarrollo y resultado del evento, los beneficiaron y podrán beneficiarse a futuro.
        `,
        imagen: require('@/assets/curso/temas/tema1/img-22.png'),
      },
    ],
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
