function productos(id, marca, modelo, grains, precio, img) {
    this.id = id;

    this.marca = marca;

    this.modelo = modelo;

    this.grains = grains;

    this.precio = precio;

    this.img = img;

}


const linea1 = new productos(1, "Grey Gull", "Classic", "60 grains", 8399);
const linea2 = new productos(2, "Grey Gull", "Long Distance", "60 grains", 6399);
const linea3 = new productos(3, "Airflo", "Forge", "100 grains", 8733);
const linea4 = new productos(4, "Airflo", "Forge", "120 grains", 8733);
const linea5 = new productos(5, "Airflo", "Forge", "140 grains", 8733);
const linea6 = new productos(6, "Airflo", "Forge", "160 grains", 8733);
const linea7 = new productos(7, "Rio", "Avid Trout", "186 grains", 9570);
const linea8 = new productos(8, "Rio", "Avid Trout", "210 grains", 9570);
const linea9 = new productos(9, "Scientific Angler", "Grand Slam", "240 grains", 20425);
const linea10 = new productos(10, "Cortland", "Preciscion", "280 grains", 9480);
const linea11 = new productos(11, "Cortland", "Lazer Hundimiento", "330 grains", 7031);
const linea12 = new productos(12, "Airflo", "Ridge Clear Agua Salada", "380 grains", 10093);
const linea13 = new productos(13, "Airflo", "Ridge Clear Agua Salada", "450 grains", 10093);
const linea14 = new productos(14, "Airflo", "Ridge Clear Agua Salada", "500 grains", 10093);
const linea15 = new productos(15, "Airflo", "Ridge Clear Agua Salada", "550 grains", 10093);



const productoLineas = [linea1, linea2, linea3, linea4, linea5,
    linea6, linea7, linea8, linea9, linea10,
    linea11, linea12, linea13, linea14, linea15];
