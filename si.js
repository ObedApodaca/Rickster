var datos = {};
var primeraCelda = null;
var primeraId = null;

async function Extraer(){
    let response = await fetch("https://rickandmortyapi.com/api/character");
    datos = await response.json();
}

async function Mostrar(){
    await Extraer();

    let tabla = document.getElementById("tablaPersonajes");
    let celdas = tabla.getElementsByTagName("td");

    let usados = {};
    let index = 0;

    for(let x = 0; x < 2; x++){
        for(let i = 0; i < 8; i++){

            let r;
            do {
                r = Math.floor(Math.random() * 8);
            } while(usados[r] === 2);
            usados[r] = (usados[r] || 0) + 1;

            let nombre = document.createElement("h3");
            let img = document.createElement("img");

            nombre.textContent = datos.results[r].name;
            img.src = datos.results[r].image;
            img.style.display = "none";
            nombre.style.display = "none";
            img.style.transform = "scale(0.5)";

            if (!celdas[index]) return; // 🔥 evita el error

            celdas[index].innerHTML = "";
            celdas[index].appendChild(nombre);
            celdas[index].appendChild(img);

            celdas[index].onclick = function () {

                img.style.display = "block";
                nombre.style.display = "block";

                if (primeraCelda == null) {
                    primeraCelda = this;
                    primeraId = r;
                } else {
                    if (primeraId !== r) {
                        setTimeout(() => {
                            primeraCelda.children[0].style.display = "none";
                            primeraCelda.children[1].style.display = "none";
                            this.children[0].style.display = "none";
                            this.children[1].style.display = "none";
                        }, 800);
                    }
                    primeraCelda = null;
                    primeraId = null;
                }
            };

            index++;
        }
    }
}
