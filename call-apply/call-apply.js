const mauricio = {
	nombre: "Mauricio",
	apellido: "Hidalgo"
}

function saludar(veces, uppercase){
	let str =`Hola ${this.nombre} ${this.apellido}`;
	str = uppercase ? str.toUpperCase() : str;
	for (let i = 0; i < veces; i++) {
		console.log(str);
	}
}
const params = [3, true];
saludar.call(mauricio, ...params);

saludar.call(mauricio, 3, true);
saludar.apply(mauricio, [3, true]);