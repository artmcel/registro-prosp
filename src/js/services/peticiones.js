/**
 * archivo para peticiones fetch...
 */

/**
 * obtener planteles desde php
 */

const url = `http://192.168.1.123/sidetrack/php/peticiones.php`;

const obtenerPlanteles = async () => {

    const respuesta = await fetch(`${url}?planteles`);	

    if(!respuesta) throw 'No se pudo obtener los planteles';

    const planteles = await respuesta.json();
    return planteles;

}

const obtenerNiveles = async ( plantel ) => {

    const respuesta = await fetch(`${url}?obtener=niveles&idPlantel=${plantel}`);

    if(!respuesta) throw 'No se pudo obtener los niveles';

    const niveles = await respuesta.json();
    //console.log(niveles);
    return niveles;
}

const obtenerPeriodos = async ( plantel ) => {

    const respuesta = await fetch(`${url}?obtener=periodos&idPlantel=${plantel}`);

    if(!respuesta) throw 'No se pudo obtener los niveles';

    const periodos = await respuesta.json();
    //console.log(niveles);
    return periodos;
}

const obtenerCarreras = async ( nivel, periodo, plantel ) => {

    const respuesta = await fetch(`${url}?obtener=carreras&&idNivel=${nivel}&idPeriodo=${periodo}&idPlantel=${plantel}`);

    if(!respuesta) throw 'No se pudo obtener los niveles';

    const carreras = await respuesta.json();
    //console.log(niveles);
    return carreras;

}

const obtenerHorarios = async ( carrera, nivel, periodo, plantel ) => {

    const respuesta = await fetch(`${url}?obtener=horarios&&idCarrera=${carrera}&idNivel=${nivel}&idPeriodo=${periodo}&idPlantel=${plantel}`);

    if(!respuesta) throw 'No se pudo obtener los niveles';

    const horarios = await respuesta.json();
    return horarios;

};



export {
    obtenerPlanteles,
    obtenerNiveles,
    obtenerPeriodos,
    obtenerCarreras,
    obtenerHorarios
}