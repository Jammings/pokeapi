const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

const change$$ = document.querySelector('[class="change-shiny"]')

function searchPokemon(id) {
  fetch(baseUrl + id)
    .then((res) => res.json())
    .then((data) => pintarPokemon(data));
}
function contarPokemon(quantity) {
  for (let i = 1; i <= quantity; i++) {
    searchPokemon(i);
  }
}

const album$$ = document.createElement("div")

album$$.classList.add('album')

document.body.appendChild(album$$)



function pintarPokemon (pokemon) {
    const card$$ = document.createElement("div")
    const imagen$$ = document.createElement("img")
    const name$$ = document.createElement("h3")
    
    name$$.classList.add("name")
    card$$.classList.add("sprites")

    name$$.textContent = pokemon.name
    imagen$$.setAttribute("src", pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny)

    
    card$$.appendChild(imagen$$)
    card$$.appendChild(name$$)
    album$$.appendChild(card$$)
  
  }
contarPokemon(151);
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}