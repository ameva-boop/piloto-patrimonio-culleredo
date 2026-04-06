var config = {
    style: 'mapbox://styles/evaam/cmnk64mes00b601sa01313ia8',
    accessToken: 'pk.eyJ1IjoiZXZhYW0iLCJhIjoiY21tbmxxeW1wMDRmZTJzczJscGVlOGxkZyJ9.RSX018lF7H568pon4XxKBg',
    showMarkers: true,
    markerColor: '#4778e2',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    theme: 'dark',
    use3dTerrain: false, 
    auto: false,
    title: 'Patrimonio Arqueológico de Culleredo',
    subtitle: 'Una visita virtual por la historia antigua de Culleredo',
    byline: 'Eva Antelo & DaFonte Restauración',
    footer: 'Source: DaFonte Restauración, 2017. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'culleredogral',
            alignment: 'right',
            hidden: false,
            title: 'Te damos la bienvenida a Culleredo Arqueológico',
            description: 'Culleredo es un municipio coruñés que bordea la Ría de O Burgo, en el norte de Galicia. Muy cercano a la ciudad de A Coruña, cuenta con un patrimonio histórico y arqueológico muy diverso que, en muchos casos, es poco conocido. Sigue deslizando y ¡acompáñanos en este viaje por la historia!',
            location: {
                center: [-8.36649, 43.31514],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'culleredogral2',
            alignment: 'left',
            hidden: false,
            title: 'Culleredo en la Historia',
            description: 'La historia de Culleredo comienza en el Periodo Calcolítico, hace más de 6000 años. De esta época conservamos elementos de la cultura megalítica como mámoas (dólmenes enterrados bajo tierra) y menhires. Contamos también con varios castros de la Edad del Hierro y presencia romana. En arquitectura medieval, hay iglesias románicas (s.XII) y una torre del s.XIV.',
            location: {
                center: [-8.38879, 43.29209],
                zoom: 12,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ponteburgo',
            alignment: 'right',
            hidden: false,
            title: 'Ponte do Burgo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cambre_Galicia_070330_13.jpg/1280px-Cambre_Galicia_070330_13.jpg',
            description: '<span class="creditos">fotografía de Luis Miguel Bugallo Sánchez.</span><br>El Puente de O Burgo atraviesa la ría que le da nombre. De origen medieval, está construida en granito y cuenta con 120m de longitude.',
            location: {
                center: [-8.35968375206, 43.3154285521],
                zoom: 18,
                pitch: 74.50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'castroalvedro',
            alignment: 'left',
            hidden: false,
            title: 'Castro de Alvedro',
            image: './assets/img58.jpg',
            description: 'En el Castro de Alvedro es fácil apreciar todavía su muralla exterior, que le da su característica forma ovalada.',
            location: {
                center: [-8.36966693401, 43.3008292554],
                zoom: 18,
                pitch: 74.50,
                bearing: -40,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sanestevo',
            alignment: 'right',
            hidden: false,
            title: 'Iglesia de San Estevo de Culleredo',
            image: './assets/img70.jpg',
            description: 'Esta iglesia es una de las más antiguas de Culleredo. De estilo románico, cuenta con decoración de temática xacobea, ya que se encuentra en las inmediaciones del Camino Inglés a Santiago.',
            location: {
                center: [-8.384113311767578, 43.28870579205864],
                zoom: 18,
                pitch: 74.50,
                bearing: -70,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'castrocosme',
            alignment: 'left',
            hidden: false,
            title: 'Castro de San Cosme',
            image: './assets/img68.jpg',
            description: 'Este castro es un ejemplo claro de cómo cada época transforma y resignifica los lugares de importancia simbólica. A día de hoy es difícil apreciar la forma del castro como tal, ya que en su ubicación se construyó una iglesia.',
            location: {
                center: [-8.38781386636, 43.2771904809],
                zoom: 18,
                pitch: 74.50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'muinhosxesteiras',
            alignment: 'right',
            hidden: false,
            title: 'Muíños do Rego das Xesteiras',
            image: './assets/img72.jpg',
            description: 'En total, son 11 los molinos fluviales que recorren las orillas del río. Dos de ellos están completamente restaurados, lo que ayuda a imaginarlos en funcionamiento en su día.',
            location: {
                center: [-8.411133885383606, 43.249028136539714],
                zoom: 18,
                pitch: 74.50,
                bearing: -120,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'medonhacastelo',
            alignment: 'left',
            hidden: false,
            title: 'Medoña do Chan de Castelo',
            image: './assets/img54.jpg',
            description: 'Esta mámoa mide unos 30 metros de diámetro y sobresale más de 2 metros desde el suelo. Se halla completamente enterrada, no se observa ninguna piedra en la superficie.',
            location: {
                center: [-8.40450915724, 43.2317977891],
                zoom: 18,
                pitch: 74.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'marco-salgueiras',
            alignment: 'right',
            hidden: false,
            title: 'Marco de Salgueiras',
            image: './assets/img56.jpg',
            description: 'Este marco es, en realidad, un menhir de la cultura megalítica. Se encuentra cerca de una mámoa, la Mámoa de Fonte das Meigas, una fuente mágica envuelta en leyendas.',
            location: {
                center: [-8.37200582027, 43.2493407236],
                zoom: 19,
                pitch: 74.50,
                bearing: 43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'capelasanramon',
            alignment: 'left',
            hidden: false,
            title: 'Capela de San Ramón do Castelo',
            image: './assets/img66.jpg',
            description: 'Esta capilla es el monumento más reciente de nuestro recorrido. Viene de la Edad Moderna (s. XVI - XVIII) y su campana lleva siglos resonando en estos lares.',
            location: {
                center: [-8.38783219457, 43.2375387641],
                zoom: 18,
                pitch: 74.50,
                bearing: 43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'torrecelas',
            alignment: 'right',
            hidden: false,
            title: 'Torre de Celas de Peiro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Torre_de_Celas_de_Peiro.jpg',
            description: '<span class="creditos">Fotografía de Javier Pais.</span><br>Esta torre medieval formaba parte de un antiguo pazo. Ahora alberga el Museo Etnográfico municipal. Es el final de nuestro recorrido y una visita muy recomendable para complementar nuestro viaje por la historia arqueológica de Culleredo.',
            location: {
                center: [-8.40859115124, 43.2495439044],
                zoom: 18,
                pitch: 74.50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'culleredofinal',
            alignment: 'fully',
            hidden: false,
            title: '¡Fin de la ruta!',
            description: 'Gracias por acompañarnos en este viaje. Te animamos a visitar nuestros monumentos y disfrutar de la historia en vivo. Visita la web del Concello para ver los horarios de las visitas guiadas y teatralizadas. ¡Te esperamos!',
            location: {
                center: [-8.38879, 43.29209],
                zoom: 12,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
