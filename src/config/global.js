export default {
  global: {
    componenteFormativo: 'Evaluación y acciones de mejora del evento',
    descripcionCurso:
      'En este componente se abordan elementos generales sobre la evaluación, con el fin de determinar el éxito del evento deportivo y posibles acciones correctivas y de mejora para futuros eventos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación y acciones de mejora del evento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metas y objetivos propuestos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Balance del evento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Desempeño de los equipos de trabajo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Informe final del evento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acciones de mejora del evento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificar las necesidades de mejora',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Detectar las principales causas del problema ',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Definir objetivos de mejora ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Seleccionar las acciones de mejora',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Planificación y control de las acciones de mejora',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_08_122112.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3 Desempeño de los equipos de trabajo',
      referencia:
        'Project Management Institute. Guía de los fundamentos para la dirección de proyectos (Guía del PMBOK). ',
      tipo: 'Libro',
      link:
        'https://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf?PMBOX=http://www.sadamweb.com.ar/news/2016_08Agosto/Guia_Fundamentos_para_la_Direccion_de_Proyectos-4ta_Edicion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Evento',
      significado:
        'acontecimiento único, especial e irrepetible programado para satisfacer las necesidades de las partes interesadas.',
    },
    {
      termino: 'Evento deportivo',
      significado:
        'acontecimiento único, especial e irrepetible, relacionado con el sector del deporte, con diferentes fines desde la promoción deportiva, fomento de la práctica deportiva u otras organizaciones patrocinadoras que emplean el deporte simplemente como un instrumento para promocionar sus marcas.',
    },
    {
      termino: 'Objetivos',
      significado:
        'abarcan aspectos técnicos, rentabilidad, rendimiento, calidad y entre otros elementos que el proyecto desee alcanzar.',
    },
  ],
  referencias: [
    {
      referencia:
        'IPMA. International Project Management Association. (2006). <em>ICB Competence Baseline Versión 3.0 Zurich, IPMA.</em>',
      link: '',
    },
    {
      referencia:
        'Pantoja, A. (2009). <em>Presentación y defensa del trabajo de investigación. Manual básico para la realización de tesinas, tesis y trabajos de investigación.</em> Editorial EOS.',
      link: '',
    },
    {
      referencia:
        'Pinto, J. & Slevin, D. (1988). <em>Critical Success Factors Across the Project Life Cycle</em>. Project Management Journal.',
      link: '',
    },
    {
      referencia:
        'PMI, Project Management Institute. (2008). <em>Organizational Project Management Maturity Model</em>. Project Management Institute.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto Temático',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y Evaluadora Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación Instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la Formación Virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción Audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
