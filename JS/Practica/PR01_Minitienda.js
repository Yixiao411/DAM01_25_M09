import {productosJSON} from "./productos.js";

function init(){
    muestraProductos();
}

document.addEventListener("DOMContentLoaded", init);

function muestraProductos(){
    const productos = JSON.parse(productosJSON);
    const containerTee = document.querySelector(".containerTee");

    for(let product of productos){
        console.log(product);
        const art = crearArticulo(product);
        containerTee.appendChild(art);
    }
}

function crearArticulo(producto){
    const art = document.createElement("article");
    art.className = "producto";

    art.setAttribute("id", producto.id);
    art.appendChild(creaImagen(producto));
    art.innerHTML += "<span>" + producto.tags[0] + "</span>";
    art.appendChild(creaTitulo(producto.nombre));
    art.innerHTML += creaDescripcion(producto.descripcion);
    art.innerHTML += creaPrecio(producto.precioBase);
    art.appendChild(creaSelectorTallas(producto.tallas));
    art.appendChild(creaSelectorColores(producto));
    art.appendChild(creaBoton());

    return art;
}

function creaImagen(product) {
    const image = document.createElement("img");

    const colorInicial = product.colores[0];
    image.src = product.imagenes[colorInicial];
    image.alt = product.nombre;

    return image;
}

function creaTitulo(titulo){
    const titul = document.createElement("h3");
    titul.textContent = titulo;
    return titul
}

function creaDescripcion(descripcion) {
    return "<p>" + descripcion + "</p>";
}

function creaPrecio(precio) {
    return "<p>" + `${precio.toFixed(2)} €` + "</p>";
}

function creaSelectorTallas(tallas) {
    const select = document.createElement("select");

    for(let talla of tallas){
        const option = document.createElement("option");
        option.value = talla;
        option.textContent = talla;
        select.appendChild(option);
    }

    return select;
}

function creaSelectorColores(producto) {
    const select = document.createElement("select");

    producto.colores.forEach(color => {
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        select.appendChild(option);
    });
    return select;
}

function creaBoton() {
    const button = document.createElement("button");
    button.textContent = "Añadir al carrito";

    return button;
}