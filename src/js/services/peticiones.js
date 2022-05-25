/**
 * archivo para peticiones fetch...
 */

/**
 * obtener planteles desde php
 */

//const url = `http://192.168.1.123/sidetrack/php/peticiones.php`;
const url = './php/peticiones';
//const url = 'http://192.168.1.123/registro/php/peticiones.php';

export const guardarDatos = async ( datos ) => {

    const respuesta = await fetch(`${url}?obtener=guardaDatos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(datos)
    })

    //if( ) throw 'No se pudo guardar los datos';

    const datosGuardados = await respuesta.json();
    //console.log(datosGuardados);
    return datosGuardados;
    
    
};