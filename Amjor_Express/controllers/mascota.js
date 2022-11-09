const { query } = require('express')
const response = require('express')
const Mascota = require('../models/mascota')

const getMascota = (req, res = response) => {
    const { nombre, raza, peso } = res.query
    
    res.json({
        msg: "GET API | MASCOTA",
        nombre,
        raza,
        peso
    })
}

const postMascota = async (req, res ) => {
    const { nombre, raza, peso } = res.body

    // Instanciar el objeto con los parámetros recibidos
    const mascota = new Mascota (nombre, raza, peso)
    // Guardar en la base de datos
    await mascota.save()

    res.json({
        msg: "POST API | MASCOTA",
        nombre,
        raza,
        peso
    })
}

module.exports = {
    // getMascota
    postMascota
}
