
alert("Averigue que linea de pesca necesita para su caña de flyfishing");

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
        parent(prompt("Ingrese su e-mail para enseñarle mas sobre Flyfishing"))
        break;
}

let valorLinea = prompt("¿Queres saber cuanto cuesta esta linea?");

if (valorLinea === "si") {
    const suma = (a, b) => a + b
    const iva = y => y * 0.21
    switch (numeroCaña) {
        case 1:
            let precio = 1500
            let ivaPrecio = iva(precio);
            let sumaPrecioIva = suma(precio, ivaPrecio);
            alert("$ " + sumaPrecioIva)
            break;
        case 2:
            let precioA = 2000
            let ivaPrecioA = iva(precioA);
            let sumaPrecioIvaA = suma(precioA, ivaPrecioA);
            alert("$ " + sumaPrecioIvaA)
            break;
        case 3:
            let precioB = 2500
            let ivaPrecioB = iva(precioB);
            let sumaPrecioIvaB = suma(precioB, ivaPrecioB);
            alert("$ " + sumaPrecioIvaB)
            break;
        case 4:
            let precioC = 3000
            let ivaPrecioC = iva(C);
            let sumaPrecioIvaC = suma(precioC, ivaPrecioC);
            alert("$ " + sumaPrecioIvaC)
            break;
        case 5:
            let precioD = 3500
            let ivaPrecioD = iva(precioD);
            let sumaPrecioIvaD = suma(precioD, ivaPrecioD);
            alert("$ " + sumaPrecioIvaD)
            break;
        case 6:
            let precioE = 4000
            let ivaPrecioE = iva(precioE);
            let sumaPrecioIvaE = suma(precioE, ivaPrecioE);
            alert("$ " + sumaPrecioIvaE)
            break;
        case 7:
            let precioF = 4500
            let ivaPrecioF = iva(precioF);
            let sumaPrecioIvaF = suma(precioF, ivaPrecioF);
            alert("$ " + sumaPrecioIvaF)
            break;
        case 8:
            let precioG = 5000
            let ivaPrecioG = iva(precioG);
            let sumaPrecioIvaG = suma(precioG, ivaPrecioG);
            alert("$ " + sumaPrecioIvaG)
            break;
        case 9:
            let precioH = 5500
            let ivaPrecioH = iva(precioH);
            let sumaPrecioIvaH = suma(precioH, ivaPrecioH);
            alert("$ " + sumaPrecioIvaH)
            break;
        case 10:
            let precioI = 6000
            let ivaPrecioI = iva(precioI);
            let sumaPrecioIvaI = suma(precioI, ivaPrecioI);
            alert("$ " + sumaPrecioIvaI)
            break;
        case 11:
            let precioJ = 6500
            let ivaPrecioJ = iva(J);
            let sumaPrecioIvaJ = suma(precioJ, ivaPrecioJ);
            alert("$ " + sumaPrecioIvaJ)
            break;
        case 12:
            let precioK = 7000
            let ivaPrecioK = iva(precioK);
            let sumaPrecioIvaK = suma(precioK, ivaPrecioK);
            alert("$ " + sumaPrecioIvaK)
            break;
        case 13:
            let precioL = 7500
            let ivaPrecioL = iva(precioL);
            let sumaPrecioIvaL = suma(precioL, ivaPrecioL);
            alert("$ " + sumaPrecioIvaL)
            break;
        case 14:
            let precioM = 8000
            let ivaPrecioM = iva(precioM);
            let sumaPrecioIvaM = suma(precioM, ivaPrecioM);
            alert("$ " + sumaPrecioIvaM)
            break;
        case 15:
            let precioN = 8500
            let ivaPrecioN = iva(precioN);
            let sumaPrecioIvaN = suma(precioN, ivaPrecioN);
            alert("$ " + sumaPrecioIvaN)
            break;
    }
} else {
    alert("Que tengas buena jornada")
}


