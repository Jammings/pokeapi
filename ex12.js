const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const change$$ = document.querySelector('[class="change-shiny"]')

function searchPokemon (id) {
  fetch(baseUrl + id)
    .then(res => res.json())
    .then(data => pintarPokemon(data))
}
function contarPokemon(quantity) {
  // Elimina todos los elementos hijos del contenedor
  album$$.innerHTML = '';

  // Agrega los nuevos elementos Pokémon
  for (let i = 1; i <= quantity; i++) {
    searchPokemon(i);
  }
}

const album$$ = document.createElement('div')

album$$.classList.add('album')

document.body.appendChild(album$$)

function pintarPokemon(pokemon) {

  const card$$ = document.createElement("div");
  const imagen$$ = document.createElement("img");
  const name$$ = document.createElement("h3");

  name$$.classList.add("name");
  card$$.classList.add("sprites");

  name$$.textContent = pokemon.name;
  
  // Verifica si la clase atrapalosYa está presente y elige la imagen correspondiente
  if (document.getElementById("atrapalosTodos").classList.contains("shiny")) {
    imagen$$.setAttribute('src', pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny
    );
  } else {
    // Imagen normal si no está presente la clase shiny
    imagen$$.setAttribute('src', pokemon.sprites.versions['generation-v']['black-white'].animated.front_default
    );
  }

  card$$.appendChild(imagen$$);
  card$$.appendChild(name$$);
  album$$.appendChild(card$$);
}
contarPokemon(151)




