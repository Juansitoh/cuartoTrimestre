const express = require('express') // Incluir express
const cors = require('cors') // Incluir cors
const {dbConnection} = require('../database/config') // Incluir db connection

class server{
    constructor() {
        this.app = express()
        this.port = process.env.port

        this.usuariosPath = 'api/usuarios'
        this.mascotasPath = 'api/mascotas'

        this.middlewares()

        this.routes() // Disparar el método routes
        this.dbConectar()
    }

    async dbConectar() {
        await dbConnection()
    }

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

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static('public'))

        // Permite peticiones jsona la API
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.mascotasPath, require('../routes/mascota'))
    }

    listen() {
        this.app.listen(this.port, (req, res) =>{
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }

}

module.exports = server