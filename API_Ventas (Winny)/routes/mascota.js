const {Router} = require('express')
const router = Router()

const { postMascota, getMascota } = require('../controller/mascota')

router.get('/',getMascota)
router.post('/', postMascota )



module.exports = router