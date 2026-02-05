/**
1) Realizar una funcion que nos permita realizar
las 4 operaciones aritmeticas, es decir que nos permita
sumar, restar, multiplicar y dividir, La funcion 
debe recibir 3 parametros, dos de ellos deben ser 
los valores (a y b) y uno el nombre de la operacion 
(en minuscula). Si el parametro de la operacion no
es valido que mande un error personalizado ala consola.   
*/

function calculateOperation(a = 0, b = 0, operation = "suma") {
	switch (operation) {
		case "suma":
			console.log(a + b);			
			break;
		case "resta":
			console.log(a - b);			
			break;
		case "multiplicacion":
			console.log(a * b);			
			break;
		case "division":
			console.log(a / b);
			break;
		default:
			console.log("Operacion no valida");
			break;
	}
	
}

// calculateOperation(-10, 15, "suma");