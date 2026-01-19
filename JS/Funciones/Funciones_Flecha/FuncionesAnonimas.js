const saludar = function (nombre, saludo = "Hola") {
    console.log(saludo + " " + nombre);
};

const calcular = function (num1, num2, operacion = 1) {
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

const calcularPromedio = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result / arguments.length;
};

const concatenarNombres = function () {
    let frase = "";
    for (let x = 0; x < arguments.length; x++) {
        frase += arguments[x] + ", ";
    }
    return frase.substring(0, frase.length - 2);
};

const proce = function () {
    saludar("yx", "Adios");
    console.log(calcular(4, 5, 2));
    console.log(calcularPromedio(1, 2, 3, 1, 2, 3, 1, 2, 3));
    console.log(concatenarNombres("asd", "asd", "asd", "asd"));
};

proce();
