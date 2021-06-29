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
exports.carritoController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class CarritoController {
    getProducCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rut;
            let _idProducto = req.params.idProducto;
            console.log("holaa");
            console.log(_rut);
            try {
                yield mysql_module_1.default.query('SELECT * FROM carrito WHERE carrito.rut=? AND carrito.idProducto=?', [_rut, _idProducto], (req1, resultados) => {
                    if (resultados.length > 0) {
                        res.send(resultados);
                    }
                    else {
                        res.status(404).json({ message: 'No hay resultados' });
                    }
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener el producto del carrito' });
            }
        });
    }
    /*Obtiene los productos del carrito segun el rut del usuario
    SE NECESITA:
    - rut del usuario
    */
    getProductosCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rutUsuario;
            try {
                yield mysql_module_1.default.query('SELECT * FROM carrito WHERE carrito.rut = ?', _rut, (req1, resultados) => {
                    res.status(200).send(resultados);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas agregar al carrito' });
            }
        });
    }
    /*Elimina el carrito de un usuario
    SE NECESITA:
    - rut del usuario
    */
    eliminarCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rutUsuario;
            try {
                yield mysql_module_1.default.query('DELETE FROM carrito WHERE carrito.rut=?', _rut, (req1, resultados) => {
                    res.send(resultados);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al eliminar' });
            }
        });
    }
    /*
    Agrega un producto al carrito de un usuario
    SE INDICA:
    - rut del usuario
    - id del producto
    - cantidad agregar
    */
    agregarProductoCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rutUsuario;
            let _idProducto = req.params.idProducto;
            let _cantidadProducto = req.params.cantidad;
            try {
                yield mysql_module_1.default.query("INSERT INTO carrito (rut , idProducto , cantidad) VALUES ('" + _rut + "'," + _idProducto + "," + _cantidadProducto + ")", (req1, resultado) => {
                    res.send(resultado);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al insertar al carrito' });
            }
        });
    }
    /*
    Modifica la cantidad de un producto que se encuentra en un carrito de un usuario
    SE INDICA:
    - rut del usuario
    - id del producto
    - cantidad nueva
    */
    modifCantProduCarrito(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rutUsuario;
            let _idProducto = req.params.idProducto;
            let _nuevaCantidad = req.params.nuevaCantidad;
            try {
                yield mysql_module_1.default.query('UPDATE carrito SET carrito.cantidad = ?  WHERE carrito.idProducto = ? AND carrito.rut = ?', [_nuevaCantidad, _idProducto, _rut], (req1, resultado) => {
                    res.send(resultado);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al modificar la cantidad' });
            }
        });
    }
    calcularTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rut;
            try {
                yield mysql_module_1.default.query('SELECT SUM(producto.precioProducto * carrito.cantidad) FROM producto JOIN carrito ON carrito.idProducto = producto.idProductoWHERE carrito.rut = ?', _rut, (req1, resultado) => {
                    res.send(resultado);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener el total a pagar' });
            }
        });
    }
}
exports.carritoController = new CarritoController();
