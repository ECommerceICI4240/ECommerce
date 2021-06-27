import {Response, Router} from "express";
import { productoController } from '../controllers/producto.controller';

class ProductoRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',productoController.getProductosMejorCalificados);
        this.router.get('/:id',productoController.getProductoById);
        this.router.post('/',productoController.createProducto);
    }
}

const productoRouter = new ProductoRouter();
export default productoRouter.router;