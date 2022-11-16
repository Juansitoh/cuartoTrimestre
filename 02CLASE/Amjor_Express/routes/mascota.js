const { Router } = require('express')
const router = Router() // Obtener la función router

const {getMascota, postMascota, putMascota, deleteMascota} = require('../controllers/mascota')

router.get('/', getMascota)
router.post('/', postMascota)
router.put('/', putMascota)
router.delete('/', deleteMascota)

module.exports = router