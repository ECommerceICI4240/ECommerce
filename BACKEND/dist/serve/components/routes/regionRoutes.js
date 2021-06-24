"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const region_controller_1 = require("../controllers/region.controller");
class RegionRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', region_controller_1.regionController.createRegion);
        this.router.get('/', region_controller_1.regionController.getAllRegiones);
    }
}
const regionRouter = new RegionRouter();
exports.default = regionRouter.router;
