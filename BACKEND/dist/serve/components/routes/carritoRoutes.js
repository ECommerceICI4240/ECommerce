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
        /*Se realiza un pedido, ya que los pedidos solo se pueden realizar cuando tiene una cuenta, se solicita
        el rut de este y el id de su carrito para poder cambiarlos de tabla y agregarlo como pedidos*/
        //this.router.post('/pedido/:rutUsuario',carritoController.realizarPedido);
        /*Obtiene los productos del carrito de un usuario*/
        this.router.get('/:rutUsuario', carrito_controller_1.carritoController.getProductosCarrito);
        /*Obtiene un producto del carrito*/
        this.router.get('/:rut/:idProducto', carrito_controller_1.carritoController.getProducCarrito);
        /*Elimina el carrito de un usuario. Se utiliza cuando se realiza un pedido*/
        this.router.delete('/:rutUsuario', carrito_controller_1.carritoController.eliminarCarrito);
        /*Agrega un producto al carrito de un usuario*/
        this.router.post('/:rutUsuario/:idProducto/:cantidad', carrito_controller_1.carritoController.agregarProductoCarrito);
        /*Modifica la cantidad del producto que se encuentra en el carrito*/
        this.router.put('/:rutUsuario/:idProducto/:nuevaCantidad', carrito_controller_1.carritoController.modifCantProduCarrito);
        this.router.get('/CalculoTotal/:rut', carrito_controller_1.carritoController.calcularTotal);
    }
}
const carritoRouter = new CarritoRouter();
exports.default = carritoRouter.router;
