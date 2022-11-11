const { Schema, model } = require('mongoose')

const InsumoSchema = Schema({
    nombre: {
        type: String
    },
    precio: {
        type: Number
    }
})

module.exports = model('Insumo', InsumoSchema)