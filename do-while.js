const segmentacionCliente = prompt('Ingrese la segmentación del cliente')
const monto = Number(prompt('Ingrese el monto de la compra'))
let descuentoAAplicar = 0

switch(segmentacionCliente){
    case 'ESTUDIANTE':
            descuentoAAplicar = 0.10
        break
    case 'ADULTO MAYOR':
            descuentoAAplicar = 0.15
        break
    case 'CLIENTE FRECUENTE':
            descuentoAAplicar = 0.20
        break
    default:
            descuentoAAplicar = 0
        break
}

const montoFinal = monto * (1 - descuentoAAplicar)

alert(`El descuento a aplicar es de ${descuentoAAplicar * 100}% y el monto final es: ${montoFinal}`)