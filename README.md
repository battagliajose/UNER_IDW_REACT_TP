<img src="https://secretariaextension.uner.edu.ar/wp-content/uploads/2021/04/logo-original-maschico.png" alt="">

# Tecnicatura Universitaria en Desarrollo Web

## Trabajo Práctico de Introducción al Desarrollo WEB
    
### Entrega Final
    
### Integrantes:
- Luis Sanchez
- José Battaglia
- Cristian Seltenreich

## Link al video de presentación:
[Video en Youtube](https://www.youtube.com/watch?v=7AiEdkykkW0)

## Descripción del Proyecto

Este proyecto consistió en la migración de todas las páginas y secciones a componentes de React, además de la implementación de un CRUD para Alojamientos, Servicios y Tipos de Alojamientos. A continuación, se detallan los principales aspectos y funcionalidades desarrolladas:

### Funcionalidades:
- **Migración a React:** Todas las páginas y secciones fueron migradas a componentes de React.
- **CRUD de Alojamientos, Servicios y Tipos de Alojamientos:** Se creó una sección de administración para gestionar estos elementos utilizando modales para la entrada de datos.
- **Carga de Imágenes:** Las imágenes se cargan desde la edición de Alojamientos y se suben a ImgBB. No se implementó la eliminación de imágenes en el hosting debido al requerimiento de almacenar una DeleteURL al momento de subir la imagen, no pudiendo lograrse con la implementación actual de la API.
- **Generación de Tarjetas:** Las tarjetas de los alojamientos se generan a partir de los datos cargados en la base de datos a través de los CRUDs correspondientes.
- **Formulario de Contacto:** El formulario de contacto utiliza el servicio gratuito de emailjs.com para enviar el mensaje del usuario a nuestro mail.
- **Ramas de Trabajo:** Trabajamos principalmente en la rama `devAdmin` y al final hicimos merge a la rama `main`.

### Reutilización de Componentes:
- **Tablas Genéricas:** Se creó una tabla genérica reutilizable en todos los CRUDs.
- **Modales Reutilizables:** Los modales se utilizan tanto para la creación como para la edición de los ítems.

## Ejecución del Proyecto

Se incluye un **dump de la base de datos** para importar antes de correr el servidor.

Para ejecutar el servidor, ejecute estos comandos:

``` bash
npm install
npm start
```

## API:
La Api no está incluida en el repositorio, se espera que esté corriendo en el puerto 3001 para las consultas.

## Componente API
Para mayor limpieza y compresion del codigo se ha creado un archivo llamado API.js que se importa en todos los componentes en los que se necesita
interactuar con la api.
Se movio toda la logica de conexion a este archivo y desde los componentes solo nos encargamos de usar los metodos y recibir lo
retornado pasando por parametros los endpoint expuestos.

## Esquema de cards de alojamientos
Presentamos un detalle de la información que muestran los cards de los alojamientos
<img src="public/IDW - Esquema Cards Aloj.png">Esquema</img>

## Diagrama de Interacciones
A continuacion mostramos un diagrama del CRUD Alojamientos que resulto ser el más complejo
<img src="public/IDW - Diagrama CRUD Aloj.png">Diagrama</img>



