function renderPokemonHTML(i, colorpokemonOverview, pokemon, pokemonNumber, weight, type) {
    return `
        <div onclick="openPopUpPokedex(${i})" class="pokemonOverview" style="background-color: ${colorpokemonOverview};">
            <div class="pokemonOverviewHeadline">
                <h2>${pokemon.name}</h2>
                <p class="pokemonNumber">#${pokemonNumber}</p>
            </div>
        <div class="pokemonIMGBox">
            <img id="pokemonIMG" src="${pokemon.sprites.other.dream_world.front_default}" alt="">
        </div>
        <div class="seperator"></div>
        <div class="pokemonOverviewInfo">
            <p>Weight: ${weight}kg</p>
            <p>Type: ${type}</p>
        </div>
        </div>
    `;
}


function renderOpenPopUpPokedexHTML(colorpokemonOverview, pokemon) {
    return `
        <div class="openPopUpPokedex" style="background-color: ${colorpokemonOverview};">
            <div onclick="closePopUpPokedex()" class="headlineOpenPopUpPokedex">X</div>
            <h2>${pokemon.name}</h2>
            <div class="pokemonIMGBoxPopUp">
                <img onclick="previousPokemon()" class="arrow" src="img/pfeil_links.png">
                <img id="pokemonIMG" src="${pokemon.sprites.other.dream_world.front_default}" alt="">
                <img onclick="nextPokemon()" class="arrow" src="img/pfeil_rechts.png">
            </div>
            <div class="openPopUpPokedexInfo">
                <div class="statsAndAbilities">
                    <h2 onclick="showPokemonChart(statLabels, statValues)" id="stats" class="stats">Stats</h2>
                    <h2 onclick="showAbilities()" id="abilities" class="abilities">Abilities</h2>
                </div>
                <div class="chartContainer">
                    <div class="chart">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
                <div id="abilitiesContent"></div>
            </div>
        </div>
    `;
}
