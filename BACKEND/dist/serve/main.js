"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productoRoutes_1 = __importDefault(require("../serve/components/routes/productoRoutes"));
const usuarioRoutes_1 = __importDefault(require("../serve/components/routes/usuarioRoutes"));
const regionRoutes_1 = __importDefault(require("../serve/components/routes/regionRoutes"));
const ComunaRoutes_1 = __importDefault(require("./components/routes/ComunaRoutes"));
const MascotasRoutes_1 = __importDefault(require("./components/routes/MascotasRoutes"));
const categoriaRoutes_1 = __importDefault(require("./components/routes/categoriaRoutes"));
function main() {
    const server = express_1.default();
    const port = 4000;
    //Para que se reconozca la estructura body
    const bodyParser = require('body-parser');
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cors_1.default());
    server.use('/producto', productoRoutes_1.default);
    server.use('/usuario', usuarioRoutes_1.default);
    server.use('/region', regionRoutes_1.default);
    server.use('/comuna', ComunaRoutes_1.default);
    server.use('/mascotas', MascotasRoutes_1.default);
    server.use('/categoria', categoriaRoutes_1.default);
    server.listen(port, () => {
        console.log('Server listening on: http://localhost:' + port);
    });
}
exports.default = { main };
