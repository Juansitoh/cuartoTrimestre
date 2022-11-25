const {response} = require('express')

const conexion = require('../database/config')


const getVentas = async (req, res = response) => {


    const ConsultaVenta = conexion.query('SELECT * FROM ventas',function(error,resultados,fields){
        if(error)
            throw error
        
            res.json({
                msg:'GET API CON MYSQL',
                resultados
            })
        
        
    })
}



const postVentas = async(req,res)=>{

    const {nombreUsuario, productosPedido,precio,fecha} = req.body

    const agregar = conexion.query(`INSERT INTO ventas (nombreUsuario,productosPedido,precio,fecha) VALUES ('${nombreUsuario}','${productosPedido}','${precio}','${fecha}')`,
    function(error,resultado){
        if (error) throw error
        res.json({
            msg:'Campo agregado',
            resultado
        })
    }
    )
}

module.exports = {
    getVentas,
    postVentas
}