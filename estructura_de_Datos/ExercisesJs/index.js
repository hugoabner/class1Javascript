/**
1) Realizar una funcion que nos permita realizar
las 4 operaciones aritmeticas, es decir que nos permita
sumar, restar, multiplicar y dividir, La funcion 
debe recibir 3 parametros, dos de ellos deben ser 
los valores (a y b) y uno el nombre de la operacion 
(en minuscula). Si el parametro de la operacion no
es valido que mande un error personalizado ala consola.   
*/
function ejercicioUno(a = 0, b = 0, operation = "suma") {
  switch (operation) {
    case "suma":
      return console.log(a + b);
    case "resta":
      return console.log(a - b);
    case "multiplicacion":
      return console.log(a * b);
    case "division":
      return console.log(a / b);
    default:
      return console.error("La operacion" + operation + "no existe");
  }
}
ejercicioUno();

/**
2)Realizar una funcion que almacene en un arreglo
dotos los numeros pares desde a hasta b 
*/

function ejercicioDos(a = 0, b = 0) {
  let nums = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}
ejercicioDos(3, 9);
