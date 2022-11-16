//const { query } = require('express')
const { response } = require('express')
const Usuario = require('../models/usuario')

const getUsuario = (req, res = response) => {
    const { nombres, apellidos, documento, edad } = req.query
    
    res.json({
        msg: "GET API | USUARIO",
        nombres,
        apellidos,
        documento,
        edad
    })
}

const postUsuario = async (req, res ) => {
    const { nombres, apellidos, documento, edad } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const usuario = new Usuario ({nombres, apellidos, documento, edad})
    // Guardar en la base de datos
    await usuario.save()

    res.json({
        msg: "POST API | USUARIO",
        nombres,
        apellidos,
        documento,
        edad
    })
}

module.exports = {
    getUsuario,
    postUsuario
}
