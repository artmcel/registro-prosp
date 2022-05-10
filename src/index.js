/**
 * main pricipal del proyecto, este es el que se carga en el index.html
 */

//import styles
import './styles.css';
//import bootsrap si lo necesitas
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/componentes.js';
 
 //cargadinamica ejemplo:
 //const mostrarMensaje = () => import( /* webpackChunkName: "peticiones" */ './services/peticiones' );

// carga dinamica de modulo logo, silo necesitas..
/*
import( './js/componentes' ).then( module =>{

    const load = module.getCookie();
    load();
});
*/

/**
 * importamos el modulo de forma simple para que no ejecute como funcion, sino hasta que sea llamado en el componentes.js
 * 
 */
import( /* webpackChunkName: "componentes" */ './js/componentes' );