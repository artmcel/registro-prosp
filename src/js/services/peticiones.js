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

    const respuesta = await fetch(`${url}?niveles`, {
        method: 'POST',
        body: JSON.stringify({plantel})
    });

    if(!respuesta) throw 'No se pudo obtener los niveles';

    const niveles = await respuesta.json();
    //console.log(niveles);
    return niveles;
}



export {
    obtenerPlanteles,
    obtenerNiveles
}