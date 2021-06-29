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
exports.pedidoController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class PedidoController {
    /*
    Obtiene todos los pedidos
    NO SE NECESITA NIGUN DATOS ESPECIFICO
    */
    getAllPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mysql_module_1.default.query('SELECT * FROM orden', (req1, resultados) => {
                    if (resultados.length > 0) {
                        res.status(200).send(resultados);
                    }
                    else {
                        res.status(404).json({ message: 'No hay resultados para ordenes' });
                    }
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener todos los pedidos' });
            }
        });
    }
    /*Obtiene todos los pedidos de un usuario
    SE NECESITA:
    - rut del usuario
    */
    getPedidosPorRut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rut = req.params.rutUsuario;
            try {
                yield mysql_module_1.default.query('SELECT * FROM orden WHERE orden.rutUsuario= ?', _rut, (req1, resultados) => {
                    res.send(resultados);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener los todos los pedidos del usuario' });
            }
        });
    }
    /*Obtiene el listado productos, donde se especifica el producto, cantidad y precio unitario de este
    SE NECESITA:
    - id de la orden
    */
    getOrdenDetalle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _idOrden = req.params.idOrden;
            console.log(_idOrden);
            console.log("holaa");
            try {
                yield mysql_module_1.default.query('SELECT * FROM ordendetalle WHERE ordendetalle.idOrden=?', _idOrden, (req1, resultados) => {
                    console.log(resultados);
                    res.send(resultados);
                });
            }
            catch (err) {
                res.status(404).json({ message: 'Problemas al obtener detalles de la orden' });
            }
        });
    }
}
exports.pedidoController = new PedidoController();
