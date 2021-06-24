import { Request, Response } from 'express';
import database from '../../config/mysql.module';

class CategoriaController{
    public async getAllCategorias(req: Request,res: Response){
        database.query('SELECT * FROM categoria',(req1:any,  resultados:any)=>{
            res.status(200).send(resultados);
        });   
    } 
}

export const categoriaController = new CategoriaController();