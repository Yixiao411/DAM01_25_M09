process.on('message', (mensaje) => {
    if (mensaje.nombre != "") {
        for(let i = 0; i<3;i++){
            const random = Math.floor(Math.random() * 11);

            let resultado = "Perdido";
            console.log(mensaje.nombre)

            if (random === 7) {
                console.log("Has ganado en ronda " + i)
                resultado = "Has ganado 1000 manzanas";
                process.send({ 
                    nombre: nombre,
                    numero: random,
                    premio: resultado
                })
            }else{
                console.log(`Has perdido en ronda ${i}`)
            }
        }
    }
    console.log("a")
    process.exit();
});