const sumar = (num1, num2, callback) => {
    resultado = num1 + num2

    setTimeout(() => {
        callback(resultado) 
    }, 1000);
}

sumar(20, 3, dato => {
    console.log(dato)
})


const multiplicar = (numero1, numero2, callback) => {
    resultadoMult = numero1 * numero2

    setTimeout(() => {
        callback(resultadoMult) 
    }, 7000);
}

multiplicar(3, 3, dato => {
    console.log(dato)
})