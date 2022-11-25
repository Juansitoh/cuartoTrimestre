const { Router } = require('express')
const router = Router()

const {getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario} = require('../controllers/usuario')

const { validateCreate } = require('../validators/usuario')

router.get('/', getUsuario)
router.post('/', validateCreate, postUsuario)
router.delete('/', deleteUsuario)
router.put('/', putUsuario)
//router.patch('/', patchUsuario)

module.exports = router