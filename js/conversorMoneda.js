
let currency;

let pesos = 0;

do {

 currency = prompt("Ingresa la divisa que queres comprar: dolar, euro, libra o real").toLowerCase();

 pesos = parseInt(prompt("Ingresa el monto en pesos que queres cambiar"));

switch(currency) {

    case "dolar": let resultado = parseFloat(pesos/312).toFixed(2); console.log(`Por el monto de ${pesos} pesos, obtendras ${resultado} dolares`)

    break;

    case "euro": let resultado1 = parseFloat(pesos/298).toFixed(2); console.log(`Por el monto de ${pesos} pesos, obtendras  ${resultado1} euros`)

    break;

    case "libra": let resultado2 = parseFloat(pesos/348).toFixed(2); console.log(`Por el monto de ${pesos} pesos, obtendras ${resultado2} libras`)
    
    break;

    case "real": let resultado3 = parseFloat(pesos/123).toFixed(2); console.log(`Por el monto de ${pesos} pesos, obtendras ${resultado3} reales`)

    break;

    default: alert("Ingresa un dato valido")

    break;

}

} while (pesos != 0);

 
























