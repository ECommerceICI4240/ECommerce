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
exports.usuarioController = void 0;
const mysql_module_1 = __importDefault(require("../../config/mysql.module"));
class UsuarioController {
    createRegion(req, res) {
        let nombreRegion = req.body.nombreRegion;
        mysql_module_1.default.query("INSERT INTO region(nombreRegion) VALUES ('" + nombreRegion + "')", (req1, resultado) => {
            res.status(201).send("Region ingresada");
        });
    }
    getUsuarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            mysql_module_1.default.query();
            res.send('hello');
        });
    }
    getAllUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            mysql_module_1.default.query('SELECT * FROM usuario', (req1, resultados) => {
                res.status(200).send(resultados);
            });
        });
    }
    createUsuario(req, res) {
        let _nombres = req.body['nombres'];
        let _correo = req.body.correo;
        let _contrasena = req.body.contrasena;
        let _apellidoP = req.body.apellidoP;
        let _apellidoM = req.body.apellidoM;
        let _rut = req.body.rut;
        let _direccion = req.body.direccion;
        let _idComuna = req.body.idComuna;
        /*let nombre = req.body.nombre;
        let correoelectronico=req.body.correoelectronico;
        let clave=req.body.clave;

        Nombre de los atributos en la base de datos de la tabla usuario*/
        /*await database.query("INSERT INTO usuario(nombres, correo, contrasena,apellidoP,apellidoM,rut,direccion,idComuna) VALUES('''+_nombres+''','''+_correo+'''+_contrasena+'''+_apellidoP+'''+_apellidoM+'''+_rut +'''+_direccion+'''+_idComuna+''')",(req1:any, resultados:any)=>{
            res.status(201).send("Usuario creado");
            console.log("Los resultados son"+resultados);
        });*/
        //database.query('INSERT INTO usuario (nombres)VALUES ()');
    }
}
exports.usuarioController = new UsuarioController();
