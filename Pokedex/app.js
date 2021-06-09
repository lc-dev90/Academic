const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
const generatePokemonPromises = () =>
  Array(150)
    .fill()
    .map((_, index) =>
      fetch(getPokemonUrl(index + 1)).then((response) => response.json())
    );

const fetchPokemon = () => {
  const pokemonPromises = generatePokemonPromises();

  Promise.all(pokemonPromises).then((pokemons) => {
    const lisPokemons = pokemons.reduce((acumulator, pokemon) => {
      const types = pokemon.types.map((typeInfo) => typeInfo.type.name);

      acumulator += `
      <li class="card ${types[0]}">
      <img class="card-image" alt="${
        pokemon.name
      }" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">${pokemon.types
          .map((typeInfo) => typeInfo.type.name)
          .join(" | ")}</p>
      </li>`;
      return acumulator;
    }, "");

    const ul = document.querySelector('[data-js="pokedex"]');

    ul.innerHTML = lisPokemons;
  });
};

fetchPokemon();
