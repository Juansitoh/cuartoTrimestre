const { Router } = require('express')
const router = Router() // Obtener la función router

const {getInsumo, postInsumo} = require('../controllers/insumo')

router.get('/', getInsumo)
router.post('/', postInsumo)

module.exports = router