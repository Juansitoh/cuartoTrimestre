const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')

const {getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario} = require('../controllers/usuario')

const { validateCreate } = require('../validators/usuario')

router.get('/', getUsuario)
router.post('/', [
    check("Correo", "El correo es obligatorio.").isEmpty(),
    check("Contraseña", "La contraseña debe tener mínimo 5 caracteres.").isLength({min: 5})], 
    postUsuario)
router.delete('/', deleteUsuario)
router.put('/', putUsuario)
//router.patch('/', patchUsuario)

module.exports = router