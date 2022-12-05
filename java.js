window.addEventListener('load', function () {
	console.log('Pagina cargada!!! Espera... ¡¿Que haces en la consola?!');

	createdBoxRed();
});

var img_close = document.getElementById("img_close");
var seccion_open = document.querySelector("#ventana_emergente");
var ventana_emergente_2 = document.getElementById("ventana_emergente_2");
var createdAllRed = document.getElementById("createdAllRed")

var imagen_cambio = document.querySelector("#imagen_cambio");
var texto_decriptivo = document.querySelector("#texto_decriptivo");
var enlaceCambiar = document.querySelector("#enlaceCambiar");
var texto_titulo = document.getElementById("texto_titulo");
var text_ventana = document.getElementById("text_ventana");

var imgSection = document.getElementById("imgSection");
var imgInsertSection1 = document.getElementById("imgInsertSection1");
var imgInsertSection2 = document.getElementById("imgInsertSection2");
var imgInsertSection3 = document.getElementById("imgInsertSection3");
var imgInsertSection4 = document.getElementById("imgInsertSection4");

function generarImgSection(valor){
	if(valor == true){
		imgSection.style.display = "block";
	} else {
		imgSection.style.display = "none";
	}

	imgInsertSection1.setAttribute("src", "./img/videos/canal2/img1.png");
	imgInsertSection2.setAttribute("src", "./img/videos/canal2/img2.png");
	imgInsertSection3.setAttribute("src", "./img/videos/canal2/img3.png");
	imgInsertSection4.setAttribute("src", "./img/videos/canal2/img4.png");
}

function generarImgSectionNovedades(valor){
	if(valor == true){
		imgSection.style.display = "block";
	} else {
		imgSection.style.display = "none";
	}

	imgInsertSection1.setAttribute("src", "./img/videos/novedades/img1.png");
	imgInsertSection2.setAttribute("src", "");
	imgInsertSection3.setAttribute("src", "");
	imgInsertSection4.setAttribute("src", "");
}


function img_canal_1(){
	text_ventana.textContent = "Canal: GHLP 123";
	texto_titulo.textContent = "Resumen";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCeRQWnaozyzf-YnR4HejQhg?view_as=subscriber");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.innerHTML = `Hola, si vienes a ver información de mi canal principal pues lamento decirte que hasta el momento… No creo darle un pronto regreso de contenido. Más que nada es porque GD no me está dejando mucho que digamos, aparte no puedo dividir mi tiempo de estudio con esto que si consume algo de tiempo y paciencia, aparte con GD no se me dan buenas ideas y en cierto modo mi decoración todavía es mala. Bueno, aun así puedes ver mi contenido ya cargado, toca el enlace de abajo.`;
}

function img_canal_2_1(){
	text_ventana.textContent = "Canal: GHLP123 GAMES";
	texto_titulo.textContent = "Resumen";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123games.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCpTaxiwEaAkZv0XIxorEv4A");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.innerHTML = `Buenas noticias, no será siempre pero intentare subir contenido cada cierto tiempo, espero les guste mi regreso, ya sé que ni siquiera les suena mi nombre pero espero me apoyen xD. Este canal está enfocado a juegos aquí no tocare a Geometry Dash pues porque ya tengo mi otro canal dedicado a eso. Espero de verdad que disfruten mis videos, agradezco su atención y su visita.`;

	generarImgSection(true);
}

function img_events_1(){
	text_ventana.textContent = "Novedades";
	texto_titulo.textContent = "¡¡¡Evento Activo!!!";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_novedades.png");
	enlaceCambiar.style.display = "none";
	
	texto_decriptivo.innerHTML = `¡¡¡Atención!!!, Si el video titulado “Ahhh Ahhh Me Doxean - Free Fire / GHLP123GAMES” alcanza más de 100 likes entonces hare un sorteo de una tarjeta de Google Play $100 MX, cuando llegue el momento diré los requisitos necesarios para participar (Solo es un requisito), no hay fecha limite solo por ser la primera vez así que aprovecha. A como yo lo veo participara poca gente así que tienes una gran oportunidad de ganar, suerte ;)`;

	generarImgSectionNovedades(true);
}

function img_copyright(){
	text_ventana.textContent = "Derechos De Autor y Políticas";
	texto_titulo.textContent = "Copyright";

	imagen_cambio.setAttribute("src", "img/recursos/copyright_500.png");
	enlaceCambiar.style.display = "none";

	texto_decriptivo.innerHTML = "<h1>Interno</h1>"
	texto_decriptivo.innerHTML += "1.- Esta web no recopilara datos de ninguna información. Solo se creó con el fin de auto publicidad para GHLP123 && GHLP123GAMES, esta web jamás te pedirá datos ni accesos a cuentas, algo a recalcar es que esta página está alojada el GitHub lo cual es un \"Repositorio\" seguro.";
	texto_decriptivo.innerHTML += "<br>2.- Las redes sociales que aparecen ahí son totalmente mías, hay algunas que faltan pero lo más probable es que estén en el canal ya sea el 1ro o el 2do, si ves una cuenta sospechosa haciéndose pasar por mí, puedes enviarme un Gmail al correo: alternative2258@gmail.com me ayudaría mucho saber tal información.";

	texto_decriptivo.innerHTML += "<h1>Externo</h1>";
	texto_decriptivo.innerHTML += "1.- Esta página solo podrá promocionar a alguien que a GHLP123 && GHLP123GAMES le hayan autorizado.";
	texto_decriptivo.innerHTML += "<br>2.- Los eventos serán explicados en alguna red social donde se explicara el proceso, meta o alguna otra dinámica, para saber si hay algún evento actualmente puedes ir a la sección de <a onclick=\"eventsForWeb(true)\">Novedades</a> para saber información previa del evento. En caso de que no haiga eventos podrás verlo ahí mismo.";
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

function eventsForWeb(valor){
	if(valor == true){
		cerrar_section();
		img_close.setAttribute("onclick", "cerrar_section(true)")

		setTimeout(function(){
			img_events_1();

			seccion_open.style.display = "flex";
			seccion_open.style.animationName = "open";
			seccion_open.style.transform = "scale(1.0)";
			seccion_open.style.opacity = "100%";
		}, 200);
	} else {
		img_events_1();

		seccion_open.style.display = "flex";
		seccion_open.style.animationName = "open";
		seccion_open.style.transform = "scale(1.0)";
		seccion_open.style.opacity = "100%";
	}
}

function cerrar_section(valor){
	if(valor == true){

		img_close.setAttribute("onclick", "cerrar_section()")

		seccion_open.style.animationName = "back";
		seccion_open.style.transform = "scale(0.5)";
		seccion_open.style.opacity = "0%";

		setTimeout(function(){
			seccion_open.style.display = "none";
		}, 150);

		setTimeout(function(){
			abrirCopyright();
		}, 200);
	} else {
		img_close.setAttribute("onclick", "cerrar_section()");

		seccion_open.style.animationName = "back";
		seccion_open.style.transform = "scale(0.5)";
		seccion_open.style.opacity = "0%";

		setTimeout(function(){
			seccion_open.style.display = "none";
		}, 150);
	}

	generarImgSection();
	generarImgSectionNovedades();
}

var contRedes = [];
var boxNewCreatedRedes;
class redes{
	constructor(image,titulo,descripcion,enlace,textEnlace,creado){
		this.image = image;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.enlace = enlace;
		this.textEnlace = textEnlace;
		this.creado = creado;
	}
}

var redNum1 = new redes("./img/redes/instagram.png","Instagram","Actividad: Normal","https://www.instagram.com/ghlp2258/","Ir a mi Instagram",false);

var redNum2 = new redes("./img/redes/facebook.png","Facebook","Actividad: Baja","https://www.facebook.com/Ghlp123-114885247082596/","Ir a mi Facebook",false);

var redNum3 = new redes("./img/redes/twitter.png","Twitter","Actividad: Muy baja","https://twitter.com/Guiller68818386","Ir a mi Twitter",false);

var redNum4 = new redes("./img/redes/tiktok.png","TikTok","Actividad: Normal","https://www.tiktok.com/@ghlp2258","Ir a mi TikTok",false);

contRedes.push(redNum1,redNum2,redNum3,redNum4);

function createdBoxRed(){
	for(var i = 0; i <= (contRedes.length - 1); i++){
		if(contRedes[i].creado == false){
			boxNewCreatedRedes = `<div class="img_spprt_2">
									<div class="box_img">
										<img src="${contRedes[i].image}">
									</div>
									<div class="box_text">
										<h1>${contRedes[i].titulo}</h1>
										<p>${contRedes[i].descripcion}</p>
										<a target="_black" href="${contRedes[i].enlace}">${contRedes[i].textEnlace} ⇱</a>
									</div>
								</div>`;

			createdAllRed.innerHTML += boxNewCreatedRedes;

			contRedes[i].creado = true;
		}
	}
}

function crearTodasLasRedes(){
	createdBoxRed();

	ventana_emergente_2.style.display = "flex";
	ventana_emergente_2.style.animationName = "open";
	ventana_emergente_2.style.transform = "scale(1.0)";
	ventana_emergente_2.style.opacity = "100%";
}

function abrirCopyright(){
	img_copyright();

	seccion_open.style.display = "block";

	seccion_open.style.display = "flex";
	seccion_open.style.animationName = "open";
	seccion_open.style.transform = "scale(1.0)";
	seccion_open.style.opacity = "100%";
}

function cerrar_section_2(valor){
	ventana_emergente_2.style.animationName = "back";
	ventana_emergente_2.style.transform = "scale(0.5)";
	ventana_emergente_2.style.opacity = "0%";

	setTimeout(function(){
		ventana_emergente_2.style.display = "none";
	}, 150);
}

generarImgSection();
generarImgSectionNovedades();
seccion_open.style.display = "none";
ventana_emergente_2.style.display = "none";