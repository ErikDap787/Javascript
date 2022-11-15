
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


        let consolasEnStock = resultado2.map(el => {return {
            nombre: el.nombre
        }
    })

            let salida= ""

            for (let consola of consolasEnStock) {
               salida = salida + consola.nombre + " "
            }

            alert(`Las consolas disponibles actualmente son ${salida}`)

     
    }

}

consolaElegida()

