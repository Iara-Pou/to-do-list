class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input");
        inputItem.disabled = "true";
        inputItem.classList.add("item-input");
        inputItem.value = nuevaTarea;

        let divNuevo = document.createElement("div");
        divNuevo.classList.add("item");

        //boton editar, candado
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        //boton  remover, tacho
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        divNuevo.appendChild(inputItem);
        divNuevo.appendChild(botonEditar);
        divNuevo.appendChild(botonRemover);

        let container = document.querySelector(".container");
        container.appendChild(divNuevo);


        botonEditar.addEventListener("click", function () {
            if (inputItem.disabled === true) {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i></i>";
                inputItem.disabled = false;
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i></i>";
                inputItem.disabled = true;
            }
        })

        botonRemover.addEventListener("click", function () {
            divNuevo.remove()
        })


    }
}
function chequearInput() {
        if (input.value === "") {
            alert("No ingresaste nada!")
        } else {
            new Item (input.value)
            input.value = ""}
    }

let input = document.querySelector(".input");
let agregar = document.querySelector(".boton-agregar");
agregar.addEventListener("click", chequearInput);

