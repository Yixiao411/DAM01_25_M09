// Función para obtener el valor de una cookie
function getCookie(name) {
    return document.cookie
        .split("; ")
        .find(c => c.startsWith(name + '='))
        ?.split('=')[1]
        .replace("%23", "#")
        ?? null;
}

function changeConfig() {
    const font = getCookie("font-color");
    const bg = getCookie("background-color");

    if(bg) document.body.style.backgroundColor = bg;
    if(font) document.body.style.color = font;
}

// Escuchamos el mensaje de la ventana hija
window.addEventListener("message", function (event) {
    if (event.data === "config_actualizada") {
        changeConfig();
    }
});

function init() {
    const visited = getCookie("visited");
    if (!visited) {
        // Abrimos el popup
        window.open('popUP.html', 'Config', 'width=600,height=400');
    }
    // Aplicamos lo que ya haya (si existe)
    changeConfig();
}

// Ejecutamos al cargar
init();