let teclado = document.createElement("div");
teclado.id = "teclado";
document.body.appendChild(teclado);

let contenedor = document.getElementById("contenedor");
teclado.appendChild(contenedor);

for (var i = 65; i < 91; i++) {
    let elemento = document.createElement("div");
    elemento.textContent = String.fromCharCode(i);
    elemento.className = "tecla";

    contenedor.appendChild(elemento);
}

let numContenedor = document.createElement("div");
numContenedor.id = "numContenedor";
numContenedor.style.width = 200;
teclado.appendChild(numContenedor);

for (let x = 1; x < 11; x++) {
    let elemento = document.createElement("div");
    elemento.textContent = x;
    elemento.className = "tecla";

    if(x%2==0){
        elemento.style.backgroundColor = "orange";
    } else if(x%3==0){
        elemento.style.backgroundColor = "yellow";
    }

    numContenedor.appendChild(elemento);
}