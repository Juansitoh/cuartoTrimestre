// Llenar un array de 5 valores numéricos
// push -> agregar datos
// Imprimir los elementos del array empezando
//en el último y finalizando en el primero.

let numeros = []
dimension = 5

// Llenar array
for (let i = 0; i < dimension; i++) {
    numeros.push(prompt("Digite un número"))
}

for (i = dimension - 1; i >= 0; i--) {
    console.log(numeros[i])
}