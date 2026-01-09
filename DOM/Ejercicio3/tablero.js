let contenedor = document.getElementById("contenedor");

for (var i = 65; i < 91; i++) {
    let elemento = document.createElement("div");
    elemento.textContent = String.fromCharCode(i);
    elemento.className = "tecla";

    contenedor.appendChild(elemento);
}

let numContenedor = document.createElement("div");
numContenedor.id = "contenedor";
numContenedor.style.width = 200;
document.body.appendChild(numContenedor);

for (var x = 1; x < 10; x++) {
    let elemento = document.createElement("div");
    elemento.textContent = x;
    elemento.className = "tecla";

    if(i%2==0){
        elemento.style.backgroundColor = "orange";
    } else if(i%3==0){
        elemento.style.backgroundColor = "yellow"
    }

    numContenedor.appendChild(elemento);
}