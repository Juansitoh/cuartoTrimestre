const { response } = require('express')
const dbConnection = require('../database/config')

const getUsuario = (req, res = response) => {
    const consultarUsuario = dbConnection.query('SELECT * FROM usuario',function (err, resultados, fields){
        if(err)
            throw err

            res.json({
                msg: "GET API MYSQL | ACCESO USUARIO",
                resultados
            })
        
        })
}

const postUsuario = async(req,res)=>{

    const {ID_Rol, Correo, Contraseña} = req.body

    const insertarUsuario = dbConnection.query(`INSERT INTO usuario (ID_Usuario, ID_Rol, Correo, Contraseña) VALUES ('null', '${ID_Rol}', '${Correo}', '${Contraseña}')`,
    function(err, resultado){
        if (err) throw err
        res.json({
            msg:'POST API MYSQL | CREAR USUARIO',
            resultado
        })
    })
}

const deleteUsuario = async (req, res) => {

    const {ID_Usuario} = req.query
    
    const eliminarUsuario = dbConnection.query(`DELETE FROM usuario WHERE ID_Usuario = "${ID_Usuario}"`,
    function(err, resultado){
        if (err) throw err

        res.json({
            msg:'DELETE API MYSQL',
            resultado: eliminarUsuario
    
        })
    })
}

const putUsuario = async (req, res) => {

    const {ID_Usuario, ID_Rol, Correo, Contraseña} = req.body

    const actualizarUsuario = dbConnection.query(`UPDATE usuario SET ID_Rol = "${ID_Rol}", Correo = "${Correo}", Contraseña = "${Contraseña}" WHERE ID_Usuario = "${ID_Usuario}"`,
    function(err, resultado){
        if (err) throw err

        res.json({
            msg:'PUT API MYSQL | ACTUALIZAR USUARIO',
            resultado
        })
    })
}

/*

const patchUsuario = async (req, res) => {

    const {ID_Usuario, ID_Rol, Correo, Contraseña} = req.body

    const actuaPatchUsuario = dbConnection.query(`UPDATE usuario SET ID_Rol = "${ID_Rol}", Correo = "${Correo}", Contraseña = "${Contraseña}" WHERE ID_Usuario = "${ID_Usuario}"`,
    function(err, resultado){
        if (err) throw err

        res.json({
            msg:'PATCH API MYSQL | ACTUALIZAR USUARIO',
            resultado
        })
    })
}

*/

module.exports = {
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario
//    patchUsuarioAcceso
}