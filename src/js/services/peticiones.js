/**
 * archivo para peticiones fetch...
 */

/**
 * obtener planteles desde php
 */

const url = `http://192.168.1.123/sidetrack/php/peticiones.php`;

const obtenerPlanteles = async () => {

    const respuesta = await fetch(`${url}?planteles`);	

    if(!respuesta.ok) throw 'No se pudo obtener los planteles';

    const planteles = await respuesta.json();
    return planteles;

}

const obtenerNiveles = async ( plantel ) => {

    const respuesta = await fetch(`${url}?obtener=niveles&idPlantel=${plantel}`);

    if(!respuesta.ok) throw 'No se pudo obtener los niveles';

    const niveles = await respuesta.json();
    //console.log(niveles);
    return niveles;
}

const obtenerPeriodos = async ( plantel ) => {

    const respuesta = await fetch(`${url}?obtener=periodos&idPlantel=${plantel}`);

    if(!respuesta.ok) throw 'No se pudo obtener los niveles';

    const periodos = await respuesta.json();
    //console.log(niveles);
    return periodos;
}

const obtenerCarreras = async ( modo, nivel, periodo, plantel ) => {

    const respuesta = await fetch(`${url}?obtener=carreras&idModo=${modo}&idNivel=${nivel}&idPeriodo=${periodo}&idPlantel=${plantel}`);

    if(!respuesta.ok) throw 'No se pudo obtener los niveles';

    const carreras = await respuesta.json();
    //console.log(niveles);
    return carreras;

}

const obtenerHorarios = async ( carrera, nivel, periodo, plantel ) => {

    const respuesta = await fetch(`${url}?obtener=horarios&&idCarrera=${carrera}&idNivel=${nivel}&idPeriodo=${periodo}&idPlantel=${plantel}`);

    if(!respuesta.ok) throw 'No se pudo obtener los niveles';

    const horarios = await respuesta.json();
    return horarios;

};

const guardarDatos = async ( datos ) => {

    //console.log(datos);
    //return datos;

    
    const respuesta = await fetch(`${url}?obtener=guardaDatos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(datos)
    })

    if(!respuesta.ok) throw 'No se pudo guardar los datos';

    const datosGuardados = await respuesta.json();
    //console.log(datosGuardados);
    return datosGuardados;
    
}



export {
    obtenerPlanteles,
    obtenerNiveles,
    obtenerPeriodos,
    obtenerCarreras,
    obtenerHorarios,
    guardarDatos
}