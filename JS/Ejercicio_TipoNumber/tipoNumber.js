function comparar(a,b){
    if (a < b){
        return b
    }else return a
}

function multiplicar(a,b){
    let result = 0;
    for (let x = 0; x<b;x++){
        result+=parseInt(a);
    }
    return result;
}

function multiplicar3num(a,b,c){
    let result = 0;
    for (let x = 0; x<b;x++){
        result+=parseInt(a);
    }
    let resultFinal = 0;
    for (let y = 0; y<c; y++){
        resultFinal += result;
    }
    return resultFinal;
}

function media(a,b,c){
    let total = parseInt(a) + parseInt(b) + parseInt(c);

    let result = total/3.0;
    return result
}

function nNaturales(){
    let arr = [];
    for(let n = 0; n<=10000; n++){
        let str = n.toString();
        let result = 0;
        for (let s of str){
            result += cubo(parseInt(s));
        }
        if (result == n){
            arr.push(result);
        }
    }

    return arr;
}

function cubo(num){
    return num*num*num;
}

function proce(){
    const result1 = document.querySelector(".resultado1");
    const result2 = document.querySelector(".resultado2");
    let num1 = prompt("numero 1");
    let num2 = prompt("numero 2");
    result1.textContent = "Es mes gran: " + comparar(num1,num2);
    result2.textContent = "El resultat de multiplicacio es: " + multiplicar(num1,num2);    
    
    const result3 = document.querySelector(".resultado3");
    let num3 = prompt("numero 3");
    result3.textContent = "El resultat de multiplicacio es: " + multiplicar3num(num1,num2,num3);    
    
    const result4 = document.querySelector(".resultado4");
    result4.textContent = "La media es: " + media(num1,num2,num3).toFixed(1);
    
    let nums = nNaturales(153);
    const result5 = document.querySelector(".resultado5");
    result5.textContent = "Los numeros son: " + nums.join(" ");
    
}

proce()