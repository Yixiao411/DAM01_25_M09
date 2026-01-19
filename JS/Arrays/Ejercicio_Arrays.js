let coches = [
    ["seat", "Codoba", 1997, 10000],
    ["Kia", "Sorento", 1994, 1000],
    ["seat", "Todelo", 2000, 10000],
    ["Fiat", "Bravo", 2010, 10200],
    ["Fiat", "500", 2010, 10000],
    ["Mercedes", "Calse B", 2001, 39000],
    ["seat", "Ibiza", 1993, 10100],
    ["Alfa Romeo", "Julieta", 2002, 10000],
    ["Alfa Romeo", "159", 2002, 10400],
    ["Mercedes", "Calse C", 2001, 1000],
    ["Alfa Romeo", "147", 1990, 10500],
    ["Fiat", "Punto", 1990, 999],
    ["Citroen", "Saxo", 1980, 10300],
    ["Renault", "Superc 5", 1980, 12000],
    ["BWM", "M3", 2020, 1000],
    ["Kia", "Picanto", 1990, 1000],
    ["Alfa Romeo", "spider", 1970, 14500],
    ["Mercedes", "Calse A", 1994, 60100],
    ["Mercedes", "Calse D", 2011, 21221]
];

function filtro() {
    const ano = new Date().getFullYear();
    const listaFiltrado = coches.filter(coches => (coches[0] != "Kia" && coches[0] != "Alfa Romeo") && (ano - coches[2] > 20));
    console.log(listaFiltrado.join("\n"))
}

filtro()

function ordena() {
    const listaOrdenado = coches.sort((a, b) => b[3] - a[3]);
    console.log(listaOrdenado.join("\n"))
}

ordena()

function rebaja() {
    const listaRebajado = coches.map(coches =>
        [
            ...coches.slice(0, 3),
            coches[3] * 0.8
        ]);
    console.log(listaRebajado.join("\n"))
}

rebaja()