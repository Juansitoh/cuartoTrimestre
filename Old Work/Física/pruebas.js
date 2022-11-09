/* const calcularVolumen = () => {
    const radio = document.querySelector('#radio')
    const altura = document.querySelector('#altura')
    let resultado = document.querySelector('#resultado')
    let volumen = 3.1416 * radio.value * radio.value * altura.value
    resultado.value = volumen

}

const buttonCalcular = document.querySelector('#calcular')
buttonCalcular.addEventListener('click', calcularVolumen) */

const calcularDensidad = () => {
    if (document.querySelector('#radio') == "") {
        alert("Debe llenar los campos")
    } else {
    const radio = document.querySelector('#radio')
    const masa = document.querySelector('#masa')
    let volumen = (4/3) * 3.1416 * radio.value ** 3
    let densidad = masa / volumen
    let resultado = document.querySelector('#resultado')
    resultado.value = densidad
    }
}

const buttonCalcular = document.querySelector('#calcular')
buttonCalcular.addEventListener('click', calcularDensidad)
