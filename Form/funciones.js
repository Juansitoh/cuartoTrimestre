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
    const masa = document.querySelector('#masa')
    const volumen = document.querySelector('#volumen')

    if (masa.value == "" || volumen.value == "") {
        alert("Debe llenar todos los campos.")
    } else {
    let densidad = masa.value / volumen.value
    let resultado = document.querySelector('#resultado')
    resultado.value = densidad
    }
}

const buttonCalcular = document.querySelector('#calcular')
buttonCalcular.addEventListener('click', calcularDensidad)
