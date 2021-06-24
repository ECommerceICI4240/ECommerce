"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class ProductoController {
    getProductoById(req, res) {
        mysql_module_1.default.query();
        res.send('hello');
    }
    createProducto(req, res) {
        //database.query("INSERT INTO producto() VALUES('''+)")
        //Crear consulta
        //console.log(req.body);
        res.json({ text: 'creando producto' });
    }
    getAllProductos(req, res) {
        mysql_module_1.default.query('SELECT * FROM producto', (req1, resultados) => {
            res.status(200).send(resultados);
        });
    }
}
exports.productoController = new ProductoController();
