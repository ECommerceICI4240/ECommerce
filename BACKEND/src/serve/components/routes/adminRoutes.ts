import {Router} from "express";
import {adminController} from '../controllers/admin.controller';

class AdminRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:rutUsuario',adminController.getUsuarioByRut);

        //Obtiene el listado de todos los usuarios
        this.router.get('/',adminController.getAllUsuarios);
        

        //Obtiene el listado de todos los pedidos
        this.router.get('/pedidos',adminController.getAllPedidos);
    }
}

const adminRouter = new AdminRouter();
export default adminRouter.router;