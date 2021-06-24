"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = __importDefault(require("./usuario.controller"));
const router = express_1.default.Router();
//peticiones
//trae todos los productos
router.get('/all', (req, res) => {
    let usuarios = usuario_controller_1.default.getAllProductos();
    res.send(usuarios);
});
router.get('/:rut', (req, res) => {
    const id = req.params['rut'];
    let producto = usuario_controller_1.default.getProductoById(id);
    res.send(producto);
});
exports.default = router;
