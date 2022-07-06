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

// Cargar mas noticias
var noticias = document.getElementById("noticias");

var boton_noticias = `<button id="noticias_button" onclick="carga_noticias()">Cargar Anteriores</button>`;

var contador_3 = 100;
var image_nivel_progreso = `<img src="img/nivelenprogreso.png" class="imagen-seccion1">`;
var image_nuevo_diseno = `<img src="img/nuevodiseno.png" class="imagen-seccion1">`;
var image_nuevo_logo = `<img src="img/nuevologo.png" class="imagen-seccion1">`;
var image_nueva_funcion = `<img src="img/nuevafuncion.png" class="imagen-seccion1">`;

function carga_noticias(){
	var anuncios_button = document.getElementById("anuncios_button");

	if(contador_3 == 97){
		noticias.insertAdjacentHTML('afterbegin', image_nuevo_diseno);
		noticias_button.remove(this);
		//noticias.insertAdjacentHTML('afterbegin', boton_noticias);
	} else if(contador_3 == 98){
		noticias.insertAdjacentHTML('afterbegin', image_nuevo_logo);
		noticias_button.remove(this);
		noticias.insertAdjacentHTML('afterbegin', boton_noticias);
	} else if(contador_3 == 99){
		noticias.insertAdjacentHTML('afterbegin', image_nivel_progreso);
		noticias_button.remove(this);
		noticias.insertAdjacentHTML('afterbegin', boton_noticias);
	} else if(contador_3 == 100){
		noticias.insertAdjacentHTML('afterbegin', image_nueva_funcion);
		noticias_button.remove(this);
		noticias.insertAdjacentHTML('afterbegin', boton_noticias);
	}

	contador_3--;
}





// Cargar mas seccion de fans
var fans = document.getElementById("fans");

var boton_fans = `<button id="fans_button" onclick="carga_fans()">Cargar Más</button>`;

var contador_1 = 100;
var image_gato = `<a target="_black" href="https://www.facebook.com/photo/?fbid=567720554271478&set=a.292045438505659">` + `<img src="img/fanartgato.png" class="imagen-seccion1">` + `</a>`;
var image_royale = `<img src="img/royalemexico.png" class="imagen-seccion1">`;
var image_art_abxy = `<a target="_black" href="https://twitter.com/Abxy_XL/status/1471946809798848513">` + `<img src="img/fanartcubeghlp123.png" class="imagen-seccion1">` + `</a>`;
var video_1 = `<a target="_black" href="https://www.youtube.com/watch?v=z_LDlflbdj8&t=116s">` + `<img src="img/agradecimiento.png" class="imagen-seccion1">` + `</a>`;

function carga_fans(){
	var fans_button = document.getElementById("fans_button");

	if(contador_1 == 97){
		fans.insertAdjacentHTML('afterbegin', image_royale);
		fans_button.remove(this);
		//fans.insertAdjacentHTML('afterbegin', boton_fans);
	} else if(contador_1 == 98){
		fans.insertAdjacentHTML('afterbegin', image_gato);
		fans_button.remove(this);
		fans.insertAdjacentHTML('afterbegin', boton_fans);
	} else if(contador_1 == 99){
		fans.insertAdjacentHTML('afterbegin', image_art_abxy);
		fans_button.remove(this);
		fans.insertAdjacentHTML('afterbegin', boton_fans);
	} else if(contador_1 == 100){
		fans.insertAdjacentHTML('afterbegin', video_1);
		fans_button.remove(this);
		fans.insertAdjacentHTML('afterbegin', boton_fans);
	}

	contador_1--;
}







// Cargar mas anuncios
var anuncios = document.getElementById("anuncios");

var boton_anuncios = `<button id="anuncios_button" onclick="carga_anuncios()">Cargar Más</button>`;

var contador_2 = 100;
var image_instagram = `<a target="_black" href="https://www.instagram.com/p/CWEmf2OFzWu/?utm_source=ig_web_copy_link">` + `<img src="img/instagram-img.png" class="imagen-seccion1">` + `</a>`;
var image_twitter_1 = `<a target="_black" href="https://twitter.com/Guiller68818386/status/1473550343271329792">` + `<img src="img/twittercontenido.png" class="imagen-seccion1">` + `</a>`;
var video_yami = `<a id="video_numero_1">` + `<img onclick="eventoClick('Abrir')" src="img/intro2022.png" class="imagen-seccion1">` + `</a>`;
var image_canal_secundario = `<a target="_black" href="https://www.youtube.com/channel/UCpTaxiwEaAkZv0XIxorEv4A/videos">` + `<img src="img/canalsecundario.png" class="imagen-seccion1">` + `</a>`;

function carga_anuncios(){
	var anuncios_button = document.getElementById("anuncios_button");

	if(contador_2 == 97){
		anuncios.insertAdjacentHTML('afterbegin', video_yami);
		anuncios_button.remove(this);
		//anuncios.insertAdjacentHTML('afterbegin', boton_anuncios);
	} else if(contador_2 == 98){
		anuncios.insertAdjacentHTML('afterbegin', image_instagram);
		anuncios_button.remove(this);
		anuncios.insertAdjacentHTML('afterbegin', boton_anuncios);
	} else if(contador_2 == 99){
		anuncios.insertAdjacentHTML('afterbegin', image_twitter_1);
		anuncios_button.remove(this);
		anuncios.insertAdjacentHTML('afterbegin', boton_anuncios);
	} else if(contador_2 == 100){
		anuncios.insertAdjacentHTML('afterbegin', image_canal_secundario);
		anuncios_button.remove(this);
		anuncios.insertAdjacentHTML('afterbegin', boton_anuncios);
	}

	contador_2--;
}