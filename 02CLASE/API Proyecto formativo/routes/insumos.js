const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validarCampos } = require('../validators/validarCampos')

const {getInsumo, postInsumo, deleteInsumo, putInsumo} = require('../controllers/insumos')

router.get('/', getInsumo)
router.post('/', [
    check("nombreInsumo", "El nombre del insumo es obligatorio.").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria.").not().isEmpty(),
    validarCampos
],
    postInsumo)

router.delete('/', deleteInsumo)

router.put('/', [
    check("nombreInsumo", "El nombre del insumo es obligatorio.").not().isEmpty(),
    check("descripcion", "La descripcion es obligatoria.").not().isEmpty(),
    validarCampos
],
    putInsumo)
//router.patch('/', patchInsumo)

module.exports = router