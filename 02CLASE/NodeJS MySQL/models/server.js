const express = require('express') // Incluir express
const cors = require('cors') // Incluir cors
const dbConnection = require('../database/config') // Incluir db connection

class server{
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.usuarioPath = '/api/usuario'

        this.middlewares()

        this.routes() // Disparar el método routes
        this.dbConectar()
    }

    async dbConectar(){
        await dbConnection.connect(function(err) {
            if(err) {
                throw err
            }else{
                console.log("Conectado con la base de datos correctamente.")
            }
        })
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static("public"))

        // Permite peticiones json a la API
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/usuario'))
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }
}

module.exports = server




