window.addEventListener('load', function () {
	console.log('Pagina cargada!!! Espera... ¡¿Que haces en la consola?!');
});


//Al dar click actua
function eventoClick(data){
	document.getElementById('seccion_video_base').style.display = "block";
	console.log(data);
}

function eventoClick2(data){
	document.getElementById('seccion_video_base').style.display = "none";
	document.getElementById('video_1').pause();
	document.getElementById('video_1').currentTime = 0;
	console.log(data);
}