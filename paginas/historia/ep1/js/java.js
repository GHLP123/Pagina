window.addEventListener('load', function(){
	console.log("Now?");

	setInterval(function(){
		fondoMetodo("bg-menu", 0.4, 0, arrayPositionBg);
		fondoMetodo("floor-menu", 0.2, 0, arrayPositionGround);
		gravityMetodo(playerSelect);
		allEntityMetodo("player", playerSelect);
		verifyMovePlayer(playerSelect, gravity.delay);
		cameraControl("move", camera, playerSelect);
	}, 10);
});

window.addEventListener('keydown', atajos);
window.addEventListener('keyup', upAtajos);

var skin = [
	defect = "./img/icon/defect.png",
	ghlp = "./img/icon/ghlp123.png"
];

class myPlayerCustom{
	constructor(nombre, img, x, y, radio, evento, vel, rotacion, direcion){
		this.nombre = nombre;
		this.img = img;
		this.x = x;
		this.y = y;
		this.radio = radio;
		this.evento = evento;
		this.vel = vel;
		this.rotacion = rotacion;
		this.direcion = direcion;
	}
}

var lock = false;

var camera = {
	x: 0,
	y: 0,
	evento: 0,
	lock: true
}

var gravity = {
	fuerza: 10,
	activa: true,
	delay: 160
}

var teclasPlayer = {
	space: false,
	a: false,
	d: false
}

var playerSelect = new myPlayerCustom("GHLP123", skin[1], 400, 750, 100, "none", 9, 0, "middle");

var arrayPositionBg = [
	bg1 = {
		in: 100,
		out: 100
		
	},

	bg2 = {
		in: 100,
		out: 100,
	}
];

var arrayPositionGround = [
	floor1 = {
		in: 15,
		out: 15,
	},

	floor2 = {
		in: 15,
		out: 15,
	}
];

// async

function fondoMetodo(id, velocity, i, array){
	var fondo = document.getElementById(`${id}`);
	
	if(array[i].in <= 0){
		array[i].in = array[i].out;
		fondo.style.backgroundPosition = `${array[i].in}%`;
	} else {
		array[i].in -= velocity;
		fondo.style.backgroundPosition = `${array[i].in}%`;
	}
}

function fondoMetodoGame(id, x, i, array){
	var fondo = document.getElementById(`${id}`);
	
	array[i].in = x;
	fondo.style.backgroundPosition = `${array[i].in}px`;
}

function gravityMetodo(obj){
	if(obj.y >= (1080 - 240) - (obj.radio / 2)){
		obj.y = (1080 - 240) - (obj.radio / 2);
		obj.rotacion = 0;
		obj.direcion = "middle";
		//obj.evento = "none";
	} else {
		if(gravity.activa == true){
			obj.y += gravity.fuerza;
		}
		//console.log();
	}
}

function allEntityMetodo(id, entidad){
	var entity = document.getElementById(`${id}`);

	if(entidad.evento == "salto"){
		if(entidad.direcion == "middle"){
			entidad.rotacion = 0;
		} else if(entidad.direcion == "d"){
			entidad.rotacion += 7;
		} else if(entidad.direcion == "a"){
			entidad.rotacion -= 7;
		}
	}

	entity.style.top = `${entidad.y}px`;
	entity.style.left = `${entidad.x}px`;
	entity.style.rotate = `${entidad.rotacion}deg`;
}

function skinMetodo(id, array, entity, num){
	var cambio = document.getElementById(`${id}`);

	entity.img = array[num];
	cambio.setAttribute("src", `${entity.img}`);
}

function musicaPlay(id, src){
	var music = document.getElementById("musicPlay");
	music.setAttribute("src", `${src}`);
	music.play();
}

function atajos(){
	var tecla = event.keyCode;
	console.log(event.keyCode);

	if(lock == false){
		// Espacio
		if(tecla == 32){
			movePlayer(tecla);
		}

		// A
		if(tecla == 65){
			movePlayer(tecla);
		}

		// D
		if(tecla == 68){
			movePlayer(tecla);
		}
	}
}

function upAtajos(){
	var tecla = event.keyCode;
	//console.log(event.keyCode);

	// Espacio
	if(tecla == 32){
		moveUpPlayer(tecla);
	}

	// A
	if(tecla == 65){
		moveUpPlayer(tecla);
	}

	// D
	if(tecla == 68){
		moveUpPlayer(tecla);
	}
}

function movePlayer(tecla){
	if(tecla == 65){
		teclasPlayer.a = true;
	}

	if(tecla == 68){
		teclasPlayer.d = true;
	}

	if(tecla == 32){
		teclasPlayer.space = true;
	}
}

function moveUpPlayer(tecla){
	if(tecla == 65){
		teclasPlayer.a = false;
	}

	if(tecla == 68){
		teclasPlayer.d = false;
	}

	if(tecla == 32){
		teclasPlayer.space = false;
	}
}

function verifyMovePlayer(entity, delay){
	if(teclasPlayer.a == true){
		entity.x -= entity.vel;
		entity.direcion = "a";
	}

	if(teclasPlayer.d == true){
		entity.x += entity.vel;
		entity.direcion = "d";
	}

	if(teclasPlayer.space == true && entity.evento == "none"){
		if(gravity.activa == true){
			entity.y -= entity.radio * 0.5;
			setTimeout(function(){
				entity.y -= entity.radio;
			}, 20);
			setTimeout(function(){
				entity.y -= entity.radio * 0.5;
			}, 40);
			gravity.activa = false;
			entity.evento = "salto";
		}

		setTimeout(function(){
			gravity.activa = true;
		}, 100);

		setTimeout(function(){
			entity.evento = "none";
		}, 300 + (delay - (gravity.fuerza * 10)));
	}
}

function cameraControl(id, camaraSelect, entity){
	if(camaraSelect.lock == true){
		var move = document.getElementById(`${id}`);
		if(entity.x > camaraSelect.x + 920){
			fondoMetodoGame("bg-game", 920 - entity.x, 1, arrayPositionBg);
			fondoMetodoGame("floor-game", 920 - entity.x, 1, arrayPositionGround);
			camaraSelect.x = 920 - entity.x;
			move.style.left = camaraSelect.x + "px";
		}
	}
}

function bgAndFloorColor(id, color, colorNext, velocity, image){
	var fondoFloor = document.getElementById(`${id}`);
	var verify = [false, false, false, false];

	fondoFloor.style.backgroundImage = `linear-gradient(rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]}), rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})), url(${image})`;
	//console.log("");

	var clock = setInterval(function(){
		if(verify[0] != true){
			if(color[0] <= colorNext[0]){
				color[0] += 1;
				//console.log(color[0]);
				if(color[0] >= colorNext[0]){
					verify[0] = true;
					//console.log("Terminado 1");
				}
			} else {
				color[0] -= 1;
				if(color[0] <= colorNext[0]){
					verify[0] = true;
					//console.log("Terminado 1");
				}
			}
		}

		if(verify[1] != true){
			if(color[1] <= colorNext[1]){
				color[1] += 1;
				if(color[1] >= colorNext[1]){
					verify[1] = true;
					//console.log("Terminado 2");
				}
			} else {
				color[1] -= 1;
				if(color[1] <= colorNext[1]){
					verify[1] = true;
					//console.log("Terminado 2");
				}
			}
		}

		if(verify[2] != true){
			if(color[2] <= colorNext[2]){
				color[2] += 1;
				if(color[2] >= colorNext[2]){
					verify[2] = true;
					//console.log("Terminado 3");
				}
			} else {
				color[2] -= 1;
				if(color[2] <= colorNext[2]){
					verify[2] = true;
					//console.log("Terminado 3");
				}
			}
		}

		if(verify[3] != true){
			if(color[3] <= colorNext[3]){
				color[3] += 0.1;
				if(color[3] >= colorNext[3]){
					verify[3] = true;
					//console.log("Terminado 3");
				}
			} else {
				color[3] -= 0.1;
				if(color[3] <= colorNext[3]){
					verify[3] = true;
					//console.log("Terminado 3");
				}
			}
		}

		fondoFloor.style.backgroundImage = `linear-gradient(rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]}), rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})), url(${image})`;
		//console.log(`linear-gradient(rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.25), rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.75)), url(${image});`);

		if(verify[0] == true && verify[1] == true && verify[2] == true){
			clearInterval(clock);
		}

		//console.log("Hola");
	}, velocity);
}

function displayWindow(id, display){
	var windowId = document.getElementById(`${id}`);

	setTimeout(function(){
		windowId.style.display = `${display}`;
	}, 1000);
}

function fundir(id, time, color, invisible, type, disIn, disOut){
	var fundido = document.getElementById(`${id}`);
	var verify = false;
	fundido.style.display = `${disIn}`;
	fundido.style.backgroundColor = `${color}`;
	fundido.style.opacity = `${invisible}`;
	var clock = setInterval(function(){
		if(verify != true){
			if(type == "in"){
				invisible += 0.01;
				if(invisible >= 1){
					verify = true;
					//console.log("Terminado");
				}
			} else {
				invisible -= 0.01;
				if(invisible <= 0){
					verify = true;
					//console.log("Terminado");
				}
			}

			if(verify == true){
				clearInterval(clock);
			}
		}

		fundido.style.opacity = `${invisible}`;
	}, time * 100);

	setTimeout(function(){
		fundido.style.display = `${disOut}`;
	}, (time * 1000) * 10 + 5);
}

var comenzar = document.getElementById("comenzar");

comenzar.addEventListener("click", function(){
	displayWindow("menu", "none");
	fundir("colorCinematic", 0.1, "black", 0, "in", "block", "block");
	displayWindow("principal", "block");
	setTimeout(function(){
		animation();
	}, 1000);
});