// Llamar despues de cargar página
window.addEventListener('load', function () {
	perNumVar[0].obtener = true;

	crearAllPersonajes();
	crearAllObjetos();
	crearAllPersonajesPremios1();
	reloadAllObj();
	whatImg(0);
	textAllPersonajes();

	c_mjrs();
	c_ruleta();
	c_reclamar();
	c_inventario();
	c_atb_m();
	c_crear_c();
	c_sesion_f();
	c_iniciar_c();
	c_view_all_p();
	c_view_dayli();
	c_view_all_obj();
	c_mode_his();
	closeWindow('myGameMusic');

	setInterval(function(){
		reloadAllObj();
		textAllPersonajes();
		closeWindow('tapar');
	}, 1000);
});

var tapar = document.getElementById("tapar");

// exportado
var countMysText = 0;

function generarTextoMusic(text, position, color){
	var myTextMusic = document.createElement("div");
	var myTextMusic2 = document.createElement("i");

	var countMysTextTemp = countMysText;

	myTextMusic.setAttribute("class", "text_music");
	myTextMusic.setAttribute("id", `myTextMusicActive${countMysTextTemp}`);

	myTextMusic2.setAttribute("id", `myTextMusicActive2_${countMysTextTemp}`);

	position.appendChild(myTextMusic);
	var myTextActive = document.getElementById(`myTextMusicActive${countMysTextTemp}`);
	myTextActive.appendChild(myTextMusic2);

	var myTextActive2 = document.getElementById(`myTextMusicActive2_${countMysTextTemp}`);
	myTextActive2.textContent = text;
	myTextActive2.style.color = color;

	setTimeout(function(){
		myTextActive.style.scale = "0.5";
		myTextActive.style.top = "600px";
	}, 50);

	setTimeout(function(){
		position.removeChild(myTextActive);
	}, 600);

	countMysText++;
}
// fin de exportado

var p_nombre;

var val_piedras;
var val_dinero;

var escudo_base;

var energy_mas;

var prob_all_dmg;
var prob_escudo;
var prob_energy;

var dinero;
var piedras;
var tickets;

var mys_tickets = document.getElementById("mys_tickets");

var nmbr_pers_text = document.getElementById("nmbr_pers_text");
var edad_pers_text = document.getElementById("edad_pers_text");
var imagenMejora = document.getElementById("imagenMejora");

var per_seccion = document.querySelector(".space_display_p");

var space_display_obj = document.querySelector(".space_display_obj");
var space_display_p = document.querySelector(".space_display_p");
var space_display_atu = document.querySelector(".space_display_atu");

var personalizar = document.querySelector("#personalizar");
var prsnlzr_t_or_f = false;
personalizar.style.display = "none";

var img_p = document.querySelector("#img_p");

var obj_seccion = document.querySelector(".space_display_obj");

var invent = document.getElementById("invent");
var sesion = document.getElementById("sesion");
var scc_1 = document.getElementById("scc_1");
var scc_2 = document.getElementById("scc_2");
var scc_3 = document.getElementById("scc_3");
var mejora_p = document.getElementById("mejora_p");
var recomp_diaria = document.querySelector("#recomp_diaria");
var page_dialg = document.querySelector(".page_princ_2");

var vida_text = document.querySelector("#vida_text");
var prob_crit_text = document.querySelector("#prob_crit_text");
var ampl_crit_text = document.querySelector("#ampl_crit_text");
var prob_energy_text = document.querySelector("#prob_energy_text");
var energy_mas_text = document.querySelector("#energy_mas_text");
var prob_escudo_text = document.querySelector("#prob_escudo_text");
var redu_escudo_text = document.querySelector("#redu_escudo_text");

var dinero_text = document.querySelector(".dinero_text");
var nivel_mjr = document.querySelector("#nivel_mjr");
var prc_mjr = document.querySelector("#prc_mjr");
var ant_nv = document.querySelector("#ant_nv");
var nue_nv = document.querySelector("#nue_nv");
nue_nv.style.color = "rgb(0, 255, 0)";
var mjr_atb_1 = document.querySelector("#mjr_atb_1");
var nmbr_atb_text = document.querySelector("#nmbr_atb_text");

imagenMejora.style.backgroundSize = "100% 100%";

var gacha_ruleta = document.querySelector("#gacha_ruleta");

var all_obj_info = document.getElementById("all_obj_info");

var boxSectionPer = document.getElementById("boxSectionPer");
var boxSectionObj = document.getElementById("boxSectionObj");

var oneRuletaPre = document.getElementById("1raRuletaPre");
var rcmpz_rulet = document.getElementById("rcmpz_rulet");

var boxObt = document.getElementById("boxObt");
var cerrarTime = document.getElementById("cerrarTime");
var rcmpz_block = document.querySelector(".rcmpz_block");

var obtObjBox = document.getElementById("obtObjBox");

// Display para Historia
function mode_his(){
	mode_history.style.animationName = "open";
	mode_history.style.transform = "scale(1.0)";
	mode_history.style.opacity = "100%";
	mode_history.style.display = "block";

	createdMysLevels();
	selectMyMusic(myArrayPlayList[0].nombre,myArrayPlayList[0].artista,myArrayPlayList[0].source,myArrayPlayList[0].img,0);
}

function c_mode_his(){
	mode_history.style.animationName = "back";
	mode_history.style.transform = "scale(0.5)";
	mode_history.style.opacity = "0%";
	stopPlayMusic();

	setTimeout(function(){
		mode_history.style.display = "none";
	}, 150);
}


// Display de inventario
function personalizar_f(){
	prsnlzr_t_or_f = false;

	verif_personalizar();
}

function personalizar_t(){
	prsnlzr_t_or_f = true;

	verif_personalizar();
}

function verif_personalizar(){
	if(prsnlzr_t_or_f == true){
		personalizar.style.display = "block";
	} else if(prsnlzr_t_or_f == false){
		personalizar.style.display = "none";
	}
}



// Otro display inventario
function dis_obj(){
	objRealse();

	space_display_obj.style.display = "flex";
	space_display_p.style.display = "none";
	space_display_atu.style.display = "none";

	personalizar_f();
	verif_personalizar();

	reloadAll();
}

function dis_per(){
	persRealse();

	space_display_obj.style.display = "none";
	space_display_p.style.display = "flex";
	space_display_atu.style.display = "none";
}

function dis_atu(){

	space_display_obj.style.display = "none";
	space_display_p.style.display = "none";
	space_display_atu.style.display = "flex";

	personalizar_f();
	verif_personalizar();
}

function img_p_resaltar(){
	img_p.setAttribute("src", playerSelectView);
	img_p.setAttribute("class", playerSelectBackView);

	img_p.style.animationName = "resaltar_img";
	img_p.style.animationDuration = "0.4s";
	img_p.style.animationIterationCount = "1";

	setTimeout(function(){
		img_p.style.animationName = "none";
	}, 400);
}

function sesion_f(){
	sesion.style.animationName = "open";
	sesion.style.transform = "scale(1.0)";
	sesion.style.opacity = "100%";
	sesion.style.display = "block";
}

function c_sesion_f(){
	sesion.style.animationName = "back";
	sesion.style.transform = "scale(0.5)";
	sesion.style.opacity = "0%";
	
	setTimeout(function(){
		sesion.style.display = "none";
	}, 150);
}


function inventario(){
	objRealse();
	persRealse();

	invent.style.animationName = "open";
	invent.style.transform = "scale(1.0)";
	invent.style.opacity = "100%";
	invent.style.display = "block";
}

function c_inventario(){
	invent.style.animationName = "back";
	invent.style.transform = "scale(0.5)";
	invent.style.opacity = "0%";
	
	setTimeout(function(){
		invent.style.display = "none";
	}, 150);
}

function mjrs(){
	mejora_p.style.animationName = "open";
	mejora_p.style.transform = "scale(1.0)";
	mejora_p.style.opacity = "100%";
	mejora_p.style.display = "block";
}

function c_mjrs(){
	mejora_p.style.animationName = "back";
	mejora_p.style.transform = "scale(0.5)";
	mejora_p.style.opacity = "0%";
	
	setTimeout(function(){
		mejora_p.style.display = "none";
	}, 150);
}

function openWindow(name){
	mySection = document.getElementById(name);

	mySection.style.animationName = "open";
	mySection.style.transform = "scale(1.0)";
	mySection.style.opacity = "100%";
	mySection.style.display = "block";
}

function closeWindow(name){
	mySection = document.getElementById(name);

	mySection.style.animationName = "back";
	mySection.style.transform = "scale(0.5)";
	mySection.style.opacity = "0%";
	
	setTimeout(function(){
		mySection.style.display = "none";
	}, 150);
}

function crear_c(){
	scc_2.style.display = "flex";

	scc_1.style.display = "none";
}

function c_crear_c(){
	scc_1.style.display = "flex";

	scc_2.style.display = "none";
}

function iniciar_c(){
	scc_3.style.display = "flex";

	scc_1.style.display = "none";
}

function c_iniciar_c(){
	scc_1.style.display = "flex";

	scc_3.style.display = "none";
}

function view_dayli(){
	recomp_diaria.style.display = "flex";
	recomp_diaria.style.animationName = "open";
	recomp_diaria.style.transform = "scale(1.0)";
	recomp_diaria.style.opacity = "100%";
}

function c_view_dayli(){
	recomp_diaria.style.animationName = "back";
	recomp_diaria.style.transform = "scale(0.5)";
	recomp_diaria.style.opacity = "0%";
	
	setTimeout(function(){
		recomp_diaria.style.display = "none";
	}, 150);
}

function atb_m(){
	page_dialg.style.display = "flex";
	page_dialg.style.animationName = "open";
	page_dialg.style.transform = "scale(1.0)";
	page_dialg.style.opacity = "100%";
}

function c_atb_m(){
	page_dialg.style.animationName = "back";
	page_dialg.style.transform = "scale(0.5)";
	page_dialg.style.opacity = "0%";
	
	setTimeout(function(){
		page_dialg.style.display = "none";
	}, 150);
}

function ruleta(){
	reloadAll();

	gacha_ruleta.style.animationName = "open";
	gacha_ruleta.style.transform = "scale(1.0)";
	gacha_ruleta.style.opacity = "100%";
	gacha_ruleta.style.display = "block";
}

function c_ruleta(){
	gacha_ruleta.style.animationName = "back";
	gacha_ruleta.style.transform = "scale(0.5)";
	gacha_ruleta.style.opacity = "0%";
	
	setTimeout(function(){
		gacha_ruleta.style.display = "none";
	}, 150);
}



function view_all_obj(){
	all_obj_info.style.animationName = "open";
	all_obj_info.style.transform = "scale(1.0)";
	all_obj_info.style.opacity = "100%";
	all_obj_info.style.display = "block";
}

function c_view_all_obj(){
	all_obj_info.style.animationName = "back";
	all_obj_info.style.transform = "scale(0.5)";
	all_obj_info.style.opacity = "0%";
	
	setTimeout(function(){
		all_obj_info.style.display = "none";
	}, 150);
}

function view_all_p(){
	all_p_info.style.animationName = "open";
	all_p_info.style.transform = "scale(1.0)";
	all_p_info.style.opacity = "100%";
	all_p_info.style.display = "block";
}

function c_view_all_p(){
	all_p_info.style.animationName = "back";
	all_p_info.style.transform = "scale(0.5)";
	all_p_info.style.opacity = "0%";
	
	setTimeout(function(){
		all_p_info.style.display = "none";
	}, 150);
}


function reclamar(){
	cerrarTime.style.display = "none";

	rcmpz_rulet.style.animationName = "open";
	rcmpz_rulet.style.transform = "scale(1.0)";
	rcmpz_rulet.style.opacity = "100%";
	rcmpz_rulet.style.display = "block";

	setTimeout(function(){
		cerrarTime.style.display = "block";
	}, timeButtonPremAum1);
}

function c_reclamar(){
	rcmpz_rulet.style.animationName = "back";
	rcmpz_rulet.style.transform = "scale(0.5)";
	rcmpz_rulet.style.opacity = "0%";
	
	setTimeout(function(){
		rcmpz_rulet.style.display = "none";

		boxObt.innerHTML = "";
	}, timeButtonPrem1);
}

function reloadAll(){
	mys_tickets.textContent = tokenTicket.cantidad;
	dinero_text.textContent = `Monedas: $${tokenDinero.cantidad}`;
	nivel_mjr.textContent = "Actual: Nivel " + vida_lvl.lvl_ps;
	nivel_mjr.textContent = "Actual: Nivel " + p_dmg_lvl.lvl_p_dmg;
}

class levelsMusicCustom{
	constructor(nombre,artista,num,dificultad,calidad,obtenido,complete,source,img){
		this.nombre = nombre;
		this.artista = artista;
		this.num = num;
		this.dificultad = dificultad;
		this.calidad = calidad;
		this.obtenido = obtenido;
		this.complete = complete;
		this.source = source;
		this.img = img;
	}
}

var myArrayPlayList = [];

var metamorphosis = new levelsMusicCustom("Metamorphosis","Interworld",1,"Normal","Easy",true,false,"./mp3/phonk/metamorphosis.mp3","./mp3/metamorphosis.png");
var funkypunky = new levelsMusicCustom("FUNKY PUNKY","GRGE",2,"Normal","Easy",true,false,"./mp3/futurefunk/funkypunky.wav","./mp3/grge.png");
var spagheddysorry = new levelsMusicCustom("Spag Heddy - Sorry","Dubstep Gutter",3,"Normal","Normal",true,false,"./mp3/dubstep/spagHeddySorry.mp3","./mp3/dubstepgutter.png");
var wavestar = new levelsMusicCustom("WAVESTAR","Santo Beats",4,"Normal","Dificil",true,false,"./mp3/phonk/wavestar.mp3","./mp3/santobeats.png");
var deciradios = new levelsMusicCustom("Decir Adios","Cuco",5,"Normal","Normal",true,false,"./mp3/romantica/deciradios.mp3","./mp3/cuco.png");

myArrayPlayList.push(metamorphosis,funkypunky,spagheddysorry,wavestar,deciradios);

var createdAllLevels = document.getElementById("createdAllLevels");
var myTitleMusic = document.getElementById("myTitleMusic");
var myArtistMusic = document.getElementById("myArtistMusic");
var myImageMusic = document.getElementById("myImageMusic");
var myButtonPlayMusic = document.getElementById("myButtonPlayMusic");

var myMusicSelectNum = 0;

function createdMysLevels(){
	createdAllLevels.innerHTML = "";

	for(var i = 0; i <= myArrayPlayList.length - 1; i++){
		createdAllLevels.innerHTML += `<div class="my_level">
							<div class="my_point">
								<div class="center_all_y">
									<div class="center_all_x">
										<div class="cube" id="cubeNum${myArrayPlayList[i].num - 1}"></div>
									</div>
								</div>
							</div>
							<div class="my_image_spprt">
								<div class="center_all_y">
									<div class="center_all_x">
										<b>${myArrayPlayList[i].nombre} - Level: ${myArrayPlayList[i].num}</b>
									</div>
								</div>
							</div>
							<div class="my_point_2">
								<div class="center_all_y">
									<div class="center_all_x">
										<button onclick="selectMyMusic('${myArrayPlayList[i].nombre}','${myArrayPlayList[i].artista}','${myArrayPlayList[i].source}','${myArrayPlayList[i].img}',${myArrayPlayList[i].num - 1})">Select</button>
									</div>
								</div>
							</div>
						</div>`;
	}
}

var myPlaySelect = 0;
var validPlaySelect = true;

function selectMyMusic(title,artist,source,img,num){
	createdAllLevels.innerHTML += `<audio id="musicPreviewNow${num}" src="${source}"></audio>`;
	myTitleMusic.textContent = title;
	myArtistMusic.textContent = "De: " + artist;
	myImageMusic.setAttribute("src", img);
	musicSelect = source;
	myMusicSelectNum = num;

	var myCubeNum = document.getElementById(`cubeNum${num}`);
	myCubeNum.style.backgroundColor = "gold";

	myPlaySelect = 0;
	validPlaySelect = false;
	setTimeout(function(){
		validPlaySelect = true;
		inPlayMusic(num);
	}, 250);
}

function inPlayMusic(playNum){
	var musicPreviewNow = document.getElementById(`musicPreviewNow${playNum}`);

	var myCubeNum = document.getElementById(`cubeNum${playNum}`);
	myCubeNum.style.backgroundColor = "white";

	musicPreviewNow.currentTime = 0;
	musicPreviewNow.volume = 0;
	musicPreviewNow.play();

	myPlaySelect = 0;
	validPlaySelect = true;

	var temptInterval = setInterval(function(){
		if(validPlaySelect == true){
			if(myPlaySelect <= 9){
				musicPreviewNow.volume += 0.1;
			}

			if(myPlaySelect >= 90 && myPlaySelect <= 99){
				musicPreviewNow.volume -= 0.1;
			}

			if(myPlaySelect >= 100){
				clearInterval(temptInterval);

				setTimeout(function(){
					inPlayMusic(playNum);
				}, 1000);
			}

			myPlaySelect++;
		} else if(validPlaySelect == false){
			myCubeNum.style.backgroundColor = "white";
			musicPreviewNow.pause();
			clearInterval(temptInterval);
		}
	}, 200);
}

function stopPlayMusic(){
	validPlaySelect = false;
}

function playGameMusic(){
	stopPlayMusic();

	setTimeout(function(){
		openWindow('myGameMusic');
		activarTeclado(myMusicSelectNum);
	}, 2000);
}



// Teclas y Juego Musical

class objActive{
	constructor(myId, posY, radio, valid, posTecla){
		this.myId = myId;
		this.posY = posY;
		this.radio = radio;
		this.valid = valid;
		this.posTecla = posTecla;
	}
}


var myGameMusic = document.getElementById("myGameMusic");

var myValidTeclasObj = [
	nA = false,
	nS = false,
	nD = false,
	nJ = false,
	nK = false,
	nL = false
];

var myTeclasObj = [
	nA = 65,
	nS = 83,
	nD = 68,
	nJ = 74,
	nK = 75,
	nL = 76
];

var myTeclasObjDocument = [
	barra1 = document.getElementById("pressBarraNum1"),
	barra2 = document.getElementById("pressBarraNum2"),
	barra3 = document.getElementById("pressBarraNum3"),
	barra4 = document.getElementById("pressBarraNum4"),
	barra5 = document.getElementById("pressBarraNum5"),
	barra6 = document.getElementById("pressBarraNum6")
];

var myTeclasLucesDocument = [
	barra1 = document.getElementById("myLuzNum1"),
	barra2 = document.getElementById("myLuzNum2"),
	barra3 = document.getElementById("myLuzNum3"),
	barra4 = document.getElementById("myLuzNum4"),
	barra5 = document.getElementById("myLuzNum5"),
	barra6 = document.getElementById("myLuzNum6")
];

var myBarrasObjDocument = [
	barra1 = document.getElementById("pressInNum1"),
	barra2 = document.getElementById("pressInNum2"),
	barra3 = document.getElementById("pressInNum3"),
	barra4 = document.getElementById("pressInNum4"),
	barra5 = document.getElementById("pressInNum5"),
	barra6 = document.getElementById("pressInNum6")
];

// Velocidad de Pixeles por 0.1s
var velocityMusicGame = 40;

// More
var timeMusicGame = 0;
var musicSelect = "";
var musicActive = "";

var numIterationBola = 0;

var mysGeneratedBolaArray = [];

// Niveles
var myArrayLevel1 = [
	1000,
	3299,
	5999,
	9099,
	10599,
	11899,
	13199,
	14599,
	15899,
	17200,
	18700,
	20100,
	21400,
	22200,
	22800,
	23600,
	24200,
	24900,
	25600,
	26300,
	26900,
	27500,
	28300,
	29000,
	29600,
	30300,
	31100,
	31700,
	32500,
	33100,
	33800,
	34500,
	35200,
	35900,
	36600,
	37300,
	37900,
	38600,
	39300,
	40000,
	40700,
	41300,
	42100,
	42700,
	43400,
	44800,
	46100,
	47500,
	48900,
	50200,
	51600,
	53100,
	54400,
	55000,
	55800,
	56500,
	57100,
	57700,
	58500,
	59100,
	59900,
	60500,
	61300,
	61900,
	62600,
	63300,
	63900,
	64600,
	65300,
	66000,
	66700,
	67300,
	68100,
	68700,
	69400,
	70100,
	70800,
	71500,
	72100,
	72799,
	73499,
	74199,
	74899,
	75499,
	76199,
	76999,
	77599,
	78299,
	78999,
	79699,
	80299,
	80999,
	81699,
	82299,
	83099,
	83799,
	84499,
	85199,
	85899,
	86599,
	87299,
	88599,
	89999,
	91399,
	92599,
	93999,
	95499,
	96899,
	98299,
	98899,
	99599,
	100299,
	100999,
	101699,
	102299,
	103099,
	103799,
	104399,
	105099,
	105799,
	106499,
	107199,
	107899,
	108499,
	109299,
	110599,
	111999,
	113299,
	114699,
	116099,
	117399,
	118799,
	120199,
	120899,
	121599,
	122199,
	122999,
	123599,
	124299,
	124999,
	125699,
	126399,
	127099,
	127799,
	128399,
	129099,
	129699,
	130499,
	131199,
	132599,
	133899,
	135299,
	136599,
	138099,
	139199,
	140699
];

var myArrayLevel2 = [
	3299,
	5299,
	7099,
	8899,
	10799,
	12699,
	14099,
	14299,
	14999,
	15999,
	17000,
	17900,
	18800,
	19700,
	20600,
	21600,
	22600,
	23500,
	24400,
	25300,
	26300,
	27300,
	28100,
	28600,
	29100,
	29600,
	30500,
	31400,
	32400,
	33300,
	34300,
	35200,
	35600,
	36200,
	36700,
	37100,
	38000,
	38900,
	39800,
	40800,
	41800,
	42700,
	42900,
	44500,
	45400,
	46300,
	47300,
	48300,
	49200,
	50200,
	51100,
	52100,
	53100,
	54000,
	54900,
	55800,
	57700,
	58200,
	58700,
	59100,
	59600,
	60500,
	61500,
	62400,
	63300,
	64200,
	65200,
	67100,
	68000,
	69000,
	70200,
	71100,
	71400,
	71800,
	72300,
	72700,
	73199,
	74999,
	75899,
	76899,
	77299,
	77799,
	78699,
	79699,
	80499,
	81099,
	81599,
	82499,
	83299,
	84299,
	84699,
	85199,
	86199,
	87199,
	87699,
	88099,
	88599,
	88899,
	89599,
	90399,
	91399,
	92299,
	93199,
	94199,
	95199,
	96099,
	96999,
	97999,
	98899,
	99899,
	100799,
	101699,
	102599,
	102899,
	104499,
	105399,
	106399,
	107299,
	108299,
	109299,
	110199,
	111099,
	111999,
	112899,
	113899,
	114799,
	115799,
	117699,
	118199,
	118599,
	119099,
	120399,
	120699,
	121999,
	122899,
	123199,
	124299,
	125299,
	125599,
	126699,
	127799,
	128099,
	128599,
	128799,
	129099,
	129399,
	129999
];

var myArrayLevel3 = [
	0,
	400,
	1100,
	1800,
	2399,
	3099,
	3799,
	4499,
	5199,
	5799,
	6499,
	7199,
	7899,
	8599,
	9299,
	10599,
	11399,
	12099,
	12699,
	13499,
	14199,
	14899,
	16199,
	16800,
	17500,
	18200,
	18900,
	19600,
	20300,
	21800,
	22400,
	23100,
	23800,
	24200,
	24500,
	25200,
	25900,
	26600,
	27300,
	27900,
	28700,
	29400,
	29700,
	30000,
	30700,
	31400,
	32100,
	32800,
	33500,
	34200,
	34900,
	35200,
	35500,
	36200,
	36900,
	37600,
	38300,
	39000,
	39600,
	40400,
	40700,
	41100,
	41700,
	42400,
	43100,
	43800,
	44600,
	45200,
	45900,
	46600,
	47200,
	47900,
	48600,
	49300,
	50000,
	50600,
	51400,
	52100,
	52700,
	53400,
	54100,
	54800,
	56200,
	57600,
	58800,
	60400,
	61700,
	63100,
	63900,
	64200,
	64600,
	64800,
	65000,
	65200,
	65600,
	66000,
	66600,
	67300,
	67900,
	68600,
	69300,
	70000,
	70700,
	71300,
	72000,
	72700,
	73399,
	74099,
	74699,
	75399,
	76099,
	76799,
	77599,
	78299,
	78899,
	79599,
	80299,
	80999,
	81699,
	82399,
	82999,
	83799,
	84499,
	85199,
	85799,
	86499,
	87199,
	87899,
	88599,
	89399,
	89999,
	90699,
	91399,
	91999,
	92699,
	93399,
	94099,
	94799,
	95499,
	96199,
	96899,
	97599,
	98299,
	98999,
	99699,
	100399,
	101099,
	101699,
	102399,
	103099,
	103799,
	104499,
	105199,
	105899,
	106599,
	107299,
	107899,
	108599,
	109299,
	109999,
	112799,
	115299,
	117899,
	121099,
	121799,
	122499,
	123099,
	123499,
	123799,
	124499,
	125199,
	125899,
	126599,
	127299,
	127999,
	128699,
	128999,
	129299,
	129999,
	130699,
	131399,
	132099,
	132799,
	133499,
	134199,
	134499,
	134899,
	135499,
	136199,
	136899,
	137599,
	138299,
	138999,
	139699,
	139999,
	140399,
	140999,
	141699,
	142399,
	143099,
	145799,
	148499,
	151199,
	154099,
	154699,
	155499,
	156199,
	156799,
	157499,
	158199,
	158899,
	159599,
	160299,
	160999,
	161599,
	163099,
	163499,
	163799,
	163999,
	164199,
	164499,
	164799,
	165299,
	167999,
	170699,
	171299,
	172099,
	172699,
	173399,
	174099,
	174799,
	175499,
	176199,
	176899,
	177599,
	178299,
	178899,
	179599,
	180299,
	180999,
	181599,
	182399,
	183099,
	183799,
	184499,
	185099,
	185799,
	186499,
	187199,
	187899,
	188599,
	189299,
	189999,
	190699,
	191399,
	191999,
	192699,
	193399,
	194099,
	194799,
	195499,
	196099,
	196799,
	197499,
	198199,
	198899,
	199599,
	200299,
	200999,
	201699,
	202399,
	203099,
	203699,
	204399,
	205099,
	205799,
	206499,
	207199,
	207899,
	208599,
	209299,
	211899,
	214799,
	217499
];

var myArrayLevel4 = [
	100,
	2599,
	4999,
	7299,
	9899,
	11099,
	12199,
	13299,
	14599,
	15799,
	16900,
	18100,
	19500,
	20100,
	20700,
	21300,
	21900,
	22500,
	23100,
	23700,
	24200,
	24800,
	25400,
	26000,
	26700,
	27300,
	27800,
	29100,
	29700,
	30200,
	30900,
	31500,
	32000,
	32600,
	33300,
	33900,
	34400,
	35000,
	35600,
	36200,
	36800,
	37400,
	38000,
	38500,
	39200,
	39800,
	40500,
	41000,
	41600,
	42200,
	42900,
	43400,
	44000,
	44600,
	45300,
	45800,
	46400,
	47000,
	47600,
	48300,
	48900,
	49500,
	50100,
	50700,
	51300,
	51900,
	52500,
	53000,
	53600,
	54200,
	54900,
	55400,
	56000,
	56600,
	57200,
	57900,
	58400,
	59000,
	59600,
	60300,
	60800,
	61400,
	62000,
	62600,
	63200,
	63800,
	64400,
	65100,
	65700,
	66300,
	66900,
	67500,
	69800,
	71700,
	71900,
	72500,
	74599,
	76399,
	76599,
	77099,
	78299,
	79399,
	80699,
	81199,
	81399,
	81899,
	82999,
	84199,
	85399,
	86599,
	87199,
	87799,
	88499,
	89099,
	89699,
	90299,
	90899,
	91399,
	92099,
	92699,
	93299,
	93899,
	94499,
	95099,
	95599,
	96199,
	96899,
	97499,
	98099,
	98699,
	99299,
	99899,
	100399,
	100999,
	101599,
	102199,
	102799,
	103399,
	103999,
	104599,
	105299,
	105799,
	106399,
	106999,
	107599,
	108199,
	108799,
	109399,
	109999,
	110599,
	111199,
	111799,
	112399,
	112999,
	113599,
	114199,
	114799,
	115399,
	115999,
	116599,
	117199,
	117799,
	118399,
	119099,
	119699,
	120299,
	120899,
	121399,
	121999,
	122599,
	123199,
	123899,
	124499,
	125099,
	125699,
	126299,
	126899,
	127299,
	127599,
	127799,
	127999,
	128299,
	128499,
	128999,
	129199,
	129499,
	129599,
	129899,
	130499,
	131099,
	131599,
	131999,
	132299,
	132599,
	132799,
	133099,
	133299,
	133699,
	133899,
	134199,
	134399,
	134699,
	135299,
	135899,
	136499,
	136799,
	137099,
	137399,
	137599,
	137799,
	137999,
	138599,
	138799,
	139099,
	139299,
	139599,
	140099,
	140699,
	141299,
	141599,
	141899,
	142199,
	142399,
	142699,
	142899,
	143399,
	143599,
	143899,
	144099
];

var myArrayLevel5 = [
	600,
	1500,
	2399,
	3299,
	4299,
	5199,
	6199,
	6999,
	8099,
	8999,
	9899,
	10899,
	11799,
	12799,
	13599,
	14499,
	15499,
	16399,
	17300,
	18300,
	19100,
	20200,
	21100,
	22000,
	22900,
	23900,
	24800,
	25700,
	26700,
	27700,
	28600,
	29500,
	30400,
	31400,
	32300,
	33300,
	34200,
	35200,
	36100,
	36900,
	37900,
	38800,
	39700,
	40700,
	41600,
	42600,
	43400,
	44500,
	45400,
	46300,
	47300,
	48100,
	49000,
	49900,
	50800,
	51800,
	52700,
	53600,
	54600,
	55600,
	56500,
	57400,
	58400,
	59300,
	60200,
	61300,
	62200,
	63200,
	64100,
	64900,
	65900,
	66800,
	67800,
	68700,
	69700,
	70600,
	71600,
	74399,
	75199,
	76199,
	77099,
	77999,
	78999,
	79899,
	80799,
	81799,
	82599,
	83599,
	84499,
	85399,
	86299,
	87299,
	88299,
	89199,
	90099,
	90999,
	91999,
	92899,
	93899,
	94799,
	95699,
	96699,
	97599,
	98599,
	99499,
	100299,
	101299,
	102199,
	103299,
	104299,
	105099,
	106199,
	107099,
	107899,
	108899,
	109799,
	110499,
	111099,
	111799,
	112599,
	113599,
	114399,
	115399,
	116299,
	117299,
	118199,
	119199,
	120199,
	121099,
	121999,
	122799,
	123799,
	124799,
	125699,
	126699,
	127599,
	128399,
	129299,
	130299,
	131299,
	134199,
	135099,
	135999,
	136899,
	137899,
	138899,
	139799,
	140799,
	141699,
	142599,
	143399,
	144399,
	145199,
	146199,
	147199,
	148099,
	148999,
	149899,
	150999,
	151799,
	152799,
	153699,
	154599,
	155599,
	156499,
	157399,
	158499,
	159299,
	160099,
	161099,
	163999,
	164899,
	165899,
	166899,
	167799,
	168599,
	169599,
	170499,
	171399,
	172299,
	173299,
	174199,
	175099,
	176099,
	176999,
	178999,
	179899,
	180799,
	181699,
	182699,
	183499,
	184499,
	185399,
	186399,
	187299,
	188299,
	189199,
	190199,
	191099,
	191999,
	192899,
	193899,
	194799,
	195599,
	196599,
	197599,
	198499,
	199399,
	200399,
	201299,
	202199,
	203199,
	204099,
	205099,
	205899,
	206899,
	207799,
	208799,
	209799,
	210699,
	211599,
	212499,
	213399,
	214399,
	215299,
	216299,
	217199,
	218099,
	218999,
	219999,
	220899,
	221999,
	222799,
	223699,
	224599,
	225699,
	226599,
	227499,
	228399,
	229299,
	230299,
	231199,
	232099,
	233099,
	233999,
	234899,
	235799,
	236799,
	237699,
	238699,
	239699,
	240599,
	240999,
	241299,
	241999,
	242299,
	243299,
	244299,
	245199,
	246199,
	247099,
	247999,
	248899,
	249899,
	250699,
	251799,
	252299,
	252799,
	253199,
	253699,
	254499,
	255599,
	256099,
	256299,
	256999,
	257299,
	259799,
	261099,
	262099,
	263399,
	263799,
	264399,
	264799,
	266799,
	268599,
	268999,
	269399,
	269799,
	270499,
	271299,
	272299
];

var myArraySelect = [
	myArrayLevel1,
	myArrayLevel2,
	myArrayLevel3,
	myArrayLevel4,
	myArrayLevel5
];

function activarTeclado(nivel){
	// Exportado
	// teclas
	window.addEventListener('keydown', teclaIn);
	window.addEventListener('keyup', teclaPress);
	// fin teclas
	// Exportado

	timeMusicGame = 0;
	numIterationBola = 0;
	objMusicActive = document.createElement("audio");
	objMusicActive.setAttribute("id", "musicActive");
	objMusicActive.setAttribute("src", musicSelect);
	myGameMusic.appendChild(objMusicActive);
	musicActive = document.getElementById("musicActive");
	musicActive.currentTime = timeMusicGame;
	createdApartirArray = myArraySelect[nivel];

	for(var i = 0; i <= createdApartirArray.length - 1; i++){
		var myRandPosition = Math.floor(Math.random() * 6);
		generarBola("basic", -100, createdApartirArray[i], myRandPosition, numIterationBola);
		numIterationBola += 1;
	}

	setTimeout(function(){
		closeWindow("myGameMusic");
		myGameMusic.removeChild(musicActive);

		for(var i = 0; i <= createdApartirArray.length - 1; i++){
			document.getElementById(mysGeneratedBolaArray[i].myId).remove();
			createdApartirArray[i].valid = false;
		}

		mysGeneratedBolaArray = [];
	}, createdApartirArray[createdApartirArray.length - 1] + 6000);

	playLevelMusic((createdApartirArray[createdApartirArray.length - 1] + 6000) * 0.001);
}

function iluminarTeclaIn(myArray, color, num){
	myTeclasObjDocument[num].style.backgroundColor = color;
}

function iluminarTeclaOut(myArray, color, num){
	myTeclasObjDocument[num].style.backgroundColor = color;
}

function teclaIn(){
	tecla = event.keyCode;
	// console.log(tecla);

	if(true){
		if(tecla == myTeclasObj[0]){
			iluminarTeclaIn(myTeclasObjDocument, "red", 0);
			saberGenerar();
			myValidTeclasObj[0] = true;
			myTeclasLucesDocument[0].style.animationName = "in-out";
		}

		if(tecla == myTeclasObj[1]){
			iluminarTeclaIn(myTeclasObjDocument, "orange", 1);
			saberGenerar();
			myValidTeclasObj[1] = true;
			myTeclasLucesDocument[1].style.animationName = "in-out";
		}

		if(tecla == myTeclasObj[2]){
			iluminarTeclaIn(myTeclasObjDocument, "gold", 2);
			saberGenerar();
			myValidTeclasObj[2] = true;
			myTeclasLucesDocument[2].style.animationName = "in-out";
		}
		
		if(tecla == myTeclasObj[3]){
			iluminarTeclaIn(myTeclasObjDocument, "limegreen", 3);
			saberGenerar();
			myValidTeclasObj[3] = true;
			myTeclasLucesDocument[3].style.animationName = "in-out";
		}

		if(tecla == myTeclasObj[4]){
			iluminarTeclaIn(myTeclasObjDocument, "aqua", 4);
			saberGenerar();
			myValidTeclasObj[4] = true;
			myTeclasLucesDocument[4].style.animationName = "in-out";
		}

		if(tecla == myTeclasObj[5]){
			iluminarTeclaIn(myTeclasObjDocument, "violet", 5);
			saberGenerar();
			myValidTeclasObj[5] = true;
			myTeclasLucesDocument[5].style.animationName = "in-out";
		}

		if(tecla == 27){
			// closeWindow("myGameMusic");
		}
	}

	if(tecla == 13){
	}
}

function teclaPress(){
	tecla = event.keyCode;
	// console.log(tecla);

	if(tecla == myTeclasObj[0]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 0);
		myValidTeclasObj[0] = false;
		myTeclasLucesDocument[0].style.animationName = "none";
	}

	if(tecla == myTeclasObj[1]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 1);
		myValidTeclasObj[1] = false;
		myTeclasLucesDocument[1].style.animationName = "none";
	}

	if(tecla == myTeclasObj[2]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 2);
		myValidTeclasObj[2] = false;
		myTeclasLucesDocument[2].style.animationName = "none";
	}
	
	if(tecla == myTeclasObj[3]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 3);
		myValidTeclasObj[3] = false;
		myTeclasLucesDocument[3].style.animationName = "none";
	}

	if(tecla == myTeclasObj[4]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 4);
		myValidTeclasObj[4] = false;
		myTeclasLucesDocument[4].style.animationName = "none";
	}

	if(tecla == myTeclasObj[5]){
		iluminarTeclaIn(myTeclasObjDocument, "rgb(120, 120, 120)", 5);
		myValidTeclasObj[5] = false;
		myTeclasLucesDocument[5].style.animationName = "none";
	}
}

function saberGenerar(){
	// console.log(parseInt((timeMusicGame * 1000) - 2400));
}

function generarBola(type, posY, timeIn, posIn, num){
	setTimeout(function(){
		var myObjectScene1 = document.createElement("div");
		var myObjectScene2 = document.createElement("div");
		var myObjectSceneImg = document.createElement("img");

		myObjectScene1.setAttribute("class", "obj_x");
		myObjectScene2.setAttribute("class", "obj_y");
		myObjectSceneImg.setAttribute("src", "./img/ui/bola.png");

		myObjectScene1.setAttribute("id", `objInScene${num}`);
		myObjectScene2.setAttribute("id", `objInScene${num}_2`);
		myObjectSceneImg.setAttribute("id", `objInScene${num}_3`);

		myBarrasObjDocument[posIn].appendChild(myObjectScene1);
		var moveMyObjectScene1 = document.getElementById(`objInScene${num}`);
		moveMyObjectScene1.appendChild(myObjectScene2);
		var moveMyObjectScene2 = document.getElementById(`objInScene${num}_2`);
		moveMyObjectScene2.appendChild(myObjectSceneImg);
		
		moveMyObjectScene1.style.top = posY + "px";
		mysGeneratedBolaArray.push(new objActive(`objInScene${num}`, posY, 50, false, posIn));
	}, timeIn);
}

function playLevelMusic(end){
	setTimeout(function(){
		musicActive.play();
	}, 2000);

	c_mode_his();
	var delayPressTrampa = false;
	var limitForMusic = end;

	var clockLevel = setInterval(function(){
		if(mysGeneratedBolaArray.length > 0){
			for(var i = 0; i <= mysGeneratedBolaArray.length - 1; i++){
				var moveMyObjectSceneActive = document.getElementById(mysGeneratedBolaArray[i].myId);
				var moveMyObjectSceneImg = document.getElementById(mysGeneratedBolaArray[i].myId + "_3");

				if(mysGeneratedBolaArray[i].posY < 1080){
					mysGeneratedBolaArray[i].posY += velocityMusicGame;
				} else {
					// moveMyObjectSceneActive.style.opacity = "0%";
				}

				if(mysGeneratedBolaArray[i].posY >= 770 && mysGeneratedBolaArray[i].posY <= 799){
					if(myValidTeclasObj[mysGeneratedBolaArray[i].posTecla] == true && mysGeneratedBolaArray[i].valid == false){
						if(delayPressTrampa == false){
							mysGeneratedBolaArray[i].valid = true;
							moveMyObjectSceneActive.style.filter = "grayscale(100%)";
							generarTextoMusic("RÁPIDO", myBarrasObjDocument[mysGeneratedBolaArray[i].posTecla], "gray");
						}
					}
				}

				if(mysGeneratedBolaArray[i].posY >= 800 && mysGeneratedBolaArray[i].posY <= 970){
					if(myValidTeclasObj[mysGeneratedBolaArray[i].posTecla] == true && mysGeneratedBolaArray[i].valid == false){
						mysGeneratedBolaArray[i].valid = true;
						moveMyObjectSceneImg.style.boxShadow = "0px 0px 30px rgba(255, 255, 255, 0.5)";
						moveMyObjectSceneActive.style.animationName = "pulse";
						delayPressTrampa = true;
						generarTextoMusic("PERFECTO +5", myBarrasObjDocument[mysGeneratedBolaArray[i].posTecla], "gold");

						if(delayPressTrampa == true){
							setTimeout(function(){
								delayPressTrampa = false;
							}, 500);
						}
					}
				}

				if(mysGeneratedBolaArray[i].posY > 970 && mysGeneratedBolaArray[i].valid == false){
					mysGeneratedBolaArray[i].valid = true;
					moveMyObjectSceneActive.style.filter = "grayscale(100%)";
					generarTextoMusic("TARDE", myBarrasObjDocument[mysGeneratedBolaArray[i].posTecla], "gray");
				}

				moveMyObjectSceneActive.style.top = mysGeneratedBolaArray[i].posY + "px";
			}
		}

		if(timeMusicGame >= limitForMusic){
			clearInterval(clockLevel);
			mode_his();
			// console.log("Terminado");
		}

		timeMusicGame += 0.1;
	}, 100);
}