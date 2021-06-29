import {Router} from "express";
import {usuarioController} from '../controllers/usuario.controller';

class UsuarioRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        
        //Iniciar sesion de un ususario independiente de que tipo sea (comun o admin)
        this.router.get('/iniciarSesion',usuarioController.iniciarSesion);

        //Crea una cuenta para un usuario
        this.router.post('/registrarse',usuarioController.createUsuario);

        //Se obtiene la información de un usuario según su rut
        this.router.get('/:rutUsuario',usuarioController.getUsuarioByRut);

         //Obtiene el listado de todos los usuarios
         this.router.get('/',usuarioController.getAllUsuarios);
    }
}

const usuarioRouter = new UsuarioRouter();
export default usuarioRouter.router;