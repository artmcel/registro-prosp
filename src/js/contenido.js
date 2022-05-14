const contenido = [
    {
        "izcalli": {
            "plantel": "IZCALLI",
            "tituloPrincipal1": "TITULACIÓN",
            "tituloPrincipal2": "AUTOMÁTICA",
            "ubicacion": "Av. Del Vidrio No. 15, Col. Plaza Dorada, Centro Urbano (Frente a la FES Cuautitlán) Campo 1, C.P. 54760 Cuautitlán Izcalli, Estado de México",
            "titulo1": "OBTÉN UNA BECA",
            "titulo2": " 60% DE DESCUENTO",
            "titulo3": "EN TURNO MATUTINO",
            "ofertaAcademica": [
                {
                    "Administración": "Administración",
                    "Administración de Empresas Turísticas": "Administración de Empresas Turísticas",
                    "Comercio Internacional y Aduanas": "Comercio Internacional y Aduanas",
                    "Comunicación": "Comunicación",
                    "Contaduría Pública": "Contaduría Pública",
                    "Derecho": "Derecho",
                    "Diseño Gráfico": "Diseño Gráfico",
                    "Idiomas": "Idiomas",
                },
                {
                    "Mercadotecnia y Publicidad": "Mercadotecnia y Publicidad",
                    "Psicología Social": "Psicología Social",
                    "Relaciones Internacionales y Comercio Exterior": "Relaciones Internacionales y Comercio Exterior",
                    "Sistemas Computacionales": "Sistemas Computacionales",
                    "Turismo": "Turismo",
                    "Informática Administrativa": "Informática Administrativa",
                    "Pedagogía": "Pedagogía"
                }
            ],
            "srcFotos": ""

        },
        "satelite": {
            "tituloPrincipal": "",
            "ubicacion": "",
            "titulo1": "",
            "titulo2": "",
            "titulo3": "",
            "ofertaAcademica": "",
            "srcFotos": ""

        },
        "polanco": {
            "tituloPrincipal": "",
            "ubicacion": "",
            "titulo1": "",
            "titulo2": "",
            "titulo3": "",
            "ofertaAcademica": "",
            "srcFotos": ""

        },
        "veracruz": {
            "tituloPrincipal": "",
            "ubicacion": "",
            "titulo1": "",
            "titulo2": "",
            "titulo3": "",
            "ofertaAcademica": "",
            "srcFotos": ""

        },
        "veracruzSua": {
            "tituloPrincipal": "",
            "ubicacion": "",
            "titulo1": "",
            "titulo2": "",
            "titulo3": "",
            "ofertaAcademica": "",
            "srcFotos": ""

        }
    }
];


/**
 * funcion para obtener el valor de cada plantel
 */

export const obtenerContenidoPlantel = (plantel) => {


    return contenido[0][plantel];

}            