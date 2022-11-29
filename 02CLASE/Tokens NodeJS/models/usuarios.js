const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    correo: {
        type: String
    },
    password: {
        type: String
    },
    estado: {
        type: Boolean
    }
    
})

module.exports = model('Usuario', UsuarioSchema)