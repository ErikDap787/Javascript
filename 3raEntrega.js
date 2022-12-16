let consolas=

[
  { id: 1, nombre: "xbox series x", precio: 399, stock: 100, img: "https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg", contador:0 },
  { id: 2, nombre: "xbox series s", precio: 299, stock: 150, img: "https://panamericana.vteximg.com.br/arquivos/ids/363404-1080-1080/consola-xbox-serie-s-512-gb-ssd-mas-control-inalambrico-889842651348-2.jpg?v=637366442823130000", contador: 0 },
  { id: 3, nombre: "nintendo switch", precio: 369, stock: 200, img: "https://http2.mlstatic.com/D_NQ_NP_2X_980407-MLA47920420600_102021-V.webp", contador: 0 },
  { id: 4, nombre: "playstation 5 digital", precio: 499, stock: 80, img: "https://exitocol.vtexassets.com/arquivos/ids/9154831-800-auto?v=637631028265630000&width=800&height=auto&aspect=true", contador: 0 },
  { id: 5, nombre: "playstation 5 disco", precio: 599, stock: 0, img: "https://exitocol.vtexassets.com/arquivos/ids/9154827/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=1755039715", contador: 0 }
]
  

let carrito = document.getElementById("carrito")

let container = document.getElementById("container")

let arrayCarrito = []

renderizarConsolas(consolas)

function renderizarConsolas(arrayConsolas) {

  container.innerHTML = ""

  arrayConsolas.forEach(el => {
    let classCard = el.stock === 0 ? "noStockCard" : "card"
    container.innerHTML += `
  
  <div class= ${classCard}>
     <img src=${el.img} class="img" />
     <ul class = "list">
         <h3> Consolas </h3>

         <li> 
         ${el.nombre}
         </li>

         <li>
         $${el.precio}
         </li>
     </ul>

     <button id=${el.id} class="button" onclick=agregarAlCarrito(${el.id})>Agregar al Carrito</button>
     <button id=${el.id} class="button" onclick=quitarDelCarrito(${el.id})>Quitar del carrito</button>
     </div>
  `
  })

}

let input = document.getElementById("input")

input.addEventListener("input", fnInput)

function fnInput() {
  let consolasFiltradas = consolas.filter(consola => consola.nombre.includes(input.value))
  renderizarConsolas(consolasFiltradas)
  console.log(consolasFiltradas)
}

let boton = document.getElementById("buscar")

boton.addEventListener("click", fnButton)

function fnButton() {
  let consolasFiltradas = consolas.filter(consola => consola.nombre.includes(input.value))
  renderizarConsolas(consolasFiltradas)
}


function agregarAlCarrito(idAAgregar) {

  localStorage.getItem("almacenado") ? arrayCarrito = JSON.parse(localStorage.getItem("almacenado")) : arrayCarrito = []




  let consolaBuscada = arrayCarrito.find(el => el.id === idAAgregar)


  if (consolaBuscada) {

    consolaBuscada.contador = consolaBuscada.contador + 1

    consolaBuscada.precio = consolaBuscada.precio * contador

    /* 

     console.log(arrayCarrito)

     */


  } else {
    consolaBuscada.contador = 1

    arrayCarrito.push(consolaBuscada)

  }

  localStorage.setItem("almacenado", JSON.stringify(arrayCarrito))



function renderizarCarrito() {
  carrito.innerHTML = "";
  /*if (consolaBuscada.stock > 0) { */
    for (const itemCarrito of arrayCarrito) {
      carrito.innerHTML += `
        <div class="itemCarrito">
        <h4>${itemCarrito.nombre}</h4>
        <h4>${itemCarrito.unidades}</h4>
        <h4>${itemCarrito.subtotal}</h4>
        </div>
      `
    }
 /* } */
}
renderizarCarrito()
}










function quitarDelCarrito(idAQuitar) {

  localStorage.getItem("almacenado") ? arrayCarrito = JSON.parse(localStorage.getItem("almacenado")) : arrayCarrito = []

  let chequearStock = consolas.find(el => el.id === idAQuitar)

  if (arrayCarrito.some(el => el.id === idAQuitar)) {
    arrayCarrito = arrayCarrito.filter(el => el.id !== idAQuitar)
    localStorage.setItem("almacenado", JSON.stringify(arrayCarrito))
    console.log(arrayCarrito)
  } else {
    alert("No podes quitar un producto sin agregarlo antes al carrito")
  }

}