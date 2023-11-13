window.addEventListener('load', function(){
	//
});

function animation(){
	lock = true;
	gravity.fuerza = 5;
	gravity.delay = 300;
	playerSelect.vel = 2;
	bgAndFloorColor("bg-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/bg_1.png");
	bgAndFloorColor("floor-game", [0, 0, 0, 1], [1, 0, 0, 0.9], 1000, "./img/fondo/ground_1.png");
	skinMetodo("skinPlayer", skin, playerSelect, 0);
	musicaPlay("musicPlay", "./music/ambient/1262274_far-away.mp3");

	setTimeout(function(){
		fundir("colorCinematic", 0.4, "black", 1, "out", "block", "none");
	}, 1000);

	setTimeout(function(){
		lock = false;
	}, 5000);
}