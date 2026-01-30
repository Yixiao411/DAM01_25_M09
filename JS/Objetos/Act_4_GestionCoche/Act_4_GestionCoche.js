let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    any: "2020",
    encendido: false,

    arrancar: function(){
        this.encendido = true;
        console.log("Coche arrancado!")
    },

    apagar: function(){
        this.encendido = false;
        console.log("Coche apagado!")
    }
}

function actividad4(){
    coche.kilometraje = 0;
    console.log(coche.kilometraje);

    coche.augmentarKilometraje = function(km){
        this.kilometraje += km;
        console.log("Kilometraje actual: " + this.kilometraje);
    }
}

actividad4();