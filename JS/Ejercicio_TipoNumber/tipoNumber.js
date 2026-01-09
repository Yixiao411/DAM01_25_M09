function comparar(a,b){
    if (a < b){
        return b
    }else return a
}

function multiplicar(a,b){
    let result = a
    for (let x = 0; x<b;x++){
        result+=a;
    }
    return result;
}

function proce(){
    const result1 = document.querySelector(".resultado1");
    const result2 = document.querySelector(".resultado2");
    let num1 = prompt("numero 1");
    let num2 = prompt("numero 2");
    result1.textContent = "Es mes gran: " + comparar(num1,num2);
    result2.textContent = "El resultat de multiplicacio es: " + multiplicar(num1,num2);    
}

proce()