function saludarFamilia(apellido){
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

saludarGomez('Miguel')
saludarPerez('Carlos') 

// function saludarGomez(nombre){
// 	console.log(`Hola ${nombre} Gomez`)
// }

function makePrefixer(prefijo){
	return function prefijoRe(palabra){
		console.log(`${prefijo}${palabra}`)
	}
}

const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer('in')

prefijoRe('util')
prefijoIn('util')


