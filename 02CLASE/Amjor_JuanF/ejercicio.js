/* 
    Realizar una función tipo flecha que reciba un usuario y una clave
    y retorne un mensaje:
    - Si el usuario y/o clave retorne vacios
    - Si el usuario = "admin" y clave ="1234" retorne "Bienvenido."
    - Si el usuario != "admin" y clave != "1234" retorne "Datos incorrectos"

    Realizar una función tipo flecha que reciba un array con
    los precios de 10 productos y retorne el precio mayor.
 */

const login = (usuario, clave) => {
    usuario = prompt("Ingrese su usuario:")
    clave = prompt("Ingrese su clave:")

    if (usuario == "admin" && clave == "1234") {
        mensaje = "Bienvenido."
    } else {
        mensaje = "Datos incorrectos."
    }

    return mensaje
}

console.log(login())

const productos = () =>{
    let precioProductos = []
    let precioMayor = 0
    dimension = 10
    
    // Llenar array
    for (let i = 0; i < dimension - 1; i++) {
        precioProductos.push(prompt("Digite el precio del producto"))
    }
    console.log(precioProductos)
    
    for (let i = 0; i < dimension - 1; i++){
        if (precioProductos[i] > precioMayor) {
            precioMayor = precioProductos[i]
        }
    }

    console.log(precioMayor)

}

console.log(productos())