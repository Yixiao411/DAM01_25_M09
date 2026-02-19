class Personaje {
    constructor(nombre, nivel, puntosVida) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosVida = puntosVida;
    }

    atacar() {
        console.error("Mal. No sé atacar");
    }
}

class Guerrero extends Personaje {
    constructor(nombre, nivel, puntosVida, fuerza) {
        super(nombre, nivel, puntosVida);
        this.fuerza = fuerza;
    }

    toString() {
        return `${this.nombre} | ${this.puntosVida} | ${this.fuerza}`;
    }

    atacar(perj) {
        const daño = this.nivel * (0.8 * this.fuerza);
        perj.puntosVida -= daño;
        console.log(`${perj.nombre} - ${daño} vida`);
    }

    gritar() {
        this.fuerza += 5;
        console.log(`${this.nombre} aumenta fuerza a ${this.fuerza}`);
    }
}

class Mago extends Personaje {
    constructor(nombre, nivel, puntosVida, mana, arma) {
        super(nombre, nivel, puntosVida);
        this.mana = mana;
        this.arma = arma;
    }

    toString() {
        return `${this.nombre} | ${this.puntosVida} | ${this.mana}`;
    }

    atacar(perj) {
        const daño = this.nivel * 0.5;
        perj.puntosVida -= daño+this.arma;
        console.log(`${perj.nombre} - ${daño} vida`);
    }

    lanzaHechizo(perj) {
        if (this.mana > 3) {
            this.mana -= 3;
            const daño = this.nivel * 2;
            perj.puntosVida -= daño;
            console.log(`${perj.nombre} - ${daño} vida`);
        } else {
            this.mana += 1;
            console.log(`${this.nombre} + 1 de mana`);
        }
    }
}

function proce() {
    let ger = new Guerrero("Gomba", 2, 12, 3);
    let mag = new Mago("Hwm", 4, 10, 4,"AAAAAAAAAAAAAAAA");

    console.log("Ready");
    ger.atacar(mag);
    mag.atacar(ger);

    console.log(`${ger}`);
    console.log(mag.toString());
}