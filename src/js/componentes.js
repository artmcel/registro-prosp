/**
 * logica del proyecto
 */

/**
 * constantes...
 */

const peticiones      = import( /* webpackChunkName: "peticiones" */ './services/peticiones'),
      boton           = document.getElementById('boton'),
      inputs          = document.querySelectorAll('input'),
      selects         = document.querySelectorAll('select'),
      selectPlanteles = document.getElementById('plantel'),
      selectNiveles   = document.getElementById('nivel'),
      selectPeriodos  = document.getElementById('periodo'),
      selectCarrera   = document.getElementById('carrera'),
      selectHorario   = document.getElementById('horario');

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
    //agregaPeriodoSelect(selectPlanteles.value);

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

selectNiveles.addEventListener('change', (e) => {

    if( e.target.value >= '0' ){

        selectPeriodos.innerHTML = '<option value="0">INICIAR CLASES EN:</option>';
        selectCarrera.innerHTML = '<option value="0">CARRERA</option>';
        selectHorario.innerHTML = '<option value="0">HORARIO</option>';

    }

    //console.log( selectPeriodos.value );
    agregaPeriodoSelect(selectPlanteles.value, selectNiveles.value);
})

const agregaPeriodoSelect = async (idPlantel, idNivel) => {

    if(idNivel === '0') throw 'No seleccionaste nivel';

    await peticiones.then(module => {

        const periodo = module.obtenerPeriodos(idPlantel);
        periodo.then(periodo => {

            //console.log(nivel);

            for (let { clave, descrip } of periodo) {
                selectPeriodos.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
            }

        });
    });

}

selectPeriodos.addEventListener('change', (e) => {

    if( e.target.value >= '0' ){

        selectCarrera.innerHTML = '<option value="0">CARRERA</option>';
        selectHorario.innerHTML = '<option value="0">HORARIO</option>';

    }
    agregaCarreraSelect(selectNiveles.value, selectPeriodos.value, selectPlanteles.value);
})

const agregaCarreraSelect = async( idNivel, idPeriodo, idPlantel) => {

    if(idPeriodo === '0' || idNivel === '0') throw 'No seleccionaste periodo';

    let idModo = '';

    /**
     * Para la landig de sua se utlizara el modo 2 para obtener las carreras
     * para todos los demas se usara el modo 0
     */

    idPlantel === '5' ? idModo = '2' : idModo = '0';


    await peticiones.then(module => {

        const carreras = module.obtenerCarreras(idModo, idNivel, idPeriodo, idPlantel);
        carreras.then(carrera => {

            //console.log(carrera);
            if(!carrera) {
                
                selectCarrera.insertAdjacentHTML('beforeend', `<option value="0" selected>No hay carreras disponibles</option>`);
                selectHorario.insertAdjacentHTML('beforeend', `<option value="0" selected>No hay horarios disponibles</option>`);

            }

            if(carrera.length){
                for (let { clave, descrip } of carrera) {
                    //console.log(clave, descrip);
                    selectCarrera.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
                    
                }
            }
            
            if(carrera.length === undefined) {

                for (let { clave, descrip } of [carrera]) {
                    //console.log(clave, descrip);
                    selectCarrera.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
                }

            }
        });
    });

}

selectCarrera.addEventListener('change', (e) => {
    
    if( e.target.value >= '0' ){
        selectHorario.innerHTML = '<option value="0">HORARIO</option>';
    }
    agregarHorarioSelect(selectCarrera.value, selectNiveles.value, selectPeriodos.value, selectPlanteles.value);
});

const agregarHorarioSelect = async( idCarrera, idNivel, idPeriodo, idPlantel ) => {

    if(idCarrera === '0' || idNivel === '0' || idPeriodo === '0') throw 'No seleccionaste carrera';

    await peticiones.then(module => {
        const horario = module.obtenerHorarios(idCarrera, idNivel, idPeriodo, idPlantel);
        horario.then( horario => {

            //console.log(horario.length);

            if(horario.length){
                for (let { clave, descrip } of horario) {
                    //console.log(clave, descrip);
                    selectHorario.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
                    
                }
            }
            
            if(horario.length === undefined) {

                for (let { clave, descrip } of [horario]) {
                    //console.log(clave, descrip);
                    selectHorario.insertAdjacentHTML('beforeend', `<option value="${clave}">${descrip}</option>`);
                }

            }

            
        });
    })
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

