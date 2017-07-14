let contador = 1;
function fibonacci(num, storage = {}){
	debugger;
	contador++;
	if (storage[num]){
		return storage[num];
	}
	if (num == 1) {
		return 0;
	}
	if (num == 2) {
		return 1;
	}
	return storage[num] = fibonacci(num - 1, storage) + fibonacci(num - 2, storage);
}

fibonacci(20);	

console.log(contador);
