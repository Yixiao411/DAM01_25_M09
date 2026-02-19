let pokeIndex = 0;
let lastPokeIndex = 4;

async function conectaAPI() {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${lastPokeIndex}&offset=${pokeIndex}://api.chucknorris.io/jokes/random`);
        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }
        const json = await res.json();
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
    console.log(pokemon.forms[0].name);
}

function muestraUrls(content){
    let obj = content.results;
    for(x in obj){
        conectaPokemon(obj[x].url);
    }
}
 