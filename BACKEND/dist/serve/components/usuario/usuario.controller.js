"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_repository_1 = __importDefault(require("./usuario.repository"));
//Aca va la manipulación de datos, como calculos
function getAllProductos() {
    let Usuario = usuario_repository_1.default.getAllUsuarios();
    return Usuario;
}
function getProductoById(rut) {
    let Usuarios = usuario_repository_1.default.getUsuarioById(rut);
    return Usuarios;
}
exports.default = { getAllProductos, getProductoById };
