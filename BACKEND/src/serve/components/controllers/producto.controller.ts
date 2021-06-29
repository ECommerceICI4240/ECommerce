import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class ProductoController{

    /*Se obtiene el producto segun su ID
    SE NECESITA
    -id del producto
    */
    public async getProductoById (req: Request,res: Response){
        let _idProducto = req.params.idProducto;

        try{
            await database.query('SELECT * FROM producto WHERE producto.idProducto = ?',_idProducto,(req1:any,  resultados:any)=>{
                res.send(resultados);
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener el producto'});
        }
        
    }

    /*Se obtienen los productos mejor calificados, es decir, calificacion igual a 5
    NO SE NECESITAN DATOS ESPECIFICOS*/ 
    public getProductosMejorCalificados(req: Request, res: Response){
        database.query('SELECT * FROM producto WHERE calificacionProducto = 5',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });
    }


}

export const productoController = new ProductoController();