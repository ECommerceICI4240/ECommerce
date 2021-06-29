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
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _correoUsuario = req.query.correo; //El correo es unico
            let _contrasena = req.query.contrasena;
            try {
                yield mysql_module_1.default.query('SELECT nombres,correo,rolUsuario,rut FROM usuario WHERE correo=? and contrasena=md5(?)', [_correoUsuario, _contrasena], (req1, resultado) => {
                    res.send(resultado);
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'correo o contrasena incorrectos' });
            }
        });
    }
    //Se crea un usuario, por defecto es el crear usuario con rol de usuario comun
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _nombres = req.body.nombres;
            let _correo = req.body.correo;
            //Se encripta la contraseña
            let _contrasena = req.body.contrasena;
            let _apellidoP = req.body.apellidoP;
            let _apellidoM = req.body.apellidoM;
            let _rut = req.body.rut;
            let _direccion = req.body.direccion;
            let _idComuna = req.body.idComuna;
            let rol = 0; //El numero 0 indica un usuario comun
            try {
                yield mysql_module_1.default.query("INSERT INTO usuario(nombres, correo, contrasena,apellidoP,apellidoM,rut,direccion,idComuna,rolUsuario) VALUES('" + _nombres + "','" + _correo + "',md5('" + _contrasena + "'),'" + _apellidoP + "','" + _apellidoM + "','" + _rut + "','" + _direccion + "'," + _idComuna + "," + rol + ")", (req1, resultados) => {
                    res.status(201).send("Usuario creado");
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problema al crear el ususario' });
            }
        });
    }
    /*Obtiene un usuario segun su rut
    SE NECESITA
    - rut del usuario*/
    getUsuarioByRut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _rutUsuario = req.params.rutUsuario;
            try {
                mysql_module_1.default.query('SELECT nombres, apellidoM , apellidoP , direccion , idComuna , rut FROM usuario WHERE usuario.rut= ?', _rutUsuario, (req1, resultados) => {
                    res.status(200).send(resultados);
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problemas al obtener el ususario' });
            }
        });
    }
    /*Obtiene todos los ususario
    NO SE NECESITAN DATOS ESPECIFICOS*/
    getAllUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mysql_module_1.default.query('SELECT nombres, apellidoM , apellidoP , direccion , idComuna , rut , correo FROM usuario ', (req1, resultados) => {
                    if (resultados.length > 0) {
                        res.status(200).send(resultados);
                    }
                    else {
                        res.status(404).json({ message: 'No hay resultados' });
                    }
                });
            }
            catch (err) {
                return res.status(404).json({ message: 'problemas en obtener los ususarios' });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
