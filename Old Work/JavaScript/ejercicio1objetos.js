/* 
    Crear una función tipo flecha que reciba el objeto persona
    y devuelva su salario incremando en un 15%.

    Imprimir el salario.
*/

const empleado = {
    nombre: prompt("Digite el nombre de la persona"),
    salario: parseFloat(prompt("Digite el salario de la persona"))
}

aumento_salario = empleado.salario * 0.15
salarioAumentado = empleado.salario + aumento_salario

console.log("El aumento del salario para "+empleado.nombre+ " es de "+aumento_salario+" y queda en "+salarioAumentado)
