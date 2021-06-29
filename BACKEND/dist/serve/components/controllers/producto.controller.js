"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class ProductoController {
    /*Se obtiene el producto segun su ID
    SE NECESITA
    -id del producto
    */
    getProductoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _idProducto = req.params.idProducto;
            try {
                yield mysql_module_1.default.query('SELECT * FROM producto WHERE producto.idProducto = ?', _idProducto, (req1, resultados) => {
                    res.send(resultados);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener el producto' });
            }
        });
    }
    /*Se obtienen los productos mejor calificados, es decir, calificacion igual a 5
    NO SE NECESITAN DATOS ESPECIFICOS*/
    getProductosMejorCalificados(req, res) {
        mysql_module_1.default.query('SELECT * FROM producto WHERE calificacionProducto = 5', (req1, resultados) => {
            res.status(200).send(resultados);
        });
    }
}
exports.productoController = new ProductoController();
