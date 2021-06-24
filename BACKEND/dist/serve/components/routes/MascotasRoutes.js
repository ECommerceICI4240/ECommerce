"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascotas_controller_1 = require("../controllers/mascotas.controller");
class MascotaRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mascotas_controller_1.mascotaController.getAllMascotas);
    }
}
const mascotaRouter = new MascotaRouter();
exports.default = mascotaRouter.router;
