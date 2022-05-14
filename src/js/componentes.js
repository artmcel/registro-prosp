/**
 * logica del proyecto
 */

/**
 * constantes...
 */

const peticiones      = import( /* webpackChunkName: "peticiones" */ './services/peticiones'),
      Swal            = import(/*webpackPrefetch: true*/ 'sweetalert2'),
      contenido       = import( /* webpackChunkName: "contenido" */ './contenido'),
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

    let plantel = 'izcalli';

    agregarContenido( plantel );

});

/**
 * function para insertar el contenido desde el objeto contenido en ./js/contenido.js...
 */

const agregarContenido = ( plantel )=>{

    if(!plantel) throw 'no hay plantel';

    contenido.then(module => {

        const content = module.obtenerContenidoPlantel(plantel);

        document.getElementById('titulo1').innerText = content.tituloPrincipal1;
        document.getElementById('titulo2').innerText = content.tituloPrincipal2;
        document.getElementById('nombre-plantel').innerText = `PLANTEL ${content.plantel}`;
        document.getElementById('ubicacion-plantel').innerText = content.ubicacion;
        document.getElementById('tit1').innerText = content.titulo1;
        document.getElementById('tit2').innerText = content.titulo2;
        document.getElementById('tit3').innerText = content.titulo3;

        for( let carrera in content.ofertaAcademica[0] ){

            let lista1 = document.getElementById('bloque1');

            lista1.insertAdjacentHTML('beforeend', `<li>${carrera}</li>`);
        }

        for( let carrera in content.ofertaAcademica[1] ){

            let lista2 = document.getElementById('bloque2');

            lista2.insertAdjacentHTML('beforeend', `<li>${carrera}</li>`);
        }

    });

};

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

        if (!value) throw alerta(id);
        e.preventDefault();

        datos = { ...datos, [id]: value };

    });

    // obtener informacion de los selects..
    selects.forEach(({ id, value }) => {

        //if(!value) throw 'Todos los campos son obligatorios';
        if (value === '0') throw alerta(id);
        e.preventDefault();

        datos = { ...datos, [id]: value };

    });

    
    //console.log(datos);
    
    
    enviarDatos(datos);
    
    
});


const enviarDatos = async ( datos ) => {
    
    await peticiones.then(module => {
        const respuesta = module.guardarDatos(datos);
        
        respuesta.then( respuesta => {

            const { FolioCRM } = respuesta;

            if(!FolioCRM) throw 'No se pudo guardar los datos';
            console.log(FolioCRM);

        });
    });

}

/**
 * funcion de alerta de error o campos vacios
 */

const alerta = ( datoVacio ) => {

    Swal.then( module =>{

        const alerta = module.default;
        alerta.fire({
            title: 'Error',
            icon: 'error',
            text: `El campo ${datoVacio} es obligatorio`,
            confirmButtonColor: '#004b93',
        });
        return false;

    });





}