"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
class CategoriaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoria_controller_1.categoriaController.getAllCategorias);
    }
}
const categoriaRouter = new CategoriaRouter();
exports.default = categoriaRouter.router;
