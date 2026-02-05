/**
1) Realizar una funcion que nos permita realizar
las 4 operaciones aritmeticas, es decir que nos permita
sumar, restar, multiplicar y dividir, La funcion 
debe recibir 3 parametros, dos de ellos deben ser 
los valores (a y b) y uno el nombre de la operacion 
(en minuscula). Si el parametro de la operacion no
es valido que mande un error personalizado ala consola.   
*/
// nombre adecuado para la funcion
function calcularOperacion(a = 0, b = 0, operation = "suma") {
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
    (birthdayDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(birthdayDate, currentDate, dayRest);
}
// ejercicioSeis("10 july 2025");

/**
7) Realizar una funcion que dado como dato de entrada
una oracion, nos devuelva un arreglo que contenga todas
las palabras usadas en la oracion  
*/

function ejercicioSiete(text = "hola mundo") {
  let words = text.split(" ");
  console.log(words);
}
// ejercicioSiete("Buenos dias mi nombre es hugo y mi apellido es palomino");

/**
8) Crea 5 objetos y almacenalos en un arreglo. Debes
hacer una funcion para filtrar a todas las personas
que tengan el nombre "Luis" y que esa misma funcion
cuales son mayores de edad   
*/

function ejercicioOcho() {
  const personas = [
    {
      nombre: "Luis",
      apellido: "Fernandes",
      edad: 60,
    },
    {
      nombre: "Kiko",
      apellido: "Perez",
      edad: 13,
    },
    {
      nombre: "Ramon",
      apellido: "Santos",
      edad: 10,
    },
    {
      nombre: "Luis",
      apellido: "Alvarez",
      edad: 18,
    },
    {
      nombre: "Luis",
      apellido: "Mendoza",
      edad: 34,
    },
  ];
  personas.forEach((e) => {
    if (e.nombre === "Luis") {
      console.log("nombre", e.nombre + e.apellido);
    }
  });
}
// ejercicioOcho()

/**
9) convertir el timestamp en fecha 
*/
// Fri Feb 28 2025 12:37:05 GMT-0500 (hora estándar de Perú)
// Tue May 06 2025 17:03:53 GMT-0500 (hora estándar de Perú)
function ejercicioNueve() {
  const timestamp = "1746569033";
  const fecha = new Date(Number(timestamp) * 1000);
  console.log("timestamp convertido en fecha", fecha);
}
// ejercicioNueve();

function map() {
  const data = [
    {
      telefono: "51929701748",
      name: "",
      timestamp: "1746569033",
      origen: "OUT",
    },
    {
      telefono: "51985996215",
      name: "~",
      timestamp: "1740764225",
      origen: "OUT",
    },
    {
      telefono: "51959689277",
      name: "",
      timestamp: "1746543886",
      origen: "OUT",
    },
    {
      telefono: "51926018502",
      name: "~",
      timestamp: "1746552673",
      origen: "OUT",
    },
    {
      telefono: "56935029770",
      name: "~",
      timestamp: "1746535460",
      origen: "OUT",
    },
    {
      telefono: "56951039986",
      name: "~",
      timestamp: "1746538089",
      origen: "OUT",
    },
    {
      telefono: "51913342094",
      name: "~",
      timestamp: "1742244570",
      origen: "OUT",
    },
    {
      telefono: "51913546938",
      name: "~",
      timestamp: "1743006999",
      origen: "OUT",
    },
    {
      telefono: "51945531391",
      name: "~",
      timestamp: "1746550511",
      origen: "OUT",
    },
    {
      telefono: "56977932495",
      name: "~",
      timestamp: "1746543815",
      origen: "OUT",
    },
    {
      telefono: "56981367942",
      name: "~",
      timestamp: "1744646758",
      origen: "OUT",
    },
    {
      telefono: "56956999670",
      name: "~",
      timestamp: "1744750465",
      origen: "OUT",
    },
    {
      telefono: "56962339835",
      name: "~",
      timestamp: "1744812808",
      origen: "OUT",
    },
    {
      telefono: "56950716304",
      name: "~",
      timestamp: "1746280519",
      origen: "OUT",
    },
    {
      telefono: "56997416505",
      name: "~",
      timestamp: "1745510202",
      origen: "OUT",
    },
    {
      telefono: "56983791165",
      name: "~",
      timestamp: "1745508079",
      origen: "OUT",
    },
    {
      telefono: "56982022476",
      name: "~",
      timestamp: "1746191885",
      origen: "OUT",
    },
    {
      telefono: "56962503418",
      name: "~",
      timestamp: "1746535480",
      origen: "OUT",
    },
    {
      telefono: "56945593190",
      name: "~",
      timestamp: "1746535463",
      origen: "OUT",
    },
    {
      telefono: "56941431832",
      name: "~",
      timestamp: "1746102212",
      origen: "OUT",
    },
    {
      telefono: "56985514312",
      name: "~",
      timestamp: "1746109909",
      origen: "OUT",
    },
    {
      telefono: "56962849442",
      name: "~",
      timestamp: "1746456356",
      origen: "OUT",
    },
    {
      telefono: "56954716585",
      name: "~",
      timestamp: "1746192621",
      origen: "OUT",
    },
    {
      telefono: "56955269572",
      name: "~",
      timestamp: "1746192916",
      origen: "OUT",
    },
    {
      telefono: "56995458579",
      name: "~",
      timestamp: "1746455679",
      origen: "OUT",
    },
    {
      telefono: "56971202025",
      name: "~",
      timestamp: "1746456105",
      origen: "OUT",
    },
    {
      telefono: "56988996015",
      name: "~",
      timestamp: "1746456483",
      origen: "OUT",
    },
  ];
  const mapa = new Map();
  data.forEach((e) => {
    const telefono = e.telefono;
    mapa.set(telefono, {
      telefono: telefono,
      name: e.name,
      timestamp: e.timestamp,
      origen: e.origen,
    });
  });

  for (const [key, value] of mapa.entries()) {
    if (value.name.trim() === "") {
      value.name = "palomino";
    }
  }
  // recibe como parametro un objeto iterable
  const valor = mapa.values();
  console.log("valores", valor.or);
  // ordenar de forma descendente, es decir del mas reciente hacia al mas antiguo
  // values.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
  // ordenar de forma ascendente es decir del mas antiguo hacia el mas reciente
  // values.sort()
}
map();

// {
//   "origen": "OUT",
//   "tipo": "TEMPLATE",
//   "telefono": "56977932495",
//   "texto": "contactperson",
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgARGBIyMzdBQ0RBQjdCMEJBNERGRTIA",
//   "status": "delivered",
//   "timestamp": "1746543815",
//   "fechaDeRegistro": "2025-05-06T10:03:32-05:00",
//   "fechaDeActualizacion": "2025-05-06T10:03:35-05:00",
//   "name": ""
// },
// {
//   "origen": "OUT",
//   "tipo": "TEMPLATE",
//   "telefono": "56977932495",
//   "texto": "contactperson",
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgARGBJEQTVFMUVEMjhCQjlEOEQ2MTgA",
//   "status": "delivered",
//   "timestamp": "1746454994",
//   "fechaDeRegistro": "2025-05-05T07:17:36-05:00",
//   "fechaDeActualizacion": "2025-05-05T09:23:15-05:00",
//   "name": ""
// },
// {
//   "origen": "OUT",
//   "tipo": "TEMPLATE",
//   "telefono": "56977932495",
//   "texto": "contactperson",
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgARGBJEQjEwNjI0RTRCMUE3NjRBQzYA",
//   "status": "delivered",
//   "timestamp": "1746398715",
//   "fechaDeRegistro": "2025-05-04T17:45:13-05:00",
//   "fechaDeActualizacion": "2025-05-04T17:45:16-05:00",
//   "name": ""
// },
// {
//   "origen": "OUT",
//   "tipo": "TEMPLATE",
//   "telefono": "56977932495",
//   "texto": "contactperson",
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgARGBI4QjE4MjlEREU2NENDQzQxNUEA",
//   "status": "read",
//   "timestamp": "1746222789",
//   "fechaDeRegistro": "2025-05-02T16:52:33-05:00",
//   "fechaDeActualizacion": "2025-05-02T16:53:09-05:00",
//   "name": ""
// },
// {
//   "origen": "OUT",
//   "tipo": "BUTTON",
//   "telefono": "56977932495",
//   "texto": "Claro, para ver tu inversión, pulsa el botón.",
//   "buttons": [
//       "🚀 VER MI INVERSION:VER_MI_INVERSION"
//   ],
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgARGBI4NTZFNDZCNTRDMjBBN0RGQkIA",
//   "status": "read",
//   "timestamp": "1744152835",
//   "fechaDeRegistro": "2025-04-08T17:48:59-05:00",
//   "fechaDeActualizacion": "2025-04-08T17:53:55-05:00",
//   "name": ""
// },
// {
//   "origen": "IN",
//   "tipo": "TEXT",
//   "telefono": "56977932495",
//   "texto": "🚀 Ver mi inversión",
//   "messageId": "wamid.HBgLNTY5Nzc5MzI0OTUVAgASGCA0QUVBOEFFMTI2MEU2MTQzMkNFMTZBMUI3NEVGQTdCOQA=",
//   "timestamp": "1744152530",
//   "fechaDeRegistro": "2025-04-08T17:48:51-05:00",
//   "fechaDeActualizacion": "2025-04-08T17:48:51-05:00",
//   "name": "inmobiliaria boreal"
// },

function getCurrentDate() {
  const fechaActual = new Date();
  const dia = String(fechaActual.getDate()).padStart(2, "0");
  const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
  const anio = fechaActual.getFullYear();
  console.log("la fecha de hoy: " + `${dia}-${mes}-${anio}`);
}
getCurrentDate();

function getDescendingData() {
  const data = [
    {
      telefono: "51929701748",
      name: "",
      fecha: "2025-01-21",
      hora: "19:26:38",
    },
    {
      telefono: "51985996215",
      name: "~",
      fecha: "2025-03-21",
      hora: "19:26:28",
    },
    {
      telefono: "51959689277",
      name: "",
      fecha: "2025-12-21",
      hora: "19:26:25",
    },
    {
      telefono: "51926018502",
      name: "~",
      fecha: "2025-05-25",
      hora: "16:21:22",
    },
    {
      telefono: "56935029770",
      name: "~",
      fecha: "2025-05-22",
      hora: "16:14:46",
    },
    {
      telefono: "56951039986",
      name: "~",
      fecha: "2025-05-22",
      hora: "16:14:39",
    },
    {
      telefono: "51913342094",
      name: "~",
      fecha: "2025-05-22",
      hora: "16:13:29",
    },
    {
      telefono: "51913546938",
      name: "~",
      fecha: "2025-05-22",
      hora: "16:12:33",
    },
  ];
  data.forEach(element => {
    element.fecha = element.fecha + " " + element.hora
  });
  const format = data.toSorted((a, b) => new Date(b.fecha) - new Date(a.fecha));

  console.log("arra", format);
}

getDescendingData()


function convertTimestamp() {
  const timestamp = 1748448645
  const date = new Date(timestamp);
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();
  console.log("isToday", isToday);
}

convertTimestamp()
