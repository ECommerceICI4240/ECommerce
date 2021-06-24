"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
//Utiliza la estructura de la interfaz que este en model producto.model.ts
let Productos = [
    { idProducto: "1", nombreProducto: "galletas para perros", precioProducto: 1990, stockProducto: 50, descripcionProducto: "Galletas de verduras y pollo para cachorros", calificacionProducto: 5 },
    { idProducto: "2", nombreProducto: "Shampoo para gato", precioProducto: 2500, stockProducto: 20, descripcionProducto: "Para un pelo mas sano y suave", calificacionProducto: 3 },
    { idProducto: "3", nombreProducto: "Sustrato de papel", precioProducto: 3890, stockProducto: 15, descripcionProducto: "Mas absorvente, duplica su volumen", calificacionProducto: 4.5 },
];
//Conexión con la base de datos
function getAllProductos() {
    mysql_module_1.default.getDataBase().query("SELECT * FROM producto", (req, resultados) => {
        return resultados;
    });
}
function getProductoById(id) {
    //Puede ser del tipo producto o nulo, porque puede que no se encuentre
    let Producto = null;
    for (let i = 0; i < Productos.length; i++) {
        if (Productos[i].idProducto === id) {
            Producto = Productos[i];
        }
    }
    return Producto;
}
exports.default = { getAllProductos, getProductoById };
