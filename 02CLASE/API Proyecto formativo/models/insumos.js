const { Schema, model } = require('mongoose')

const InsumoSchema = Schema({
    nombreInsumo: {
        type: String,
        required: [true, "El nombre del insumo es obligatorio."]
    },
    descripcion: {
        type: String,
        required: [true, "La descripción del insumo es obligatoria."],
        unique: true
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio."]
    },
    estado: {
        type: Boolean,
        default: true
    },
    
})

module.exports = model('Insumo', InsumoSchema)