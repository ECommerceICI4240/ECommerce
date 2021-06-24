"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const mysql = require('mysql');
exports.database = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'ecommerce'
});
try {
    exports.database.connect();
    console.log("Conexion a base de datos exitosa");
}
catch (error) {
    console.log("Error de conxión de base de datos");
}
exports.default = exports.database;
