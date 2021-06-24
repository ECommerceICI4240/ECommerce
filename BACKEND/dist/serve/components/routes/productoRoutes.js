"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
class ProductoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', producto_controller_1.productoController.getAllProductos);
        this.router.get('/:id', producto_controller_1.productoController.getProductoById);
        this.router.post('/', producto_controller_1.productoController.createProducto);
    }
}
const productoRouter = new ProductoRouter();
exports.default = productoRouter.router;
