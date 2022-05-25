# Proyecto Registro prospectos

Proyecto de registro de prospectos por cambio de proveedor de internet.

Se pretende crear un formulario que nos ayude a guardar los registro de los prospectos, mientras se hace la migraciónd e servicios de internet.

### ComponetesJS

Aca se ubica toda la logica del proyecto, `funciones`, `respuestas`, `variables` etc.

### PeticionesJS
aca se ubica la petición fetch con `async functions` hacia el **Backend** en PHP, hay peticiones `POST` con su respectivo `return` de la respuesta.
Se construye una `const 'nombre de la function'= async()=>{}` para cada una de las peticiones.

### Oferta UNIMEX.
Archivo JS que contine un `object{}` de toda la oferta academica UNIMEX, este objeto es consumido para obtener el listado de carreras dependiendo el plantel, periodo, y nivel seleccionado.

## BackEnd

Desarrollado con `PHP`, contenido en el repo `php/`, el backend esta dividido en dos archivos
- Peticiones: obteniene el valor por `GET`, para determinar que `function();` ejecutar.
Después, obtenemos el `http Request method` para la peticion `POST` y `OPTIONS`, si alguno de estos casos no se cumple retornamos un error.
Recibimos los datos que estan contenidos en un objeto, y los pasamos a un `array()`, el cual ya contiene los datos que seran enviados al `Service`.
- Service: contiene una `abstract class` en donde se declaran las propiedades privadas para la conexion a la DB.
`class Registro{}` contiene la `public function(){}` para agregar al prospecto, esta a su vez ejecuta la sentencia `sql` ya con los datos y values correspondientes.

># Estos son los pasos para construir el proyecto.
>
>## Notas:
>
>### Recuerda revisar los updates de los modulos de node...
>
>#### check updates
>```
>npm outdated
>```
>
>#### install check updates
>Si esto ya está instalado globalmente, ya no es necesario
>```
>npm install -g npm_check_updates
>```
>Despues procedes a hacer el updates ``` ncu -u ```
>#### Reconstruye los modulos de node o has el update si ya los tenias.
>A veces es mejor el ```npm install```
>
>```
>npm update or npm install
>``` 
>
>Y para construir el build dev, recueren:
>```
>npm run start
>```
>para prod 
>```
>npm run build:prod
>```
>Dev server:
>```
>npm run start
>```