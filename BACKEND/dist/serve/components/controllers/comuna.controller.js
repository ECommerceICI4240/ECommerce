"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comunaController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class ComunaController {
    createComuna(req, res) {
        let idRegion = req.params.idRegion;
        let nombreComuna = req.body.nombreComuna;
        let idComuna = req.body.idComuna;
        mysql_module_1.default.query("INSERT INTO comuna(idRegion, idComuna,nombreComuna) VALUES ('" + idRegion + "','" + idComuna + "','" + nombreComuna + "')", (req1, resultado) => {
            res.status(201).send("Comuna ingresada");
        });
    }
    getComunasPorRegion(req, res) {
        let idRegion = req.params.idRegion;
        mysql_module_1.default.query("SELECT * FROM comuna WHERE idRegion= ?", idRegion, (req1, resultado) => {
            res.status(200).send(resultado);
        });
    }
    getAllRegiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            mysql_module_1.default.query('SELECT * FROM region', (req1, resultados) => {
                res.status(200).send(resultados);
            });
        });
    }
}
exports.comunaController = new ComunaController();
