function valorpan(codigo) {
    switch (codigo) {
        case "1":
            console.log('Precio masa madre: $ 400 Coderdolares')
            break;
        case "2":
            console.log('Precio pan molde: $ 550 Coderdolares')
            break;
        case "3":
            console.log('Precio pan artesanal: $ 500 Coderdolares')
            break;
        case "4":
            console.log('Precio pan baguette: $ 460 Coderdolares')
            break;
        case "5":
            console.log('Precio pan ciabatta: $ 380 Coderdolares')
            break;
        default:
            console.warn('Seleccion erronea')
            break;
    }

}

function consultapan() {
    let respuesta = confirm('¿Deseas conocer el precio de alguno de nuestros productos?')
    if (respuesta === true) {
        let codigo = prompt('Ingresar codigo numerico del producto a consultar')
        valorpan(codigo)
        cuotapan()
        let respuestaCompra = confirm('¿Deseas comprar este producto')
        if (respuestaCompra === true) {
            alert('Producto comprado, a servir la mesa')
        }
    } else {
        console.warn('Sin problemas')
    }
}

function cuotapan() {
    let intereses = ' sin interes.'
    console.log('Nuestros productos tienen')
    for (let i = 1; i <= 4; i++) {
        if (i >= 3) {
            intereses = ' con interes.'
        }
        console.log(i + ' cuota(s)' + intereses)
    }
}