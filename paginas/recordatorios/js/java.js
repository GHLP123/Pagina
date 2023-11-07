window.addEventListener('load', function () {
	//console.log(Date.now() * 0.001);

	loadData();

	if(arrayObjetives.length > 0){
		for(var i = 0; i <= arrayObjetives.length - 1; i++){
			createdInTable(arrayObjetives, arrayObjetives[i].id);
			reloadObjetive(arrayObjetives[i].id);
		}
	}

	setInterval(function(){
		var i = 0;
		if(arrayObjetives.length > 0){
			arrayObjetives.forEach(function(){
				arrayObjetives[i].time = Date.now() * 0.001;
				funTemptTime(arrayObjetives, arrayObjetives[i].id);
				i++;
			});
		}
	}, 100);
});

// localstorange
var myLocalStorage = window.localStorage;

// guardar datos
function saveData(){
	myLocalStorage.clear();
	if(arrayObjetives.length > 0){
		for(var i = 0; i <= arrayObjetives.length -1; i++){
			myLocalStorage.setItem(`dataArray${i}Name`, arrayObjetives[i].name);
			myLocalStorage.setItem(`dataArray${i}Description`, arrayObjetives[i].description);
			myLocalStorage.setItem(`dataArray${i}Complete`, arrayObjetives[i].complete);
			myLocalStorage.setItem(`dataArray${i}Time`, arrayObjetives[i].time);
			myLocalStorage.setItem(`dataArray${i}TimeNext`, arrayObjetives[i].timeNext);
			myLocalStorage.setItem(`dataArray${i}Count`, arrayObjetives[i].count);
			myLocalStorage.setItem(`dataArray${i}NumId`, arrayObjetives[i].numId);
			myLocalStorage.setItem(`dataArray${i}Id`, arrayObjetives[i].id);
			myLocalStorage.setItem(`dataArray${i}Type`, arrayObjetives[i].type);
			myLocalStorage.setItem(`dataArray${i}Multi`, arrayObjetives[i].multi);
		}

		myLocalStorage.setItem(`lengthTotal`, arrayObjetives.length);
		myLocalStorage.setItem(`dataCountId`, count_id);
		myLocalStorage.setItem(`dataCountId2`, count_id2);
	}

}
// fin de guardar datos


// cargar datos
function loadData(){
	if(myLocalStorage.getItem("lengthTotal") >= 0){
		for(var i = 0; i <= myLocalStorage.getItem("lengthTotal") - 1; i++){
			var temptData1 = myLocalStorage.getItem(`dataArray${i}Name`);
			var temptData2 = myLocalStorage.getItem(`dataArray${i}Description`);
			var temptData3 = myLocalStorage.getItem(`dataArray${i}Complete`);
			var temptData4 = Number(myLocalStorage.getItem(`dataArray${i}Time`));
			var temptData5 = Number(myLocalStorage.getItem(`dataArray${i}TimeNext`));
			var temptData6 = Number(myLocalStorage.getItem(`dataArray${i}Count`));
			var temptData7 = Number(myLocalStorage.getItem(`dataArray${i}NumId`));
			var temptData8 = Number(myLocalStorage.getItem(`dataArray${i}Id`));
			var temptData9 = myLocalStorage.getItem(`dataArray${i}Type`);
			var temptData10 = Number(myLocalStorage.getItem(`dataArray${i}Multi`));

			if(temptData3 == "true"){
				temptData3 = true
			} else {
				temptData3 = false;
			}

			var temptObject = new myObjetiveCustom(temptData1,temptData2,temptData3,temptData4,temptData5,temptData6,temptData7,temptData8,temptData9,temptData10);
			arrayObjetives.push(temptObject);

			count_id = Number(myLocalStorage.getItem("countIdData"));
			count_id = Number(myLocalStorage.getItem("countId2Data"));
		}
	}
}
// fin de cargar datos


// fin localstorange


// Inicio del Modelo Objetivos

// Este es el modelo para construir objetivos
class myObjetiveCustom{
	constructor(name,description,complete,time,timeNext,count,numId,id,type,multi){
		this.name = name;
		this.description = description;
		this.complete = complete;
		this.time = time;
		this.timeNext = timeNext;
		this.count = count;
		this.numId = numId;
		this.id = id;
		this.type = type;
		this.multi = multi;
	}
}
// Este es el array donde se almacenaran los Objetivos (Objetos)
var arrayObjetives = [];
// Final del Modelo Objetivos


// Inicio Mi Formulario
var objAgregar = document.getElementById("objAgregar");

var descripcion = document.getElementById("descripcion");

var nombreObj = document.getElementById("nombreObj");
var reinicio = document.getElementById("reinicio");
var nombreDescrip = document.getElementById("nombreDescrip");
var tipeOfTime = document.getElementById("tipeOfTime");
// Final Mi Formulario


// Inicio Mis Buttons
var crearObjetivo = document.getElementById("crearObjetivo");
// Final Mis Buttons

var myLocalStorage = window.localStorage;

var arrayGuadado = [];

var count_id = 0;
var count_id2 = 0;

crearObjetivo.addEventListener("click", function (){
	if((nombreObj.value != "") && (nombreObj.value != 0)){
		if((reinicio.value != "") && (reinicio.value != 0 && reinicio.value > 0)){
			if((nombreDescrip.value != "") && (nombreDescrip.value != 0)){
				var timeDate1 = 0;
				var timeDate2 = 0;

				timeDate1 = Date.now() * 0.001;
				if(tipeOfTime.value == "day"){
					timeDate2 = (Date.now() + (reinicio.value * 86400000)) * 0.001;
				}
				if(tipeOfTime.value == "hora"){
					timeDate2 = (Date.now() + (reinicio.value * 3600000)) * 0.001;
				}
				if(tipeOfTime.value == "min"){
					timeDate2 = (Date.now() + (reinicio.value * 60000)) * 0.001;
				}

				var temptObjetive = new myObjetiveCustom(nombreObj.value, nombreDescrip.value, false, timeDate1, timeDate2, 0, count_id, count_id2, tipeOfTime.value, reinicio.value);
				arrayObjetives.push(temptObjetive);
				createdInTable(arrayObjetives, count_id2);

				nombreObj.value = "";
				nombreDescrip.value = "";
			}
		}
	}
});

function createdInTable(array, numId2){
	objAgregar.insertAdjacentHTML('beforeend', `<tr id="data${array[numId2].numId}" class="fila text-center">
		<td class="columna-p"><p>${array[numId2].name}</p></td>
		<td><button onclick="verObjetivoDescrip('${array[numId2].description}')">Ver Más</button></td>
		<td><p id="textTemptTime${array[numId2].numId}"></p></td>
		<td><p id="temptCount${array[numId2].numId}"></p></td>
		<td><button id="buttonListo${array[numId2].numId}" onclick="completeObjetive(${array[numId2].id})">▢</button></td>
		<td><button id="buttonDelete${array[numId2].numId}" onclick="deleteObjetive(${array[numId2].numId},${array[numId2].id})">×</button></td>
	</tr>`);
	saveData();
	count_id++;
	count_id2++;
}

function funTemptTime(array,index){
	//console.log(Math.trunc(timeNext - time));

	var myTimeActually = Math.trunc(array[index].timeNext - array[index].time);
	var text = document.getElementById(`textTemptTime${array[index].numId}`);
	var myTextTimeAll = "";
	var temptCount = document.getElementById(`temptCount${array[index].numId}`);

	if(myTimeActually <= 0){
		reloadMyObjetiveTime(arrayObjetives, index);
		myTextTimeAll = "s";
	}

	if(myTimeActually >= 1){
		myTextTimeAll = "s";
	}
	if(myTimeActually >= 60 && array[index].type == "min" || array[index].type == "hora" || array[index].type == "day"){
		myTimeActually = myTimeActually / 60;
		myTextTimeAll = "m";
	}
	if(myTimeActually >= 60 && array[index].type == "hora" || array[index].type == "day"){
		myTimeActually = myTimeActually / 60;
		myTextTimeAll = "h";
	}
	if(myTimeActually >= 24 && array[index].type == "day"){
		myTimeActually = myTimeActually / 24;
		myTextTimeAll = "d";
	}

	text.textContent = `${Math.trunc(myTimeActually)}${myTextTimeAll}`;
	temptCount.textContent = array[index].count;
}

function deleteObjetive(numId2, soloId){
	var removeData = document.getElementById(`data${arrayObjetives[soloId].numId}`);
	removeData.remove(this);
	arrayObjetives = arrayObjetives.filter(arrayObjetives => arrayObjetives.id == soloId);

	for(var i = 0; i <= arrayObjetives.length - 1; i++){
		var buttonDelete = document.getElementById(`buttonDelete${arrayObjetives[i].numId}`);
		var buttonListo = document.getElementById(`buttonListo${arrayObjetives[i].numId}`);
		arrayObjetives[i].id = i;
		buttonDelete.setAttribute("onclick", `deleteObjetive(${arrayObjetives[i].numId}, ${arrayObjetives[i].id})`);
		buttonListo.setAttribute("onclick", `completeObjetive(${arrayObjetives[i].id})`);
	}

	count_id2 = arrayObjetives.length;
	saveData();
	//console.log(arrayObjetives);
}

function reloadObjetive(soloId){
	var buttonListo = document.getElementById(`buttonListo${arrayObjetives[soloId].numId}`);

	if(arrayObjetives[soloId].complete == true){
		buttonListo.textContent = "✅";
	} else {
		// buttonListo.textContent = "▢";
	}
}

function completeObjetive(soloId){
	var buttonListo = document.getElementById(`buttonListo${arrayObjetives[soloId].numId}`);

	if(arrayObjetives[soloId].complete == false){
		buttonListo.textContent = "✅";
		arrayObjetives[soloId].complete = true;
		arrayObjetives[soloId].count += 1;
	} else {
		buttonListo.textContent = "▢";
		arrayObjetives[soloId].complete = false;
		arrayObjetives[soloId].count -= 1;
	}
	saveData();
}

function reloadMyObjetiveTime(array,numId){
	var timeDate1 = 0;
	var timeDate2 = 0;

	timeDate1 = Date.now() * 0.001;
	if(array[numId].type == "day"){
		timeDate2 = (Date.now() + (array[numId].multi * 86400000)) * 0.001;
	}
	if(array[numId].type == "hora"){
		timeDate2 = (Date.now() + (array[numId].multi * 3600000)) * 0.001;
	}
	if(array[numId].type == "min"){
		timeDate2 = (Date.now() + (array[numId].multi * 60000)) * 0.001;
	}

	if(array[numId].complete == true){
		completeObjetive(array[numId].numId, array[numId].id);
		array[numId].count += 1;
	}

	if(array[numId].time <= array[numId].timeNext && array[numId].time >= 0){
		array[numId].time = timeDate1;
		array[numId].timeNext = timeDate2;
	} else {
		array[numId].time = array[numId].time + Number((Date.now() * 0.001) - array[numId].timeNext);
		array[numId].timeNext = timeDate2 - Number((Date.now() * 0.001) - array[numId].timeNext);
		console.log(array[numId].time);
	}

	saveData();
}

function verObjetivoDescrip(text){
	descripcion.textContent = text;
}