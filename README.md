## Tabla de contenido
1. [Info General](#Tabla-de-contenido)
2. [Tecnologias](#Tecnologias-)
3. [Instalacion](#Instalación-)
4. [Ejecucion de la API](#Ejecutando-la-API-)
5. [Despliegue](#Despliegue-)


## Comenzando 🚀

_Solo esta desplegado el Backend el front esta en el repositorio:_
* [Frontend-trabook](https://github.com/rquintg/frontend-trabook)

En la API se implemento todos metodos: GET, POST, PATCH, DELETE, y contiene las imagenes para el front

Mira **Instalacion** para conocer como desplegar la API.

### Screenshot
<p align="center">
<img src="https://www.dailyupblog.com/wp-content/uploads/node_express.jpg" style="width:550px !important; height:300px !important" alt="node express"></a>
</p>


## Tecnologias 📋
***
A list of technologies used within the project:
* [node](https://nodejs.org): Version 18.17.1



## Instalación 🔧
***

```
$ git clone [https://github.com/rquintg/backend-trabook.git]
$ cd ../path/to/the/file
$ npm install
```
Tener presente que se debe crear la base de datos en MYSQL y en la ruta ./db/database.sql se encuentra el script para crear la base de datos y las tablas

## Ejecutando la API 🚀

Correr en modo Desarrollo: ```$ npm run dev```

Correr en modo Produccion ```$ npm run start```

## Despliegue 📦

La API usa variables de entorno configurados en un archivo .env la cual se requiere implementar para su  funcionamiento

```
PORT=Puerto de la API
DB_PORT= Puerto de la base de datos
DB_HOST= localhost
DB_USER= usuario de la base de datos
DB_PASSWORD= usuario de la base de datos
DB_NAME= nombre de la base de datos
```








