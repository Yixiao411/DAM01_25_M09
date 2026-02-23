let quant = 4;
let lastPokeIndex = 0;

async function conectaAPI() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quant}&offset=${lastPokeIndex}`);
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        lastPokeIndex += 4;
        muestraUrls(json);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function conectaPokemon(url) {
    try {
        const res = await fetch(url);
        if (!res.ok){
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
        muestraPokemons(json);
    }catch (error) {
        console.error("Error:", error);
    }
}

function muestraPokemons(pokemon){
    let pokeDIV = document.getElementById("pokemons");

    let poke = document.createElement("div");
    poke.className = "pokeInfo";
    let str = "";
    str += `<p>Nombre: ${pokemon.name}</p>`
    str += `<img class="foto" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">`
    str += `<p>Type: ${pokemon.types[0].type.name}</p>`
    str += `<p>ID: ${pokemon.id}</p>`

    poke.innerHTML += str;
    pokeDIV.appendChild(poke);
    console.log(pokemon.forms[0].name);
}

function muestraUrls(content){
    let obj = content.results;
    for(x in obj){
        conectaPokemon(obj[x].url);
    }
}
 