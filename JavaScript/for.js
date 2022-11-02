// 

let mensaje = "Hola, ¿Como estas?"
let contadorVocales = 0
// Expresiones regulares
for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i])
    
    if (mensaje[i] == "a" || mensaje[i] == "e" || mensaje[i] == "i" || mensaje[i] == "o" || mensaje[i] == "u") {
        contadorVocales ++
    }
}

console.log("Total de vocales: "+contadorVocales)