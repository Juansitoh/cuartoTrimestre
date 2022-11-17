require('dotenv').config
const express = require ('express')
const hbs = require('hbs')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render('home/home',{
        nombre: 'Home'
    })
});

hbs.registerPartials(__dirname + '/views/home/partials', function (err) {});
hbs.registerPartials(__dirname + '/views/dashboard/partialsDash', function (err) {});
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get('/contacto', (req,res) =>{
    
    res.render('home/contact' ,{
        nombre:'Contacto'
    })
})

app.get('/login', (req,res) =>{
    
    res.render('home/login' ,{
        nombre:'Login'
    })
})
app.get('/registro', (req,res) =>{
    
    res.render('home/registro' ,{
        nombre:'Registrarse'
    })
})

app.get('/about', (req,res) =>{
    
    res.render('home/about' ,{
        nombre:'About'
    })
})

app.get('/cart', (req,res) =>{
    
    res.render('home/cart' ,{
        nombre:'Cart'
    })
})
app.get('/checkout', (req,res) =>{
    
    res.render('home/checkout' ,{
        nombre:'Checkout'
    })
})
app.get('/shop', (req,res) =>{
    
    res.render('home/shop' ,{
        nombre:'Shop'
    })
})
app.get('/shop-single', (req,res) =>{
    
    res.render('home/shop-single' ,{
        nombre:'detalleProducto'
    })
})
app.get('/contact', (req,res) =>{
    
    res.render('home/contact' ,{
        nombre:'Contacto'
    })
})
app.get('/thankyou', (req,res) =>{
    
    res.render('home/thankyou' ,{
        nombre:'Chek'
    })
})

app.get('/inicio',(req,res) =>{
    res.render('dashboard/inicio' ,{
        nombre:'Dashboard'
    })
})

app.get('/pedidos',(req,res) =>{
    res.render('dashboard/pedidos' ,{
        nombre:'Dashboard'
    })
})

app.get('/anchetas',(req,res) =>{
    res.render('dashboard/anchetas' ,{
        nombre:'Anchetas'
    })
})

app.get('/insumos',(req,res) =>{
    res.render('dashboard/insumos' ,{
        nombre:'Insumos'
    })
})

app.get('/configuracion',(req,res) =>{
    res.render('dashboard/configuracion' ,{
        nombre:'configuracion'
    })
})

app.get('/usuarios',(req,res) =>{
    res.render('dashboard/usuarios' ,{
        nombre:'usuarios'
    })
})

app.get('*',(req,res) =>{

    res.render('home/404' ,{
        nombre:'pagina no encontrada'
    })
})

app.listen(port,() =>{
    console.log(`escuchando por el puerto http://localhost:${port}`)
})

