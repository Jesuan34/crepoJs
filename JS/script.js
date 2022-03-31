

if (!localStorage.getItem('productoLineas')) localStorage.setItem('productoLineas', JSON.stringify(productoLineas));


const renderizarTienda = (objetoProductos) => {

    seccionGeneral.innerHTML = " ";

    for (const productos of objetoProductos) {
        const divCard = document.createElement("div");
        divCard.className = "col col-4 card m-3";

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

        btnCard.onclick = () => {
            const productoComprado = productoLineas.find(productos => productos.id === btnCard.id);
            carrito.push({ marca: productos.marca, modelo: productos.modelo, precio: productos.precio, id: productos.id });
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }


        divCardBody.append(nombreProducto, precioProducto, btnCard);

        divCard.append(imgCard, divCardBody);

        seccionGeneral.append(divCard);

    }
}

renderizarTienda(JSON.parse(localStorage.getItem('productoLineas')))



const mostrarCarrito = () => {

    const carrito = JSON.parse(localStorage.getItem("carrito"))

    for (const productos of carrito) {
        const nombreProducto = document.createElement("li");
        nombreProducto.className = "list-group-item text-right mx-1";
        nombreProducto.append(`${productos.marca} ${productos.modelo} $${productos.precio}`);

        const br = document.createElement("br");
        listaCarrito.append(nombreProducto, br,);
    }

    const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
    totalCompra.append(`$${total}`);
}

mostrarCarrito();





/*const renderizarCarrito = () => {

    const carrito = JSON.parse(localStorage.getItem("carrito"))
    

    for (const productos of carrito) {
        

        const numeroUnidades = carrito.reduce((total, productoId) => {
            return productoId === productos.id ? total += 1 : total;
        }, 0);

        const nombreProducto = document.createElement("li");
        nombreProducto.className = "list-group-item text-right mx-1";
        nombreProducto.append(`${numeroUnidades} x ${productos.marca} ${productos.modelo} $${productos.precio}`);

        const br = document.createElement("br");
        listaCarrito.append(nombreProducto, br,);


        const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
        totalCompra.append(`$${total}`);
        //contenedorTienda.className += ' hidden';
        //contenedorCarrito.classList.remove("hidden")




        // Boton de borrar
        const botonBorrar = document.createElement('button');
        botonBorrar.className = "btn btn-danger mx-5";
        botonBorrar.append("X");
        botonBorrar.style.marginLeft = '1rem';
        botonBorrar.dataset.item = item;
        botonBorrar.addEventListener('click', borrarItemCarrito);

        nombreProducto.appendChild(botonBorrar);
        seccionCarrito.appendChild(nombreProducto);
    }
}


function borrarItemCarrito(evento) {

    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });

    renderizarCarrito();
}



function vaciarCarrito() {

    carrito = [];

    renderizarCarrito();
}


botonVaciar.addEventListener('click', vaciarCarrito);


renderizarCarrito();
*/



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
