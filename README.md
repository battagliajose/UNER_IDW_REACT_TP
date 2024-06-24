
<img src="https://secretariaextension.uner.edu.ar/wp-content/uploads/2021/04/logo-original-maschico.png" alt="">
<h1>Tecnicatura Universitaria en Desarrollo Web</h1>
<h2>Trabajo práctico de Introducción al desarrollo WEB</h2>
<h3>Segunda Entrega</h3>

<h3>Integrantes:</h2>
<ul>
    <li>Luis Sanchez</li>
    <li>José Battaglia</li>
    <li>Cristian Seltenreich</li>
</ul>

<h3>Como trabajamos el proyecto:</h2>
<p>Realizamos la migración de todas las páginas y secciones a componentes de React y realizamos un CRUD para Tipo de Alojamientos</p>
<p>Se agregó la sección Admin para el CRUD y utilizamos modales para que el usuario ingrese los datos.</p>
<p>Usamos Json para las tarjetas de los alojamientos y simular la parte aún no implementada de la API</p>
<p>Trabajamos en la rama dev y devModificar para avanzar en el proyecto y al final hicimos merge a la rama main</p>

<h3>Como ejecutar el servidor:</h2>
<p>npm install</p>
<p>npm start</p>

<h3>API:</h2>
<p>La Api no está incluida en el repositorio, se espera que esté corriendo en el puerto 3001 para las consultas.</p>
<h3>Componente API<h3>
<p>
    Para mayor limpieza y compresion del codigo se ha creado un archivo llamado API.js que se importa en todos los componentes en los que se necesita
    interactuar con la api. Se movio toda la logica de conexion a este archivo y desde los componentes solo nos encargamos de usar los metodos y recibir lo
    retornado pasando por parametros los endpoint expuestos.
</p>
<h3>Diagrama de Interacciones</h3>
<p> A continuacion mostramos como usamos los componentes para reutilizarlos</p>
<img src="public/diagrama-de-componentes.jpeg">Diagrama<im/g>
