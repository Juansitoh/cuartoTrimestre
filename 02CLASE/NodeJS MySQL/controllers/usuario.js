const { response } = require('express')
const dbConnection = require('../database/config')

const getUsuario = (req, res = response) => {
    const consultarUsuario = dbConnection.query('SELECT * FROM usuario',function (err, resultados, fields){
        if(err)
            throw err

            res.json({
                msg: "GET API MYSQL | ACCESO USUARIO",
                resultados
            })
        
        })
}

const postUsuario = async(req,res)=>{

    const {nombreUsuario, productosPedido,precio,fecha} = req.body

    const agregar = conexion.query(`INSERT INTO ventas (nombreUsuario,productosPedido,precio,fecha) VALUES ('${nombreUsuario}','${productosPedido}','${precio}','${fecha}')`,
    function(error,resultado){
        if (error) throw error
        res.json({
            msg:'Campo agregado',
            resultado
        })
    }
    )
}

/*
    const { nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.query
    const encuestado = await Encuestado.find()

    res.json({
        msg: "GET API | ENCUESTA",
        encuestado
    })
}

const postUsuarioAcceso = async (req, res ) => {
    const { nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body

    const encuestado = new Encuestado ({nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuestado.save()

    res.json({
        msg: "POST API | ENCUESTA",
        encuestado
    })
}

const deleteUsuarioAcceso = async (req, res) => {
    const { documentoEncuestado} = req.query
    const encuestado = await Encuestado.findOneAndDelete({documentoEncuestado: documentoEncuestado})

    res.json({
        msg: "DELETE API | ENCUESTA",
        encuestado
    })
}

const putUsuarioAcceso = async (req, res) => {
    const { newdocumentoEncuestado, nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuestado = await Encuestado.findOneAndUpdate({documentoEncuestado: documentoEncuestado}, { nombreEncuesta: nombreEncuesta, documentoEncuestado: newdocumentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: "PUT API | ENCUESTA",
        encuestado
    })
}

const patchUsuarioAcceso = async (req, res) => {
    const {  nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    const encuestado = await Encuestado.findOneAndUpdate({nombreEncuesta: nombreEncuesta, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: "PUT API | ENCUESTA",
        encuestado
    })
    {}
}

*/

module.exports = {
    getUsuario
//    postUsuarioAcceso,
//    deleteUsuarioAcceso,
//    putUsuarioAcceso,
//    patchUsuarioAcceso
}