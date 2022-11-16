const express = require('express') // Incluir express
const hbs = require('hbs')
const app = express()
const port = 4000

app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function (err) {})
app.set('view engine', 'hbs')
app.set('views',__dirname + '/views')

app.get('/',(req, res) => {
    res.render('home', {
        nombre:'Home'
    })
})

app.get('/contacto',(req, res) => {
    res.render('contacto', {
        nombre:'Contacto'
    })
})

app.get('*',(req, res) => {
    res.render('404', {
        nombre:'Página no encontrada'
    })
})

/*app.get('/', (req, res) => {
    res.send('Página de inicio')
}) */

/*app.get('*', (req, res) => {
    res.send('Página no encontrada')
}) */

/*app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/404.html')
}) */



app.listen(port,() => {
    console.log(`Servidor iniciado en http://localhost:${port}`)
})

