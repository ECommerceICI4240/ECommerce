import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class PedidoController{

     /* 
     Obtiene todos los pedidos
     NO SE NECESITA NIGUN DATOS ESPECIFICO
     */
    public async getAllPedidos(req: Request,res: Response){
        try{
            await database.query('SELECT * FROM orden',(req1: any,  resultados:any)=>{
                if( resultados.length > 0){
                    res.status(200).send(resultados);
                }
                else{
                    res.status(404).json({message: 'No hay resultados para ordenes'});
                }
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener todos los pedidos'});
        }
    }

    /*Obtiene todos los pedidos de un usuario
    SE NECESITA:
    - rut del usuario
    */
    public async getPedidosPorRut(req: Request,res: Response){
        let _rut = req.params.rutUsuario;

        try{
            await database.query('SELECT * FROM orden WHERE orden.rutUsuario= ?',_rut,(req1: any,  resultados:any)=>{
                res.send(resultados);
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener los todos los pedidos del usuario'});
        }
    }

    /*Obtiene el listado productos, donde se especifica el producto, cantidad y precio unitario de este
    SE NECESITA:
    - id de la orden
    */
    public async getOrdenDetalle(req: Request,res: Response){
        let _idOrden = req.params.idOrden;
        console.log(_idOrden);
        console.log("holaa");

        try{
            await database.query('SELECT * FROM ordendetalle WHERE ordendetalle.idOrden=?',_idOrden,(req1: any,  resultados:any)=>{
                console.log(resultados);
                res.send(resultados);
            });
        }
        catch(err){
            res.status(404).json({message: 'Problemas al obtener detalles de la orden'});
        }
    }

}

export const pedidoController = new PedidoController();