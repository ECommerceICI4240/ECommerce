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
        this.router.get('/:id', usuario_controller_1.usuarioController.getUsuarioById);
        this.router.get('/', usuario_controller_1.usuarioController.getAllUsuarios);
        this.router.post('/', usuario_controller_1.usuarioController.createUsuario);
    }
}
const usuarioRouter = new UsuarioRouter();
exports.default = usuarioRouter.router;
