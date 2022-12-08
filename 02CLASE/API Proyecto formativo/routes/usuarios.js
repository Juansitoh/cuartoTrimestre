const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { validarCampos } = require('../validators/validarCampos')

const {getUsuario, postUsuario, deleteUsuario, putUsuario} = require('../controllers/usuarios')

router.get('/', getUsuario)
router.post('/', [
    check("correo", "El correo es obligatorio.").not().isEmpty(),
    check("password", "La contraseña debe tener 5 o más caracteres.").isLength({ min: 5}),
    validarCampos
],
    postUsuario)

router.delete('/', deleteUsuario)

router.put('/', [
    check("correo", "El correo es obligatorio.").not().isEmpty(),
    check("password", "La contraseña debe tener 5 o más caracteres.").isLength({ min: 5}),
    validarCampos
],
 putUsuario)
//router.patch('/', patchUsuario)

module.exports = router