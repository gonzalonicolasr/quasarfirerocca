
# Operacion Quasar

Este es un desafio propuesto por mercadolibre donde hay que crear una api, respetando los pedidos y puntos en el desafio. 
el desafio esta en la carpeta /docs

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._



### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
nodejs
npm
Postman u alguna alternativa para hacer peticiones
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_1r paso_ 
```
abrir la consola
git clone https://github.com/gonzalonicolasr/quasarfirerocca

```
```
una vez clonado, abrimos la terminal
Cd "nos localizamos en la carpeta del proyecto"
Ejemplo: cd C:/ProyectoQuasar/
npm install //instalamos todas las dependencias y las actualizamos en caso de ser necesario
npm start //iniciamos el proyecto en modo produccion
npm run dev // iniciamos el proyecto en modo desarrollo y se autodeploya con solo guardar los cambios
```


_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

API Productiva
```
https://quasarfirerocca.herokuapp.com/
```
### Paso a paso - Pruebas 🔩

Para consumir el servicio de la Prueba 1, se debe acceder al servicio en la URL: https://quasarfirerocca.herokuapp.com/api/v1/topsecret y en un caso ideal se debe enviar la siguiente información con una petición POST bajo el formato JSON:

```
{
  "satellites": [
    {
      "name": "kenobi",
      "distance": 100.0,
      "message": ["","este","es","un","mensaje"]
    },
    {
      "name": "skywalker",
      "distance": 115.5,
      "message": ["este","","un","mensaje"]
    },
    {
      "name": "sato",
      "distance": 142.7,
      "message": ["","","es","","mensaje"]
    }
  ]
}
```
la aplicación devolverá una respuesta similar a la que se muestra a continuación, si son correctos:

```
RESPONSE CODE: 200
{
    "position": {
        "x": -487.546875,
        "y": 1575.15625
    },
    "message": "este este es un mensaje"
}
```
Cuando no se puede reconstruir el mensaje ni calcular la posicion de la nave, se devuelve un RESPONSE CODE: 404
```
{
  "satelliteList": [
    {
      "name": "kenobi",
      "distance":   84,
      "message": [
        "este","","","mensaje",""
      ]
    },
    {
      "name": "skywalker",
      "distance":   114,
      "message": [
        "","es","","",""
      ]
    },

    {
      "name": "sato",
      "distance":   120,
      "message": [
        "este","","un","",""
      ]
    },


  ]
}
```
### Pruebas endpoint POST TopSecretSplit ⌨️


 se realiza un POST -> https://quasarfirerocca.herokuapp.com/api/v1/topsecret_split/{satellite_name}
Satelites en servicio: kenobi, skywalker, sato, se deben cargar los 3

```
Ejemplo: Kenobi
{
        "distance": 100,
        "message": [
            "este",
            "",
            "",
            "mensaje",
            ""
        ]
    }
```
Respuesta:
```
{
    "estado": "todo fue procesado!",
    "satellite": {
        "name": "kenobi",
        "distance": 100,
        "message": [
            "este",
            "",
            "",
            "mensaje",
            ""
        ]
    }
}
```
### Pruebas con GET TopSecretSplit⌨️

se realiza GET -> https://quasarfirerocca.herokuapp.com/api/v1/topsecret_split/
deben estar cargados los 3 satelites para evitar el error a la hora de calcular
```
Respuesta: 
{
    "position": {
        "x": -487.28591250000005,
        "y": 1557.0142250000004
    },
    "message": "este es un mensaje secreto"
}
```
## Despliegue 📦

Deployado en heroku, conectado al repo con git para autodeployar.

## Construido con 🛠️



* [NodeJs](https://nodejs.org/es/) - El framework utilizado para crear las api.
* [ExpressJs](https://expressjs.com/es/) usado para crear los enrutamientos y validaciones
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [Nodemon](https://github.com/remy/nodemon) - Para autodeployar cambiios en Modo desarrollo
* [Postman](https://www.postman.com) - Usaro para hacer las pruebas a los endpoints



## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)



## Autores ✒️


* **Gonzalo Nicolas Rocca** - *Trabajo y Documentación* - [GonzaloRocca](https://github.com/gonzalonicolasr)


## Expresiones de Gratitud 🎁

* Bueno me hubiera gustado agregarle mas cosas pero no iba a llegar xD 📢
* Un consejo: mirenlo tomando una cerveza o cafe 🤓, broma!
* Muchas gracias chicos de verdad por su tiempo 😊.




---
⌨️ con ❤️ por [GonzaloRocca](hhttps://www.linkedin.com/in/gonnicolas/ )😊
