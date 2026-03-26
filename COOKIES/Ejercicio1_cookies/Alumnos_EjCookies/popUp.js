function setCookie(name, value, days=7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function saveConfig() {
    const font = document.getElementById("font-color").value;
    const background = document.getElementById("background-color").value;
    setCookie("font-color",font);
    setCookie("background-color",background);
    setCookie("visited",true);

    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }
    
    window.close();
}

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});