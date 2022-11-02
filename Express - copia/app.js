const express = require('express') // Incluir express
const app = express()
const port = 4001

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Página de inicio')
})

app.get('/contacto', (req, res) => {
    res.send('contacto')
})

/*app.get('*', (req, res) => {
    res.send('Página no encontrada')
}) */

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/views/404.html')
})

app.listen(port,() => {
    console.log(`Servidor iniciado en http://localhost:${port}`)
})

