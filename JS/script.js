

function Producto(marca, modelo, grains, precio){
    this.marca = marca;

    this.modelo = modelo;
    
    this.grains = grains;

    this.precio = precio;
 }


const Linea1 = new Producto ("Grey Gull", "Classic", "60 grains", 8399);
const Linea2 = new Producto ("Grey Gull", "Long Distance", "60 grains", 6399);
const Linea3 = new Producto ("Airflo", "Forge", "100 grains", 8733);
const Linea4 = new Producto ("Airflo", "Forge", "120 grains", 8733);
const Linea5 = new Producto ("Airflo", "Forge", "140 grains", 8733);
const Linea6 = new Producto ("Airflo", "Forge", "160 grains", 8733);
const Linea7 = new Producto ("Rio", "Avid Trout", "186 grains", 9570);
const Linea8 = new Producto ("Rio", "Avid Trout", "210 grains", 9570);
const Linea9 = new Producto ("Scientific Angler", "Grand Slam", "240 grains", 20425);
const Linea10 = new Producto ("Cortland", "Preciscion", "280 grains", 9480);
const Linea11 = new Producto ("Cortland", "Lazer Hundimiento", "330 grains", 7031);
const Linea12 = new Producto ("Airflo", "Ridge Clear Agua Salada", "380 grains", 10093);
const Linea13 = new Producto ("Airflo", "Ridge Clear Agua Salada", "450 grains", 10093);
const Linea14 = new Producto ("Airflo", "Ridge Clear Agua Salada", "500 grains", 10093);
const Linea15 = new Producto ("Airflo", "Ridge Clear Agua Salada", "550 grains", 10093);



const ProductoLineas = [Linea1, Linea2, Linea3, Linea4, Linea5, 
                        Linea6, Linea7, Linea8, Linea9, Linea10, 
                        Linea11, Linea12, Linea13, Linea14, Linea15];
                    

for (const Producto of ProductoLineas) {
    console.log(Producto.marca);
    console.log(Producto.modelo);
    console.log(`\$ ${Producto.precio}`);
    
    
}

const btn= document.createElement("button");
btn.innerHTML = "Mas Lineas";
pescaFina.append(btn);
const btn1= document.createElement("button");
btn1.innerHTML = "Mas Lineas";
pescaTodoTerreno.append(btn1);
const btn2= document.createElement("button");
btn2.innerHTML = "Mas Lineas";
pescaPesada.append(btn2);

let contador = 0;

function sumaClick () {

    let boton = document.getElementById("btnSearch")
    boton.onclick = () => (++contador)
    console.log(contador)    
}





/*alert("Averigue que linea de pesca necesita para su caña de flyfishing");

let numeroCaña = parseInt(prompt("Ingrese el numero de su caña (1-15)"));

switch (numeroCaña) {
    case 1:
        alert("Usted necesita una linea de 60 grains")
        alert("Le gusta la pesca fina ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 2:
        alert("Usted necesita una linea de 80 grains")
        alert("Le gusta la pesca fina ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 3:
        alert("Usted necesita una linea de 100 grains")
        alert("Le gusta la pesca fina ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 4:
        alert("Usted necesita una linea de 120 grains")
        alert("Le gusta la pesca fina ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 5:
        alert("Usted necesita una linea de 140 grains")
        alert("Le gusta la pesca fina ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 6:
        alert("Usted necesita una linea de 160 grains")
        alert("Usted es todo terreno ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 7:
        alert("Usted necesita una linea de 186 grains")
        alert("Usted es todo terreno ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 8:
        alert("Usted necesita una linea de 210 grains")
        alert("Usted es todo terreno ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 9:
        alert("Usted necesita una linea de 240 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 10:
        alert("Usted necesita una linea de 280 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 11:
        alert("Usted necesita una linea de 330 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 12:
        alert("Usted necesita una linea de 380 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 13:
        alert("Usted necesita una linea de 450 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 14:
        alert("Usted necesita una linea de 500 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    case 15:
        alert("Usted necesita una linea de 550 grains")
        alert("Le gusta ir a lo grande ;-)")
        alert("Ven a disfrutar a https://proyecto-outdoor.vercel.app/")
        break;
    default:
        alert("Desea aprender? ingrese a https://proyecto-outdoor.vercel.app/secciones/actividades o dejenos su e-mail a continuacion que nosotros lo contactamos")
        prompt("Ingrese su e-mail para enseñarle mas sobre Flyfishing")
        break;
}

let valorLinea = prompt("¿Queres saber cuanto cuesta esta linea?");

if (valorLinea === "si") {
    const suma = (a, b) => a + b
    const iva = y => y * 0.21
    switch (numeroCaña) {
        case 1:
            let ivaPrecio = iva(Linea1.precio);
            let sumaPrecioIva = suma(Linea1.precio, ivaPrecio);
            alert(`\$ ${sumaPrecioIva}`)
            break;
        case 2:
            let ivaPrecioA = iva(Linea2.precio);
            let sumaPrecioIvaA = suma(Linea2.precio, ivaPrecioA);
            alert("$ " + sumaPrecioIvaA)
            break;
        case 3:
            let ivaPrecioB = iva(Linea3.precio);
            let sumaPrecioIvaB = suma(Linea3.precio, ivaPrecioB);
            alert("$ " + sumaPrecioIvaB)
            break;
        case 4:
            let ivaPrecioC = iva(Linea4.precio)
            let sumaPrecioIvaC = suma(Linea4.precio, ivaPrecioC);
            alert("$ " + sumaPrecioIvaC)
            break;
        case 5:
            let ivaPrecioD = iva(Linea5.precio);
            let sumaPrecioIvaD = suma(Linea5.precio, ivaPrecioD);
            alert("$ " + sumaPrecioIvaD)
            break;
        case 6:
            let ivaPrecioE = iva(Linea6.precio);
            let sumaPrecioIvaE = suma(Linea6.precio, ivaPrecioE);
            alert("$ " + sumaPrecioIvaE)
            break;
        case 7:
            let ivaPrecioF = iva(Linea7.precio);
            let sumaPrecioIvaF = suma(Linea7.precio, ivaPrecioF);
            alert("$ " + sumaPrecioIvaF)
            break;
        case 8:
            let ivaPrecioG = iva(Linea8.precio);
            let sumaPrecioIvaG = suma(Linea8.precio, ivaPrecioG);
            alert("$ " + sumaPrecioIvaG)
            break;
        case 9:
            let ivaPrecioH = iva(Linea9.precio);
            let sumaPrecioIvaH = suma(Linea9.precio, ivaPrecioH);
            alert("$ " + sumaPrecioIvaH)
            break;
        case 10:
            let ivaPrecioI = iva(Linea10.precio);
            let sumaPrecioIvaI = suma(Linea10.precio, ivaPrecioI);
            alert("$ " + sumaPrecioIvaI)
            break;
        case 11:
            let ivaPrecioJ = iva(Linea11.precio )
            let sumaPrecioIvaJ = suma(Linea11.precio, ivaPrecioJ);
            alert("$ " + sumaPrecioIvaJ)
            break;
        case 12:
            let ivaPrecioK = iva(Linea12.precio);
            let sumaPrecioIvaK = suma(Linea12.precio, ivaPrecioK);
            alert("$ " + sumaPrecioIvaK)
            break;
        case 13:
            let ivaPrecioL = iva(Linea13.precio);
            let sumaPrecioIvaL = suma(Linea13.precio, ivaPrecioL);
            alert("$ " + sumaPrecioIvaL)
            break;
        case 14:
            let ivaPrecioM = iva(Linea14.precio);
            let sumaPrecioIvaM = suma(Linea14.precio, ivaPrecioM);
            alert("$ " + sumaPrecioIvaM)
            break;
        case 15:
            let ivaPrecioN = iva(Linea15.precio);
            let sumaPrecioIvaN = suma(Linea15.precio, ivaPrecioN);
            alert("$ " + sumaPrecioIvaN)
            break;
    }
} else {
    alert("Que tengas buena jornada")
}
*/

