//const { query } = require('express')
const { response } = require('express')
const Insumo = require('../models/insumos')

const getInsumo = async (req, res = response) => {
    const insumo = await Insumo.find() // Buscar insumo a través de todos los registros    
    res.json({
        msg: "GET API | Insumo",
        insumo
    })
}

const postInsumo = async (req, res ) => {
    const { nombreInsumo, descripcion, precio, estado } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const insumo = new Insumo ({ nombreInsumo, descripcion, precio, estado })
    // Guardar registro en la base de datos
    await insumo.save()

    res.json({
        msg: "POST API | Insumo",
        insumo
    })
}

const deleteInsumo = async (req, res) => {
    const { nombre } = req.query

    const insumo = await Insumo.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "DELETE API | Insumo",
        insumo
    })
}

const putInsumo = async (req, res) => {

    const { nombreAnterior, nombreInsumo, descripcion, estado } = req.body
    const insumo = await  Insumo.findOneAndUpdate({nombreInsumo: nombreAnterior}, {nombreInsumo: nombreInsumo, descripcion: descripcion, estado: estado}) 

    res.json({  
        msg: "PUT API | Insumo",
        insumo
    })

}

module.exports = {
    getInsumo,
    postInsumo,
    putInsumo,
    deleteInsumo
}
