let consolas = [];
let arrayCarrito = localStorage.getItem("almacenado")
  ? JSON.parse(localStorage.getItem("almacenado"))
  : [];

fetch("../consolas.json")
  .then((respuesta) => respuesta.json())
  .then((fetchedConsolas) => {
    consolas = fetchedConsolas;
    renderizarConsolas(consolas);
    renderizarCarrito();
  });

let carrito = document.getElementById("carrito");

let container = document.getElementById("container");

function renderizarConsolas(arrayConsolas) {
  container.innerHTML = "";

  arrayConsolas.forEach((el) => {
    let productOnCart = !!arrayCarrito.find((prod) => prod.id === el.id);
    let classCard = el.stock === 0 ? "noStockCard" : "card";
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

     <button id=${el.id} class="button" onclick=agregarAlCarrito(${
      el.id
    })>Agregar al Carrito</button>
    <button id=${el.id} class="button" ${
      productOnCart ? "" : "disabled"
    } onclick=quitarDelCarrito(${el.id})>Quitar del carrito</button>
  `;
  });
}

let input = document.getElementById("input");

input.addEventListener("input", fnInput);

function fnInput() {
  let consolasFiltradas = consolas.filter((consola) =>
    consola.nombre.includes(input.value)
  );
  renderizarConsolas(consolasFiltradas);
}

let boton = document.getElementById("buscar");

boton.addEventListener("click", fnButton);

function fnButton() {
  let consolasFiltradas = consolas.filter((consola) =>
    consola.nombre.includes(input.value)
  );
  renderizarConsolas(consolasFiltradas);
}

function agregarAlCarrito(idAAgregar) {
  localStorage.setItem("almacenado", JSON.stringify(arrayCarrito));

  var consolaBuscada = consolas.find((el) => el.id === idAAgregar);

  if (consolaBuscada.stock > 0) {
    const productoEnCarrito = arrayCarrito.find(
      (producto) => producto.id === idAAgregar
    );

    if (productoEnCarrito) {
      productoEnCarrito.contador++;
    } else {
      arrayCarrito.push({
        id: consolaBuscada.id,
        nombre: consolaBuscada.nombre,
        precio: consolaBuscada.precio,
        contador: 1,
      });
    }
  } else {
    Swal.fire("No podes agregar al carrito un producto sin existencias");
  }

  renderizarCarrito();
}

function quitarDelCarrito(idAQuitar) {
  let chequeoItems = arrayCarrito.find((el) => el.id === idAQuitar);

  if (chequeoItems.contador > 1) {
    chequeoItems.contador = chequeoItems.contador - 1;
  } else {
    arrayCarrito = arrayCarrito.filter((el) => el.id !== idAQuitar);
  }

  renderizarCarrito();
}

function renderizarCarrito() {
  let aux = "";
  arrayCarrito.forEach((producto) => {
    aux += `
                <div>
                    <h3> ${producto.nombre} </h3>
                    <p> $${producto.precio * producto.contador} </p>
                    <p> ${producto.contador} </p>
                </div>
                
                `;
  });

  carrito.innerHTML = aux;
  renderizarConsolas(consolas);
  localStorage.setItem("almacenado", JSON.stringify(arrayCarrito));
}
