window.addEventListener('load', function () {
	console.log('Pagina cargada!!! Espera... ¡¿Que haces en la consola?!');

	createdBoxRed();

	seguidorFunction();

	cerrarCodeThis();
	cerrarDesarollo();
	generarImgSection2();
	generarImgSectionNovedades();
	cerrar_section();
	cerrar_section_2();

	setInterval(function(){
		seguidorFunction();
	}, 4000);
});

var img_close = document.getElementById("img_close");
var img_close_2 = document.getElementById("img_close_2");
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
var imgInsertSection5 = document.getElementById("imgInsertSection5");

function generarImgSection1(valor){
	if(valor == true){
		imgSection.style.display = "block";
	} else {
		imgSection.style.display = "none";
	}

	imgInsertSection1.setAttribute("src", "./img/videos/canal1/img1.png");
	imgInsertSection2.setAttribute("src", "./img/videos/canal1/img2.png");
	imgInsertSection3.setAttribute("src", "./img/videos/canal1/img3.png");
	imgInsertSection4.setAttribute("src", "./img/videos/canal1/img4.png");
	imgInsertSection5.setAttribute("src", "");
}

function generarImgSection2(valor){
	if(valor == true){
		imgSection.style.display = "block";
	} else {
		imgSection.style.display = "none";
	}

	imgInsertSection1.setAttribute("src", "./img/videos/canal2/img1.png");
	imgInsertSection2.setAttribute("src", "./img/videos/canal2/img2.png");
	imgInsertSection3.setAttribute("src", "./img/videos/canal2/img3.png");
	imgInsertSection4.setAttribute("src", "./img/videos/canal2/img4.png");
	imgInsertSection5.setAttribute("src", "./img/videos/canal2/img5.png");
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
	imgInsertSection5.setAttribute("src", "");
}


function img_canal_1(){
	text_ventana.textContent = "Canal: GHLP 123";
	texto_titulo.textContent = "Resumen";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCeRQWnaozyzf-YnR4HejQhg?view_as=subscriber");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.innerHTML = `Hola, es de mi agrado informar que estoy un poco <span>más activo</span> en este canal al igual que en mi <span>canal secundario</span>, no son videos diarios ni semanales, voy a tardar en subir videos debido a mi falta de tiempo pero aun así <span>subiré contenido</span>. Aquí unas capturas de las portadas de mis videos.`;

	generarImgSection1(true);
}

function img_canal_2_1(){
	text_ventana.textContent = "Canal: GHLP123 GAMES";
	texto_titulo.textContent = "Resumen";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_ghlp123games.png");
	enlaceCambiar.setAttribute("href", "https://www.youtube.com/channel/UCpTaxiwEaAkZv0XIxorEv4A");
	enlaceCambiar.style.display = "inline";
	
	texto_decriptivo.innerHTML = `Buenas noticias, no será siempre pero intentare subir contenido cada cierto tiempo, espero les guste mi regreso, ya sé que ni siquiera les suena mi nombre pero espero me apoyen xD. Este canal <span>está enfocado a juegos</span> aquí no tocare a Geometry Dash pues porque ya tengo mi <span>otro canal</span> dedicado a eso. Espero de verdad que disfruten mis videos, agradezco su atención y su visita.`;

	generarImgSection2(true);
}

function img_events_1(){
	text_ventana.textContent = "Novedades";
	texto_titulo.textContent = "¡¡¡Evento Activo!!!";

	imagen_cambio.setAttribute("src", "img/recursos/youtube_novedades.png");
	enlaceCambiar.style.display = "none";
	
	texto_decriptivo.innerHTML = `<span>¡¡¡Atención!!!</span>, Si el video titulado <span>“Ahhh Ahhh Me Doxean - Free Fire / GHLP123GAMES”</span> alcanza más de <span>100 likes</span> entonces hare un sorteo de una <span>tarjeta de Google Play $100 MX</span>, cuando llegue el momento diré los requisitos necesarios para participar (Solo es un requisito), </span>no hay fecha limite</span> solo por ser la primera vez así que aprovecha. A como yo lo veo participara poca gente así que tienes una <span>gran oportunidad de ganar</span>, suerte ;)`;

	generarImgSectionNovedades(true);
}

function img_copyright(){
	text_ventana.textContent = "Derechos De Autor y Políticas";
	texto_titulo.textContent = "Copyright";

	imagen_cambio.setAttribute("src", "img/recursos/copyright_500.png");
	enlaceCambiar.style.display = "none";

	texto_decriptivo.innerHTML = "<h1>Interno</h1>"
	texto_decriptivo.innerHTML += "1.- Esta web no recopilara datos de ninguna información. Solo se creó con el fin de auto publicidad para GHLP123 && GHLP123GAMES, esta web jamás te pedirá datos ni accesos a cuentas, algo a recalcar es que esta página está alojada el GitHub lo cual es un <span>«Repositorio»</span> seguro.";
	texto_decriptivo.innerHTML += "<br><br>2.- Las redes sociales que aparecen ahí son totalmente mías, hay algunas que faltan pero lo más probable es que estén en el canal ya sea el 1ro o el 2do, si ves una cuenta sospechosa haciéndose pasar por mí, puedes enviarme un Gmail al correo: <span>alternative2258@gmail.com</span> me ayudaría mucho saber tal información.";

	texto_decriptivo.innerHTML += "<h1>Externo</h1>";
	texto_decriptivo.innerHTML += "1.- Esta página solo podrá promocionar a alguien que a <span>GHLP123</span> && <span>GHLP123GAMES</span> le hayan autorizado.";
	texto_decriptivo.innerHTML += "<br><br>2.- Los eventos serán explicados en alguna red social donde se explicara el proceso, meta o alguna otra dinámica, para saber si hay algún evento actualmente puedes ir a la sección de <a onclick=\"eventsForWeb(true, 1, true)\">Novedades ⩒</a> para saber información previa del evento. En caso de que no haiga eventos podrás verlo ahí mismo.";

	texto_decriptivo.innerHTML += "<br><br>3.- En mi <span>servidor de Discord</span> cada semana se podrá participar en un randomisador que <span>generara un numero al azar del 1 al 10000</span>, si tienes la suficiente suerte podrás ganar alguno de los siguientes premios:";
	texto_decriptivo.innerHTML += `<br><br>- Targeta de Google Play <span>$100MX</span>
	<br>- Posibilidad de agregar un emoji nuevo para el servidor
	<br>- Targeta de Steam <span>$200MX</span>`;

	texto_decriptivo.innerHTML += "<br><br>3.- [Sub 1]--> Los premios dependerán en que información se haya proporcionado en el <span>servidor de Discord</span> así que atento. El numero para ganar deberá ser el número 1, si te toca un numero diferente eso significa que ya perdiste.";
	texto_decriptivo.innerHTML += `<br><br>3.- [Sub 2]--> <span>¿Cómo participo y quienes pueden participar?</span>, para poder participar deberás pedirme en mi servidor de Discord que te muestre tu numero al azar lo cual mostrare captura del número que te toco. Solo podrás participar 1 vez cada semana, tu nombre lo guardare para saber que ya has participado la semana correspondiente. Las personas que pueden participar son las que están unidas al grupo de <a href="https://www.facebook.com/groups/3685990098088518" target="_black">Facebook Memes Buenardos ⇱</a> o quienes me apoyen en mis canales de YouTube como <a onclick="eventsForWeb(true, 2, false)">Redes Sociales ⩒</a>. Si no veo apoyo durante una semana en el grupo o en mis redes, anunciare anulamiento de semana que indicara una semana sin randomisador hasta que vea respuesta.`;
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

function eventsForWeb(valor, num, igual){
	if(valor == true){
		if(num == 1){
			cerrar_section();
		} else if(num == 2){
			cerrar_section();
		}

		setTimeout(function(){
			if(num == 1){
				img_close.setAttribute("onclick", "cerrar_section(true)");
				img_events_1();
			} else if(num == 2){
				img_close_2.setAttribute("onclick", "cerrar_section_2(true)");
				crearTodasLasRedes();
			}

			if(igual == true){
				seccion_open.style.display = "flex";
				seccion_open.style.animationName = "open";
				seccion_open.style.transform = "scale(1.0)";
				seccion_open.style.opacity = "100%";
			}
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

	generarImgSection2();
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

var redNum2 = new redes("./img/redes/facebook.png","Facebook","Actividad: Normal","https://www.facebook.com/Ghlp123-114885247082596/","Ir a mi Facebook",false);

var redNum3 = new redes("./img/redes/twitter.png","Twitter","Actividad: Baja","https://twitter.com/Guiller68818386","Ir a mi Twitter",false);

var redNum4 = new redes("./img/redes/tiktok.png","TikTok","Actividad: Normal","https://www.tiktok.com/@ghlp2258","Ir a mi TikTok",false);

var redNum5 = new redes("./img/redes/hoyolab.png","Hoyolab","Actividad: Baja","https://www.hoyolab.com/accountCenter/postList?id=34855496","Ir a mi Perfil de Hoyolab",false);

contRedes.push(redNum1,redNum2,redNum3,redNum4,redNum5);

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

function crearTodasLasRedes(valor){
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
	if(valor == true){
		ventana_emergente_2.style.animationName = "back";
		ventana_emergente_2.style.transform = "scale(0.5)";
		ventana_emergente_2.style.opacity = "0%";

		setTimeout(function(){
			ventana_emergente_2.style.display = "none";

			abrirCopyright();
		}, 150);
	} else {
		ventana_emergente_2.style.animationName = "back";
		ventana_emergente_2.style.transform = "scale(0.5)";
		ventana_emergente_2.style.opacity = "0%";

		setTimeout(function(){
			ventana_emergente_2.style.display = "none";
		}, 150);
	}
}


var desarrollador_window = document.getElementById("desarrollador_window");

function abrirDesarrollo(){
	desarrollador_window.display = "block";

	desarrollador_window.style.display = "flex";
	desarrollador_window.style.animationName = "open";
	desarrollador_window.style.transform = "scale(1.0)";
	desarrollador_window.style.opacity = "100%";
}

function cerrarDesarollo(){
	desarrollador_window.style.animationName = "back";
	desarrollador_window.style.transform = "scale(0.5)";
	desarrollador_window.style.opacity = "0%";

	setTimeout(function(){
		desarrollador_window.style.display = "none";
	}, 150);
}

var myCode = document.getElementById("myCode");

function validarCodigo(){
	if(myCode.value == "114400"){
		cerrarDesarollo();
		abrirCodeThis();
	}
}




var myRespired = document.getElementById("myRespired");

class fanCustom{
	constructor(nombre, num, enlace, img){
		this.nombre = nombre;
		this.num = num;
		this.enlace = enlace;
		this.img = img;
	}
}

var arrayMyFan = [];
var indexMyFan = 1;

var seguidorNum0 = new fanCustom("myNombre", 0, "enlace", "./imagen.ruta");

var seguidorNum1 = new fanCustom("Abxy", 1, "https://twitter.com/Abxy_XL/status/1471946809798848513/photo/1", "./img/fan/myImgFan1.png");

var yoNum1 = new fanCustom("GHLP123", 1, "https://www.instagram.com/p/CmcxwoirCuC/", "./img/mio/imgMio1.jpg");
var yoNum2 = new fanCustom("GHLP123", 2, "https://www.instagram.com/p/CmLDOVjLLIs/", "./img/mio/imgMio2.jpg");


var myEnlaceFan = document.getElementById("myEnlaceFan");
var myImageFan = document.getElementById("myImageFan");
var addMyImgFan = document.getElementById("addMyImgFan");
var myEnlaceFanText = document.getElementById("myEnlaceFanText");

arrayMyFan.push(seguidorNum0,seguidorNum1,yoNum1,yoNum2);

function seguidorFunction(){
	myEnlaceFan.setAttribute("href", "");
	myImageFan.setAttribute("src", "");

	var temptNum1 = document.createElement("img");
	var temptNum2 = document.createElement("img");
	var temptNum3 = document.createElement("img");
	var temptNumero1 = indexMyFan;
	var temptNumero2 = indexMyFan + 1;

	if(indexMyFan >= arrayMyFan.length){
		temptNumero1 -= 1;
	} else if(temptNumero1 > 1){
		temptNumero1 -= 1;
	}

	if(temptNumero2 == arrayMyFan.length){
		temptNumero2 = 1;
	} else if(temptNumero2 >= arrayMyFan.length){
		temptNumero2 = 2;
	}

	temptNum1.setAttribute("src", arrayMyFan[temptNumero1].img);
	temptNum1.setAttribute("class", "desplased");
	temptNum1.setAttribute("id", "temptNumId1");
	addMyImgFan.appendChild(temptNum1);
	var temptNumId1 = document.getElementById("temptNumId1");
	temptNumId1.style.height = "250px";
	temptNumId1.style.paddingLeft = "500px";
	setTimeout(function(){
		temptNumId1.style.paddingLeft = "0px";
	}, 100);

	if(indexMyFan > arrayMyFan.length - 1){
		indexMyFan = 1;
		// console.log("cambio a 1");
	}

	temptNum2.setAttribute("src", arrayMyFan[indexMyFan].img);
	temptNum2.setAttribute("class", "desplased");
	temptNum2.setAttribute("id", "temptNumId2");
	addMyImgFan.appendChild(temptNum2);
	var temptNumId2 = document.getElementById("temptNumId2");
	temptNumId2.style.height = "250px";
	temptNumId2.style.paddingRight = "0px";
	setTimeout(function(){
		temptNumId2.style.paddingRight = "0px";
	}, 100);

	temptNum3.setAttribute("src", arrayMyFan[temptNumero2].img);
	temptNum3.setAttribute("class", "desplased");
	temptNum3.setAttribute("id", "temptNumId3");
	addMyImgFan.appendChild(temptNum3);
	var temptNumId3 = document.getElementById("temptNumId3");
	temptNumId3.style.height = "250px";
	/*temptNumId3.style.paddingRight = "0px";
	setTimeout(function(){
		temptNumId3.style.paddingRight = "250px";
	}, 100);*/

	setTimeout(function(){
		addMyImgFan.removeChild(temptNum1);
		addMyImgFan.removeChild(temptNum2);
		addMyImgFan.removeChild(temptNum3);
		// console.log("removidos");
	}, 999);

	setTimeout(function(){
		myEnlaceFan.setAttribute("href", arrayMyFan[indexMyFan].enlace);
		myImageFan.setAttribute("src", arrayMyFan[indexMyFan].img);
		myEnlaceFanText.setAttribute("href", arrayMyFan[indexMyFan].enlace);

		addMyImgFan.style.backgroundImage = `url("${arrayMyFan[indexMyFan].img}")`;
		// console.log("Cambiado");

		indexMyFan++;
	}, 1000);
}





// Codigo de Seguridad
var mySecretSection = document.getElementById("mySecretSection");

function abrirCodeThis(){
	mySecretSection.display = "block";

	mySecretSection.style.display = "flex";
	mySecretSection.style.animationName = "open";
	mySecretSection.style.transform = "scale(1.0)";
	mySecretSection.style.opacity = "100%";

	desarrolloCreatedAll(arrayDesarrollador);
}

function cerrarCodeThis(){
	mySecretSection.style.animationName = "back";
	mySecretSection.style.transform = "scale(0.5)";
	mySecretSection.style.opacity = "0%";

	setTimeout(function(){
		mySecretSection.style.display = "none";
	}, 150);
}

var addMyFuncion = document.getElementById("addMyFuncion");

class customDesarrollador{
	constructor(nombre, num, img, title, subtitle, click, validar){
		this.nombre = nombre;
		this.num = num;
		this.img = img;
		this.title = title;
		this.subtitle = subtitle;
		this.click = click;
		this.validar = validar;
	}
}

var arrayDesarrollador = [];

var desarrolloNum1 = new customDesarrollador("Randomizador", 1, "./img/recursos/adicional/img2.png", "Premio por Random", "Aquí podras randomizar un contador de un numero(1) hasta otro(2) y en caso de que toque el numero ganador(0), ganaras un premio de acuerdo a lo que se haya sorteado.", "funcionRandomizador", false);
var desarrolloNum2 = new customDesarrollador("Movimiento Rectilineo Uniforme", 2, "./img/recursos/adicional/img1.png", "MRU", "El movimiento rectilíneo uniforme (m.r.u.), es aquel con velocidad constante y cuya trayectoria es una línea recta. Un ejemplo claro son las puertas correderas de un ascensor, generalmente se abren y cierran en línea recta y siempre a la misma velocidad. Velocidad, Posición, Aceleración", "funcionMru", false);

arrayDesarrollador.push(desarrolloNum1,desarrolloNum2);

function desarrolloCreatedAll(myArray){
	addMyFuncion.innerHTML = " ";

	for(var i = 0; i <= (myArray.length - 1); i++){
		var tempHtmlElement1 = document.createElement("div");
		tempHtmlElement1.setAttribute("class", "contenido");
		tempHtmlElement1.setAttribute("id", "tempHtmlElement1" + myArray[i].num);

		var tempHtmlElement2 = document.createElement("div");
		tempHtmlElement2.setAttribute("class", "secret_div_1");
		tempHtmlElement2.setAttribute("id", "tempHtmlElement2" + myArray[i].num);

		var tempHtmlElement2_1 = document.createElement("img");
		tempHtmlElement2_1.setAttribute("src", myArray[i].img);
		tempHtmlElement2_1.setAttribute("id", "tempHtmlElement2_1" + myArray[i].num);

		var tempHtmlElement3 = document.createElement("div");
		tempHtmlElement3.setAttribute("class", "secret_text");
		tempHtmlElement3.setAttribute("id", "tempHtmlElement3" + myArray[i].num);

		var tempHtmlElement3_1 = document.createElement("h1");
		tempHtmlElement3_1.setAttribute("id", "tempHtmlElement3_1" + myArray[i].num);

		var tempHtmlElement3_2 = document.createElement("p");
		tempHtmlElement3_2.setAttribute("id", "tempHtmlElement3_2" + myArray[i].num);

		var tempHtmlElement3_3 = document.createElement("button");
		tempHtmlElement3_3.setAttribute("id", "tempHtmlElement3_3" + myArray[i].num);

		var tempHtmlElement4 = document.createElement("div");
		tempHtmlElement4.setAttribute("class", "secret_metodo");
		tempHtmlElement4.setAttribute("id", "tempHtmlElement4" + myArray[i].num);

		addMyFuncion.appendChild(tempHtmlElement1);

		var idElementTemp1 = document.getElementById("tempHtmlElement1" + myArray[i].num);
		idElementTemp1.appendChild(tempHtmlElement2);
		idElementTemp1.appendChild(tempHtmlElement3);

		var idElementTemp2 = document.getElementById("tempHtmlElement2" + myArray[i].num);
		idElementTemp2.appendChild(tempHtmlElement2_1);

		var idElementTemp3 = document.getElementById("tempHtmlElement3" + myArray[i].num);
		idElementTemp3.appendChild(tempHtmlElement3_1);
		idElementTemp3.appendChild(tempHtmlElement3_2);
		idElementTemp3.appendChild(tempHtmlElement3_3);
		idElementTemp3.appendChild(tempHtmlElement4);

		var idElementTemp3_1 = document.getElementById("tempHtmlElement3_1" + myArray[i].num);
		var idElementTemp3_2 = document.getElementById("tempHtmlElement3_2" + myArray[i].num);
		var idElementTemp3_3 = document.getElementById("tempHtmlElement3_3" + myArray[i].num);

		idElementTemp3_1.textContent = myArray[i].title;
		idElementTemp3_2.textContent = myArray[i].subtitle;
		idElementTemp3_3.textContent = "▶ Abrir Metodo";


		tempHtmlElement3_3.setAttribute("onclick", `${myArray[i].click}("tempHtmlElement4${myArray[i].num}", ${myArray[i].num}, "tempHtmlElement3_3${myArray[i].num}")`);
	}
}

function funcionRandomizador(inAdded, myNum, myButton){
	var myAdded = document.getElementById(inAdded);
	var customButton = document.getElementById(myButton);

	myAdded.innerHTML += `<div class="secret_metodo_alter">
		<div class="secret_metodo_text">
			<p>Numero Mínimo</p>
			<p>Numero Máximo</p>
			<p>Numero Ganador</p>
			<p>⩓ No funciona esta parte por el momento</p>
		</div>
		<div class="secret_metodo_text">
			<input type="number" value="0" id="myRandomMin">
			<input type="number" value="0" id="myRandomMax">
			<input type="number" value="0" id="myRandomWin">
		</div>
		<div class="secret_metodo_text_2">
			<img src="">
		</div>
		<div class="secret_metodo_text_2">
			<p>Tu numero es:</p>
			<h1>???</h1>
		</div>
		<div class="secret_metodo_text_2">
			<p>Toca aquí para iniciar el randomizador</p>
			<button>Dar Numero</button>
		</div>
	</div>`;

	if(arrayDesarrollador[myNum - 1].validar == false){
		arrayDesarrollador[myNum - 1].validar = true;
		customButton.textContent = "▼ Cerrar Metodo";
	} else {
		arrayDesarrollador[myNum - 1].validar = false;
		myAdded.innerHTML = "";
		customButton.textContent = "▶ Abrir Metodo";
	}
}

function funcionMru(inAdded, myNum, myButton){
	var myAdded = document.getElementById(inAdded);
	var customButton = document.getElementById(myButton);

	var blockNameSpace = ["Vo", "Vf", "at", "s"];

	myAdded.innerHTML += `<div class="secret_metodo_alter">
		<div class="secret_metodo_text">
			<p>Para la Distancia (D)</p>
			<p>Para la Velocidad (V)</p>
			<p>Para el Tiempo (T)</p>
		</div>
		<div class="secret_metodo_text">
			<p>D = V * T</p>
			<p>V = D / T</p>
			<p>T = D / V</p>
		</div>
		<div class="secret_metodo_text_2">
			<p>D<p>
			<hr>
			<p>V<p>
			<hr>
			<p>T<p>
		</div>
		<div class="secret_metodo_text_2">
			<select value="m" id="idSelectValue1">
				<option value="s">m/s</option>
				<option value="s">m/s 2</option>
				<option value="h">km/h</option>
				<option value="h">km/h 2</option>
			</select>

			<select value="s" id="idSelectValue2">
				<option value="s">m/s</option>
				<option value="s">m/s 2</option>
				<option value="h">km/h</option>
				<option value="h">km/h 2</option>
			</select>

			<select value="s" id="idSelectValue3">
				<option value="s">Segundos</option>
				<option value="m">Minutos</option>
				<option value="h">Horas</option>
				<option value="d">Días</option>
				<option value="sm">Semanas</option>
				<option value="ms">Meses</option>
			</select>
		</div>
		<div class="secret_metodo_text_2">
			<input type="number" value="0" id="idValueD">
			<input type="number" value="0" id="idValueV">
			<input type="number" value="0" id="idValueT">
		</div>
		<div class="secret_metodo_text_1">
			<button onclick="mruCalcul('distancia')">Calcular Dis.</button>
			<button onclick="mruCalcul('velocidad')">Calcular Vel.</button>
			<button onclick="mruCalcul('tiempo')">Calcular Tiempo</button>
		</div>
		<div class="secret_metodo_text_1">
			<p id="finalResult">Valor Final: ???</p>
		</div>
	</div>`;

	if(arrayDesarrollador[myNum - 1].validar == false){
		arrayDesarrollador[myNum - 1].validar = true;
		customButton.textContent = "▼ Cerrar Metodo";
	} else {
		arrayDesarrollador[myNum - 1].validar = false;
		myAdded.innerHTML = "";
		customButton.textContent = "▶ Abrir Metodo";
	}
}

function mruCalcul(type){
	// Vf = Velocidad Final
	// Vo = Velocidad Inicial
	// V = Velocidad
	// T = Tiempo

	var idSelectValue1 = document.getElementById("idSelectValue1");
	var idSelectValue2 = document.getElementById("idSelectValue2");
	var idSelectValue3 = document.getElementById("idSelectValue3");

	var idValueD = document.getElementById("idValueD");
	var idValueV = document.getElementById("idValueV");
	var idValueT = document.getElementById("idValueT");

	var tempt1 = idValueD.value;
	var tempt2 = idValueV.value;
	var tempt3 = idValueT.value;

	var res = 0;

	var typeOfValueMin = idSelectValue1.value;
	var typeOfValueNorm = idSelectValue2.value;
	var typeOfValueData = idSelectValue3.value;

	var myTypeText = "xd";
	var myTypeText2 = "xd";
	var myTypeText3 = "xd";

	if(typeOfValueData != typeOfValueNorm && type == "distancia"){
		var alter0 = idValueT.value;
		var alter1 = idValueT.value;
		var alter2 = idValueT.value;
		var alter3 = idValueT.value;

		for(var i = 1; i < 6; i++){
			if(typeOfValueData == "s"){
				i = 6;
			} else if(typeOfValueData == "m"){
				alter1 = alter2 * 60;

				typeOfValueData = "s";
			} else if(typeOfValueData == "h"){
				alter2 = tempt3 * 60;

				typeOfValueData = "m";
			}
		}

		tempt3 = alter1;
	} else {
		res = tempt2 * tempt3;
	}

	if(typeOfValueMin != typeOfValueData && type == "velocidad"){
		var alter0 = idValueT.value;
		var alter1 = idValueT.value;
		var alter2 = idValueT.value;
		var alter3 = idValueT.value;

		for(var i = 1; i < 6; i++){
			if(typeOfValueData == "s"){
				i = 6;
			} else if(typeOfValueData == "m"){
				alter1 = alter2 * 60;

				typeOfValueData = "s";
			} else if(typeOfValueData == "h"){
				alter2 = tempt3 * 60;

				typeOfValueData = "m";
			}
		}

		tempt1 = alter1;
	} else {
		res = tempt1 / tempt3;
	}

	if(typeOfValueMin != typeOfValueNorm && type == "tiempo"){
		var alter0 = idValueT.value;
		var alter1 = idValueT.value;
		var alter2 = idValueT.value;
		var alter3 = idValueT.value;

		for(var i = 1; i < 6; i++){
			if(typeOfValueData == "s"){
				i = 6;
			} else if(typeOfValueData == "m"){
				alter1 = alter2 * 60;

				typeOfValueData = "s";
			} else if(typeOfValueData == "h"){
				alter2 = tempt3 * 60;

				typeOfValueData = "m";
			}
		}

		tempt1 = alter1;
	} else {
		res = tempt1 / tempt2;
	}

	if(typeOfValueData == "s"){
		myTypeText = "segundo(s)";
	} else if(typeOfValueData == "m"){
		myTypeText = "minutos(s)";
	} else if(typeOfValueData == "h"){
		myTypeText = "horas(s)";
	}

	if(typeOfValueNorm == "s"){
		myTypeText2 = "m";
	} else if(typeOfValueNorm == "h"){
		myTypeText2 = "km";
	}

	if(type == "distancia"){
		distancia(tempt1, res, tempt2, tempt3, finalResult, myTypeText, myTypeText2, typeOfValueData);
	} else if(type == "velocidad"){
		velocidad(tempt1, res, tempt2, tempt3, finalResult, myTypeText, myTypeText2, typeOfValueData);
	} else if(type == "tiempo"){
		tiempo(tempt1, res, tempt2, tempt3, finalResult, myTypeText, myTypeText2, typeOfValueData);
	}
}

function distancia(tempt1_2, res_2, tempt2_2, tempt3_2, finalResult, myTypeText_2, myTypeText2_2, typeOfValueData_2){
	var finalResult = document.getElementById("finalResult");

	res_2 = tempt2_2 * tempt3_2;

	finalResult.textContent = `Distancia: ${res_2} ${myTypeText2_2}; Otros Valores ---> Velocidad: ${tempt2_2} ${myTypeText2_2}/${typeOfValueData_2}, Tiempo: ${tempt3_2} ${myTypeText_2}`;
}

function velocidad(tempt1_2, res_2, tempt2_2, tempt3_2, finalResult, myTypeText_2, myTypeText2_2, typeOfValueData_2){
	var finalResult = document.getElementById("finalResult");

	res_2 = tempt1_2 / tempt3_2;

	finalResult.textContent = `Velocidad: ${res_2} ${myTypeText2_2}/${typeOfValueData_2}; Otros Valores ---> Distancia: ${tempt1_2} ${myTypeText2_2}/${typeOfValueData_2}, Tiempo: ${tempt3_2} ${myTypeText_2}`;
}

function tiempo(tempt1_2, res_2, tempt2_2, tempt3_2, finalResult, myTypeText_2, myTypeText2_2, typeOfValueData_2){
	var finalResult = document.getElementById("finalResult");

	res_2 = tempt1_2 / tempt2_2;

	finalResult.textContent = `Tiempo: ${res_2} ${myTypeText_2}; Otros Valores ---> Distancia: ${tempt1_2} ${myTypeText2_2}/${typeOfValueData_2}, Velocidad: ${tempt2_2} ${myTypeText2_2}/${typeOfValueData_2}`;
}