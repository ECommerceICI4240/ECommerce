import {Response, Router} from "express";
import {carritoController} from '../controllers/carrito.controller';

class CarritoRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/:idUsuario',carritoController.getProductosCarrito);

    }
}

const carritoRouter = new CarritoRouter();
export default carritoRouter.router;