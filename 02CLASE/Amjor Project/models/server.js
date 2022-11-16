// http://localhost:3000/api/usuario?nombres=Juan%20David&apellidos=Salado%20Gonzalez&documento=1010632901&edad=180

const express = require('express') // Incluir express
const cors = require('cors') // Incluir cors
const dbConnection = require('../database/config') // Incluir db connection

class server{
    constructor() {
        this.app = express()
        this.port = process.env.port

        this.usuarioPath = '/api/usuario'
        this.insumoPath = '/api/insumo'
        this.rolPath = "/api/rol"

        this.middlewares()

        this.routes() // Disparar el método routes
        this.dbConectar()
    }

    async dbConectar() {
        await dbConnection()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static("public"))

        // Permite peticiones json a la API
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/usuario'))
        this.app.use(this.insumoPath, require('../routes/insumo'))
        this.app.use(this.rolPath, require('../routes/rol'))
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }

}

module.exports = server








    /* --------------------------------
    routes() {
        this.app.get('/api', (req, res) => {.3
            //res.send('Home')
            res.json({
                msg: 'GET API'
            })
        })

        this.app.post('/api', (req, res) => {.3
            //res.send('Home')
            res.json({
                msg: 'POST API'
            })
        })
    }
    */