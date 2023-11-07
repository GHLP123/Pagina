var create = document.getElementById("create");
var link = document.getElementById("link");

var pagesArrayUpdate = [
	{
		title: "title",
		subtitle: "descripción"
	},
	{
		title: "v2.1.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v2.0.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.9.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.8.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.7.0",
		subtitle: ""
	},
	{
		title: "v1.6.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.5.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.4.0",
		subtitle: "Sin Datos"
	},
	{
		title: "v1.3.0",
		subtitle: "Sin Datos"
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
		for(var i = 1; i <= array.length - 1; i++){
			id.innerHTML += `<hr><h2>${array[i].title}</h2>`;
			id.innerHTML += `<p>${array[i].subtitle}</p>`;
		}
	}
}

pagesCreate(create, pagesArrayUpdate);