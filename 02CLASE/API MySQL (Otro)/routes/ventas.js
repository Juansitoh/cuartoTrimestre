const {Router} = require('express')
const router = Router()

const { getVentas,postVentas} = require('../controller/ventas')

router.get('/',getVentas)
router.post('/',postVentas)




module.exports = router