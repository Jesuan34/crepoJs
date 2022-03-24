

for (const productos of productoLineas) {
    const divCard = document.createElement("div");
    const imgCard = document.createElement("img");
    const divCardBody = document.createElement("div");
    const nombreProducto = document.createElement("h3");
    const precioProducto = document.createElement("h4");
    const btnAdd = document.createElement("button");

    divCard.className = "col col-4 card";
    imgCard.className = "card-img-top";
    divCardBody.className = "card-body";
    nombreProducto.className = "card-title";
    precioProducto.className = "card-text";
    btnAdd.className = "btn btn-primary";

    //imgCard.src = productos.img;
    nombreProducto.append(productos.marca, productos.modelo);
    precioProducto.append(`\$ ${productos.precio}`)
    btnAdd.append("Comprar")
    btnAdd.id = productos.id;

    btnAdd.onclick = () => {
        const comprado = productos.find(productos => productos.id === btnAdd.id);
        productoCarrito.push({ nombre: comprado.modelo, precio: comprado.precio })
        localStorage.setItem("carrito", JSON.stringify(productoCarrito))
    }

    divCardBody.append(nombreProducto, precioProducto, btnAdd);

    divCard.append(imgCard, divCardBody);

    seccionGeneral.append(divCard);
}


//seccion carrito

const verCarrito = () => {

    const carrito = JSON.parse(localStorage.getItem("carrito"))

    for (const productos of carrito) {
      const nombreProducto = `<h4>Producto : ${productos.nombre}</h4>`
      const precioProducto = `<h4>Precio : ${productos.precio}</h4>`
      contenedorCarrito.innerHTML += nombreProducto
      contenedorCarrito.innerHTML += precioProducto
    }

    /*for (const productos of productosCarrito) {
        const carrito = document.createElement("div");
        carrito.innerHTML = `<div class= "card"> 
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Modelo: ${productos.modelo}</th>
                                            <th scope="col">Precio: ${productos.precio}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <button>Finalizar Compra</button>
                                </div>`;
        document.body.appendChild(carrito);
    }
*/
}