"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_controller_1 = require("../controllers/pedido.controller");
class PedidoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /* Obtiene todos los pedidos*/
        this.router.get('/', pedido_controller_1.pedidoController.getAllPedidos);
        /*Obtiene todos los pedidos de un usuario*/
        this.router.get('/:rutUsuario', pedido_controller_1.pedidoController.getPedidosPorRut);
        /*Obtiene el listado productos, donde se especifica el id del producto, cantidad y precio unitario de este*/
        this.router.get('/pedirOrdenDetalle/:idOrden', pedido_controller_1.pedidoController.getOrdenDetalle);
    }
}
const pedidoRouter = new PedidoRouter();
exports.default = pedidoRouter.router;
