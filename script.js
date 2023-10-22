let currentPokemon;
let allPokemons = [];
let limitPokemon = 30;
let limitPokemonLoad = 10;


let colors = {
    fire: "#FB6C6C",
    grass: "#69e371",
    electric: "#ead04e",
    water: "#79caef",
    ground: "#bdb9b5",
    rock: "#6a6a67",
    fairy: "#e9c0f0",
    poison: "#d6b3ff",
    bug: "#e6bf89",
    dragon: "#8aaff5",
    psychic: "#dadd79",
    flying: "#f3d6d6",
    fighting: "#e02421",
    normal: "#d0c5c5",
    ice: "#a7ddf6",
    ghost: "#f6eaea"
  };


async function loadPokemon() {
    for (let i = 1; i < limitPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('Loaded pokemon', currentPokemon);

        allPokemons.push(currentPokemon);
        renderPokemonInfo(currentPokemon, i);
    }
}


// function renderPokemonInfo(pokemon, i) {

//     let pokemonHTML = `
//         <div class="pokemonOverview">
//         <div class="pokemonOverviewHeadline">
//                 <h2>${pokemon.name}</h2>
//                 <p>#${i++}</p>
//                 </div>
//                 <div class="pokemonIMGBox">
//                 <img id="pokemonIMG" src="${pokemon.sprites.front_default}" alt="">
//             </div>
//         </div>
//     `;

//     let pokedexContainer = document.getElementById('pokedex');

//     pokedexContainer.innerHTML += pokemonHTML;
// }

function renderPokemonInfo(pokemon, i) {
    let type = pokemon.types[0].type.name;
    let colorpokemonOverview = colors[type];

    let pokemonHTML = `
        <div class="pokemonOverview" style="background-color: ${colorpokemonOverview};">
            <div class="pokemonOverviewHeadline">
                <h2>${pokemon.name}</h2>
                <p>#${i++}</p>
            </div>
            <div class="pokemonIMGBox">
                <img id="pokemonIMG" src="${pokemon.sprites.front_default}" alt="">
            </div>
        </div>
    `;

    let pokedexContainer = document.getElementById('pokedex');
    pokedexContainer.innerHTML += pokemonHTML;
}



async function loadMorePokemon() {
    let startLoadPokemon = allPokemons.length + 1;
    let endLoadPokemon = startLoadPokemon + limitPokemonLoad;

    for (let i = startLoadPokemon; i < endLoadPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('Loaded pokemon', currentPokemon);

        allPokemons.push(currentPokemon);
        renderPokemonInfo(currentPokemon, i);
    }
}


function filterPokemons() {
    let search = document.getElementById('searchPokemon').value.toLowerCase();

    let pokedexContainer = document.getElementById('pokedex');
    pokedexContainer.innerHTML = ''; 

    for (let j = 0; j < allPokemons.length; j++) {
        let pokemon = allPokemons[j];
        let name = pokemon.name;
        
        if (name.toLowerCase().includes(search)) {
            renderPokemonInfo(pokemon, j + 1);
        }
    }
}





