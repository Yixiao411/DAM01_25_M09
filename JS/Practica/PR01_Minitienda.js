import {productosJSON} from "./productos.js";

function muestraProductos(){
    const productos = JSON.parse(productosJSON);
    console.log(productos);
    
    const containerTee = document.querySelector(".containerTee");
    for(let product of productos){
        console.log(product);
        const art = document.createElement("article");
        


        
        art.innerHTML += ""
        containerTee.appendChild(art);
    }
}

muestraProductos();