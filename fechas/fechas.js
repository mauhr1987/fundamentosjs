const nacimiento = new Date(1987, 4, 14)
const hoy = new Date()

const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMinutos = tiempoSegundos / 60
const tiempoHoras = tiempoMinutos / 60
const tiempoDias = tiempoHoras / 24
const tiempoMeses = tiempoDias / 30
const tiempoAnos = tiempoMeses / 12

console.log(`Han transcurrido ${tiempoAnos} años, ${tiempoMeses} meses y ${tiempoDias} dias`)

const proximoCumple = new Date(hoy.getFullYear() + 1, nacimiento.getMonth(), nacimiento.getDate())

const diasSemana = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado',
]

console.log(diasSemana[proximoCumple.getDay()])