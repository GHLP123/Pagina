window.addEventListener('load', function () {
	console.log('Pagina cargada!!! Espera... ¡¿Que haces en la consola?!');
});

var seccion_open = document.querySelector("#ventana_emergente");
seccion_open.style.display = "none";

var imagen_cambio = document.querySelector("#imagen_cambio");
var texto_decriptivo = document.querySelector("#texto_decriptivo");
var enlaceCambiar = document.querySelector("#enlaceCambiar");

function img_canal_1(){
	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCeRQWnaozyzf-YnR4HejQhg?view_as=subscriber");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.textContent = `Hola, si vienes a ver información de mi canal principal pues lamento decirte que hasta el momento… No creo darle un pronto regreso de contenido. Más que nada es porque GD no me está dejando mucho que digamos, aparte no puedo dividir mi tiempo de estudio con esto que si consume algo de tiempo y paciencia, aparte con GD no se me dan buenas ideas y en cierto modo mi decoración todavía es mala. Bueno, aun así puedes ver mi contenido ya cargado, toca el enlace de abajo.`;
}

function img_canal_2_1(){
	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123games.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCpTaxiwEaAkZv0XIxorEv4A");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.textContent = `Buenas noticias, no será siempre pero intentare subir contenido cada cierto tiempo, espero les guste mi regreso, ya sé que ni siquiera les suena mi nombre pero espero me apoyen xD. Este canal está enfocado a juegos aquí no tocare a Geometry Dash pues porque ya tengo mi otro canal dedicado a eso. Espero de verdad que disfruten mis videos, agradezco su atención y su visita.`;
}

function img_events_1(){
	imagen_cambio.setAttribute("src", "img/recursos/youtube_novedades.png");
	enlaceCambiar.style.display = "none";
	
	texto_decriptivo.textContent = `¡¡¡Atención!!!, Si el video titulado “Ahhh Ahhh Me Doxean - Free Fire / GHLP123GAMES” alcanza más de 100 likes entonces hare un sorteo de una tarjeta de Google Play $100 MX, cuando llegue el momento diré los requisitos necesarios para participar (Solo es un requisito), no hay fecha limite solo por ser la primera vez así que aprovecha. A como yo lo veo participara poca gente así que tienes una gran oportunidad de ganar, suerte ;)`;
}

function canal_prncpl(){
	img_canal_1();

	seccion_open.style.display = "flex";
	seccion_open.style.animationName = "open";
	seccion_open.style.transform = "scale(1.0)";
	seccion_open.style.opacity = "100%";
}

function canal_scndr(){
	img_canal_2_1();

	seccion_open.style.display = "flex";
	seccion_open.style.animationName = "open";
	seccion_open.style.transform = "scale(1.0)";
	seccion_open.style.opacity = "100%";
}

function eventsForWeb(){
	img_events_1();

	seccion_open.style.display = "flex";
	seccion_open.style.animationName = "open";
	seccion_open.style.transform = "scale(1.0)";
	seccion_open.style.opacity = "100%";
}

function cerrar_section(){
	seccion_open.style.animationName = "back";
	seccion_open.style.transform = "scale(0.5)";
	seccion_open.style.opacity = "0%";
	
	setTimeout(function(){
		seccion_open.style.display = "none";
	}, 150);
}