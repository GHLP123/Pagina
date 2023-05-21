var obtPerBox = document.getElementById("obtPerBox");
var boxNewCreated;
var selectPremio;

var girosPerDes;

var countGiros;

var maxProbRuletAll = 100;

var timeButtonPrem1;
var timeButtonPremAum1;

function oneGiroFun(){
	if(objNumVar[2].cantidad >= 1){
		rcmpz_block.style.justifyContent = "center";
		girosPerDes = Math.floor(Math.random() * maxProbRuletAll);

		verifGirosPremio();
		reclamar();

		objNumVar[2].cantidad -= 1;

		boxObt.innerHTML += boxNewCreated;

		reloadAll();
	}
}

function allGirosFun(){
	countGiros = 0;

	if(objNumVar[2].cantidad >= 10){
		setTimeout(function(){
			oneGiroFun();

			countGiros += 1;
		}, 0);

		var iteradorGiros = setInterval(function(){
			oneGiroFun();

			countGiros += 1;

			if(countGiros >= 10){
				clearInterval(iteradorGiros);
				rcmpz_block.style.justifyContent = "start";
			}
		}, 5);
	}
}

function verifGirosPremio(){
	if(objNumVar[2].cantidad >= 1){
		if((girosPerDes >= 0) && (girosPerDes <= 20)){

			enterProbPer = Math.floor(Math.random() * (perNumVar.length));

			if(perNumVar[enterProbPer].obtener == false){

				boxNewCreated = `<div class="rcmpz_cont ${perNumVar[enterProbPer].calidad}">
						<img src="${perNumVar[enterProbPer].image}" class="img_rcmpz">
						<p>${perNumVar[enterProbPer].nombre}</p>
					</div>`;

				perNumVar[enterProbPer].obtener = true;

			} else if((perNumVar[enterProbPer].obtener == true)){

				objNumVar[0].cantidad += 125;
				boxNewCreated = `<div class="rcmpz_cont ${objNumVar[0].calidad}">
						<img src="${objNumVar[0].image}" class="img_rcmpz">
						<p>${objNumVar[0].nombre} x125</p>
					</div>`;

				console.log(enterProbPer + " -> Dinero por Personaje");

			}
		} else if((girosPerDes >= 21) && (girosPerDes <= 80)){

			objNumVar[0].cantidad += 75;
			boxNewCreated = `<div class="rcmpz_cont ${objNumVar[0].calidad}">
						<img src="${objNumVar[0].image}" class="img_rcmpz">
						<p>${objNumVar[0].nombre} x75</p>
					</div>`;

		} else if((girosPerDes >= 81) && (girosPerDes <= 95)){

			objNumVar[2].cantidad += 2;
			boxNewCreated = `<div class="rcmpz_cont ${objNumVar[2].calidad}">
						<img src="${objNumVar[2].image}" class="img_rcmpz">
						<p>${objNumVar[2].nombre} x2</p>
					</div>`;

		} else if((girosPerDes >= 96) && (girosPerDes <= 100)){

			objNumVar[1].cantidad += 15;
			boxNewCreated = `<div class="rcmpz_cont ${objNumVar[1].calidad}">
						<img src="${objNumVar[1].image}" class="img_rcmpz">
						<p>${objNumVar[1].nombre} x15</p>
					</div>`;
		
		}
	}
}

function objRealse(){
	for(var i = 0; i <= (objNumVar.length - 1); i++){
		if((objNumVar[i].cantidad >= 1) && (objNumVar[i].boxCreated == "notCreated")){
			boxNewObjSection = `<div class="caja_1 ${objNumVar[i].calidad}">
									<div class="centrar_img">
										<img src="${objNumVar[i].image}">
									</div>
									<p id="reload${objNumVar[i].num}">${objNumVar[i].nombre} x${objNumVar[i].cantidad}</p>
								</div>`;

			obtObjBox.innerHTML += boxNewObjSection;

			objNumVar[i].boxCreated = "yesCreated";
		} else if(objNumVar[i].cantidad <= 0){
			
			objNumVar[i].boxCreated = "notCreated";

		} else if((objNumVar[i].cantidad >= 1) && (objNumVar[i].boxCreated = "yesCreated")){
			document.getElementById(`reload${objNumVar[i].num}`).textContent = `${objNumVar[i].nombre} x${objNumVar[i].cantidad}`;
		}
	}
}

function persRealse(){
	for(var i = 0; i <= (perNumVar.length - 1); i++) {
		if((perNumVar[i].obtener == true) && (perNumVar[i].boxCreated == "notCreated")){
			boxNewCreated = `<div onclick="whatImg(${perNumVar[i].num}), img_p_resaltar(), personalizar_t()" class="caja_1 ${perNumVar[i].calidad}">
									<div class="centrar_img">
										<img src="${perNumVar[i].image}">
									</div>
									<p>${perNumVar[i].nombre}</p>
								</div>`;

			obtPerBox.innerHTML += boxNewCreated;
			
			perNumVar[i].boxCreated = "yesCreated";

			console.log("Se creo: " + perNumVar[i].nombre);
		}
	}
}