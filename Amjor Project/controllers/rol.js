//const { query } = require('express')
const { response } = require('express')
const Rol = require('../models/rol')

const getRol = (req, res = response) => {
    const { nombre_rol, accesos } = req.query
    
    res.json({
        msg: "GET API | ROL",
        nombre_rol,
        accesos
    })
}

const postRol = async (req, res ) => {
    const { nombre_rol, accesos } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const rol = new Rol ({nombre_rol, accesos})
    // Guardar en la base de datos
    await rol.save()

    res.json({
        msg: "POST API | ROL",
        nombre_rol,
        accesos
    })
}

module.exports = {
    getRol,
    postRol
}
