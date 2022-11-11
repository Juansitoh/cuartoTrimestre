const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    documento: {
        type: String
    },
    edad: {
        type: Number
    }
    
})

module.exports = model('Usuario', UsuarioSchema)