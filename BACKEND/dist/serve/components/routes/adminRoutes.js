"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
class AdminRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:rutUsuario', admin_controller_1.adminController.getUsuarioByRut);
        //Obtiene el listado de todos los usuarios
        this.router.get('/', admin_controller_1.adminController.getAllUsuarios);
        //Obtiene el listado de todos los pedidos
        this.router.get('/pedidos', admin_controller_1.adminController.getAllPedidos);
    }
}
const adminRouter = new AdminRouter();
exports.default = adminRouter.router;
