# Proyecto Landings SideTrack

Proyecto de landings pages con la agencia **SideTrack**

Este proyecto consta de varias landings page, este seria el cuerpo de todas esas landings, toda la logica de los fomularios, peticiones, validaciones, vista, asi como el formulario mismo esta aqui.

La idea de desarrollarlo con **WebPack** es que cada bulding se haga dependiendo las necesidades.

## Ladings

Se construiran las siguientes landings:

Primera etapa.
--------------
- Por plantel: izcalli, satelite, polanco, veracruz y veracruz SUA.

Segunda Etapa.
--------------
- Una landing por la oferta academica que tenemos.

### ComponetesJS

Aca se ubica toda la logica del proyecto, `funciones`, `respuestas`, `variables` etc.

### PeticionesJS
aca se ubican todas las peticiones fetch con `async functions` hacia el **Backend** en PHP, hay peticiones `GET` y `POST` con su respectivo `return` de las respuestas.
Se construye una `const 'nombre de la function'= async()=>{}` para cada una de las peticiones.


Crecimiento
-----------
Dependera de las resultados obtenidos durante la primera etapa.

# Estos son los pasos para construir el proyecto.

## Notas:

### Recuerda revisar los updates de los modulos de node...

#### check updates
```
npm outdated
```

#### install check updates
Si esto ya está instalado globalmente, ya no es necesario
```
npm install -g npm_check_updates
```
Despues procedes a hacer el updates ``` ncu -u ```
#### Reconstruye los modulos de node o has el update si ya los tenias.
A veces es mejor el ```npm install```

```
npm update or npm install
``` 

Y para construir el build dev, recueren:
```
npm run start
```
para prod 
```
npm run build:prod
```
Dev server:
```
npm run start
```