const { Router } = require('express')
const router = Router() // Obtener la función router

const {getRol, postRol} = require('../controllers/rol')

router.get('/', getRol)
router.post('/', postRol)

module.exports = router