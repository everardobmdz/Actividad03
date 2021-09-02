const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

let preguntas = ['¿Qué es JavaScript','¿Qué hace JavaScript','¿Qué es el DOM?','¿Qué es un APIs Web?','Ejemplos de APIs web',
'¿Qué es lo que JavaScript hace en tu página web?','Ejemplo de cómo añadir JavaScript a tu página web','¿Cuáles son las dos maneras de añadir código JavaScript a tu sitio web?',
'¿Cómo se comenta el código en JavaScript?','¿Cómo se declara una variable y cuáles son sus principales características?',
'¿Cómo se declara una condición y cuáles son sus principales características?','¿Cómo se declara bucle y cuáles son sus principales características?',
'¿Cómo se declara una función y cuáles son sus principales características?','¿Cómo se declara un objeto y cuáles son sus principales características?',
'¿Cómo se puede leer un evento con JavaScript?','¿Qué eventos podemos leer con JavaScript menciónales y descríbalos?','Ejemplo donde JavaScript sea ejecutado del lado del cliente',
'Ejemplo donde JavaScript sea ejecutado del lado del servidor','¿Qué tipo de errores podemos encontrar en JavaScript?',
'¿De qué manera podemos ver los errores de JavaScript en el navegador?','¿Cómo puedo convertir Strings a Objetos?','¿Cómo se usan los arreglos en JavaScript?',
'¿Cuántas versiones de JavaScript han existido menciona sus principales características?','¿Cuántas versiones de ECMAScript han existido menciona sus principales características?',
'¿Qué es Firefox Developer Edition?','¿Cuáles son las principales funciones y características de Firefox Developer Edition?','¿Qué es WebGL?',
'¿Qué APIs existen para APIs for game development?','¿Qué es un webSocket?','¿Cómo gestiona la memora JavaScript?'];



let respuestas = [`JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con 
funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web,
 y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un 
 lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación 
 orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).`,
 `El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te 
 permiten hacer cosas como:
 <ul>
     <li>Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que ingreses un nuevo nombre y 
         luego almacenamos ese nombre en una variable llamada name.
     </li>
     <li>Operaciones sobre fragmentos de texto (conocidas como "cadenas" (strings) en programación). En el ejemplo anterior, 
         tomamos la cadena "Player1:" y la unimos a la variable name para crear la etiqueta de texto completa, p. ej. ''Player1: Chris".
     </li>
     
     <li>Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento click en nuestro 
         ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto.
     </li>
     <li>
         ¡Y mucho más!
     </li>
 
 </ul>`,
 `El modelo de objeto de documento (DOM) es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.
 Una página web es un documento. Éste documento puede exhibirse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento. El DOM es una representación completamente orientada al objeto de la página web y puede ser modificado con un lenguaje de script como JavaScript.`,
 `Las denominadas interfaces de programación de aplicaciones (API) te proporcionan superpoderes adicionales para utilizar en tu código JavaScript.
 Las API son conjuntos de bloques de construcción de código listos para usar que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles prefabricados para la construcción de viviendas — es mucho más fácil tomar paneles precortados y atornillarlos para hacer una estantería que elaborar el diseño tú mismo, que ir y encontrar la madera correcta, cortar todos los paneles del tamaño y la forma correctos, buscar los tornillos del tamaño correcto y luego júntalos para hacer una estantería.`,
 `Las APIs del navegador están integradas en tu navegador web y pueden exponer datos del entorno informático circundante o realizar tareas complejas y útiles. Por ejemplo:
 <ul>
 <li>La API del DOM (Document Object Model) te permite manipular HTML y CSS, crear, eliminar y cambiar el HTML, aplicar dinámicamente nuevos estilos a tu página, etc. Cada vez que ves aparecer una ventana emergente en una página, o se muestra algún nuevo contenido (como vimos anteriormente en nuestra sencilla demostración), por ejemplo, ese es el DOM en acción.</li>
 <li>La API de Geolocalización recupera información geográfica. Así es como Google Maps puede encontrar tu ubicación y trazarla en un mapa.</li>
 <li>Las APIs Canvas y WebGL te permiten crear gráficos animados en 2D y 3D. Las personas están haciendo cosas increíbles con estas tecnologías web — consulta Experimentos de Chrome y webglsamples.</li>
 <li>APIs de audio y video como HTMLMediaElement y WebRTC te permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de tu cámara web y mostrarlo en la computadora de otra persona (prueba nuestra sencilla demostración instantánea para hacerte una idea).</li>
 <li>La API de Twitter te permite hacer cosas como mostrar tus últimos tweets en tu sitio web.</li>
 </ul>`,
 `Recapitulemos brevemente sobre la historia de lo que sucede cuando cargas una página web en un navegador. Cuando cargas una página web en tu navegador, estás ejecutando tu código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y genera un producto (la página web).

 Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API del modelo de objetos del documento. Ten en cuenta que el código de tus documentos web generalmente se cargan y ejecutan en el orden en que aparece en la página. Si JavaScript se carga e intenta ejecutarse antes de que se hayan cargado el HTML y el CSS al que afecta, pueden producirse errores.`,
 `JavaScript se aplica a tu página HTML de manera similar a CSS. Mientras que CSS usa elementos link para aplicar hojas de estilo externas y elementos style para aplicar hojas de estilo internas a HTML, JavaScript solo necesita un amigo en el mundo de HTML: el elemento {htmlelement("script")}}. Aprendamos cómo funciona esto.`,
 `<h5>JavaScript Interno</h5>
    <ol><li>En primer lugar, haz una copia local de nuestro archivo de ejemplo apply-javascript.html. Guárdalo en un directorio en algún lugar accesible.</li>
        <li>Abre el archivo en tu navegador web y en tu editor de texto. Verás que el HTML crea una página web simple que contiene un botón en el que se puede hacer clic.</li>
        <li>A continuación, ve a tu editor de texto y agrega lo siguiente en tu head, justo antes de tu etiqueta de cierre head: </li>
        <code>
        < script >
            Aquí va el código Javascript
        < / script >
        </code>
        <li>Ahora agregaremos algo de JavaScript dentro de nuestro elemento < script > para que la página haga algo más interesante — agrega el siguiente código justo debajo de la línea "// El código JavaScript va aquí": </li>
        <code>
        document.addEventListener("DOMContentLoaded", function() {<br>
            function createParagraph() {<br>
              let para = document.createElement('p');<br>
              para.textContent = 'You clicked the button!';<br>
              document.body.appendChild(para);<br>
            }<br>
          
            const buttons = document.querySelectorAll('button');<br>
          
            for(let i = 0; i < buttons.length ; i++) {<br>
              buttons[i].addEventListener('click', createParagraph);<br>
            }<br>
          });<br>
        </code>
        <li>Guarda tu archivo y actualiza el navegador — ahora deberías ver que cuando haces clic en el botón, se genera un nuevo párrafo y se coloca debajo.</li>
        </ol>
        <h5>JavaScript Externo</h5>
        Esto funciona muy bien, pero ¿y si quisiéramos poner nuestro JavaScript en un archivo externo? Exploremos esto ahora.
        <ol>
        <li>Primero, crea un nuevo archivo en el mismo directorio que tu archivo HTML del ejemplo. Como nombre ponle script.js; asegúrate de que el nombre tenga la extensión .js, ya que así es como se reconoce como JavaScript.</li>
        <li>Reemplaza tu elemento < script > actual con lo siguiente:</li>
        <code>
        < script src="script.js" defer> < / script >
        </code>
        <li>Dentro de script.js, agrega el siguiente script: </li>
        <code>
        function createParagraph() {
            let para = document.createElement('p');<br>
            para.textContent = 'You clicked the button!';<br>
            document.body.appendChild(para);<br>
          }<br>
          
          const buttons = document.querySelectorAll('button');<br>
          
          for(let i = 0; i < buttons.length ; i++) {<br>
            buttons[i].addEventListener('click', createParagraph);<br>
          }
        </code>
        </ol>
        `,
 `Al igual que con HTML y CSS, es posible escribir comentarios en tu código JavaScript que el navegador ignorará y que existen simplemente para proporcionar instrucciones a tus compañeros desarrolladores sobre cómo funciona el código (y a ti, si regresas a tu código después de seis meses y no puedes recordar lo que hiciste). Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:
 <ul>
 <li>Un comentario de una sola línea se escribe después de una doble barra inclinada (//), p. ej. </li>
 <code>
 //soy un comentario
 </code>
 <li>Se escribe un comentario de varias líneas entre las cadenas /* y */, p. ej. </li>
 <code>
 /*<br>
  Yo también soy<br>
  un comentario<br>
*/<br>
 </code>
 </ul>`,
 `Para usar una variable, primero debes crearla — precisamente, a esto lo llamamos declarar la variable. Para hacerlo, escribimos la palabra clave var o let seguida del nombre con el que deseas llamar a tu variable:
 <br><code>let myName;<br>
 let myAge;<br></code>
 Puedes probar si estos valores existen ahora en el entorno de ejecución escribiendo solo el nombre de la variable, p. ej.<br><br>
<code>
myName;<br>
myAge;<br><br></code>

Actualmente no tienen ningún valor; son contenedores vacíos. Cuando ingreses los nombres de las variables, deberías obtener devuelto un valor undefined. Si no existen, recibirás un mensaje de error; intenta escribir<br>
<code>
scoobyDoo;<br><br></code>

Nota: No confundas una variable que existe pero no tiene un valor definido, con una variable que no existe en absoluto — son cosas muy diferentes. En la analogía de cajas que viste arriba, no existir significaría que no hay una caja (variable) para guardar un valor. Ningún valor definido significaría que HAY una caja, pero no tiene ningún valor dentro de ella.<br>

 `,
 `Las condicionales son estructuras de código que permiten comprobar si una expresión devuelve true o no, y después ejecuta un código diferente dependiendo del resultado. La forma de condicional más común es la llamada if... else. Entonces, por ejemplo:
 <br><code>let helado = 'chocolate';<br>
 if (helado === 'chocolate') {<br>
   alert('¡Sí, amo el helado de chocolate!');<br>
 } else {<br>
   alert('Awwww, pero mi favorito es el de chocolate...');<br>
 }</code><br>
 La expresión dentro de if (... ) es el criterio — este usa al operador de identidad (descrito arriba) para comparar la variable helado con la cadena chocolate para ver si las dos son iguales. Si esta comparación devuelve true, el primer bloque de código se ejecuta. Si no, ese código se omite y se ejecuta el segundo bloque de código después de la declaración else.
 
 `,
 `Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente<br>
 Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!).<br>

Los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminación del bucle. Hay varias situaciones que son fácilmente atendidas por un tipo de bucle que por otros.<br>
<h6>Declaración for</h6>
Un ciclo for se repite hasta que una condición especificada se evalúe como false. El bucle for de JavaScript es similar al bucle for de Java y C.<br>

Una declaración for tiene el siguiente aspecto:<br>
<code>for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])<br>
instrucción</code><br>
`,
 `Las funciones son una manera de encapsular una funcionalidad que quieres reutilizar, de manera que puedes llamar esa función con un solo nombre, y no tendrás que escribir el código entero cada vez que la utilices. Ya has visto algunas funciones más arriba, por ejemplo:<br>
 <code>let nombreDeLaVariable = document.querySelector('h1');</code><br>`,
 `Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.<br>
 Como todas las variables de JavaScript, tanto el nombre del objeto (que puede ser una variable normal) como el nombre de la propiedad son sensibles a mayúsculas y minúsculas. Puedes definir propiedades asignándoles un valor. Por ejemplo, vamos a crear un objeto llamado myCar y le vamos a asignar propiedades denominadas make, model, y year de la siguiente manera:<br>
 <code>var myCar = new Object();<br>
 myCar.make = 'Ford';<br>
 myCar.model = 'Mustang';<br>
 myCar.year = 1969;<br>
 </code><br>`,
 `Para crear una interacción real en tu sitio web, debes usar eventos. Estos son unas estructuras de código que captan lo que sucede en el navegador, y permite que en respuesta a las acciones que suceden se ejecute un código. El ejemplo más obvio es un clic (click event), que se activa al hacer clic sobre algo. Para demostrar esto, prueba ingresando lo siguiente en tu consola, luego da clic sobre la página actual:<br>
 <code>document.querySelector('html').onclick = function() {<br>
    alert('¡Ouch! ¡Deja de pincharme!');<br>
}<br>
</code>`,
 `<table>
 <thead>
 <tr>
   <th>Evento</th>
   <th>Descripción</th>
 </tr>
 </thead>
 <tbody>
 <tr>
   <td><code>onblur</code></td>
   <td>Un elemento pierde el foco</td>
 </tr>
 <tr>
   <td><code>onchange</code></td>
   <td>Un elemento ha sido modificado</td>
 </tr>
 <tr>
   <td><code>onclick</code></td>
   <td>Pulsar y soltar el ratón</td>
 </tr>
 <tr>
   <td><code>ondblclick</code></td>
   <td>Pulsar dos veces seguidas con el ratón</td>
 </tr>
 <tr>
   <td><code>onfocus</code></td>
   <td>Un elemento obtiene el foco</td>
 </tr>
 <tr>
   <td><code>onkeydown</code></td>
   <td>Pulsar una tecla y no soltarla</td>
 </tr>
 <tr>
   <td><code>onkeypress</code></td>
   <td>Pulsar una tecla</td>
 </tr>
 <tr>
   <td><code>onkeyup</code></td>
   <td>Soltar una tecla pulsada</td>
 </tr>
 <tr>
   <td><code>onload</code></td>
   <td>Página cargada completamente</td>
 </tr>
 <tr>
   <td><code>onmousedown</code></td>
   <td>Pulsar un botón del ratón y no soltarlo</td>
 </tr>
 <tr>
   <td><code>onmousemove</code></td>
   <td>Mover el ratón</td>
 </tr>
 <tr>
   <td><code>onmouseout</code></td>
   <td>El ratón "sale" del elemento</td>
 </tr>
 <tr>
   <td><code>onmouseover</code></td>
   <td>El ratón "entra" en el elemento</td>
 </tr>
 <tr>
   <td><code>onmouseup</code></td>
   <td>Soltar el botón del ratón</td>
 </tr>
 <tr>
   <td><code>onreset</code></td>
   <td>Inicializar el formulario</td>
 </tr>
 <tr>
   <td><code>onresize</code></td>
   <td>Modificar el tamaño de la ventana</td>
 </tr>
 <tr>
   <td><code>onselect</code></td>
   <td>Seleccionar un texto</td>
 </tr>
 <tr>
   <td><code>onsubmit</code></td>
   <td>Enviar el formulario</td>
 </tr>
 <tr>
   <td><code>onunload</code></td>
   <td>Se abandona la página, por ejemplo al cerrar el navegador</td>
 </tr>
 </tbody>
 </table>`,
 `JavaScript es un lenguaje de programación utilizado para crear 
 pequeños  programitas  encargados  de  realizar  acciones  dentro  del 
 ámbito  de  una  página  web.  Se  trata  de  un  lenguaje  de  programación 
 del lado del cliente, porque es el navegador el que soporta la carga de 
 procesamiento.  Su  uso  se  basa  fundamentalmente  en  la  creación  de 
 efectos  especiales  en  las  páginas  y  la  definición  de  interactividades 
 con el usuario.
 <code>var respuesta = confirm("Aceptame o rechazame")<br> 
 alert ("Has pulsado: " + respuesta)  </code><br>`,
 `Netscape introdujo una implementación de script del lado del servidor con Netscape Enterprise Server, lanzada en diciembre de 1994 (poco después del lanzamiento de JavaScript para navegadores web).13​14​ A partir de mediados de la década de los 2000, ha habido una proliferación de implementaciones de JavaScript para el lado servidor. Node.js es uno de los notables ejemplos de JavaScript en el lado del servidor, siendo usado en proyectos importantes.<br>
 <code>
 server.js<br>
const http = require('http');<br>

const hostname = '127.0.0.1';<br>
const port = 3000;<br>

const server = http.createServer((req, res) => {<br>
  res.statusCode = 200;<br>
  res.setHeader('Content-Type', 'text/plain');<br>
  res.end('Hello World! Welcome to Node.js');<br>
});<br>

server.listen(port, hostname, () => {<br>
  console.log('Server running at http://hostname:port/');<br>
});<br>
 </code>`,
 `En general, cuando haces algo mal en el código, hay dos tipos principales de errores con los que te encontrarás:<br><br>

 Errores de sintaxis: estos son errores de ortografía en tu código que provocan que tu programa no se ejecute en absoluto, o que deje de funcionar a mitad del camino — por lo general, también te proporcionarán algunos mensajes de error. Normalmente no es tan difícil corregirlos, ¡siempre y cuando estés familiarizado con las herramientas adecuadas y sepas qué significan los mensajes de error!<br>
 Errores lógicos: Estos son errores en los que la sintaxis realmente es correcta pero el código no hace lo que pretendías, lo cual significa que el programa se ejecuta pero da resultados incorrectos. A menudo, estos son más difíciles de arreglar que los errores sintácticos, ya<br>
 <br><b>EvalError</b><br>
 Crea una instancia que representa un error que ocurre con respecto a la función global eval().<br>
 <b>InternalError</b><br>
 Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript. Por ejemplo: "demasiada recursividad".<br>
 <b>RangeError</b><br>
 Crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.<br>
 <b>ReferenceError</b><br>
 Crea una instancia que representa un error que ocurre cuando se quita la referencia a una referencia no válida.<br>
 <b>SyntaxError</b><br>
 Crea una instancia que representa un error de sintaxis.<br>
 <b>TypeError</b><br>
 Crea una instancia que representa un error que ocurre cuando una variable o parámetro no es de un tipo válido.<br>
<b>URIError</b><br>
 Crea una instancia que representa un error que ocurre cuando encodeURI() o decodeURI() pasan parámetros no válidos.<br>`,
 `Ve a la pestaña dónde tienes abierto tu archivo html y abre tu consola JavaScript. Deberías ver un mensaje de error`,
 `Si tenemos un string con un JSON lo podemos transformar en un objeto javaScript usando la función JSON.parse(json) que nos devolverá el objeto correspondiente a nuestro JSON.<br>
 <code><br>var jsonTexto = '{"color":"blanco","km":100000,"esNuevo":false,"rueda":{"marca":"desconocida","estado":"malo"}}';<br>
var coche = JSON.parse(jsonTexto);<br>
console.log(coche);<br>
// Resultado -> Object { color: "blanco", km: 100000, esNuevo: false, rueda: { marca: "desconocida", estado: "malo" } }<br></code>`,
 `<b>Crear un Array:</b> <br><code>let frutas = ["Manzana", "Banana"]<br><br>

 console.log(frutas.length)<br>
 // 2<br></code><br>
 <b>Acceder a un elemento Array mediante su indice<b><br>
 <code>let primero = frutas[0]<br>
 // Manzana<br><br>
 
 let ultimo = frutas[frutas.length - 1]<br>
 // Banana<br></code><br>
 <br><b>Recorrer un Array</b><br><br>
 <code>frutas.forEach(function(elemento, indice, array) {<br>
  console.log(elemento, indice);<br>
})<br>
// Manzana 0<br>
// Banana 1<br></code><br><br>
<b>Añadir un elemento al final del Array</b><br>
<code>let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final<br>
// ["Manzana", "Banana", "Naranja"]<br></code><br><br>
<b>Añadir un elemento al principio de un Array</b><br>
<code>let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio<br>
// ["Fresa" ,"Manzana", "Banana"]</code><br><br>
<b>Eliminar el primer elemento de un Array</b><br>
<code>let primero = frutas.shift() // Elimina "Fresa" del inicio<br>
// ["Manzana", "Banana"]<code><br><br>

 `,
 `<ul><li><b>Javascript 1:</b> nació con el Netscape 2.0 y soportaba gran cantidad de instrucciones y funciones, casi todas las que existen ahora ya se introdujeron en el primer estandar.</li><br>
 <li><b>Javascript 1.1:</b> Es la versión de Javascript que se diseñó con la llegada de los navegadores 3.0. Implementaba poco más que su anterior versión, como por ejemplo el tratamiento de imágenes dinámicamente y la creación de arrays.</li><br>
 <li><b>Javascript 1.2:</b> La versión de los navegadores 4.0. Esta tiene como desventaja que es un poco distinta en plataformas Microsoft y Netscape, ya que ambos navegadores crecieron de distinto modo y estaban en plena lucha por el mercado.</li><br>
 <li><b>Javascript 1.3:</b> Versión que implementan los navegadores 5.0. En esta versión se han limado algunas diferencias y asperezas entre los dos navegadores.</li><br>
 <li><b>Javascript 1.5:</b> Versión actual, en el momento de escribir estas líneas, que implementa Netscape 6.</li><br>
 <li>Por su parte, Microsoft también ha evolucionado hasta presentar su versión 5.5 de JScript (así llaman al javascript utilizado por los navegadores de Microsoft). </li><br>
 `,
 `<table>
 <thead>
 <tr>
   <th>Edición</th>
   <th>Fecha de publicación</th>
   <th>Cambios desde la edición anterior</th>
 </tr>
 </thead>
 <tbody>
 <tr>
   <td>1</td>
   <td>Junio de 1997</td>
   <td>Primera edición </td>
 </tr>
 <tr>
   <td>2</td>
   <td>Junio de 1998</td>
   <td>Cambios editoriales para mantener la especificación completa alineada con el estándar internacional ISO/IEC 16262 </td>
 </tr>
 <tr>
   <td>2</td>
   <td>Diciembre de 1999 </td>
   <td>Se agregaron expresiones regulares, mejor manejo de strings, nuevo control de declaraciones, manejo de excepciones con try/catch, definición más estricta de errores, formato para la salida numérica y otras mejoras. </td>
 </tr>
 <tr>
   <td>4</td>
   <td>Abandonado</td>
   <td>La cuarta edición fue abandonada debido a diferencias políticas respecto a la complejidad del lenguaje. Muchas características propuestas para la cuarta edición fueron completamente abandonadas; algunas fueron propuestas para la edición ECMAScript Harmony.</td>

 </tr>
 <tr>
   <td>5</td>
   <td>Diciembre de 2009 </td>
   <td>Agrega el modo estricto ("strict mode"), un subconjunto destinado a proporcionar una mejor comprobación de errores y evitar constructores propensos a errores. Aclara varias ambigüedades de la tercera edición, y afina el comportamiento de las implementaciones del "mundo real" que difieren consistentemente desde esa especificación. Agrega algunas nuevas características, como getters y setters, librería para el soporte de JSON, y una más completa reflexión sobre las propiedades de los objetos.</td>
 </tr>
 <tr>
   <td>5.1</td>
   <td>Junio de 2011</td>
   <td>Esta edición 5.1 de la ECMAScript Standard está completamente alineada con la tercera edición del estándar internacional ISO/IEC 16262:2011.</td>

 </tr>
 <tr>
   <td>6</td>
   <td>Junio de 2015</td>
   <td>La sexta edición agrega cambios significativos en la sintaxis para escribir aplicaciones complejas, incluyendo clases y módulos, definiéndolos sémanticamente en los mismos términos del modo estricto de la edición ECMAScript 5. Otras nuevas características incluyen iteradores for/of loops, generadores y generador de expresiones estilo Python, funciones de dirección, datos binarios, colecciones (mapas, sets, mapas débiles), y proxies (?metaprogramación para objetos virtuales y wrappers). Al ser la primera especificación “ECMAScript Harmony”, es también conocida como “ES6 Harmony”. </td>

 </tr>
 <tr>
   <td>7</td>
   <td>Junio de 2016</td>
   <td>La séptima edición fue una mera actualización de la versión 6. Incorpora el método Array.prototype.includes() y el operador exponencial (**). </td>
 </tr>
 <tr>
   <td>8</td>
   <td>Junio de 2017</td>
   <td>La 8ª edición, oficialmente conocida como ECMAScript 2017, fue finalizada en junio de 2017.[11] Incluye constructores async/await , los cuales funcionan usando generadores y promesas. </td>
   
 </tr>
 <tr>
   <td>9</td>
   <td>Junio de 2018 </td>
   <td>La 9.ª edición, oficialmente conocida como ECMAScript 2018, incluye operadores rest/spread para variables (tres puntos: ...identificador), iteracion asincronica, Promise.prototype.finally()</td>

 </tr>
 <tr>
   <td>10</td>
   <td>Enero de 2019 </td>
   <td>La 10.ª edición, oficialmente conocida como ECMAScript 2019, incorporó Array.flat(), Array.flatMap(), String.trimStart(), String.trimEnd(), errores opcionales en el bloque catch, Object.fromEntries(), Symbol.description</td>

 </tr>
 <tr>
   <td>11</td>
   <td>Junio 2020</td>
   <td></td>
 </tr>
 </tbody>
 </table>`,
 `
 Firefox Developer Edition es un Firefox modificado que está diseñado específicamente para desarrolladores web. También usa un perfil separado y luego regular, ejecutarlos uno al lado del otro es una opción. Eso significa que todos los complementos y configuraciones no estarán disponibles en FDE, pero puede usar Firefox Sync para obtener complementos y configuraciones en ambas versiones.`,
 `
<ul>
 <li><b>WebIDE:</b><br>

 le permite desarrollar, implementar y depurar aplicaciones web directamente en su navegador o en un dispositivo Firefox OS. Le permite crear una nueva aplicación de Firefox OS (que es solo una aplicación web) a partir de una plantilla, o abrir el código de una aplicación existente. Desde allí puede editar los archivos de la aplicación. Es solo un clic para ejecutar la aplicación en un simulador y otro más para depurarla con las herramientas del desarrollador. IDE web: YouTube
</li>
 <li><b>Valencia:</b><br>

 (anteriormente llamado Adaptador de herramientas de Firefox) le permite desarrollar y depurar su aplicación en múltiples navegadores y dispositivos conectando las herramientas de desarrollo de Firefox a otros motores de navegador importantes. Valence también extiende las increíbles herramientas que hemos construido para depurar Firefox OS y Firefox para Android a los otros principales navegadores móviles, incluidos Chrome en Android y Safari en iOS. Hasta ahora, estas herramientas incluyen nuestro Inspector, Depurador y Consola y Editor de Estilo. Valence - YouTube
</li>
 <li><b>Editor de audio web :</b><br>

 inspeccione e interactúe con Web Audio API en tiempo real para asegurarse de que todos los nodos de audio estén conectados de la manera que espera.
</li>`,
 `WebGL (Web Graphics Library)​ es una especificación estándar que define una API implementada en JavaScript para la renderización de gráficos en 3D dentro de cualquier navegador web. No precisa del uso de plug-ins​ adicionales en cualquier plataforma que soporte OpenGL 2.0 u OpenGL ES 2.0. WebGL está integrada completamente en todos los estándares web del navegador, permitiendo la aceleración hardware​ (física) de la GPU y el procesamiento de imágenes y efectos como parte del lienzo o "canvas" de la página web. Los elementos de WebGL se pueden combinar con otros elementos HTML y estar compuestos con otras partes de la página o del fondo (background)​ de la página. Los programas WebGL consisten en un código de control escrito en JavaScript que permite usar la implementación nativa de OpenGL ES 2.0, un lenguaje similar a C o C++, que se ejecuta en una unidad de procesamiento gráfico (GPU). WebGL está diseñado y gestionado por el consorcio de tecnología sin ánimo de lucro Khronos Group.​ `,
 `

 <b>API de pantalla completa</b><br>
     Esta sencilla API permite que su juego se haga cargo de toda la pantalla, sumergiendo al jugador en acción.<br>
 <b>API de Gamepad</b></br>
     Si desea que sus usuarios puedan usar gamepads u otros controladores de juego para trabajar su juego, necesitará esta API.<br>
 <b>HTML y CSS</b><br>
     Juntas, estas dos tecnologías le permiten construir, diseñar y diseñar la interfaz de usuario de su juego. Parte de HTML es el elemento < canvas > , que proporciona una forma de hacer gráficos 2D.<br>
 <b>Audio HTML</b><br>
     El elemento < audio > te permite reproducir fácilmente efectos de sonido y música sencillos. Si sus necesidades están más involucradas, echa un vistazo a la API de audio web para obtener potencia de procesamiento de audio real.<br>
 <b>IndexedDB</b><br>
     Una poderosa API de almacenamiento de datos para mantener los datos del usuario en su propio ordenador o dispositivo. Una gran manera de guardar el estado del juego y otra información localmente para que no tenga que ser descargado cada vez que sea necesario. También es útil para ayudar a que su juego sea jugable incluso cuando el usuario no está conectado a la Web (por ejemplo, cuando están atrapados en un avión durante horas y horas ...).<br>
 <b>JavaScript</b><br>
     JavaScript, el lenguaje de programación utilizado en la Web, está ardiendo rápido en los navegadores modernos y cada vez más rápido. Usa su poder para escribir el código para tu juego, o mira usando tecnologías como Emscripten o Asm.js para portar fácilmente tus juegos existentes.
<br><b>API de bloqueo de puntero</b><br>
     La API de Bloqueo de Puntero le permite bloquear el ratón u otro dispositivo señalador dentro de la interfaz de su juego para que en lugar de posicionamiento absoluto del cursor reciba deltas de coordenadas que le den medidas más precisas de lo que el usuario está haciendo e impide que el usuario envíe accidentalmente su entrada En algún otro lugar, por lo tanto falta una acción importante.
 <br><b>SVG (Gráficos Vectoriales Escalables)</b>
     Permite crear gráficos vectoriales que se escalan sin problemas, independientemente del tamaño o la resolución de la pantalla del usuario.
 <br><b>Matrices Arrays</b><br>
     Los arrays tipados en JavaScript le dan acceso a datos binarios sin procesar desde JavaScript; Esto le permite manipular texturas GL, datos de juego, o cualquier otra cosa, incluso si no está en un formato JavaScript nativo.
 <br><b>API de audio web</b><br>
     Esta API para controlar la reproducción, síntesis y manipulación de audio a partir de código JavaScript le permite crear efectos de sonido impresionantes, así como jugar y manipular música en tiempo real.
 <br><b>WebGL</b><br>
     Permite crear gráficos 3D (y 2D) acelerados por hardware de alto rendimiento a partir del contenido Web. Se trata de una implementación Web de OpenGL ES 2.0.
 <br><b>WebRTC</b><br>
     La API WebRTC (Comunicaciones en tiempo real) le permite controlar los datos de audio y vídeo, incluyendo la teleconferencia y la transmisión de otros datos de la aplicación entre dos usuarios. ¿Quieren que sus jugadores puedan hablar entre sí mientras explotan monstruos? Esta es la API para usted.
 <br><b>WebSockets</b><br>
     La API de WebSocket le permite conectar su aplicación o sitio a un servidor para transmitir datos de un lado a otro en tiempo real. Perfecto para la acción de juego multijugador, servicios de chat, y así sucesivamente.
 <br><b>Trabajadores de la Web</b><br>
     Los trabajadores le dan la posibilidad de generar hilos de fondo que ejecutan su propio código JavaScript, para aprovechar los modernos procesadores multi-núcleo.
 <br><b>XMLHttpRequest y API de archivos</b><br>
     La combinación de XMLHttpRequest y la API de archivos le permiten enviar y recibir cualquier tipo de datos que desee (no deje que el "XML" te lance!) Desde un servidor Web. Esta es una gran manera de hacer cualquier cosa desde la descarga de nuevos niveles de juego y obras de arte a la transmisión de información de estado de juego en tiempo no real de ida y vuelta.
 
 `,
 `WebSocket es un protocolo de red basado en TCP que establece cómo deben intercambiarse datos entre redes. Puesto que es un protocolo fiable y eficiente, es utilizado por prácticamente todos los clientes. El protocolo TCP establece conexiones entre dos puntos finales de comunicación, llamados sockets. De esta manera, el intercambio de datos puede producirse en las dos direcciones.

 <br>En las conexiones bidireccionales, como las que crea WebSocket (a veces también websocket o web socket), se intercambian datos en ambas direcciones al mismo tiempo. La ventaja de este intercambio es que se accede de forma más rápida a los datos. En concreto, WebSocket permite así una comunicación directa entre una aplicación web y un servidor WebSocket. En otras palabras: la web que se solicita se muestra en tiempo real.
 `,
 `Los lenguajes de bajo nivel, como C, tienen primitivos de bajo nivel como malloc() y free() para la gestión de memoria. Por otro lado, para los valores en JavaScript se reserva memoria cuando"cosas" (objetos, strings, etc.) son creados y "automáticamente" liberados cuando ya no son utilizados. El proceso anterior es conocido como Recolección de basura (garbage collection). Su forma "automática" es fuente de confusión, y da la impresión a los desarrolladores de JavaScript (y de otros lenguajes de alto nivel) de poder ignorar el proceso de gestión de memoria. Esto es erróneo. `];

 /*Insertar Preguntas*/
let i =1;
for(let pregunta of preguntas){
    document.getElementById('list').innerHTML += `<li>
    <button type="button" class="btn">
    <a href="#${i}">${pregunta}</a>
    </button>
    </li>`;
    document.getElementById('infoContainer').innerHTML += `<div class="container" id="${i}">
        <h3>${pregunta}</h3>
        <p></p>
    </div>`;
    i++;
}
i=1;
for(let respuesta of respuestas){
    document.getElementById(String(i)).innerHTML += `<p>${respuesta}</p`;
    i++;
}
