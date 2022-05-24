const oferta = [
    {
        2: {
            1: {
                101: {
                    "1": "Administración",
                    "14": "Contaduría Pública",
                    "15": "Derecho",
                    "33": "Psicología Social"
                },
                102: {
                    "1" : "Administración",
                    "2" : "Administración de Empresas Turísticas",
                    "10" : "Comercio Internacional y Aduanas",
                    "11" : "Comunicación",
                    "14" : "Contaduría Pública",
                    "15" : "Derecho",
                    "20" : "Diseño Gráfico",
                    "26" : "Idiomas",
                    "30" : "Mercadotecnia y Publicidad",
                    "32" : "Pedagogía",
                    "33" : "Psicología Social",
                    "35" : "Relaciones Internacionales y Comercio Exterior",
                    "36" : "Sistemas Computacionales",
                    "39" : "Turismo"
                }
            },
            2: {
                101: {
                    "25": "Habilidadades Directivas",
                    "38": "Terapias Psicosociales"
                },
                102: {
                    "18": "Derecho Penal",
                    "22": "Educación",
                    "25": "Habilidades Directivas",
                    "38": "Terapias Psicosociales"
                }

            },
            3: {
                101: {
                    "18": "Derecho Penal",
		            "25": "Habilidades Directivas",
		            "38": "Terapias Psicosociales"
                },
                102: {
                    "1": "Administración",
                    "18": "Derecho Penal",
                    "22": "Educación",
                    "25": "Habilidades Directivas"

                }

            }

        },
        3: {
            1: {
                101: {
                    "1" :	"Administración",
                    "14" :	"Contaduría Pública",

                },
                102: {
                    "1" :	"Administración",
                    "2"	 : "Administración de Empresas Turísticas",
                    "11" :	"Comunicación",
                    "14" :	"Contaduría Pública",
                    "15" :	"Derecho",
                    "20" :	"Diseño Gráfico",
                    "26" :	"Idiomas",
                    "30" :	"Mercadotecnia y Publicidad",
                    "32" :	"Pedagogía",
                    "33" :	"Psicología Social",
                    "35" :	"Relaciones Internacionales y Comercio Exterior",
                    "36" :	"Sistemas Computacionales",
                    "39" :	"Turismo",

                }
            },
            2: {
                101: {
                    "25": "Habilidadades Directivas",
                },
                102: {
                    "25": "Habilidades Directivas",
                }

            },
            3: {
                101: {
		            "25": "Habilidades Directivas",
                },
                102: {
                    "25": "Habilidades Directivas"

                }

            }

        },
        4: {
            1: {
                101: {
                    "1" :	"Administración",
                },
                102: {
                    "1" :	"Administración",
                    "2"	 : "Administración de Empresas Turísticas",
                    "10" :  "Comercio Internacional y Aduanas",
                    "11" :	"Comunicación",
                    "13" :	"Contaduría",
                    "14" :	"Contaduría Pública",
                    "15" :	"Derecho",
                    "20" :	"Diseño Gráfico",
                    "26" :	"Idiomas",
                    "30" :	"Mercadotecnia y Publicidad",
                    "32" :	"Pedagogía",
                    "33" :	"Psicología Social",
                    "34" :	"Relaciones Internacionales",
                    "35" :	"Relaciones Internacionales y Comercio Exterior",
                    "36" :	"Sistemas Computacionales",
                    "39" :	"Turismo",
                }
            },
            2: {
                101: {
                    "18" : "Derecho Penal",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",
                    "38" : "Terapias Psicosociales",

                },
                102: {
                    "1"  : "Administración",
                    "18" : "Derecho Penal",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",

                }

            },
            3: {
                101: {
		            "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "38" : "Terapias Psicosociales",

                },
                102: {
                    "1"  : "Administración",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",


                }

            }

        },
        5: {
            1: {
                101: {
                    "15" : "Derecho",
                    "26" : "Idiomas",

                },
                102: {
                    "1" : "Administración",
                    "2" : "Administración de Empresas Turísticas",
                    "8" : "Ciencias de la Educación",
                    "10" : "Comercio Internacional y Aduanas",
                    "11" : "Comunicación",
                    "14" : "Contaduría Pública",
                    "15" : "Derecho",
                    "20" : "Diseño Gráfico",
                    "24" : "Gastronomía Internacional",
                    "26" : "Idiomas",
                    "30" : "Mercadotecnia y Publicidad",
                    "33" : "Psicología Social",
                    "35" : "Relaciones Internacionales y Comercio Exterior",
                    "36" : "Sistemas Computacionales",
                    "39" : "Turismo",
                }
            },
            2: {
                101: {
                    "25" : "Habilidades Directivas",
                },
                102: {
                    "1"  : "Administración",
                    "25" : "Habilidades Directivas",

                }

            },
            3: {
                101: {
		            "25" : "Habilidades Directivas",
                },
                102: {
                    "25" : "Habilidades Directivas",
                }

            }

        }
    
    }
]

export const obtenerOfertaAcademica = (idPlantel, idNivel, idPeriodo) => {    

    return oferta[0][idPlantel][idNivel][idPeriodo];

}    