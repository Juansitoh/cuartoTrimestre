const { response } = require('express')
const Mascota = require('../models/mascota')

const getMascota = (req, res = response) => {
    const { nombre, raza, peso } = req.query
    res.json({
        msg: 'GET API Mascota',
        nombre,
        raza,
        peso
    })
}

const postMascota = async (req, res) => {
    //Desestructuracion
    const { nombre, raza, peso } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const mascota = new Mascota({ nombre, raza, peso })


    await mascota.save()

    res.json({
        msg: 'POST API Mascota',
        mascota
    })
}

module.exports = {
    getMascota,
    postMascota
}