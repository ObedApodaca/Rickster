var datos = {};
var count = 0;
function Extraer(){
	fetch("https://rickandmortyapi.com/api/character")
	.then(response => response.json())
	.then(data => datos = data);
}

async function Mostrar(){
        console.log("si");
	let t = document.getElementById("tarjetas");
	t.innerHTML = "";
	for (let i = 0; i < datos.results.length; i++){
		await fetch(datos.results[i].url)
		.then(response => response.json())
		.then(data => {
            console.log("si");
		var tarjeta = document.createElement("div");
		var nombre = document.createElement("h2");
		var img = document.createElement("img");
		var audio = document.createElement("audio");
		var boton = document.createElement("button");
		var boton2 = document.createElement("button");
		nombre.innerHTML = datos.results[i].name;
		boton.textContent = "Shiny";
		boton2.textContent = "Normal";
		boton.addEventListener("click", () => {
		});
		boton2.addEventListener("click", () => {
		});
		boton.style.margin = "10px";
		boton.style.backgroundColor = "darkblue";
		boton.style.color = "white";
		boton2.style.margin = "10px";
		boton2.style.backgroundColor = "darkblue";
		boton2.style.color = "white";

		img.addEventListener("click", function(event){
			audio.play();
			count++;
			if(count <= 6){copiar(data) } else if (count <= 12) {copiar2(data)} else alert("Equipos llenos");
			
		});
		tarjeta.appendChild(nombre);
		tarjeta.appendChild(img);
		tarjeta.appendChild(boton), tarjeta.appendChild(boton2);
		t.appendChild(tarjeta);
		});
	}
}
async function copiar(data){
		let t = document.getElementById("equipo1");
		var tarjeta = document.createElement("div");
		var nombre = document.createElement("h2");
		var img = document.createElement("img");
		var audio = document.createElement("audio");
		nombre.innerHTML = data.name;
		img.src = data.sprites.front_default;
		audio.src = data.cries.latest;
		img.addEventListener("click", function(event){
			audio.play();
		});
		tarjeta.appendChild(nombre);
		tarjeta.appendChild(img);
		t.appendChild(tarjeta);

}
async function copiar2(data){
		let t = document.getElementById("equipo2");
		var tarjeta = document.createElement("div");
		var nombre = document.createElement("h2");
		var img = document.createElement("img");
		var audio = document.createElement("audio");
		nombre.innerHTML = data.name;
		img.src = data.sprites.front_default;
		audio.src = data.cries.latest;
		img.addEventListener("click", function(event){
			audio.play();
		});
		tarjeta.appendChild(nombre);
		tarjeta.appendChild(img);
		t.appendChild(tarjeta);

}