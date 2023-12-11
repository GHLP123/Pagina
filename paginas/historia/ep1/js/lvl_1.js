window.addEventListener('load', function(){
});

var lvlContainer = [
	//obj = new myObjectCustom("Cube1", spriteObject.cube1, 3000, 640, 100, 100, "none", 2, 0, "colision", true, false),
	//obj = new myObjectCustom("Cube2", spriteObject.cube1, 3100, 640, 100, 100, "none", 2, 1, "colision", true, false),
	//obj = new myObjectCustom("Cube3", spriteObject.cube1, 3200, 640, 100, 100, "none", 2, 2, "colision", true, false),
	obj = new myObjectCustom("obj1", spriteObject.cube2, 4800, 790, 100, 100, "none", 2, 2, "colision", false, false),

	glow1 = new myObjectCustom("glow1", spriteGlow.glow1, 960, 440, 150, 200, "none", 2, 7, "none", false, false),
	glow2 = new myObjectCustom("glow2", spriteGlow.glow2, 960, 440, 150, 200, "none", 2, 8, "none", false, false),
];

function animation(){
	buscarJson('./js/dialog/dialog1.json');
	perderRevivir("morir", playerSelect, false, "player");
	execute = eventosExecute1;
	ejecutar[0] = true;
	config.lock = true;
	config.gravedad = true;
	gravity.fuerza = 5;
	gravity.delay = 300;
	playerSelect.vel = 4;
	bgAndFloorColor("bg-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/bg_0.png");
	bgAndFloorColor("floor-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/ground_0.png");
	skinMetodo("skinPlayer", skin, playerSelect, 0);
	//musicaPlay("musicPlay", "./music/ambient/1262274_far-away.mp3");
	generateLevel("move", lvlContainer);
	opacity("glow1", 1, 1, 0);
	opacity("glow2", 1, 1, 0);

	setTimeout(function(){
		dialogo();
		fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
		//config.mover = false;
		//config.lock = false;

		setTimeout(function(){}, 500);
	}, 1000);
}

function event1(idObj){
	config.lock = true;
	moveUpPlayer(65);
	moveUpPlayer(68);
	moveUpPlayer(32);
	moveUpPlayer(70);
	lvlContainer[idObj].type = "none";
	// console.log("Hola");

	setTimeout(function(){
		moveEntidad(playerSelect, 275, 15, "move");
		//moveMetodo(camera, camera.x, camera.x - 500, camera.y, camera.y, 10);
	}, 1000);
}

function trigger1(idObj){
	lvlContainer[idObj].type = "none";
	fundir("colorCinematic", 0.2, "black", 0, "in", "block", "block");
	// console.log("Hola");

	setTimeout(function(){
		ejecutar[0] = false;
		eliminarObjectInScene("move", lvlContainer);
		animation2();
	}, 4000);

	/*setTimeout(function(){
		fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
		//bgAndFloorColor("bg-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/bg_1.png");
		//bgAndFloorColor("floor-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/ground_1.png");
		//moveMetodo(camera, camera.x, camera.x - 500, camera.y, camera.y, 10);
	}, 6200);*/
}

function eventosExecute1(eventExe){
	displayWindow("dialogos", "block");
	if(eventExe == 5){
		opacity("glow2", 300, 0, 0.5);
		setTimeout(function(){
			opacity("glow2", 300, 0.5, 0);
		}, 1500);
	}

	if(eventExe == 6){
		opacity("glow1", 100, 0, 1);
		rotate("glow1", 5, 100, "derecha", 5);
	}

	if(eventExe == 8){
		scale("glow1", 20, 1, 9);
		fundir("colorCinematic", 0.2, "white", 0, "in", "block", "block");
	}

	if(eventExe == 9){
		opacity("glow1", 10, 1, 0);
		fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
		savePos.x = 920;
		savePos.y = 790;
		perderRevivir("revivir", playerSelect, true, "player");
		playerSelect.x = 960;
		playerSelect.y = 790;
	}

	if(eventExe == 11){
		moveEntidad(playerSelect, 900, 50, "none");
	}

	if(eventExe == 34){
		zoomCamera("principal", camera, 0, -500, "activar", 1, 2, 0.5);
		fundir("colorCinematic", 0.3, "white", 0, "in", "block", "block");
	}

	if(eventExe == 35){
		ejecutar[0] = false;
		eliminarObjectInScene("move", lvlContainer);
		animation2();
	}
	/*if(eventExe == 0){
		effectText("textGenerate", "¿?: Todo Comenzo en la nada");
		setTimeout(function(){
			dialogo();
		}, 6000);
	}
	if(eventExe == 1){
		effectText("textGenerate", "¿?: Sin luz y en completa obscuridad");
		setTimeout(function(){
			dialogo();
		}, 6000);
	}
	if(eventExe == 2){
		effectText("textGenerate", "¿?: Sin ningun rastro de Vida...");
		setTimeout(function(){
			dialogo();
			displayWindow("dialogos", "block");
		}, 6000);
	}*/

	//console.log(eventExe)
}