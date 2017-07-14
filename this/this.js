class Persona{
	constructor(nombre, amigos = []){
		this.nombre = nombre
		this.amigos = amigos
	}
/*	listarAmigos(){
		const _this = this
		this.amigos.forEach(function(amigo){
			console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
		})
	}*/
	listarAmigos(){
		this.amigos.forEach(function(amigo){
			console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		}.bind(this))
	}
}

const mauricio = new Persona('Mauricio', ['Fran', 'Andres', 'Bryan', 'David'])