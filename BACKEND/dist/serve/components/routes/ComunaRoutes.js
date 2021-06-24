"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comuna_controller_1 = require("../controllers/comuna.controller");
class ComunaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/:idRegion', comuna_controller_1.comunaController.createComuna);
        this.router.get('/:idRegion', comuna_controller_1.comunaController.getComunasPorRegion);
    }
}
const comunaRouter = new ComunaRouter();
exports.default = comunaRouter.router;
