"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_controller_1 = require("../controllers/carrito.controller");
class CarritoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:idUsuario', carrito_controller_1.carritoController.getProductosCarrito);
    }
}
const carritoRouter = new CarritoRouter();
exports.default = carritoRouter.router;
