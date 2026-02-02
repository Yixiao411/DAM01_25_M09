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

function crearArticulo(product){
    const art = document.createElement("article");
    art.className = "producto";
    art.setAttribute("id", product.id);
    const img = creaImagen(product);

    article.appendChild(img);
    article.appendChild(creaTitulo(producto.nombre));
    article.appendChild(creaDescripcion(producto.descripcion));
    article.appendChild(creaPrecio(producto.precioBase));
    article.appendChild(creaSelectorTallas(producto.tallas));
    article.appendChild(creaSelectorColores(producto, img));
    article.appendChild(creaBoton(producto));

    return art;
}

function creaImagen(product) {
    const img = document.createElement("img");

    const colorInicial = product.colores[0];
    img.src = product.imagenes[colorInicial];
    img.alt = product.nombre;

    return img;
    
}