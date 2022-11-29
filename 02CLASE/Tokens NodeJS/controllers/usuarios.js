//const { query } = require('express')
const { response } = require('express')
const Usuario = require('../models/usuarios')

const getUsuario = (req, res = response) => {
    const { correo, password, estado } = req.query
    
    res.json({
        msg: "GET API | Usuario",
        correo,
        password,
        estado
    })
}

const postUsuario = async (req, res ) => {
    const { correo, password, estado } = req.body

    // Instanciar el objeto con los parámetros recibidos
    const Usuario = new Usuario ({correo, password, estado})
    // Guardar en la base de datos
    await Usuario.save()

    res.json({
        msg: "POST API | Usuario",
        correo,
        password,
        estado
    })
}

const deleteUsuario = async (req, res) => {
    const { nombre } = req.query

    const Usuario = await Usuario.findOneAndDelete({nombre:nombre})

    res.json({
        msg: "DELETE API | Usuario",
        Usuario
    })
}

const putUsuario = async (req, res) => {

    const { correoAnterior, correo, password, estado } = req.body
    const Usuario = await  Usuario.findOneAndUpdate({correo: correoAnterior}, {correo: correo, password: password, estado: estado}) 

    res.json({  
        msg: "PUT API | Usuario",
        Usuario
    })

}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
