"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_controller_1 = __importDefault(require("./producto.controller"));
const router = express_1.default.Router();
//peticiones
//trae todos los productos
router.get('/all', (req, res) => {
    let productos = producto_controller_1.default.getAllProductos();
    res.send(productos);
});
router.get('/:id', (req, res) => {
    const id = req.params['id'];
    let producto = producto_controller_1.default.getProductoById(id);
    res.send(producto);
});
exports.default = router;
