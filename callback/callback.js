//example1
setTimeout(function callback(){
	console.log('Ya pasaron 3 segundos');
}, 3000)

console.log('Hola')

//example2
setTimeout(function callback(){
	console.log('A');
}, 0)

console.log('B')

//example3
setTimeout(function callback(){
	console.log('A');
}, 1000)

for (let i = 0; i < 9999999999; i++);

console.log('B')