function crearContenedor() {
    const divNuevo = document.createElement("div");
    divNuevo.classList.add("item");
    return divNuevo;
}

function crearInput(nuevaTarea) {
    let inputItem = document.createElement("input");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;
    return inputItem;
}

function crearBotonEditar(inputAEditar) {
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");
    botonEditar.onclick = () => editarContenido(inputAEditar, botonEditar);
    return botonEditar;
}

function editarContenido(input, boton) {

    const inputEstaBloqueado = input.disabled === true;
    
    if (inputEstaBloqueado) {
        boton.innerHTML = "<i class='fas fa-lock-open'></i></i>";
        input.disabled = false;

    } else {
        manejarErroresCambios (input, boton);       
    }
}

function manejarErroresCambios (input, boton){

    const tareaNueva = input.value;
    const cumpleRequisitos = validar(tareaNueva) === "";

    if(cumpleRequisitos){
        boton.innerHTML = "<i class='fas fa-lock'></i></i>";
        input.disabled = true;
    } else {
        mostrarError(validar(tareaNueva));
    }

}

function crearBotonRemover() {

    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");
    botonRemover.onclick = eliminarContenedorTarea;

    return botonRemover;
}

function eliminarContenedorTarea() {
    this.parentNode.remove()
}

function validar(textoTarea) {
    if (textoTarea === "") {
        return "El campo no debe estar vacío."
    } else if (textoTarea.length > 30) {
        return "El campo debe tener menos que 30 carácteres."
    } else {
        return "";
    }
}

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

function agregar(nuevaTarea) {
    const $contenedorTareaNueva = crearContenedor();
    const $input = crearInput(nuevaTarea);
    const $botonEditar = crearBotonEditar($input);
    const $botonRemover = crearBotonRemover();

    $contenedorTareaNueva.appendChild($input);
    $contenedorTareaNueva.appendChild($botonEditar);
    $contenedorTareaNueva.appendChild($botonRemover);

    const $contenedorTareas = document.querySelector("#contenedor-tareas");
    $contenedorTareas.appendChild($contenedorTareaNueva);
}

