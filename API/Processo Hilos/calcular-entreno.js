import { workerData, parentPort } from 'worker_threads';

console.log("Worker activo\n");

// Simula tarea pesada: bucle de 5 segundos
const inicio = Date.now();
while (Date.now() - inicio < 5000) {}  // bloquea SOLO este hilo

const resultado = {
    "nombre": workerData.nombre,
    "imc": workerData.peso/(workerData.altura*workerData.altura),
    "plan": [
      {"dia": "Lunes", "ejercicio": "Pecho y triceps"},
      {"dia": "Miercoles", "ejercicio": "Espalda y biceps"},
      {"dia": "Viernes", "ejercicio": "Piernas"}
    ],
    "calorias": "1000cal"
  };
  
parentPort.postMessage({ resultado });