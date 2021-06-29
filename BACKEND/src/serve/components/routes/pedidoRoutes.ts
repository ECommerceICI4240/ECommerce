import {Router} from "express";
import {pedidoController} from '../controllers/pedido.controller';

class PedidoRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        /* Obtiene todos los pedidos*/
        this.router.get('/',pedidoController.getAllPedidos);

        /*Obtiene todos los pedidos de un usuario*/
        this.router.get('/:rutUsuario',pedidoController.getPedidosPorRut);

        /*Obtiene el listado productos, donde se especifica el id del producto, cantidad y precio unitario de este*/
        this.router.get('/pedirOrdenDetalle/:idOrden',pedidoController.getOrdenDetalle);   

        
    }
}

const pedidoRouter = new PedidoRouter();
export default pedidoRouter.router;