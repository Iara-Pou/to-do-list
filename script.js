function crearContenedor() {
    let divNuevo = document.createElement("div");
    divNuevo.classList.add("item");
}

function crearInput(nuevaTarea) {
    let inputItem = document.createElement("input");

    inputItem.disabled = "true";
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;
}

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
function eliminarContenedorTarea(event){
    const $contenedor = event.target.parentNode;
    $contenedor.remove()
}

function agregar(nuevaTarea) {
    const $contenedorTareaNueva = crearContenedor();
    const $input = crearInput(nuevaTarea);
    const $botonEditar = crearBotonEditar();
    const $botonRemover = crearBotonRemover();

    $contenedorTareaNueva.appendChild($input);
    $contenedorTareaNueva.appendChild($botonEditar);
    $contenedorTareaNueva.appendChild($botonRemover);

    const $contenedorTareas = document.querySelector("#contenedor-tareas");
    $contenedorTareas.appendChild($contenedorTareaNueva);

}



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

let $input = document.querySelector(".input");

const $agregar = document.querySelector(".boton-agregar");
$agregar.onclick = manejarErrores;

function manejarErrores() {
    const tarea = $input.value;
    const cumpleRequisitos = validar(tarea) === "";

    if (cumpleRequisitos) {
        agregar(tarea);
    } else {
        const textoError = validar(tarea);
        mostrarError(textoError);
    }

}
