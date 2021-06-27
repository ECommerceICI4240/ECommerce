import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class CarritoController{

    public async getProductosCarrito(req: Request,res: Response){
        database.query('SELECT * FROM producto WHERE calificacionProducto = 5',(req1: any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    } 
}

export const carritoController = new CarritoController();