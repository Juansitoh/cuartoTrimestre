const { Router } = require('express')
const router = Router()

const {getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario} = require('../controllers/usuario')

router.get('/', getUsuario)
router.post('/', postUsuario)
router.delete('/', deleteUsuario)
router.put('/', putUsuario)
//router.patch('/', patchUsuario)

module.exports = router