const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validarCampos } = require('../validators/validarCampos')

const {getAncheta, postAncheta, deleteAncheta, putAncheta} = require('../controllers/anchetas')

router.get('/', getAncheta)
router.post('/', [
    check("nombreAncheta", "El nombre de la ancheta es obligatorio.").not().isEmpty(),
    check("insumos", "Los insumos son obligatorios.").not().isEmpty(),
    validarCampos
],
    postAncheta)

router.delete('/', deleteAncheta)

router.put('/', [
    check("nombreAncheta", "El nombre de la ancheta es obligatorio.").not().isEmpty(),
    check("insumos", "Los insumos son obligatorios.").not().isEmpty(),
    validarCampos
],
    putAncheta)
//router.patch('/', patchAncheta)

module.exports = router