import {Response, Router} from "express";
import { productoController } from '../controllers/producto.controller';

class ProductoRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        /*Se obtiene la informacion de un producto segun la id*/
        this.router.get('/:idProducto',productoController.getProductoById);

        /*Se obtiene un listado de los productos mejor calificados*/
        this.router.get('/',productoController.getProductosMejorCalificados);

      
    }
}

const productoRouter = new ProductoRouter();
export default productoRouter.router;