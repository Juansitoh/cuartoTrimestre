const { Router } = require('express')
const router = Router()

const {getUsuario} = require('../controllers/usuario')

router.get('/', getUsuario)

/**
router.post('/', postUsuarioAcceso)
router.delete('/', deleteUsuarioAcceso)
router.put('/', putUsuarioAcceso)
router.patch('/', patchUsuarioAcceso)
*/
module.exports = router