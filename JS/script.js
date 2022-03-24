
let carrito = [];
const divisa = '$';
const seccionItems = document.getElementById("seccionGeneral");
const seccionCarrito = document.getElementById("seccionCarrito");
const total = document.getElementById("total");
const botonVaciar = document.getElementById("botonVaciar");



for (const productos of productoLineas) {
    const divCard = document.createElement("div");
    divCard.className = "col col-4 card";
    
    const imgCard = document.createElement("img");
    imgCard.className = "card-img-top";
    //imgCard.src = productos.img;

    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const nombreProducto = document.createElement("h3");
    nombreProducto.className = "card-title";
    nombreProducto.append(productos.marca, productos.modelo);

    const precioProducto = document.createElement("h4");
    precioProducto.className = "card-text";
    precioProducto.append(`\$ ${productos.precio}`);

    const btnCard = document.createElement("button");
    btnCard.className = "btn btn-primary";
    btnCard.append("Comprar");
    btnCard.id = productos.id;
    btnCard.addEventListener("click", addProductoAlCarrito);

    divCardBody.append(nombreProducto, precioProducto, btnCard);

    divCard.append(imgCard, divCardBody);

    seccionGeneral.append(divCard);

}

function addProductoAlCarrito(evento) {
    
    carrito.push(evento.target.getElementById(producto.id))


    renderizarCarrito();

}


function renderizarCarrito() {


    seccionCarrito.innerHTML = '';


    const carritoSinDuplicados = [...new Set(carrito)];


    carritoSinDuplicados.forEach((item) => {


        const miItem = productos.filter((itemProducto) => {

            return itemProducto.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {


            return itemId === item ? total += 1 : total;
        }, 0);

        //item del carrito
        const itemCarrito = document.createElement('li');
        itemCarrito.className = "list-group-item text-right mx-2";
        itemCarrito.append (`${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`);

        // Boton de borrar
        const botonBorrar = document.createElement('button');
        botonBorrar.className = "btn btn-danger mx-5";
        botonBorrar.append ("X");
        botonBorrar.style.marginLeft = '1rem';
        botonBorrar.dataset.item = item;
        botonBorrar.addEventListener('click', borrarItemCarrito);

        itemCarrito.appendChild(botonBorrar);
        seccionCarrito.appendChild(itemCarrito);
    });

    
    total.append(calcularTotal());
}


function borrarItemCarrito(evento) {
    
    const id = evento.target.dataset.item;
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    renderizarCarrito();
}


function calcularTotal() {
     
    return carrito.reduce((total, item) => {
        
        const miItem = productos.filter((producto) => {
            return producto.id === parseInt(item);
        });

        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}


botonVaciar.addEventListener('click', vaciarCarrito);

// Inicio

renderizarCarrito();




/*seccion carrito

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
