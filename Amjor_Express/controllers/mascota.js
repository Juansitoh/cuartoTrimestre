//const { query } = require('express')
const { response } = require('express')
const Mascota = require('../models/mascota')

const getMascota = (req, res = response) => {
    const { nombre, raza, peso } = req.query
    
    res.json({
        msg: "GET API | MASCOTA",
        nombre,
        raza,
        peso
    })
}

const postMascota = async (req, res ) => {
    const { nombre, raza, peso } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const mascota = new Mascota ({nombre, raza, peso})
    // Guardar en la base de datos
    await mascota.save()

    res.json({
        msg: "POST API | MASCOTA",
        nombre,
        raza,
        peso
    })
}

const deleteMascota = async (req, res) => {
    const { nombre } = req.query

    const mascota = await Mascota.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "DELETE API | MASCOTA",
        mascota
    })
}

const putMascota = async (req, res) => {

    const { nombreanterior, nombrenuevo, raza, peso } = req.body
    const mascota = await  Mascota.findOneAndUpdate({nombre: nombreanterior}, {nombre: nombrenuevo, raza:raza, peso:peso}) 

    res.json({  
        msg: "PUT API | MASCOTA",
        mascota
    })

}

module.exports = {
    getMascota,
    postMascota,
    putMascota,
    deleteMascota
}
