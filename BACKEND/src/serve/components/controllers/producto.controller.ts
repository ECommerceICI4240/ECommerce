import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class ProductoController{
    public getProductoById (req: Request,res: Response){
        database.query();
        res.send('hello');
    }

    public createProducto(req: Request, res: Response){
        

        //database.query("INSERT INTO producto() VALUES('''+)")

        //Crear consulta
        //console.log(req.body);
        res.json({text:'creando producto'});
    }

    public getAllProductos(req: Request, res: Response){
        database.query('SELECT * FROM producto',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });
    }
}

export const productoController = new ProductoController();