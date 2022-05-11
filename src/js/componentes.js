/**
 * logica del proyecto
 */

/**
 * constantes...
 */

const peticiones = import( /* webpackChunkName: "peticiones" */ './services/peticiones'),
    boton = document.getElementById('boton'),
    inputs = document.querySelectorAll('input'),
    selects = document.querySelectorAll('select'),
    selectPlanteles = document.getElementById('plantel'),
    selectNiveles = document.getElementById('nivel'),
    selectPeriodos = document.getElementById('periodo'),
    selectCarrera = document.getElementById('carrera'),
    selectHorario = document.getElementById('horario')

    ;

//objeto para guardar los datos del formulario
let datos = {};

/**
 * 
 * obtenemos las cookies de las url y las guardamos en una variable
 * 
 */

window.addEventListener('load', () => {
    const url = new URLSearchParams(window.location.search);
    cookies = {};

    url.forEach((value, key) => {

        document.cookie = `${key}=${value};expires=Thu, 31 Dec 2022 12:00:00 UTC;`;
        datos = { ...datos, [key]: value };

    });
    //console.log(cookies);
    //llamamos a la funcion para cargar los niveles...
    agregaNivelSelect(selectPlanteles.value);

});

/**
 * 
 * importar modulo para cargar los planteles..
 * 
 */
const agregaNivelSelect = async (idPlantel) => {

    await peticiones.then(module => {

        const niveles = module.obtenerNiveles(idPlantel);
        niveles.then(nivel => {

            //console.log(nivel);

            for (let { clave, descrip } of nivel) {
                selectNiveles.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
            }

        });
    });

}





/**
 * 
 * logica del envio de informacion
 * 
 */
boton.addEventListener('click', (e) => {

    e.preventDefault();

    //let datos = {};
    // obtener informacion de los inputs..
    inputs.forEach(({ id, value }) => {

        if (!value) throw 'Todos los campos son obligatorios';

        datos = { ...datos, [id]: value };

    });

    // obtener informacion de los selects..
    selects.forEach(({ id, value }) => {

        //if(!value) throw 'Todos los campos son obligatorios';

        datos = { ...datos, [id]: value };

    });

    console.log(datos);



});

