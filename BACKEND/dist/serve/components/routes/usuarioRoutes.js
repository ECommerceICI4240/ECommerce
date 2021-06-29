"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
class UsuarioRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Iniciar sesion de un ususario independiente de que tipo sea (comun o admin)
        this.router.get('/iniciarSesion', usuario_controller_1.usuarioController.iniciarSesion);
        //Crea una cuenta para un usuario
        this.router.post('/registrarse', usuario_controller_1.usuarioController.createUsuario);
        //Se obtiene la información de un usuario según su rut
        this.router.get('/:rutUsuario', usuario_controller_1.usuarioController.getUsuarioByRut);
        //Obtiene el listado de todos los usuarios
        this.router.get('/', usuario_controller_1.usuarioController.getAllUsuarios);
    }
}
const usuarioRouter = new UsuarioRouter();
exports.default = usuarioRouter.router;
