function suma(...numeros){
	//let acum = 0
	//for (let i = 0; i < numeros.length; i++) {
	//	acum += numeros[i]
	//}

	const resultado = numeros.reduce(function(acum, numero){
		acum += numero
		return acum
	}, 0)

	return resultado
}

function dobles(...numeros){		
	//const resultado = []
	//for (var i = 0; i < numeros.length; i++) {
	//	resultado.push(numeros[i] * 2)
	//}
	//return resultado

	const resultado = numeros.map(function (numero){
		return numero * 2
	})
	return resultado

	//return numeros.map(numero => numero * 2)
}

function pares(...numeros){
	//const resultado = []
	//for (var i = 0; i < numeros.length; i++) {
	//	const numero = numeros[i]
	//	if (numero % 2 == 0){
	//		resultado.push(numero)
	//	}
	//}
	//return resultado

	const resultado = numeros.filter(function(numero){
		return numero % 2 == 0
	})
	return resultado
}

suma(4, 8, 12, 8954, 7)