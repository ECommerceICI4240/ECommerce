const mysql = require('mysql');

export const database = mysql.createConnection({
    host    : '127.0.0.1', //localhost
    user    : 'root',
    port    : 3306,
    password: '',
    database: 'ecommerce'
});
try{
    database.connect();
    console.log("Conexion a base de datos exitosa");

}catch(error){
    console.log("Error de conxión de base de datos");

}



export default database;
