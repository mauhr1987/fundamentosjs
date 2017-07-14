const starWars7 = 'Star Wars El despertar de la fuerza'
const pgStarWars7 = 13

const nameMauricio = 'Mauricio'
let ageMauricio = 30

const nameErick = 'Erick'
let ageErick = 11

//Arrow function:
const canWatchStarWars7 = (name, age, isWithAdult = false) => {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`)
	}else if(isWithAdult) { 
		alert(`${name} puede pasar a ver ${starWars7}.
			Aunque su edad es ${age} se encuentra acompañado por un adulto`)
	}else{
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} y necesita tener ${pgStarWars7}`)
	}
}

canWatchStarWars7(nameMauricio, ageMauricio)
ageErick = 13
canWatchStarWars7(nameErick, ageErick, true)

