/**
 * logica del proyecto
 */

const boton = document.getElementById('boton'),
      inputs = document.querySelectorAll('input'),
      selects = document.querySelectorAll('select');

let datos = {};

/**
 * 
 * obtenemos las cookies de las url y las guardamos en una variable
 * 
 */

window.addEventListener('load', ()=>{
    const url = new URLSearchParams(window.location.search);
          cookies = {};
    
    url.forEach( (value, key) => {
        

        document.cookie = `${key}=${value};expires=Thu, 31 Dec 2022 12:00:00 UTC;`;

        datos = { ...datos, [key]: value };	

    });
    //console.log(cookies);
});

/**
 * 
 * logica del envio de informacion
 * 
 */
boton.addEventListener('click', (e)=>{

    e.preventDefault();

    //let datos = {};
    
    inputs.forEach( ({ id, value }) => {

        if(!value) throw 'Todos los campos son obligatorios';

        datos = { ...datos, [id]: value };
        
    });

    selects.forEach( ({ id, value }) => {

        //if(!value) throw 'Todos los campos son obligatorios';

        datos = { ...datos, [id]: value } ;

    });

    console.log(datos);



});

