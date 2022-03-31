
botonComprar.onclick = () => {

    swal({
        title: "Felicitaciones",
        text: "Finalizaste tu compra, el envio llegara en los proximos días por el trasporte seleccionado",
        icon: "success",
    })
};

botonVaciar.onclick = () => {
    swal({
        title: "Esta seguro que desa vaciar el carrito",
        icon: "warning",
        buttons: ["No estoy seguro", "Estoy seguro"],
    })
};