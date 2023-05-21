var objNumVar = [];
class objetos {
	constructor(nombre,cantidad,calidad,obtenido,boxCreated,image,num){
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.calidad = calidad;
		this.obtenido = obtenido;
		this.boxCreated = boxCreated;
		this.image = image;
		this.num = num;
	}
}

// Objetos y creacion
// var objObtNum1 = new objetos("nombre",cantidad,"calidad","¿obtenido?","¿creado?","imagen200","numeroObj");
var tokenDinero = new objetos("Dinero",500,"calidad_buena",false,"notCreated","./img/obj/dinero.png",0);
var tokenPiedra = new objetos("Piedra Mágica",100,"calidad_suprema",false,"notCreated","./img/obj/piedra_magic.png",1);
var tokenTicket = new objetos("Ticket",15,"calidad_epica",false,"notCreated","./img/obj/ticket.png",2);

objNumVar.push(tokenDinero,tokenPiedra,tokenTicket);



// Agregar objetos a HTML
var boxNewObjSection;

function crearAllObjetos(){
	boxSectionObj.innerHTML = "";

	for(var i = 0; i <= (objNumVar.length - 1); i++){
		boxNewObjSection = `<div class="img_p_all ${objNumVar[i].calidad}">
								<div class="box_p_all">
									<div class="box_p_all_cent">
										<img src="${objNumVar[i].image}">
									</div>
								</div>
								<div class="info_p_all">
									<p>${objNumVar[i].nombre}</p>
								</div>
							</div>`;

		boxSectionObj.innerHTML += boxNewObjSection;
	}
}


function reloadAllObj(){
	document.getElementById("text_prnc_dinero").textContent = `${objNumVar[0].cantidad}`;
	document.getElementById("text_prnc_piedra_magic").textContent = `${objNumVar[1].cantidad}`;
	document.getElementById("text_prnc_ticket").textContent = `${objNumVar[2].cantidad}`;
}