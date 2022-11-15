
let consolas = [  
{nombre: "xbox series x", precio: 399, stock: 100},
{nombre: "xbox series s", precio: 299, stock: 150},
{nombre: "nintendo switch", precio: 369, stock: 200},
{nombre: "playstation 5 digital", precio: 499, stock: 80},
{nombre: "playstation 5 disco", precio: 599, stock: 0}
]

let seleccionConsola = prompt("Que consola estas interesado en comprar? Presiona la x si quieres ver las consolas que tenemos actualmente en stock").toLowerCase()

function consolaElegida() {

    let resultado = consolas.filter(consola => consola.nombre == seleccionConsola);

    for (let consola of resultado) {
        alert(`La ${consola.nombre} cuesta US$${consola.precio} `) 
       }

    if (seleccionConsola == "x") {

        let resultado2 = consolas.filter(consola => consola.stock != 0)

        console.log(resultado2)

        let consolasEnStock = resultado2.map(el => {return {
            nombre: el.nombre
        }
    })

        console.log(consolasEnStock)

            let salida= ""

            for (let consola of consolasEnStock) {
               salida = salida + consolasEnStock.nombre + " "
            }

            console.log(salida)
            
            console.log(`Las consolas disponibles actualmente son ${salida}`)

     

     
    }

}

consolaElegida()

    /* alert(`Las consolas disponibles actualmente son ${consolasEnStock.nombre.join(", ")}`) */
    
/*let nombres = "";

nombres = resultado2.forEach(el => console.log(el.nombre));

  

    Excelente, también podés iterar el array de resultados y pushear a un nuevo array los objeto.nombres,
     luego con el método de arrays join ingresar en el alert la impresión de los elementos.

     resultado2.forEach(el => console.log (el.nombre))
}
*/

 /*for (let consola of consolasEnStock) {
            alert(`Las consolas disponibles actualmente son ${consolasEnStock}`)

        } */