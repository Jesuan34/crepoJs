

for (const productos of productoLineas) {
    const divCard = document.createElement("div");
    const imgCard = document.createElement("img");
    const divCardBody = document.createElement("div");
    const nombreProducto = document.createElement("h3");
    const precioProducto = document.createElement("h4");
    const btnBuy = document.createElement("button");

    divCard.className = "col col-4 card";
    imgCard.className = "card-img-top";
    divCardBody.className = "card-body";
    nombreProducto.className = "card-title";
    precioProducto.className = "card-text";
    btnBuy.className = "btn btn-primary";

    imgCard.src = productos.img;
    nombreProducto.append(productos.marca, productos.modelo);
    precioProducto.append(`\$ ${productos.precio}`)
    btnBuy.append("Comprar")
    btnBuy.id = productos.id;

    
    btnBuy.onclick = () => {
        const carritoCompra = productos.find(producto => producto.id === btnBuy.id);
        productosCarrito.push({ nombre: carritoCompra.modelo, precio: productoCompra.precio })
        localStorage.setItem("carrito", JSON.stringify(productosCarrito))
    }
    

    divCardBody.append(nombreProducto, precioProducto, btnBuy);

    divCard.append(imgCard, divCardBody);

    seccionGeneral.append(divCard);
}


//seccion carrito

const carrito = document.createElement("div");
carrito.className = "carrito";
btnCarrito.className = "btn_carrito";
btnCarrito.append("Carrito");
carrito.append(btnCarrito);
seccionCarrito.append(carrito);








/*for (const productos of productoLineas) {
    const contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<div class= "card"> 
                                <h3 class= "card-title"> Producto: ${productos.marca} ${productos.modelo}</h3>
                                <p class= "card-text"> $ ${productos.precio} </p>
                                <button class= "btn btn-primary"> Comprar </button>
                            </div>`;
    document.body.appendChild(contenedor);
}
*/