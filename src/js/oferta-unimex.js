const oferta = [
    {
        "izcalli": {
            "licenciatura": {
                "mayo": {
                    "1 ": "Administración",
                    "14": "Contaduría Pública",
                    "15": "Derecho",
                    "33": "Psicología Social"
                },
                "sep": {
                    "1 " : "Administración",
                    "2 " : "Administración de Empresas Turísticas",
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
            "especialidad": {
                "mayo": {
                    "25": "Habilidadades Directivas",
                    "38": "Terapias Psicosociales"
                },
                "sep": {
                    "18": "Derecho Penal",
                    "22": "Educación",
                    "25": "Habilidades Directivas",
                    "38": "Terapias Psicosociales"
                }

            },
            "maestria": {
                "mayo": {
                    "18": "Derecho Penal",
		            "25": "Habilidades Directivas",
		            "38": "Terapias Psicosociales"
                },
                "sep": {
                    "1": "Administración",
                    "18": "Derecho Penal",
                    "22": "Educación",
                    "25": "Habilidades Directivas"

                }

            }

        },
        "satelite": {
            "licenciatura": {
                "mayo": {
                    "1" :	"Administración",
                    "14" :	"Contaduría Pública",

                },
                "sep": {
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
            "especialidad": {
                "mayo": {
                    "25": "Habilidadades Directivas",
                },
                "sep": {
                    "25": "Habilidades Directivas",
                }

            },
            "maestria": {
                "mayo": {
		            "25": "Habilidades Directivas",
                },
                "sep": {
                    "25": "Habilidades Directivas"

                }

            }

        },
        "polanco": {
            "licenciatura": {
                "mayo": {
                    "1" :	"Administración",
                },
                "sep": {
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
            "especialidad": {
                "mayo": {
                    "18" : "Derecho Penal",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",
                    "38" : "Terapias Psicosociales",

                },
                "sep": {
                    "1"  : "Administración",
                    "18" : "Derecho Penal",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",

                }

            },
            "maestria": {
                "mayo": {
		            "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "38" : "Terapias Psicosociales",

                },
                "sep": {
                    "1"  : "Administración",
                    "25" : "Habilidades Directivas",
                    "27" : "Impuestos",
                    "29" : "Mercadotecnia",


                }

            }

        },
        "veracruz": {
            "licenciatura": {
                "mayo": {
                    "15" : "Derecho",
                    "26" : "Idiomas",

                },
                "sep": {
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
            "especialidad": {
                "mayo": {
                    "25" : "Habilidades Directivas",
                },
                "sep": {
                    "1"  : "Administración",
                    "25" : "Habilidades Directivas",

                }

            },
            "maestria": {
                "mayo": {
		            "25" : "Habilidades Directivas",
                },
                "sep": {
                    "25" : "Habilidades Directivas",
                }

            }

        }
    
    }
]

export const obtenerOfertaAcademica = (idPlantel, idNivel, idPeriodo) => {

    if(idPlantel == '2' && idNivel == '1' && idPeriodo == '101'){

        return oferta[0].izcalli.licencaitura.mayo;
    }
    if(idPlantel == '2' && idNivel == '1' && idPeriodo == '102'){

        return oferta[0].izcalli.licencaitura.sep;
    }



}    