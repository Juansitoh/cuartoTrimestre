
/* Función tipo flecha
const nombreFuncion = (param1, param2, paramn) => {
    // Lineas de código
    return valor
}
*/

const calcularPromedio = (valores) => {
    let suma = 0
    for (i = 0; i < edades.length; i++) {
        suma += edades[i]
        
    }
    return suma/valores.length
}

edades = [10, 20, 30]
console.log("El promedio es: "+calcularPromedio(edades))

edades = [10, "b", 30]
console.log("El promedio es: "+calcularPromedio(edades))
