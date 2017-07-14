let vidaTigre = 100
let vidaLeon = 100

const MIN_POWER = 5
const MAX_POWER = 12

function ambosSiguenVivos(){
	return vidaTigre > 0 && vidaLeon > 0
}

function calcularGolpe(){
	return Math.floor(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
}

//Arrow function version
//const calcularGolpe = () => Math.floor(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

function tigreSigueVivo(){
	return vidaTigre > 0
}

let round = 0

while(ambosSiguenVivos()){
	round++
	console.log(`Round ${round}`)
	const golpeTigre = calcularGolpe()
	const golpeLeon = calcularGolpe()
	if (golpeTigre > golpeLeon) {
		//ataca Tigre
		console.log(`El Tigre ataca al León con un golpe de ${golpeTigre}`)
		vidaLeon -= golpeTigre
		console.log(`El Leon queda en ${vidaLeon} de vida`)
	}else{
		//ataca Leon
		console.log(`El Leon ataca al Tigre con un golpe de ${golpeLeon}`)
		vidaTigre -= golpeLeon
		console.log(`El Tigre queda en ${vidaTigre} de vida`)
	}
}

if (tigreSigueVivo()) {
	console.log(`El Tigre ganó la pelea. Su vida es de ${vidaTigre}`)
}else{
	console.log(`El León ganó la pelea. Su vida es de ${vidaLeon}`)
}