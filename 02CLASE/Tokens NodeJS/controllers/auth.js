const { response } = require('express')
const Usuario = require('../models/usuarios')

//const { generarJWT } = require('../helpers/generarJWT')

const login = async (req, res) => {
    const { correo, password } = req.body

    try {
        const usuarios = await Usuario.findOne({correo})
        if (!usuarios) {
            return res.json({
                msg: 'El usuario no se encuentra en la base de datos.'
            })
        }

        if (usuarios.password != password) {
            return res.json({
                msg: 'La contraseña es incorrecta.'
            })
        }

        if (usuarios.estado == false) {
            return res.json({
                msg: 'El usuario se encuentra  inactivo, por lo que no puede acceder.'
            })
        }

    } catch (error) {
        console.log("Hubo un problema al intentar iniciar sesión: "+error)
        
        
    }
}

module.exports = {
    login
}