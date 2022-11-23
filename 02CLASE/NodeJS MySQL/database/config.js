const mysql = require('mysql2')

const dbConnection = mysql.createConnection({
    host: 'localhost',
    database: 'amjor',
    user: 'root',
    password: '',
    port: 3306,
})

module.exports = dbConnection