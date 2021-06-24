"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_repository_1 = __importDefault(require("./producto.repository"));
//Aca va la manipulación de datos, como calculos
function getAllProductos() {
    let Productos = producto_repository_1.default.getAllProductos();
    return Productos;
}
function getProductoById(id) {
    let productos = producto_repository_1.default.getProductoById(id);
    return productos;
}
exports.default = { getAllProductos, getProductoById };
