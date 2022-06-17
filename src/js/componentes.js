/**
 * logica del proyecto
 */
const peticiones      = import( /* webpackChunkName: "peticiones" */ './services/peticiones'),
      Swal            = import(/*webpackPrefetch: true*/ 'sweetalert2'),
      oferta          = import( /* webpackChunkName: "oferta" */ './oferta-unimex'),
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
    
});

let [plantel, nivel, periodo] = selects;

[plantel, nivel, periodo].forEach(select => {

    select.addEventListener('change', (event) => {
    
        if( selectPlanteles.value === '0' || selectNiveles.value === '0' || selectPeriodos.value === '0' ) { 
            //console.log(' debes seleccionar los demas campos');
            //selectCarrera.innerHTML = '<option value="0">Revisa  plantel, nivel y periodo</option>';
            selectCarrera.setAttribute('disabled', true)
        }else{
            selectCarrera.removeAttribute('disabled');
            //console.log(selectPlanteles.value, selectNiveles.value, selectPeriodos.value);
            selectCarrera.innerHTML = '<option value="0">Selecciona una carrera</option>';
            agregaCarreraSelect(selectPlanteles.value, selectNiveles.value, selectPeriodos.value);
        }
    });
});

const agregaCarreraSelect = async( idPlantel, idNivel, idPeriodo) => {

    await oferta.then(module => {
    
        const contenido = module.obtenerOfertaAcademica(idPlantel, idNivel, idPeriodo);

        for(let cont in Object.keys(contenido)){

            idP = Object.keys(contenido)[cont];
            idC = Object.values(contenido)[cont];
            selectCarrera.insertAdjacentHTML('beforeend', `<option value="${idP}">${idC}</option>`);
        }
    });

};
/**
 * 
 * logica del envio de informacion
 * 
 */
boton.addEventListener('click', (e) => {

    e.preventDefault();
    // obtener informacion de los inputs..
    inputs.forEach(({ id, value }) => {

        textReg = new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/);
        numReg = new RegExp(/^[0-9]*$/);

        if (!value) throw alerta(id);
        if(value.trim() === '') throw alerta(id);
        if(id === 'nombre' && !textReg.test(value)) throw mensajeError(id);
        if(id === 'apaterno' && !textReg.test(value)) throw mensajeError(id);
        if(id === 'amaterno' && !textReg.test(value)) throw mensajeError(id);
        if(id === 'telefono' && !numReg.test(value)) throw mensajeError(id);
        if(id === 'celular' && !numReg.test(value)) throw mensajeError(id);
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

    enviarDatos(datos);

});


const enviarDatos = async ( datos ) => {

    console.log(`Estos son tus datos que se envian al backend: ${datos}`);
    
    Swal.then( module => {

        const alerta = module.default;
        alerta.fire({
            title: 'Registro Exitoso',
            icon: 'success',
            text: 'Revisa la consola para ver tus datos',
            confirmButtonColor: '#f8981d',
        }).then( ( result ) => {
            if(result.isConfirmed){
                
                window.location.href = './';
            }
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

const mensajeError = ( inp ) => {

    Swal.then( module =>{

        const alerta = module.default;
        alerta.fire({
            title: 'Error',
            icon: 'error',
            text: `El campo ${inp} no tiene un formato válido.`,
            confirmButtonColor: '#004b93',
        });
        return false;

    });

}