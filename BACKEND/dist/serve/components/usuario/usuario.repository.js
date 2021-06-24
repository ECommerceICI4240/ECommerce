"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Utiliza la estructura de la interfaz que este en model producto.model.ts
let Usuarios = [
    { rut: "11305123-1", nombres: "Lucia Maria", apellidoM: "Rodriguez", apellidoP: "Isla", correo: "lucia@gmail.com", contrasena: "113da", direccion: "una direccion 1", idComuna: "2" },
    { rut: "13232154-k", nombres: "Antonio Roberto", apellidoM: "Martínez", apellidoP: "Olivera", correo: "antonio@gmail.com", contrasena: "12d-S", direccion: "una direccion 2 ", idComuna: "3" },
    { rut: "21234567-5", nombres: "Julieta Emilia", apellidoM: "Cardenas", apellidoP: "Hidalgo", correo: "julieta@gmail.com", contrasena: "HOLA12345", direccion: "una direccion 3", idComuna: "4" },
];
//Conexión con la base de datos
function getAllUsuarios() {
    return Usuarios;
}
function getUsuarioById(rut) {
    //Puede ser del tipo producto o nulo, porque puede que no se encuentre
    let Usuario = null;
    for (let i = 0; i < Usuarios.length; i++) {
        if (Usuarios[i].rut === rut) {
            Usuario = Usuarios[i];
        }
    }
    return Usuario;
}
exports.default = { getAllUsuarios, getUsuarioById };
