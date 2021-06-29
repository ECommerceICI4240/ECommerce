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
        /*Se obtiene la informacion de un producto segun la id*/
        this.router.get('/:idProducto', producto_controller_1.productoController.getProductoById);
        /*Se obtiene un listado de los productos mejor calificados*/
        this.router.get('/', producto_controller_1.productoController.getProductosMejorCalificados);
    }
}
const productoRouter = new ProductoRouter();
exports.default = productoRouter.router;
