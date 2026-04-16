import express from 'express';

const app = express();
const PORT = 3018;

const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} escuchando en http://localhost:${PORT}/`);
});

/***************************************
 ************ CHILD PROCESS ************
 ***************************************/
import { execFile } from 'child_process';

app.get('/sumares', (req, res) => {
    const numeros = [1, 2, 3, 4, 5];

    console.log("Node hace GET")

    // Lanza el script en un proceso separado
    execFile('node', ['tarea-pesada.js', JSON.stringify(numeros)],
        (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: 'Falló el proceso' });
            }
            const datos = JSON.parse(stdout);
            res.json(datos); // → { resultado: 15 }
        }
    );
    // Mientras tanto, Node sigue atendiendo otras peticiones
});

app.get('/jugar', (req, res) => {
    const nombre = 'Gerard';
    console.log("Node sortea en /jugar");

    execFile('node', ['sorteo.js', JSON.stringify(nombre)], (error, stdout, stderr) => {
        if (error) {
            console.error("Error ejecutando sorteo:", stderr);
            return res.status(500).json({ error: 'Falló el proceso' });
        }
        try {
            const datos = JSON.parse(stdout);
            res.json(datos);
        } catch (e) {
            res.status(500).json({ error: 'Error al leer la respuesta del hijo' });
        }
    });
});

app.get('/estado', (req, res) => {
    console.log({
        servidor: "vivo"
    });
});

/***************************************
 ************ WORKER THREAD ************
 ***************************************/


import { Worker } from 'worker_threads';

let contador = 0

app.get('/entreno/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const peso = 85;
    const altura = 185;
    contador++
    // Crea el worker y le pasa los datos
    const worker = new Worker('./calcular-entreno.js', {
        workerData: { nombre, peso, altura }            // pasa objetos directamente (no solo strings)
    });

    // Escucha el resultado
    worker.on('message', (datos) => {
        contador--
        res.json(datos);
        console.log("Resultado:", datos.resultado);
    });

    // Gestiona errores
    worker.on('error', (err) => {
        contador--
        res.status(500).json({ error: err.message });
    });
});


app.get('/ping1', (req, res) => {
    res.json({ mensaje: 'Node sigue vivo', pid: process.pid });
    console.log("Node sigue vivo:", process.pid);
});

app.get('/usuarios-activos', (req, res) => {
    console.log(`peticiones: ${contador}`);
    res.json({ "contador": contador });
})


/***************************************
 ************ MULTIPROCESS FORK() ************
 ***************************************/

 import { fork, exec, spawn } from 'child_process';
 import { error } from 'console';


app.get('/ping', (req, res) => {
    res.json({ mensaje: '¡El restaurante está abierto y atendiendo rápido!' });
    console.log('Ping recibido. Servidor responde rápido.');
});

//Tarea pesada (delegada con fork)
app.get('/inventario', (req, res) => {
    console.log('Cliente pide el inventario. Delegando tarea...');

    // 1. Contratamos al segundo cocinero (creamos el proceso)
    const cocineroHijo = fork('tarea-fork.js');

    // 2. Le damos la orden por el walkie-talkie --> podemos enviar objetos, no solo strings
    //Establecemos canal de comunicación con el hijo y le damos la orden de empezar el inventario
    cocineroHijo.send({ comando: 'empezar_inventario' });

    // 3. Escuchamos lo que nos responde
    cocineroHijo.on('message', (mensaje) => {
        console.log(`El cocinero hijo dice: ${mensaje.estado}`);

        // 4. Respondemos al cliente HTTP solo cuando el hijo termina
        res.json({
            exito: true,
            resultado: mensaje.estado,
            total_items: mensaje.total
        });
    });

    // Gestionamos si el hijo falla
    cocineroHijo.on('error', (error) => {
        console.error('El cocinero hijo tuvo un accidente:', error);
        res.status(500).json({ error: 'Fallo al hacer el inventario' });
    });
});


app.get('/sorteo/:nombre', (req, res) => {
    console.log("sorteando");
    const sorteoHijo = fork('sorteoHijo.js');

    sorteoHijo.send({ nombre : req.params.nombre });

    sorteoHijo.on('message',(mensaje)=>{
        console.log("Termino");
        res.json({ 
            nombre: mensaje.nombre,
            numero: mensaje.random,
            premio: mensaje.resultado
        });
    })

    sorteoHijo.on('error', (error)=>{
        console.error('El sorteo hijo tuvo un accidente:', error);
        res.status(500).json({ error: 'Fallo al sortear' });
   
    })
});


app.get('/exec', (req, res) => {

    // Ejecutamos un comando del sistema (ej: listar archivos)
    // Windows: 'dir' | Linux/Mac: 'ls -la'
    exec('ls -la', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar: ${error.message}`);
            res.status(500).json({ error: 'Fallo al hacer ls -la' });
            return;
        }
        if (stderr) {
            console.error(`Avisos del sistema: ${stderr}`);
            res.status(500).json({ error: 'Avisos del sistema' });
            return;
        }
        // stdout tiene TODO el texto junto, entregado de una vez
        console.log(`Resultado del comando:\n${stdout}`);
        res.json(`${stdout}`);
    });
});


/*
app.get('/spawn', (req, res) => {
    // Le decimos al sistema: "Haz solo 5 pings y cierra la manguera"
    const procesoPing = spawn('ping', ['-c', '5', 'google.com']);

    // Preparamos la cabecera para que el navegador sepa que va a recibir datos poco a poco
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Escuchamos el hilo de datos de salida
    procesoPing.stdout.on('data', (pedacito, contador) => {
        // Nos va llegando la información línea a línea o por bloques
        console.log(`Recibido: ${pedacito.toString()}`);
        res.write(`Dato recibido: ${pedacito.toString()}`); // Escribe en la respuesta sin cerrarla
    });
    // Escuchamos si el proceso termina
    procesoPing.on('close', (codigo) => {
        console.log(`El proceso terminó con código ${codigo}`);
        res.end('Proceso ping terminado.'); // Cerramos la respuesta al cliente
    });
    procesoPing.stderr.on('data', (data) => {
        console.error(`Error en el hijo: ${data}`);
        res.status(500).json({ error: 'Fallo al hacer ping' });
    });

});
*/

app.get('/spawn', (req, res) => {
    // Le decimos al sistema: "Haz solo 5 pings y cierra la manguera"
    const procesoPing = spawn('ping', ['google.com']);
    let count = 0;
    // Preparamos la cabecera para que el navegador sepa que va a recibir datos poco a poco
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Escuchamos el hilo de datos de salida
    procesoPing.stdout.on('data', (pedacito) => {
        // Nos va llegando la información línea a línea o por bloques
        count++;
        console.log(count);
        console.log(`Recibido: ${pedacito.toString()}`);
        res.write(`Dato recibido: ${pedacito.toString()}`); // Escribe en la respuesta sin cerrarla
        if(count==4) {
            procesoPing.kill('SIGTERM');
        }
    });
    // Escuchamos si el proceso termina
    procesoPing.on('close', (codigo) => {
        console.log(`El proceso terminó con código ${codigo}`);
        res.end('Proceso ping terminado.'); // Cerramos la respuesta al cliente
    });
    procesoPing.stderr.on('data', (data) => {
        console.error(`Error en el hijo: ${data}`);
        res.status(500).json({ error: 'Fallo al hacer ping' });
    });

});