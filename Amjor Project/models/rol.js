const { Schema, model } = require('mongoose')

const RolSchema = Schema({
    nombre_rol: {
        type: String
    },
    accesos: {
        type: String
    }
})

module.exports = model('Rol', RolSchema)