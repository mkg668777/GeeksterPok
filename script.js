const pokemonContainer = document.getElementById("pokemon-container");

// Pokémon API से डेटा लोड करें
fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(response => response.json())
    .then(data => {
        data.results.forEach((pokemon, index) => {
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokeData => {
                    const card = document.createElement("div");
                    card.classList.add("pokemon-card", pokeData.types[0].type.name);

                    card.innerHTML = `
                        <div class="card-inner">
                            <!-- Front Side -->
                            <div class="card-front">
                                <h3>#${pokeData.id}</h3>
                                <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
                                <p><strong>${pokeData.name.toUpperCase()}</strong></p>
                                <p>${pokeData.types.map(t => t.type.name.toUpperCase()).join(', ')}</p>
                            </div>
                            
                            <!-- Back Side -->
                            <div class="card-back">
                                <h3>Abilities</h3>
                                <ul>
                                    ${pokeData.abilities.map(a => `<li>${a.ability.name}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;

                    // Flip Card on Click
                    card.addEventListener("click", () => {
                        card.classList.toggle("flipped");
                    });

                    pokemonContainer.appendChild(card);
                });
        });
    })
    .catch(error => console.error("API Fetch Error:", error));
