//const { query } = require('express')
const { response } = require('express')
const Insumo = require('../models/insumo')

const getInsumo = (req, res = response) => {
    const { nombre, precio } = req.query
    
    res.json({
        msg: "GET API | INSUMOS",
        nombre,
        precio
    })
}

const postInsumo = async (req, res ) => {
    const { nombre, precio } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const insumo = new Insumo ({nombre, precio})
    // Guardar en la base de datos
    await insumo.save()

    res.json({
        msg: "POST API | INSUMOS",
        nombre,
        precio
    })
}

module.exports = {
    getInsumo,
    postInsumo
}
