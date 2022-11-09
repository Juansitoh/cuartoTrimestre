const { Router } = require('express')
const router = Router() // Obtener la función router

const {getMascota, postMascota} = require('../controllers/mascota')

router.get('/', getMascota)
router.post('/', postMascota)

module.exports = router