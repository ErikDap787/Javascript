
let currency = prompt("Ingresa la divisa que queres comprar").toLowerCase;

let pesos = 0;

do {

let pesos = parseInt(prompt("Ingresa el monto en pesos que queres cambiar"));

/* let dolar = (pesos * 312);

let euro = (pesos * 298);

let libra = (pesos * 348);

let real = (pesos * 123); */


switch(currency) {

    case "dolar": console.log(`Por el monto de ${pesos} pesos, obtendras ` + (pesos * 312) + ` ` + `dolares`)

    break;

    case "euro": console.log(`Por el monto de ${pesos} pesos, obtendras ` + (pesos * 298) + " " + "euros")

    break;

    case "libra": console.log(`Por el monto de ${pesos} pesos, obtendras ` + (pesos * 348) + " " + "libras")
    
    break;

    case "real": console.log(`Por el monto de ${pesos} pesos, obtendras ` + (pesos * 123) + " " + "reales")

    break;

    default: alert("Ingresa un dato valido")

    break;

}

 currency = prompt("Ingresa la divisa que queres comprar").toLowerCase;

 pesos = parseInt(prompt("Ingresa el monto en pesos que queres cambiar"));

}

while (pesos > 0);
















