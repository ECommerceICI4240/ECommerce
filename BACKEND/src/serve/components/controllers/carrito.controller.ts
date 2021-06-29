import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class CarritoController{

    public async getProducCarrito(req: Request, res: Response){
        let _rut = req.params.rut;
        let _idProducto = req.params.idProducto;
        console.log("holaa");
        console.log(_rut);

        try{
            await database.query('SELECT * FROM carrito WHERE carrito.rut=? AND carrito.idProducto=?',[_rut,_idProducto],(req1: any,  resultados:any)=>{
                if( resultados.length > 0){
                    
                    res.send(resultados);
                }
                else{
                    res.status(404).json({message: 'No hay resultados'});
                }
                
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener el producto del carrito'});
        }
    }

    /*Obtiene los productos del carrito segun el rut del usuario
    SE NECESITA:
    - rut del usuario
    */
    public async getProductosCarrito(req: Request,res: Response){
        let _rut = req.params.rutUsuario;
        try{
            await database.query('SELECT * FROM carrito WHERE carrito.rut = ?',_rut,(req1: any,  resultados:any)=>{
                res.status(200).send(resultados);
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas agregar al carrito'});
        }    
    } 

    /*Elimina el carrito de un usuario
    SE NECESITA:
    - rut del usuario 
    */
    public async eliminarCarrito(req: Request,res: Response){
        let _rut = req.params.rutUsuario;

        try{
            await database.query('DELETE FROM carrito WHERE carrito.rut=?',_rut,(req1: any,  resultados:any)=>{
                res.send(resultados);
            })
            
        }
        catch(err){
            res.status(404).json({message: 'Problemas al eliminar'});

        }
    }

    /*
    Agrega un producto al carrito de un usuario
    SE INDICA:
    - rut del usuario
    - id del producto
    - cantidad agregar
    */ 
    public async agregarProductoCarrito(req: Request,res: Response){
        let _rut = req.params.rutUsuario;
        let _idProducto = req.params.idProducto;
        let _cantidadProducto = req.params.cantidad;

        try{
            await database.query("INSERT INTO carrito (rut , idProducto , cantidad) VALUES ('"+_rut+"',"+_idProducto+","+_cantidadProducto+")",(req1: Request,  resultado:Response)=>{
                res.send(resultado);
            })
        }
        catch(err){
            res.status(404).json({message: 'Problemas al insertar al carrito'});
        }
    }


    /*
    Modifica la cantidad de un producto que se encuentra en un carrito de un usuario
    SE INDICA:
    - rut del usuario
    - id del producto
    - cantidad nueva
    */ 
    public async modifCantProduCarrito(req: Request,res: Response){
        let _rut = req.params.rutUsuario;
        let _idProducto = req.params.idProducto;
        let _nuevaCantidad = req.params.nuevaCantidad;

        try{
            await database.query('UPDATE carrito SET carrito.cantidad = ?  WHERE carrito.idProducto = ? AND carrito.rut = ?',[_nuevaCantidad,_idProducto,_rut],(req1: Request,  resultado:Response)=>{
                res.send(resultado);
            })
        }
        catch(err){
            res.status(404).json({message: 'Problemas al modificar la cantidad'});
        }

    }


    public async calcularTotal(req: any,res: any){
        let _rut = req.params.rut;

        try{
            await database.query('SELECT SUM(producto.precioProducto * carrito.cantidad) FROM producto JOIN carrito ON carrito.idProducto = producto.idProductoWHERE carrito.rut = ?',_rut,(req1: any,  resultado:any)=>{
                res.send(resultado);
            })
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener el total a pagar'});
        }

    }
}

export const carritoController = new CarritoController();