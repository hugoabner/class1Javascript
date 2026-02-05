
// Escribe una función que reciba un número y diga si es par o impar.

function esParOImpar(number) {
	console.log(3 % 2);
	if (isNaN(number)) {
		console.log("El valor ingresado no es un número válido.");
		return;
	}
	// console.log("El número es impar.");
	if (Number(number) % 2 === 0) {
		console.log("El número " + number + " es par.");
	}
}
esParOImpar(32);
