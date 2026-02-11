var datitos = {};

// Usamos async/await para asegurar que los datos lleguen
async function TraerApi() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        datitos = await response.json();
        console.log("Datos cargados");
    } catch (error) {
        console.error("Error cargando la API:", error);
    }
}

async function Mostrar() {
    let t = document.getElementById("tarjetas");
    t.innerHTML = ""; 

    for (let i = 0; i < datitos.results.length; i++) {
        const response = await fetch(datitos.results[i].url);
        const data = await response.json();

        var tarjeta = document.createElement("div");
        var nombre = document.createElement("h2");
        var img = document.createElement("img");
        var audio = document.createElement("audio");

        audio.src = data.cries.latest;
        img.src = data.sprites.front_default;
        nombre.innerHTML = data.name;

        img.addEventListener("click", function(event) {
            audio.play();
            Copiar(data);
        });

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(img);
        t.appendChild(tarjeta);
    }
}

function Copiar(data) {
    let e = document.getElementById("equipos");

    var pokemon = document.createElement("div");
    pokemon.className = "pokemon-equipo"; 
    var nombre = document.createElement("h2");
    var img = document.createElement("img");
        var audio = document.createElement("audio");

    img.src = data.sprites.front_default;
    nombre.innerHTML = data.name;

    img.addEventListener("click", () => audio.play());

    pokemon.appendChild(nombre);
    pokemon.appendChild(img);
    e.appendChild(pokemon);
}