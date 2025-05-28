var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {
 
  e.preventDefault();
  // ERROR: El método correcto para evitar que el formulario se envíe y recargue la página es e.preventDefault()
  // SOLUCIÓN: cambiar a e.preventDefault();

  /* var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2] */

  // ERROR: Aquí se sobreescribe la variable e que es el evento, no debería usar la misma letra
  // SOLUCIÓN: usar nombres diferentes para variables, por ejemplo:
  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value

  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
    // si el nombre está vacío, agrega la clase "error" al input nombre
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
    // si la edad es menor que 18 o mayor que 120, agrega la clase "error" al input edad
  }

  if (nombre.length > 0 
    && (edad > 18 
    && edad < 120) ) {
    agregarInvitado(nombre, edad, nacionalidad)
    // si el nombre no está vacío y la edad es válida, llama a la función para agregar invitado
  }
}

var botonBorrar = document.createElement("button")
/* botonBorrar.textContent = "Eliminar invitado" */
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
// Crea un botón "Eliminar invitado" y un salto de línea y los agrega al final del body
// Nota: Este botón se crea fuera de contexto y puede no ser necesario aquí, ya que en agregarInvitado se crean botones para cada invitado

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
  
  var lista = document.getElementById("lista-de-invitados")
  // Selecciona el contenedor donde se van a agregar los invitados

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")


 /*  elementoLista.classList.added("elemento-lista") */
  // ERROR: El método correcto es classList.add(), no classList.added()

  lista.appendChild(elementoLista)
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  // Aquí crea un span con texto "Nombre:", un input con el nombre y un salto de línea, y los agrega a elementoLista
  // Nota: esto es redundante porque luego se llama a crearElemento para nombre también

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor 
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }
  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)
  
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar)
  // Crea un botón para eliminar el invitado y lo agrega al div elementoLista

  botonBorrar.onclick = function() {
  this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
    // Cuando se clickea el botón, elimina el div padre (elementoLista) que contiene el invitado
  }
}
