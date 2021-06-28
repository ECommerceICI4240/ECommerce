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
exports.adminController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class AdminController {
    //Obtiene todos los ususario
    getAllUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mysql_module_1.default.query('SELECT * FROM usuario', (req1, resultados) => {
                    if (resultados.length > 0) {
                        res.status(200).send(resultados);
                    }
                    else {
                        res.status(404).json({ message: 'No hay resultados' });
                    }
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problemas en obtener los ususarios' });
            }
        });
    }
    //Obtiene un usuario segun su id
    getUsuarioByRut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _idUsuario = req.params.idUsuario;
            try {
                mysql_module_1.default.query('SELECT * FROM usuario WHERE idUsuario = ?', _idUsuario, (req1, resultados) => {
                    res.status(200).send(resultados);
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problemas al obtener el ususario' });
            }
        });
    }
    //Obtiene el listado de todos los productos
    //FALTA CREAR UNA TABLA PEDIDOS
    getAllPedidos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mysql_module_1.default.query('SELECT * FROM productos', (req1, resultados) => {
                    if (resultados.length > 0) {
                        res.status(200).send(resultados);
                    }
                    else {
                        res.status(404).json({ message: 'No hay resultados para pedidos' });
                    }
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problemas en obtener los pedidos' });
            }
        });
    }
}
exports.adminController = new AdminController();
