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
// ejercicioUno();

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
// ejercicioDos(3, 9);

/**
3)Realizar una tabla de multiplicacion de un numero (a)
desde 0 hasta x , pero que no se muestre la multiplicacion 
de a * 5. 
*/

function ejercicioTres(a = 0, x = 12) {
  let result;
  for (let i = 0; i <= x; i++) {
    result = a * i;
    if (i !== 5) {
      console.log(`${a} X ${i} = ${result}`);
    }
  }
}
// ejercicioTres(5, 20)

/**
4) Hacer una funcion que filtre todos los numeros 
que sean multiplos de 3 de un arreglo los numeros
del 1 al 100 
*/

function ejercicioCuatro() {
  let nums = [];
  for (let i = 1; i <= 100; i++) {
    nums.push(i);
  }
  let multiplos = [];
  console.log("Este el mi arreglo", nums);
  nums.forEach((e) => {
    if (e % 3 === 0) {
      multiplos.push(e);
    }
    if (e < 25 && e > 10) {
      console.log("RPTA", e);
    }
  });
  console.log(multiplos);
}
// ejercicioCuatro()

/**
5) Hacer una funcion que haga de forma aleatoria un numero entre 1 y 1000.
y que a ese numero le saque su mitad, el doble y su raiz cuadrada. 
*/

function ejercicioCinco() {
  let num = Math.floor(Math.random() * (1000 - 1) + 1);
  console.log("El numero es: " + num);
  let mitad = num / 2;
  let doble = num * 2;
  let raizCuadrada = Math.sqrt(num);
  console.log(
    "La mitad es:" +
      mitad +
      " el doble es: " +
      doble +
      " y la raiz es: " +
      raizCuadrada
  );
}
// ejercicioCinco();

/**
6) Hacer una funcion que dado como dato de entrada nuestra fecha
de cumpleaños, nos diga cuantos dias faltan para el mismo.
*/
function ejercicioSeis(date) {
  let birthdayDate = new Date(date);
  let currentDate = new Date();
  let dayRest = Math.floor(
    (currentDate.getTime() - birthdayDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(birthdayDate, currentDate, dayRest);
}
ejercicioSeis("1 may 2025");
