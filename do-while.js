let opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            1. Saludar
            2. Saludar personalizado
            3. Sumar dos números
    `)
do {
    switch(opcionSeleccionada){
        case '1':
                alert('Hola humano')
            break
        case '2':
                const nombreUsuario = prompt('¿Cuál es tu nombre?')
                alert(`Hola ${nombreUsuario}`)
            break
        case '3':
                const numeroUno = Number(prompt('Dame el primer número'))
                const numeroDos = Number(prompt('Dame el segundo número'))
                const suma = numeroUno + numeroDos
                alert(`La suma de los números es: ${suma}`)
            break
        default:
                alert('Opción incorrecta')
            break
    }
    
    opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            0. Salir
            1. Saludar
            2. Saludar personalizado
            3. Sumar dos números
    `)
} while(opcionSeleccionada != '0')