const saludar = (nombre, saludo = "Hola") => {
    console.log(saludo + " " + nombre);
};

const calcular = (num1, num2, operacion = 1) => {
    switch (operacion) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            return num1 * num2;
        case 4:
            return num1 / num2;
        default:
            return 0;
    }
};

const calcularPromedio = (...numeros) => {
    let result = 0;
    for (let i = 0; i < numeros.length; i++) {
        result += numeros[i];
    }
    return result / numeros.length;
};

const concatenarNombres = (...nombres) => {
    let frase = "";
    for (let x = 0; x < nombres.length; x++) {
        frase += nombres[x] + ", ";
    }
    return frase.substring(0, frase.length - 2);
};

const proce = () => {
    saludar("yx", "Adios");
    console.log(calcular(4, 5, 2));
    console.log(calcularPromedio(1, 2, 3, 1, 2, 3, 1, 2, 3));
    console.log(concatenarNombres("asd", "asd", "asd", "asd"));
};

proce();

