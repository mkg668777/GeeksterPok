document.addEventListener("DOMContentLoaded", async () => {
    const pokemonContainer = document.getElementById("pokemon-container");

    async function fetchPokemon() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
            const data = await response.json();
            displayPokemon(data.results);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    }

    async function displayPokemon(pokemonList) {
        pokemonContainer.innerHTML = "";
        for (const pokemon of pokemonList) {
            const res = await fetch(pokemon.url);
            const pokeData = await res.json();
            createPokemonCard(pokeData);
        }
    }

    function createPokemonCard(pokemon) {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <h3>#${pokemon.id}</h3>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    <p>${pokemon.types.map(type => type.type.name).join(", ")}</p>
                </div>
                <div class="card-back">
                    <h3>Abilities</h3>
                    <ul>
                        ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        pokemonContainer.appendChild(card);
    }

    fetchPokemon();
});
