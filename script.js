function crearBotonEditar() {
    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

}

function crearBotonRemover() {
    let botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");
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

botonRemover.addEventListener("click", function () {
    divNuevo.remove()
    //esto podría ser con lo de e.target.parentNode
})

function crearContenedor() {
    let divNuevo = document.createElement("div");
    divNuevo.classList.add("item");
}

function agregar(nuevaTarea) {
    crearContenedor();
    crearInput(nuevaTarea);
    crearBotonEditar();
    crearBotonRemover();

    divNuevo.appendChild(inputItem);
    divNuevo.appendChild(botonEditar);
    divNuevo.appendChild(botonRemover);

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
function chequearInput() {
    if ($input.value === "") {
        alert("No ingresaste nada!")
    } else {
        new Item($input.value)
        $input.value = ""
    }
}
//funcion manejarErrores que se encargue de mostrarlos en un div.
//funcion crear item, afuera de validar input.

let $input = document.querySelector(".input");

const $agregar = document.querySelector(".boton-agregar");
$agregar.onclick = chequearInput;
