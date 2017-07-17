let mauricio = {nombre: 'Mauricio', apellido: 'Hidalgo', edad: 30};

let mauricioDos = mauricio;

mauricioDos === mauricio;
//true

mauricioDos.edad = 31;
//la edad se cambia en ambas variables (mauricio - mauricioDos)

function cumpleanos(persona){
	persona.edad++;
}
cumpleanos(mauricio);
//la edad del objeto mauricio incrementa en 1 cada vez que se llama la funcion

let contador = 1;
cumpleanos = function(persona){
	contador++;
	persona.edad++;
}
cumpleanos(mauricio);
//ahora la funcion suma al contador que es una variable global, hay que evitar esto

cumpleanos = function(persona){
	const clone = Object.assign({}, persona);
	//Object.assign({}, persona) primer parametro un objeto vacio
	//segundo parametro es el objeto que va a copiar y lo copia al objeto vacio 
	//del primer parametro
	clone.edad++;
	return clone;
}
//crea clon de objeto mauricio y suma 1 sin alterar el objeto original mauricio

const mauricioViejo = cumpleanos(mauricio);