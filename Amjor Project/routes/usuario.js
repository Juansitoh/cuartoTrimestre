const { Router } = require('express')
const router = Router() // Obtener la función router

const {getUsuario, postUsuario} = require('../controllers/usuario')

router.get('/', getUsuario)
router.post('/', postUsuario)

module.exports = router