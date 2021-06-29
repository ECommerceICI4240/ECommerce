import {Response, Router} from "express";
import {carritoController} from '../controllers/carrito.controller';

class CarritoRouter{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        /*Se realiza un pedido, ya que los pedidos solo se pueden realizar cuando tiene una cuenta, se solicita
        el rut de este y el id de su carrito para poder cambiarlos de tabla y agregarlo como pedidos*/
        //this.router.post('/pedido/:rutUsuario',carritoController.realizarPedido);

        /*Obtiene los productos del carrito de un usuario*/
        this.router.get('/:rutUsuario',carritoController.getProductosCarrito);

        /*Obtiene un producto del carrito*/
        this.router.get('/:rut/:idProducto',carritoController.getProducCarrito);

        /*Elimina el carrito de un usuario. Se utiliza cuando se realiza un pedido*/
        this.router.delete('/:rutUsuario',carritoController.eliminarCarrito);

        /*Agrega un producto al carrito de un usuario*/ 
        this.router.post('/:rutUsuario/:idProducto/:cantidad',carritoController.agregarProductoCarrito);

        /*Modifica la cantidad del producto que se encuentra en el carrito*/
        this.router.put('/:rutUsuario/:idProducto/:nuevaCantidad',carritoController.modifCantProduCarrito);


        this.router.get('/CalculoTotal/:rut',carritoController.calcularTotal);
    }
}

const carritoRouter = new CarritoRouter();
export default carritoRouter.router;