process.stderr.write("Sorteo arrancado\n");

const nombre = process.argv[2] ? JSON.parse(process.argv[2]) : "A";

const random = Math.floor(Math.random() * 11);

let resultado = "Perdido";

if(random === 7){
    resultado = "Has ganado 1000 manzanas";
}

/*
const tiempoEspera = 5000; // 5000 milisegundos = 5 segundos
const fin = Date.now() + tiempoEspera;

// Bucle 'while' que bloquea el hilo de ejecución hasta que pasen 5 segundos
while (Date.now() < fin) {
  // El motor de JavaScript se queda atrapado aquí sin hacer nada, 
  // solo evaluando la condición constantemente.
}
*/
process.stderr.write("resultado: " + resultado + "\n");
process.stdout.write(JSON.stringify(
    { 
        nombre: nombre,
        numero: random,
        premio: resultado
    }));