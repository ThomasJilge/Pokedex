let currentPokemon;
let allPokemons = [];
let limitPokemon = 30;
let limitPokemonLoad = 10;
let currentPokemonIndex = 0;


let colors = {
    fire: "#FB6C6C",
    grass: "#69e371",
    electric: "#ead04e",
    water: "#79caef",
    ground: "#7c7a78",
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

        allPokemons.push(currentPokemon);
        renderPokemonInfo(currentPokemon, i);
    }
}


function renderPokemonInfo(pokemon, i) {
    let type = pokemon.types[0].type.name;
    let weight = pokemon.weight;
    let colorpokemonOverview = colors[type];
    let pokemonNumber = formatPokemonNumber(i); 

    let pokemonHTML = renderPokemonHTML(i, colorpokemonOverview, pokemon, pokemonNumber, weight, type);

    let pokedexContainer = document.getElementById('pokedex');
    pokedexContainer.innerHTML += pokemonHTML;
}


function formatPokemonNumber(number) {
    if (number < 10) {
        return `00${number}`;
    } else if (number < 100) {
        return `0${number}`;
    } else {
        return `${number}`;
    }
}


function openPopUpPokedex(k) {
    currentPokemonIndex = k - 1;
    let pokemon = allPokemons[currentPokemonIndex];
    let type = pokemon.types[0].type.name;
    let colorpokemonOverview = colors[type];

    statLabels = ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'];
    statValues = [
        pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat, pokemon.stats[3].base_stat, pokemon.stats[4].base_stat, pokemon.stats[5].base_stat
    ];

    pokemonPopup(colorpokemonOverview, pokemon);
}


function pokemonPopup(color, pokemon) {
    document.getElementById('openPopUpPokedex').classList.remove('displayNone');
    
    let openPopUpPokedexHTML = renderOpenPopUpPokedexHTML(color, pokemon);

    let pokedexContainer = document.getElementById('openPopUpPokedex');
    pokedexContainer.innerHTML = openPopUpPokedexHTML;

    showPokemonChart(statLabels, statValues);
}


function closePopUpPokedex() {
    document.getElementById('openPopUpPokedex').classList.add('displayNone');
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

        if (name.toLowerCase().startsWith(search)) {
            renderPokemonInfo(pokemon, j + 1);
        }
    }
}


function nextPokemon() {
    currentPokemonIndex++;
    if (currentPokemonIndex >= allPokemons.length) {
        currentPokemonIndex = 0;
    }
    openPopUpPokedex(currentPokemonIndex + 1); 
}


function previousPokemon() {
    currentPokemonIndex--;
    if (currentPokemonIndex < 0) {
        currentPokemonIndex = allPokemons.length - 1;
    }
    openPopUpPokedex(currentPokemonIndex + 1); 
}


function showAbilities() {
    let pokemon = allPokemons[currentPokemonIndex];
    let abilities = pokemon.abilities.map(ability => ability.ability.name).join('<br>');
    document.getElementById('abilitiesContent').innerHTML = `<p class="abilitiesHTML">${abilities}</p>`;

    let statsPokemon = document.querySelector('.chart');
    let abilitiesPokemon = document.querySelector('.abilities'); 

    statsPokemon.classList.add('displayNone');
    abilitiesPokemon.classList.remove('displayNone');
}






























