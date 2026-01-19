function sumarPares(numeros) {
    let result = 0;
    for (let numero of numeros) {
        if (numero % 2 == 0) {
            result += parseInt(numero);
        }
    }
    return result;
}
const numeros = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4];
console.log(sumarPares(numeros))

const sumarAnonima = function (array){
    let result=0;
    array.forEach(element => {
        element%2 == 0 ? result += element : 0
    });
    return result;
}

function sumarReduce() {
    return numeros.reduce((result, number) => number % 2 == 0 ? result += numbre : result);
}


ordenDatos(["Rodriguez", "8", 9, '5', 4, 'Clara'])// → Clara,Rodriguez,8,9,5,4,6.5

function ordenDatos(alumno) {
    const notas = alumno.slice(1, alumno.length - 2);
    let notaTotal = 0;
    for (let nota of notas) {
        notaTotal += parseInt(nota);
    }
    let media = notaTotal / notas.length;

    let total = notas.reduce((result, num) => result += parseInt(num) , 0) / notas.length;

    console.log(media);
    console.log(total);


}

function filterWords(palabras){
    console.log(palabras.filter(palabra=>palabra[0!='Z']))
}