window.addEventListener('load', function(){
});

var lvlContainer2 = [
	//obj = new myObjectCustom("Cube1", spriteObject.cube1, 3000, 640, 100, 100, "none", 2, 0, "colision", true, false),
	//obj = new myObjectCustom("Cube2", spriteObject.cube1, 3100, 640, 100, 100, "none", 2, 1, "colision", true, false),
	//obj = new myObjectCustom("Cube3", spriteObject.cube1, 3200, 640, 100, 100, "none", 2, 2, "colision", true, false),
	trigger = new myObjectCustom("trigger1", "", 2500, 440, 500, 500, event2, 2, 0, "trigger", true, false),
	targetina = new myObjectCustom("Tergetina", "./img/icon/targetina.png", 3102, 790, 50, 50, "none", 2, 2, "none", false, false),

	//btn = new myObjectCustom("btn1", spriteActive.finish, 3100, 780, 100, 50, trigger2, 2, 1, "triggerF", false, false),

	//obj = new myObjectCustom("Cube4", spriteObject.cube2, 3100, 630, 150, 150, "none", 2, 2, "colision", false, false),
];

function animation2(){
	zoomCamera("principal", camera, 0, 0, "activar", 2, 1, 0.1);
	console.log("hola");
	perderRevivir("morir", playerSelect, false, "player");
	buscarJson('./js/dialog/dialog2.json');
	execute = eventosExecute2;
	ejecutar[1] = true;
	config.lock = true;
	config.gravedad = true;
	gravity.fuerza = 10;
	gravity.delay = 300;
	playerSelect.vel = 4;
	playerSelect.x = 400;
	playerSelect.y = 790;
	savePos.x = 400;
	savePos.y = 790;
	skinMetodo("skinPlayer", skin, playerSelect, 1);
	//musicaPlay("musicPlay", "");
	generateLevel("move", lvlContainer2);
	fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
	bgAndFloorColor("bg-game", [1, 0, 0, 1], [16, 23, 255, 0.75], 5, "./img/fondo/bg_1.png");
	bgAndFloorColor("floor-game", [1, 0, 0, 1], [16, 23, 255, 0.9], 5, "./img/fondo/ground_1.png");

	setTimeout(function(){
		fundir("colorCinematic", 0.05, "black", 1, "out", "block", "none");
		zoomCamera("principal", camera, 300, -200, "desactivar", 1.0, 1.5, 1);
	}, 1000);

	setTimeout(function(){
		perderRevivir("revivir", playerSelect, true, "player");
		zoomCamera("principal", camera, 0, 0, "activar", 1.5, 1.0, 2);
		setTimeout(function(){
			config.lock = false;
		}, 2000);
	}, 2000);
}

function event2(idObj){
	config.lock = true;
	moveUpPlayer(65);
	moveUpPlayer(68);
	moveUpPlayer(32);
	moveUpPlayer(70);

	displayWindow("dialogos", "block");
	dialogo();

	lvlContainer2[idObj].type = "none";

	setTimeout(function(){
		//moveMetodo(camera, camera.x, camera.x - 500, camera.y, camera.y, 10);
	}, 1000);
}

function trigger2(idObj){
	config.lock = true;
	moveUpPlayer(65);
	moveUpPlayer(68);
	moveUpPlayer(32);
	moveUpPlayer(70);
	lvlContainer2[idObj].type = "none";
	fundir("colorCinematic", 0.1, "black", 0, "in", "block", "block");
	// console.log("Hola");

	setTimeout(function(){
		ejecutar[0] = false;
		eliminarObjectInScene("move", lvlContainer);
	}, 6000);

	setTimeout(function(){
		fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
		//bgAndFloorColor("bg-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/bg_1.png");
		//bgAndFloorColor("floor-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/ground_1.png");
		//moveMetodo(camera, camera.x, camera.x - 500, camera.y, camera.y, 10);
	}, 6200);
}

function eventosExecute2(eventExe){
	if(eventExe == 1){
		moveEntidad(playerSelect, 150, 10, "noMove");
	}

	//console.log(eventExe)
}