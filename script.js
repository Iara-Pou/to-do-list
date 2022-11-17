function crearBotonEditar() {
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

}

function crearBotonRemover() {
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");
    botonRemover.onclick = eliminarContenedorTarea;
}

botonEditar.addEventListener("click", function () {
    if (inputItem.disabled === true) {
        //cambiar las clases con classList y no con innerHTML
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i></i>";
        inputItem.disabled = false;
    } else {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i></i>";
        inputItem.disabled = true;
    }
})
function eliminarContenedorTarea(event){
    const $contenedor = event.target.parentNode;
    $contenedor.remove()
}


function crearContenedor() {
    let divNuevo = document.createElement("div");
    divNuevo.classList.add("item");
}

function agregar(nuevaTarea) {

    const $contenedorTareaNueva = crearContenedor();
    const $input = crearInput(nuevaTarea);
    const $botonEditar = crearBotonEditar();
    const $botonRemover = crearBotonRemover();

    $contenedorTareaNueva.appendChild($input);
    $contenedorTareaNueva.appendChild($botonEditar);
    $contenedorTareaNueva.appendChild($botonRemover);

    let $contenedorTareas = document.querySelector("#contenedor-tareas");
    $contenedorTareas.appendChild($contenedorTareaNueva);

}

function crearInput(nuevaTarea) {
    let inputItem = document.createElement("input");

    inputItem.disabled = "true";
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;
}
//validarInput --> mejor si hiciera un return de un string.
function validarInput() {
    if ($tareaNueva.value === "") {
        return "El campo no debe estar vacío."
    } else if ($tareaNueva.length > 30){
        return "El campo debe tener menos que 30 carácteres."
    }else {
        return "";
    }
}
//funcion manejarErrores que se encargue de mostrarlos en un div.
//funcion crear item, afuera de validar input.

const $tareaNueva = document.querySelector(".input").value;

const $agregar = document.querySelector(".boton-agregar");
//
$agregar.onclick = validarInput;
