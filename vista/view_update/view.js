var create = document.getElementById("create");
var link = document.getElementById("link");
var btnMore = document.getElementById("btnMore");
var limitGenerated = 10;
var limitIn = 1;

var pagesArrayUpdate = [
	{
		title: "title",
		subtitle: "descripción"
	},
	{
		title: "v2.2.0",
		subtitle: "La página ahora guardará datos (locales) de forma automatica con tan solo ingresar en ella. El sistema para ver que cosas nuevas hay se a actualizado para mostrar un boton (Más...) para evitar cargar todo enseguida y hacer Lag en el dispositivo. Se ha agregado las <b>Ventanas Emergentes de Interes</b>, son como tipo anuncios pero mios por si te intereza. (Probabilidad de anuncio <b>20%</b>). La parte de destacado se mejoro, antes se mostraba la imagen y el creador junto a un enlace, ahora tiene una nota y en esa nota esta un mensaje mio así como tambien el enlace para verlo. Copyright ha sido modificado para ser más entendible."
	},
	{
		title: "v2.1.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v2.0.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.9.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.8.0",
		subtitle: "Todas las secciones se separarón en las siguientes categorias: Importante, Canales - Oficial, Ustedes y Yo :), Avanzado. Una nueva seccion de ajuste de pantalla agregado a Avanzado, aquí podras redimensionar la página a tu gusto o a tu dispositivo, además, esto se guardará de manera local (Nuevo dato local a Guardar en esta página)."
	},
	{
		title: "v1.7.0",
		subtitle: "A partir de esta actualización por primera vez esta pagina guarda datos locales para garantizar una mejor fluides y opciones para ti como usuario, estos son datos simples y solo guarda 2 datos, en un futuro puede que más, pero son locales así que no te preocupes, se borrarán automaticamente despues de 10 días (creo)."
	},
	{
		title: "v1.6.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.5.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.4.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.3.0",
		subtitle: "Reparación de Bugs (No Data)."
	},
	{
		title: "v1.2.0",
		subtitle: "Nueva Frase y comentario por mí. Cambios visuales, nada importante."
	},
	{
		title: "v1.1.0",
		subtitle: "Añadido una nueva sección llamada “Frases”, aquí aparecerán frases enviadas por ustedes que me envían en una red social. También nueva sección dentro de Novedades acerca de juegos que juego yo, aquí aparecerán los juegos donde tengo una cuenta creada."
	},
	{
		title: "v1.0.0",
		subtitle: "Se creó la página. Añadido: Barra Principal, Enlaces [Inicio, Novedades, Preguntas, Redes Sociales], algunas capturas de mi contenido, ¿Tienes duda? (para enlazar las redes y que me manden mensaje en alguna red social), Preguntas (Esta contenía preguntas frecuentes), Trabajos (Páginas Creadas por mí), Redes Sociales [Facebook, Twitter, YouTube (Canal Principal), Discord (Unirse a mi Servidor)]."
	},
];

function pagesCreate(id, array){
	if(array.length - 1 >= 1){
		if(array.length <= 10){
			limitGenerated = array.length;
			btnMore.style.display = "none";

			for(var i = 1; i <= limitGenerated - 1; i++){
				id.innerHTML += `<hr><h2>${array[i].title}</h2>`;
				id.innerHTML += `<p class="view">${array[i].subtitle}</p>`;
			}
		} else {
			for(var i = limitIn; i <= limitGenerated - 1; i++){
				id.innerHTML += `<hr><h2>${array[i].title}</h2>`;
				id.innerHTML += `<p class="view">${array[i].subtitle}</p>`;
				limitIn++;
			}


			if(limitGenerated < array.length){
				limitGenerated += 10;
				
				if(limitGenerated >= array.length){
					limitGenerated = array.length;
				}
			}
		}
	}
}

pagesCreate(create, pagesArrayUpdate);

btnMore.addEventListener('click', function(){
	pagesCreate(create, pagesArrayUpdate);
	if(limitGenerated >= pagesArrayUpdate.length){
		btnMore.style.display = "none";
	}
});