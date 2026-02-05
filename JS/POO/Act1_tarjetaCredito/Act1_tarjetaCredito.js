class tarjetaCredito{
    #_cvv = "000";
    #_pin = "0000";
    estado;

    constructor(iban, tipoTarjeta, deuda, cvv, fechaCaducidad, pin){
        this.iban = iban;
        this.tipoTarjeta = tipoTarjeta;
        this.deuda = deuda;
        this.estado = true;
        this.#_cvv = cvv;
        this.fechaCaducidad = fechaCaducidad;
        this.#_pin = pin;
    }

    get IBAN(){
        return this.iban;
    }

    get cvv(){
        return this.#_cvv;
    }

    get estado(){
        return this.estado;
    }

    activar(){
        this.activar = true;
        console.log("Activado");
    }  

    anular(){
        this.activar = false;
        console.log("Anulado");
    }

    pagar(numero){
        if(this.activar==false){
            console.log("No esta activado");
        }else{
            this.deuda+=numero;
            return this.deuda;
        }
    }

    cambiarPin(pin, pinAntiguo){
        if(pinAntiguo===this.#_pin){
            this.#_pin = pin;
        }
    }
}


function main(){
    let t1 = new tarjetaCredito("ES00001","Mastercard",0,152,"17/12/2030",1234);
    let t2 = new tarjetaCredito("ES20012","Paypal",1000,789,"30/8/2029",4213);
    let t3 = new tarjetaCredito("ES30210","Paypal",203,542,"06/11/2027",1424);

    console.log(t1.cvv);
    console.log(t2.pagar(200));
    t3.cambiarPin(1234);
}

main();