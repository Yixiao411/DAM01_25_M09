proce()

function proce(){
    let frase = "El Árbol creció rápido, pero aún no está completamente fuerte.";
    let resultado = separarVocalesConsonantes(frase);

    let result = document.querySelector(".resultado1");
    result.textContent = "La frase es: " + frase + "\nVocales: " + resultado.vc + "\nConsonantes: " + resultado.cs;
}

function separarVocalesConsonantes(str){
    let vocales = "aàáäiìíïuùúüeèéëoòóöAÀÁÄIÌÍÏUÙÚÜEÈÉËOÒÓÖ";
    let vc = "";
    let cs = "";
    
    for (let x of str){
        if (vocales.includes(x)){
            vc += x;
        } else {
            cs += x;
        }
    }

    return {vc, cs};
}