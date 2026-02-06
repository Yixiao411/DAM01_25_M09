class FiguraGeometrica{
    base = 1;
    constructor (nombre){
        this.nombre=nombre;
    }
    calculaArea(){
        console.error("Debe lanzar un subclasse");
        return this.base*this.altura;
    }
}

class Rectangulo extends FiguraGeometrica{
    constructor (base, altura, nombre){
        super(nombre);
        this.base = base;
        this.altura = altura;
    }
}

class Triangulo extends FiguraGeometrica{
    constructor (altura, nombre){
        super(nombre);
        this.base = this.base;
        this.altura = altura;
    }

    calculaArea(){
        return (super.calculaArea()/2);
    }
}

class Circulo extends FiguraGeometrica{
    constructor (radi, nombre){
        super(nombre);
        this.radi = radi;
    }

    calculaArea(){
        return (this.radi*this.radi)*3.14;
    }
}

function proce(){
    let r1 = new Rectangulo(2,3,"Rectangulo1");
    console.log(r1.calculaArea());
    let t1 = new Triangulo(3,"Triangulo1");
    console.log(t1.calculaArea());
    let c1 = new Circulo(3,"Circulo1");
    console.log(c1.calculaArea());
}