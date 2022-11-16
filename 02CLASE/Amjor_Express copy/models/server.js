const express = require('express') // Incluir express

class server{
    constructor() {
        this.app = express()
        this.port = process.env.port
        this.routes() // Disparar el método routes
    }

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

    listen() {
        this.app.listen(this.port, (req, res) =>{
        console.log(`Servidor iniciado en http://localhost:${this.port}`)
        })
    }

}

module.exports = server