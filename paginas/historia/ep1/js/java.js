window.addEventListener('load', function(){
	console.log("Now?");

	setInterval(function(){
		checkButtonStates();
		fondoMetodo("bg-menu", 0.4, 0, arrayPositionBg, config);
		fondoMetodo("floor-menu", 0.2, 0, arrayPositionGround, config);
		gravityMetodo(playerSelect, true, playerSelect.radio);
		reloadThisLvl(ejecutar[0], lvlContainer);
		reloadThisLvl(ejecutar[1], lvlContainer2);
		allEntityMetodo("player", playerSelect);
		verifyMovePlayer(playerSelect, gravity.delay);
		cameraControl("move", camera, playerSelect);
	}, 10);
});

var myDialogGeneral = {};
var myDialogName = {};
var myDialogInfo = {};
var dialogIndex = 0;
var execute;
var dialogImage = document.getElementById("dialogImage");
var dialogName = document.getElementById("dialogName");
var dialogName = document.getElementById("dialogName");
var siguienteDialog = document.getElementById("siguienteDialog");

var revivirCircle = document.getElementById("revivirCircle");
var savePos = {
	x: 400,
	y: 790,
}

// Almacena el estado anterior de los botones
let previousButtonState = [];

function updateGamepad() {
    const gamepads = navigator.getGamepads();
    const pressedButtons = [];
    const releasedButtons = [];

    for (const gamepad of gamepads) {
        if (gamepad && gamepad.id.includes('Wireless Controller')) {
            // Iterar a través de los botones del mando
            for (let i = 0; i < gamepad.buttons.length; i++) {
                const button = gamepad.buttons[i];

                // Verificar si el botón estaba presionado anteriormente y ahora se ha dejado de presionar
                if(previousButtonState[i] && !button.pressed) {
                    releasedButtons.push(i);
                }

                // Verificar si el botón está siendo presionado actualmente
                if(button.pressed) {
                    pressedButtons.push(i);
                }

                // Actualizar el estado anterior del botón
                previousButtonState[i] = button.pressed;
            }
        }
    }

    return { pressedButtons, releasedButtons };
}

function checkButtonStates() {
    const { pressedButtons, releasedButtons } = updateGamepad();

    if(pressedButtons.length > 0){
    	for(var i = pressedButtons.length - 1; i >= 0; i--){
    		if(pressedButtons[i] == 15 && config.lock == false){
    			teclasPlayer.d = true;
    		}

    		if(pressedButtons[i] == 14 && config.lock == false){
    			teclasPlayer.a = true;
    		}

    		if(pressedButtons[i] == 0 && config.lock == false){
    			teclasPlayer.space = true;
    		}

    		if(pressedButtons[i] == 2 && config.lock == false){
    			teclasPlayer.f = true;
    		}

    		if(config.dialog == true && pressedButtons[i] == 0){
				if(siguienteDialog.style.display != "none"){
					dialogo();
				}
			}
    	}
        //console.log('Botones presionados:', pressedButtons);
        // Puedes realizar acciones específicas para botones presionados aquí
    }

    if (releasedButtons.length > 0) {
    	for(var i = releasedButtons.length - 1; i >= 0; i--){
    		if(releasedButtons[i] == 15 || config.lock == true){
    			teclasPlayer.d = false;
    		}

    		if(releasedButtons[i] == 14 || config.lock == true){
    			teclasPlayer.a = false;
    		}

    		if(releasedButtons[i] == 0 || config.lock == true){
    			teclasPlayer.space = false;
    		}

    		if(releasedButtons[i] == 2 || config.lock == true){
    			teclasPlayer.f = false;
    		}
    	}
        //console.log('Botones liberados:', releasedButtons);
        // Puedes realizar acciones específicas para botones liberados aquí
    }

    // Volver a llamar a la función en el próximo cuadro de animación
    //requestAnimationFrame(checkButtonStates);
}

if('getGamepads' in navigator) {
    checkButtonStates();
} else {
    console.error('La API Gamepad no está disponible en este navegador.');
}

window.addEventListener('keydown', atajos);
window.addEventListener('keyup', upAtajos);

function scale(id, time, scaleIn, scaleOut){
	var idOp = document.getElementById(id);
	var type = "none";

	if(scaleIn < scaleOut){
		type = "mas";
	} else {
		type = "menos";
	}

	var clock = setInterval(function(){
		if(type == "mas"){
			scaleIn += 0.1;
			if(scaleIn >= scaleOut){
				clearInterval(clock);
			}
		} else {
			scaleIn -= 0.1;
			if(scaleIn <= scaleOut){
				clearInterval(clock);
			}
		}

		idOp.style.scale = scaleIn;
	}, time);
}

function opacity(id, time, opIn, opOut){
	var idOp = document.getElementById(id);
	var type = "none";

	if(opIn < opOut){
		type = "mas";
	} else {
		type = "menos";
	}

	var clock = setInterval(function(){
		if(type == "mas"){
			opIn += 0.1;
			if(opIn >= opOut){
				clearInterval(clock);
			}
		} else {
			opIn -= 0.1;
			if(opIn <= opOut){
				clearInterval(clock);
			}
		}

		idOp.style.opacity = opIn;
	}, time);
}

function rotate(id, vueltas, time, orientacion, mult){
	var idRot = document.getElementById(`${id}`);
	var vuel = 0;
	var degRot = 0;

	var clock = setInterval(function(){
		if(degRot <= -320){
			degRot += 320;
			vuel += 1;
		} else if(degRot >= 320){
			degRot -= 320;
			vuel += 1;
		}

		if(orientacion == "izquierda"){
			degRot -= mult;
		} else if(orientacion == "derecha"){
			degRot += mult;
		}

		idRot.style.rotate = degRot + "deg";

		if(vuel >= vueltas){
			clearInterval(clock);
		}
	}, time);
}

function effectSound(id, src){
	var randomTempt = Math.floor(Math.random() * 1000);
	var generateIn = document.getElementById(`${id}`);
	var sound =  document.createElement("audio");
	sound.setAttribute("src", src);
	sound.setAttribute("id", `effectSound${randomTempt}`);
	generateIn.appendChild(sound);
	var miSound = document.getElementById(`effectSound${randomTempt}`);
	miSound.play();

	setTimeout(function(){
		miSound.remove();
	}, 2000);
}

function effectText(id, texto){
	var randomTempt = Math.floor(Math.random() * 1000);
	var generateIn = document.getElementById(`${id}`);
	var textTempt =  document.createElement("p");
	textTempt.setAttribute("id", `effectText${randomTempt}`);
	textTempt.setAttribute("class", `text-anim-2`);
	generateIn.appendChild(textTempt);
	var miText = document.getElementById(`effectText${randomTempt}`);
	miText.textContent = texto;

	setTimeout(function(){
		generateIn.removeChild(miText);
	}, 5800);
}

function zoomCamera(id, cameraSelect, x1, y1, question, zoomIn, zoomOut, time){
	cameraSelect.lock = false;
	var idZoom = document.getElementById(`${id}`);
	idZoom.style.left = `${cameraSelect.x}px`;
	idZoom.style.top = `${cameraSelect.y}px`;
	idZoom.style.scale = `${zoomIn}`;

	cameraSelect.x = x1;
	cameraSelect.y = y1;

	setTimeout(function(){
		idZoom.style.transition = `all ${time}s ease 0s`;
		idZoom.style.left = `${cameraSelect.x}px`;
		idZoom.style.top = `${cameraSelect.y}px`;
		idZoom.style.scale = `${zoomOut}`;
		setTimeout(function(){
			if(question == "activar"){
				cameraSelect.lock = true;
			} else {
				cameraSelect.lock = false;
			}
		}, time * 1000);
	}, 100);
}

function perderRevivir(solo, entity, sound, id){
	var idEntidad = document.getElementById(`${id}`);
	revivirCircle.style.transition = "all 0.5s ease 0s";
	revivirCircle.style.left = `${savePos.x}px`;
	revivirCircle.style.top = `${savePos.y}px`;
	revivirCircle.style.opacity = "0";
	revivirCircle.style.scale = "0.8";

	if(config.lock == true){
		config.lock = false;
		if(solo == "revivir"){
			setTimeout(function(){
				config.lock = true;
			}, 1500);
		} else if(solo != "revivir"){
			setTimeout(function(){
				config.lock = true;
			}, 2500);
		}
	}

	if(solo == "morir" || solo == "ambos"){
		setTimeout(function(){
			idEntidad.style.opacity = "0";
			revivirCircle.style.opacity = "1";
			revivirCircle.style.scale = "2.2";
			if(sound == true){
				effectSound("principal", "./music/effect/perder.mp3");
			}

			setTimeout(function(){
				revivirCircle.style.opacity = "0";
			}, 500);
		}, 100);
	}

	if(solo == "revivir" || solo == "ambos"){
		console.log(entity);
		entity.x = savePos.x;
		entity.y = savePos.y;
		timeTempt = 100;
		if(solo == "ambos"){
			timeTempt = 2000;
		}
		setTimeout(function(){
			if(sound == true){
				effectSound("principal", "./music/effect/revivir.mp3");
			}
			setTimeout(function(){
				revivirCircle.style.opacity = "1";
				revivirCircle.style.scale = "0.6";
			}, 200);

			setTimeout(function(){
				revivirCircle.style.opacity = "0";
				idEntidad.style.opacity = "1";
			}, 800);
		}, timeTempt);
	}
}

function selectLevelJava(id, documentJava){
	var crateIn = document.getElementById(`${id}`);

	var js = document.createElement("script");
	js.setAttribute("type", "text/javascript");
	js.setAttribute("src", `${documentJava}`);
}

function reloadThisLvl(question, lvlArrayObj){
	if(question == true){
		xAndYobjects("move", lvlArrayObj, playerSelect);
	}
}

function buscarJson(nombre){
	dialogIndex = 0;
	fetch(nombre)
	.then(response => response.json())
	.then(data => {
		myDialogGeneral = data;
		myDialogName = myDialogGeneral.nombres;
		myDialogInfo = myDialogGeneral.dialogos.dialogo;
		//console.log(myDialogName[0]);
		//console.log(myDialogInfo[0][2]);
	})
	.catch(error => console.error('Error', error));
}

function dialogo(){
	siguienteDialog.style.display = "none";
	if(myDialogInfo[dialogIndex][0] != "!terminado"){
		var myCountCharacter = myDialogInfo[dialogIndex][0].length;
		var myIterationCount = 0;

		dialogText.textContent = "";
		dialogImage.setAttribute("src", myDialogInfo[dialogIndex][1]);
		dialogName.textContent = myDialogName[myDialogInfo[dialogIndex][2]];
		execute(dialogIndex);

		//console.log(numExecute);
		//console.log(myDialogInfo[dialogIndex][1]);
		//console.log(myDialogName[myDialogInfo[dialogIndex][2]]);
		config.dialog = true;
		var clock = setInterval(function(){
			if(myCountCharacter >= myIterationCount){
				var myRandDialog = Math.floor(Math.random() * 4 + 1);
				dialogText.textContent = myDialogInfo[dialogIndex][0].slice(0, myIterationCount);
				myIterationCount++;
				if(myRandDialog == 1){
					effectSound("game", "./music/effect/effectText1.mp3");
				} else if(myRandDialog == 2){
					effectSound("game", "./music/effect/effectText2.mp3");
				}
			} else {
				siguienteDialog.style.display = "block";
				dialogIndex++;
				clearInterval(clock);
			}
		}, myDialogInfo[dialogIndex][3]);
	} else {
		execute(dialogIndex);
		execute("terminado");
		config.dialog = false;
		displayWindow("dialogos", "none");
	}

	console.log(dialogIndex);
}

siguienteDialog.addEventListener('click', function(){
	dialogo();
});

var ejecutar = [
	lvl_1 = false,
	lvl_2 = false
];

var spriteObject = {
	cube1: "./img/obj/Bloque1.webp",
	cube2: "./img/obj/Bloque2.png"
}

var spriteGlow = {
	glow1: "./img/glow/glow1.png",
	glow2: "./img/glow/glow2.png"
}

var spriteActive = {
	finish: "./img/activo/finish.png",
}

var skin = [
	defect = "./img/icon/defect.png",
	ghlp = "./img/icon/ghlp123.png"
];

class myObjectCustom{
	constructor(nombre, img, x, y, radio, radioImg, evento, vel, index, type, gravity, create){
		this.nombre = nombre;
		this.img = img;
		this.x = x;
		this.y = y;
		this.radio = radio;
		this.radioImg = radioImg;
		this.evento = evento;
		this.vel = vel;
		this.index = index;
		this.type = type;
		this.gravity = gravity;
		this.create = create;
	}
}

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

var config = {
	mover: true,
	gravedad: false,
	lock: false,
	position: false,
	dialog: false,
}

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
	d: false,
	f: false
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

var f11 = document.getElementById("f11");
var game = document.getElementById("game");

f11.addEventListener("click", function(){
	game.style.width = "2400px";
	game.style.height = "1080px";
	//game.requestFullscreen();
});

function fondoMetodo(id, velocity, i, array, condition){
	if(condition.mover == true){
		var fondo = document.getElementById(`${id}`);
		
		if(array[i].in <= 0){
			array[i].in = array[i].out;
			fondo.style.backgroundPosition = `${array[i].in}%`;
		} else {
			array[i].in -= velocity;
			fondo.style.backgroundPosition = `${array[i].in}%`;
		}
	}
}

function fondoMetodoGame(id, x, i, array){
	var fondo = document.getElementById(`${id}`);
	
	array[i].in = x;
	fondo.style.backgroundPosition = `${array[i].in}px`;
}

function gravityMetodo(obj, player, radio){
	if(config.gravedad == true){
		if(obj.y >= (1080 - 240) - (radio / 2)){
			obj.y = (1080 - 240) - (radio / 2);
			if(player == true){
				obj.rotacion = 0;
				obj.direcion = "middle";
				obj.evento = "none";
			}
		} else {
			if(gravity.activa == true){
				obj.y += gravity.fuerza;
			}
			//console.log();
		}

		// para el limite x
		if(obj.x <= 0 + (radio / 2)){
			obj.x = radio / 2;
		}
	}
}

function allEntityMetodo(id, entidad){
	var entity = document.getElementById(`${id}`);

	if(entidad.evento != "none"){
		if(entidad.direcion == "middle"){
			entidad.rotacion = 0;
		} else if(entidad.direcion == "d"){
			entidad.rotacion += 5;
		} else if(entidad.direcion == "a"){
			entidad.rotacion -= 5;
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

// Variables de Botones Tactiles
var btnA = document.getElementById("btnA");
var btnD = document.getElementById("btnD");
var btnSpace = document.getElementById("btnSpace");
var btnF = document.getElementById("btnF");


// Enter touch
if(config.lock == false){
	btnA.addEventListener("touchstart", function(){
		movePlayer(65);
	});

	btnD.addEventListener("touchstart", function(){
		movePlayer(68);
	});

	btnSpace.addEventListener("touchstart", function(){
		movePlayer(32);
	});

	btnF.addEventListener("touchstart", function(){
		movePlayer(70);
	});

	// Fin Touch
	btnA.addEventListener("touchend", function(){
		moveUpPlayer(65);
	});

	btnD.addEventListener("touchend", function(){
		moveUpPlayer(68);
	});

	btnSpace.addEventListener("touchend", function(){
		moveUpPlayer(32);
	});

	btnF.addEventListener("touchend", function(){
		moveUpPlayer(70);
	});
}


function atajos(){
	var tecla = event.keyCode;
	//console.log(event.keyCode);

	if(config.lock == false){
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

		// F
		if(tecla == 70){
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
		if(config.dialog == true){
			if(siguienteDialog.style.display != "none"){
				dialogo();
			}
		}
	}

	// A
	if(tecla == 65){
		moveUpPlayer(tecla);
	}

	// D
	if(tecla == 68){
		moveUpPlayer(tecla);
	}

	// F
	if(tecla == 70){
		moveUpPlayer(tecla);
	}
}

function movePlayer(tecla){
	if(config.lock == false){
		if(tecla == 65){
			teclasPlayer.a = true;
		}

		if(tecla == 68){
			teclasPlayer.d = true;
		}

		if(tecla == 32){
			teclasPlayer.space = true;
		}

		if(tecla == 70){
			teclasPlayer.f = true;
		}
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

	if(tecla == 70){
		teclasPlayer.f = false;
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
		setTimeout(function(){
			if(gravity.activa == true){
				entity.y -= entity.radio * 0.5;
				setTimeout(function(){
					if(entity.evento != "pegado"){
						entity.y -= entity.radio;
					}
				}, 20);
				setTimeout(function(){
					if(entity.evento != "pegado"){
						entity.y -= entity.radio * 0.5;
					}
				}, 40);
				gravity.activa = false;
				entity.evento = "salto";
			}

			setTimeout(function(){
				gravity.activa = true;
			}, 100);

			setTimeout(function(){
			}, 300 + (delay - (gravity.fuerza * 10)));
		}, 35);
	}

	if(config.position == true){
		if(entity.x != entity.y){
			console.log(`Entidad X: ${entity.x}, Y: ${entity.y}`);
		}
	}
}

function cameraControl(id, camaraSelect, entity){
	var move = document.getElementById(`${id}`);

	if(camaraSelect.lock == true){
		if(entity.x > camaraSelect.x + 920){
			fondoMetodoGame("bg-game", 920 - entity.x, 1, arrayPositionBg);
			fondoMetodoGame("floor-game", 920 - entity.x, 1, arrayPositionGround);
			camaraSelect.x = 920 - entity.x;
			// console.log(920 - entity.x)
		} else {
			if(camaraSelect.x < 920){
				camaraSelect.x = 0;
			}
		}
	}

	move.style.left = camaraSelect.x + "px";
}

/*function moveMetodo(obj, xIn, xOut, yIn, yOut, vel){
	var validar = [false, false];
	console.log(xIn);
	console.log(xOut);
	console.log(yIn);
	console.log(yOut);
	var clock = setInterval(function(){
		if(xIn != xOut){
			obj.x = 920 - xIn;
			if(obj.x < 920 - xOut){
				//console.log("Hola");
				obj.x -= vel;
			} else {
				//console.log("Hola");
				obj.x += vel;
			}
		} else {
			console.log(obj.x + " " + xOut);
			validar[0] = true;
		}

		if(yIn != yOut){
			obj.y = yIn;
			if(obj.y < yOut){
				obj.y += vel;
			} else {
				obj.y -= vel;
			}
		} else {
			console.log(obj.y + " " + yOut);
			validar[1] = true;
		}

		if(validar[0] == true && validar[1] == true){
			clearInterval(clock);
		}
	}, 100);
	fondoMetodoGame("bg-game", 920 - obj.x, 1, arrayPositionBg);
	fondoMetodoGame("floor-game", 920 - obj.x, 1, arrayPositionGround);
}*/

function moveEntidad(entity, i, time, question){
	var j = 0;
	var clock = setInterval(function(){
		if(j < i){
			entity.x += entity.vel;
		} else {
			clearInterval(clock);
			if(question == "move"){
				config.lock = false;
			}
		}

		j++;
	}, time);
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

		fondoFloor.style.backgroundImage = `linear-gradient(rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3] - 0.2}), rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})), url(${image})`;
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
	}, 1500);
});

function generateLevel(id, entity){
	var generateIn = document.getElementById(`${id}`);
	var i = 0;

	entity.forEach(function(){
		if(entity[i].create == false){
			// Generar el primer cuadro de creacion
			var mainTempt1 = document.createElement("div");
			mainTempt1.setAttribute("id", `${entity[i].nombre}`);
			mainTempt1.setAttribute("class", `player-x movible b1`);
			generateIn.appendChild(mainTempt1);
			var temptMain1 = document.getElementById(`${entity[i].nombre}`);
			temptMain1.style.top = `${(entity[i].y - (entity.radioImg / 2))}px`;
			temptMain1.style.left = `${(entity[i].x - (entity.radioImg / 2))}px`;

			// Generar el primer cuadro de creacion
			var mainTempt2 = document.createElement("div");
			mainTempt2.setAttribute("id", `2_${entity[i].nombre}_${entity[i].index}`);
			mainTempt2.setAttribute("class", `player-y`);
			temptMain1.appendChild(mainTempt2);
			var temptMain2 = document.getElementById(`2_${entity[i].nombre}_${entity[i].index}`);

			// Generar el primer cuadro de creacion
			var mainTempt3 = document.createElement("img");
			mainTempt3.setAttribute("id", `3_${entity[i].nombre}_${entity[i].index}`);
			mainTempt3.setAttribute("src", `${entity[i].img}`);
			temptMain2.appendChild(mainTempt3);
			var temptMain3 = document.getElementById(`3_${entity[i].nombre}_${entity[i].index}`);
			temptMain3.style.width = `${entity[i].radioImg}px`;

			entity[i].create = true;
			//console.log("funciono");
		}

		i++;
	});
}

function xAndYobjects(id, entity, entityPlayer){
	var reloadIn = document.getElementById(`${id}`);
	var i = 0;

	entity.forEach(function(){
		if(entity[i].create == true){
			var temptSelectObj = document.getElementById(`${entity[i].nombre}`);

			if(entity[i].gravity != true){
				if(entity[i].y - (entity[i].radioImg / 2) != temptSelectObj.style.top){
					temptSelectObj.style.top = `${entity[i].y}px`;
					//console.log("funciono");
				}
			} else {
				gravityMetodo(entity[i], false, entity[i].radioImg);
				temptSelectObj.style.top = `${entity[i].y}px`;
			}

			if(entity[i].x - (entity[i].radioImg / 2) != temptSelectObj.style.top){
				temptSelectObj.style.left = `${entity[i].x}px`;
				//console.log("funciono");
			}

			if(entity[i].type == "triggerF"){
				if(entity[i].x + (entity[i].radio / 2) >= entityPlayer.x - (entityPlayer.radio / 2)){
					if(entity[i].x - (entity[i].radio / 2) <= entityPlayer.x + (entityPlayer.radio / 2)){
						if(entity[i].y - (entity[i].radio / 2) <= entityPlayer.y + (entityPlayer.radio / 2)){
							if(entity[i].y + (entity[i].radio / 2) >= entityPlayer.y - (entityPlayer.radio / 2)){
								if(teclasPlayer.f == true){
									entity[i].evento(entity[i].index);
								}
							}
						}
					}
				}
			}

			if(entity[i].type == "colision" || entity[i].type == "trigger"){
				if(entity[i].x + (entity[i].radio / 2) >= entityPlayer.x - (entityPlayer.radio / 2)){
					if(entity[i].x + 1 <= entityPlayer.x - (entityPlayer.radio / 2)){
						if(entity[i].y - (entity[i].radio / 2) <= (entityPlayer.y - (entityPlayer.radio / 2))){
							if(entity[i].y - 1 >= entityPlayer.y - (entityPlayer.radio / 2)){
								if(entity[i].type == "colision"){
									entityPlayer.x = entity[i].x + (entity[i].radio);
									//entityPlayer.x += entityPlayer.vel;
								} else {
									if(entity[i].type == "trigger"){
										entity[i].evento(entity[i].index);
									}
								}
								//console.log("true");
							}
						}
					}
				}

				if(entity[i].x - (entity[i].radio / 2) <= entityPlayer.x + (entityPlayer.radio / 2)){
					if(entity[i].x - 1 >= entityPlayer.x + (entityPlayer.radio / 2)){
						if(entity[i].y - (entity[i].radio / 2) <= (entityPlayer.y - (entityPlayer.radio / 2))){
							if(entity[i].y - 1 >= entityPlayer.y - (entityPlayer.radio / 2)){
								if(entity[i].type == "colision"){
									entityPlayer.x = entity[i].x - (entity[i].radio);
									//entityPlayer.x -= entityPlayer.vel;
								} else {
									if(entity[i].type == "trigger"){
										entity[i].evento(entity[i].index);
									}
								}
								// console.log("true");
							}
						}
					}
				}

				if(entity[i].y - (entity[i].radio / 2 -2) <= entityPlayer.y + (entityPlayer.radio / 2 -2)){
					if(entity[i].y - 1 >= entityPlayer.y + (entityPlayer.radio / 2 -2)){
						if(entity[i].x - (entity[i].radio / 2.2) <= (entityPlayer.x + (entityPlayer.radio / 2.2))){
							if(entity[i].x + (entity[i].radio / 2.2) >= entityPlayer.x - (entityPlayer.radio / 2.2)){
								if(entity[i].type == "colision"){
									entityPlayer.y = entity[i].y - (entity[i].radio);
									//entityPlayer.y -= entityPlayer.vel;
									var j = i;
									entityPlayer.evento = "none";
									entityPlayer.rotacion = 0;
								} else {
									if(entity[i].type == "trigger"){
										entity[i].evento(entity[i].index);
									}
								}
								//console.log("true");
							}
						}
					}
				}

				if(entity[i].y + (entity[i].radio / 2 -2) >= entityPlayer.y - (entityPlayer.radio / 2 -2)){
					if(entity[i].y + 1 <= entityPlayer.y - (entityPlayer.radio / 2 -2)){
						if(entity[i].x - (entity[i].radio / 2.2) <= (entityPlayer.x + (entityPlayer.radio / 2.2))){
							if(entity[i].x + (entity[i].radio / 2.2) >= entityPlayer.x - (entityPlayer.radio / 2.2)){
								if(entity[i].type == "colision"){
									entityPlayer.y = entity[i].y + (entity[i].radio);
									//entityPlayer.y += entityPlayer.vel;
									entityPlayer.evento = "pegado";
									entityPlayer.rotacion = 0;
								} else {
									if(entity[i].type == "trigger"){
										entity[i].evento(entity[i].index);
									}
								}
							}
						}
					}
				}
			}
		}

		i++;
	});
}

function eliminarObjectInScene(idPadre, arrayObj){
	var i = 0;

	arrayObj.forEach(function(){
		var id = document.getElementById(`${arrayObj[i].nombre}`);

		if(arrayObj[i].create == true){
			arrayObj[i].create = false;
			id.remove();
		}

		i++;
	});
}