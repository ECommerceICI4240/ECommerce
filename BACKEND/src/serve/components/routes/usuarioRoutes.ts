import {Response, Router} from "express";
import {usuarioController} from '../controllers/usuario.controller';

class UsuarioRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:id',usuarioController.getUsuarioById);
        this.router.get('/',usuarioController.getAllUsuarios);
        
        this.router.post('/',usuarioController.createUsuario);
    }
}

const usuarioRouter = new UsuarioRouter();
export default usuarioRouter.router;