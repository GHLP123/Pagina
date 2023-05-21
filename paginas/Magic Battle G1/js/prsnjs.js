// Estructurar y crear
var perNumVar = [];
var selectPlayer;

class personajes {
	constructor(nombre,edad,tipoElem,vel_dmg,prob_all_dmg,ampl_dmg,prob_escudo,escudo_base,prob_energy,energy_mas,vida_base,vida_b,dmg_bsc,dmg_hbldd,dmg_ulti,obtener,boxCreated,calidad,image,imageHd,num){
		this.nombre = nombre;
		this.edad = edad;
		this.tipoElem = tipoElem;
		this.vel_dmg = vel_dmg;
		this.prob_all_dmg = prob_all_dmg;
		this.ampl_dmg = ampl_dmg;
		this.prob_escudo = prob_escudo;
		this.escudo_base = escudo_base;
		this.prob_energy = prob_energy;
		this.energy_mas = energy_mas;
		this.vida_base = vida_base;
		this.vida_b = vida_b;
		this.dmg_bsc = dmg_bsc;
		this.dmg_hbldd = dmg_hbldd;
		this.dmg_ulti = dmg_ulti;
		this.obtener = obtener;
		this.boxCreated = boxCreated;
		this.calidad = calidad;
		this.image = image;
		this.imageHd = imageHd;
		this.num = num;
	}
}



// Personajes y atributos creados
var perObtNum1 = new personajes("Miku",16,"noElem",2000,0,1.2,0,15,0,1,100,100,5,12,32,false,"notCreated","calidad_normal","./img/personajes/all/200/miku_200.png","./img/personajes/all/miku_full.png",0);
var perObtNum2 = new personajes("Keqing",0,"electroElem",2000,0,1.2,0,15,0,1,100,100,4,14,35,false,"notCreated","calidad_buena","./img/personajes/all/200/keqing_200.png","./img/personajes/all/keqing_full.png",1);
var perObtNum3 = new personajes("Garw Gura",0,"aguaElem",2000,0,1.2,0,15,0,1,100,100,6,11,28,false,"notCreated","calidad_normal","./img/personajes/all/200/gura_200.png","./img/personajes/all/gura_full.png",2);
var perObtNum4 = new personajes("Yamakaze",0,"noElem",2000,0,1.2,0,15,0,1,100,100,2,6,10,false,"notCreated","calidad_basic","./img/personajes/all/200/yamakaze_200.png","./img/personajes/all/yamakaze_full.png",3);
var perObtNum5 = new personajes("Amelia",0,"noElem",2000,0,1.2,0,15,0,1,100,100,3,9,18,false,"notCreated","calidad_eficiente","./img/personajes/all/200/amelia_200.png","./img/personajes/all/amelia_full.png",4);

// Agregar al arreglo
perNumVar.push(perObtNum1,perObtNum2,perObtNum3,perObtNum4,perObtNum5);




// Mostrar en HTML
var boxNewPerSection;
function crearAllPersonajes(){
	boxSectionPer.innerHTML = "";
	
	for(var i = 0; i <= (perNumVar.length - 1); i++){
		boxNewPerSection = `<div class="img_p_all ${perNumVar[i].calidad}">
								<div class="box_p_all">
									<div class="box_p_all_cent">
										<img src="${perNumVar[i].image}">
									</div>
								</div>
								<div class="info_p_all">
									<p>${perNumVar[i].nombre}</p>
								</div>
							</div>`;

		boxSectionPer.innerHTML += boxNewPerSection;
	}
}

function crearAllPersonajesPremios1(){
	for(var i = 0; i <= (perNumVar.length - 1); i++){
		boxNewPerSection = `<img src="${perNumVar[i].image}" class="${perNumVar[i].calidad}">`;

		oneRuletaPre.innerHTML += boxNewPerSection;
	}
}

function whatImg(num){
	playerSelectView = perNumVar[num].imageHd;
	playerSelectBackView = perNumVar[num].calidad;

	selectPlayer = perNumVar[num];
}

function textAllPersonajes(){
	nmbr_pers_text.textContent = `Nombre: ${selectPlayer.nombre}`;
	edad_pers_text.textContent = `Edad: ${selectPlayer.edad}`;
	imagenMejora.setAttribute("src", selectPlayer.imageHd);
	imagenMejora.setAttribute("class", `imagen_m ${selectPlayer.calidad}`);
}