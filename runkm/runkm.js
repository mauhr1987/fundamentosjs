const nombre = 'Mauricio'
const dias = [
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo'
]
 	
function correr(){
	const min = 5
	const max = 15
	return Math.floor(Math.random() * (max - min) + min)
}

let totalKm = 0
const length = dias.length
for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKm += kms
	console.log(`El dia ${dias[i]}, ${nombre} corrió ${kms} kilometros`)
}
const promedioKms = totalKm / length
console.log(`${nombre} corre un promedio de ${promedioKms.toFixed(2)} kilometros`)
